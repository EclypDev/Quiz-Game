const URI = "http://localhost:3000/api/data";

fetch(URI)
    .then((res) => res.json())
    .then((data) => {
        let dataArray = data.questions;
        dataArray.map((data, index) => {
            let areaDiv = document.querySelector("#area");
            let choise = document.createElement("div");
            choise.setAttribute(
                "class",
                "this-choise choise border-primary center "
            );
            choise.setAttribute("value", data.question);
            choise.setAttribute("responsed", "false");
            choise.innerHTML = ` <div  class=" center border-bottom border-secondary margin">
            <div
              class="choise question margin text-break border rounded-pill border-success   center padding">${
                  data.question
              }
              <span
                class=" badge rounded-pill bg-danger margin">#${
                    index + 1
                }</span>
            </div>
            <div class="center btn-group-vertical answers" >
  
              <button choiseNumber="0" class=" center buttonA answer ">${
                  data.choices[0]
              }</button><button choiseNumber="1" class=" center buttonA answer ">${
                data.choices[1]
            }</button><button choiseNumber="2" class=" center buttonA answer ">${
                data.choices[2]
            }</button>
            </div>
  
          </div>`;
            areaDiv.append(choise);
        });
        if (
            !localStorage.getItem("correct-Responses") ||
            !localStorage.getItem("fail-Responses")
        ) {
            localStorage.setItem("fail-Responses", "0");
            localStorage.setItem("correct-Responses", "0");
        }

        $(".answers button").on("click", function () {
            let isResponsed = $(this).closest(".this-choise").attr("responsed");

            if (isResponsed === "false") {
                createProgressBar();
                let thisQuestion = $(this)
                    .closest(".this-choise")
                    .attr("value");
                let numberQuestion = parseInt($(this).attr("choiseNumber"));
                let arrayQuestions = data.questions;

                let correctResponses = parseInt(
                    localStorage.getItem("correct-Responses")
                );
                let failResponses = parseInt(
                    localStorage.getItem("fail-Responses")
                );

                for (let i = 0; i < arrayQuestions.length; i++) {
                    let questionData = arrayQuestions[i];

                    if (thisQuestion == questionData.question) {
                        let correctAnswerIndex = questionData.answer;

                        if (numberQuestion === correctAnswerIndex) {
                            $(this).attr("id", "response-true");
                            isResponsed = "true";
                            correctResponses += 1;
                        } else {
                            $(this).attr("id", "response-false");
                            isResponsed = "true";
                            failResponses += 1;
                        }
                    }
                }

                localStorage.setItem("correct-Responses", correctResponses);
                localStorage.setItem("fail-Responses", failResponses);

                $(this).closest(".this-choise").attr("responsed", isResponsed);
                createProgressBar();
                console.log(`
                **Responses**
                Correct: ${correctResponses}
                Fail: ${failResponses}
                `);
            }
        });
    });
let totalResponsed = document.querySelectorAll('[responsed="true"]').length;
let totalNoResponsed = document.querySelectorAll('[responsed="false"]').length;
let totalQuestions = totalNoResponsed + totalResponsed;
let progressStatus = {
    totalQuestions: totalQuestions,
    responsedQuestions: totalResponsed,
};

function createProgressBar() {
    let totalResponsed = document.querySelectorAll('[responsed="true"]').length;
    let totalNoResponsed = document.querySelectorAll(
        '[responsed="false"]'
    ).length;
    let totalQuestions = totalNoResponsed + totalResponsed;
    let progressStatus = {
        totalQuestions: totalQuestions || 21,
        responsedQuestions: totalResponsed,
    };
    if (progressStatus.responsedQuestions == progressStatus.totalQuestions) {
        window.location.href = "http://localhost:3000/status";
        localStorage.setItem("complete", true);
    }
    let header = document.querySelector("header");
    header.innerHTML = `<h2 class="center">Quiz Game<span style="margin: 5px" class="badge rounded-pill bg-dark">${progressStatus.responsedQuestions}/${progressStatus.totalQuestions}</span></h2>`;

    let progress = document.createElement("div");
    let progressPercentage =
        (progressStatus.responsedQuestions / progressStatus.totalQuestions) *
        100;
    progress.innerHTML = `
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${progressPercentage}%" aria-valuenow="${progressPercentage}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;

    header.append(progress);
}
createProgressBar();
localStorage.setItem("complete", false);
