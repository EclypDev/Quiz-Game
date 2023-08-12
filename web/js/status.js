let header = document.querySelector("header");
header.innerHTML = `<h2 class="center">Quiz Game<span style="margin: 5px" class="badge rounded-pill bg-dark">Stats</span></h2>`;

let correct = localStorage.getItem("correct-Responses");
let fail = localStorage.getItem("fail-Responses");
let area = document.querySelector("#area");

function restart() {
    localStorage.setItem("correct-Responses", parseInt(0));
    localStorage.setItem("fail-Responses", parseInt(0));
    localStorage.setItem("complete", false);
    window.location.href = "http://localhost:3000";
}
let complete = localStorage.getItem("complete");
if (complete) {
    area.innerHTML = `<h2 class="center">Your Stats<span style="margin: 5px" class="badge rounded-pill bg-dark"></span></h2>
    <div class="status">
                        <div class="details center">
                            <div class="h3">Correct: <span class="badge rounded-pill bg-info text-dark">${correct}</span></div>
                            <div class="h3">Fail: <span class="badge rounded-pill bg-info text-dark">${fail}</span></div>
                            <button type="button" onclick="restart()"class="center btn btn-danger">Return</button>
                        </div>
                    </div>
    `;
} else {
    area.innerHTML = `<h2 class="center">No available<span style="margin: 5px" class="badge rounded-pill bg-dark"></span></h2>`;
}
