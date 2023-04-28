const ws = new WebSocket('ws://localhost:3000');
const form = document.getElementById('message-form'); //MESSAGE FORM ELEMENT
const click = document.getElementById('click')
const clickre = document.getElementById('clickre')
const inputmsg = document.getElementById('message');
import {displayquestion} from './events.js'
import { loadChoicesNum } from './questions.js';
clickre.style.display = "none";
form.addEventListener('submit', async (event) => { //LISTEN FOR MESSAGE POST & SEND TO WEBSOCKET//  
  event.preventDefault();

  displayquestion()
    click.style.display = "none";
    inputmsg.style.display = "none";
    clickre.style.display = "block";
  /*  for (let i = 0; i < preguntas.questions.length; i++) {
      const choices = preguntas.questions[i].choices;
      console.log(choices);
    }*/
    let choise = await loadChoicesNum(1,1)
    console.log(choise)
  
})

