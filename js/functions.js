import { questions } from "./questions.js";
//function starts the test hides the startScreen and shows the quiz screen.
let currentQuestion=0;
let answerValues=[];
export function teststart(){
const startScreen=document.getElementById("start-screen");
const quizScreen=document.getElementById("quiz-screen");
startScreen.hidden=true;
quizScreen.hidden=false;
loadQuestion();

}
//loads the current questions and displays it and checks if its allowed to go back and next between the questions
function loadQuestion(){
const backButton=document.getElementById("back-btn");
const nextButton=document.getElementById("next-btn");
const questionHolder=document.getElementById("question");
questionHolder.textContent=questions[currentQuestion].text;
getRadio(currentQuestion);
if(currentQuestion<questions.length-1){
nextButton.disabled=false;
}else{
nextButton.disabled=true;
}
if(currentQuestion===0){
backButton.disabled=true;
}else{
backButton.disabled=false;
}
console.log(answerValues);
}

export function nextQuestion(){
 if (!checkanswer()) {
        return;
    }
currentQuestion++;
loadQuestion();
}
export function lastQuestion(){
currentQuestion--;
loadQuestion();
}
//checks if an answer was given
function checkanswer(){
const selectedAnswer = document.querySelector(
    'input[name="answer"]:checked'
);
if(selectedAnswer==null){
    return false;
}else{
answerValues[currentQuestion]=Number(selectedAnswer.value);
return true;
}
}
// resets all radio buttons and restores the saved answer for the current question
function getRadio(currentQuestion){
const radios=document.querySelectorAll('input[name="answer"]');
radios.forEach(radio => {
radio.checked=false;
});
const answerValue=answerValues[currentQuestion];
if(answerValue!=null){
radios.forEach(radio => {
if(answerValue===Number(radio.value)){
radio.checked=true;
}
});
}
}
