const loadQuestionsNum = async () => {
  try {
    const response = await fetch('./questions.json');
    const data = await response.json();
    const questionNum = data.questions.length;
    return questionNum;
  } catch (error) {
    console.error(error);
  }
};
const loadChoicesNum = async (numeroPregunta, numeroRespuesta) => {
  try {
    const response = await fetch('./questions.json');
    const data = await response.json();
    const choices = data.questions[numeroPregunta].choices[numeroRespuesta];
    return choices;
  } catch (error) {
    console.error(error);
  }
};

const loadQuestions = async (numeroAleatorio) => {
  try {
    const response = await fetch('./questions.json');
    const data = await response.json();
    const question = data.questions[numeroAleatorio].question;
    return question;
  } catch (error) {
    console.error(error);
  }
};

export { loadQuestions, loadChoicesNum };
