import { teststart,nextQuestion,lastQuestion } from "./functions.js"
document.getElementById("start-btn").addEventListener("click",teststart);//button calls the function to start the test
document.getElementById("next-btn").addEventListener("click",nextQuestion);
document.getElementById("back-btn").addEventListener("click",lastQuestion);