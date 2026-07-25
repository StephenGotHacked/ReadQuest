const params = new URLSearchParams(window.location.search);

const storyId = Number(params.get("id"));

const story = stories.find(s => s.id === storyId);

let currentQuestion = 0;

let score = 0;

const title = document.getElementById("quizTitle");
const counter = document.getElementById("questionCounter");
const question = document.getElementById("questionText");
const choices = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

title.innerHTML = `${story.emoji} ${story.title}`;

loadQuestion();

function loadQuestion(){

const q = story.questions[currentQuestion];

counter.innerHTML = `Question ${currentQuestion+1} of ${story.questions.length}`;

question.innerHTML = q.question;

progressBar.style.width =
`${((currentQuestion)/story.questions.length)*100}%`;

progressBar.innerHTML =
`${Math.round(((currentQuestion)/story.questions.length)*100)}%`;

choices.innerHTML="";

nextBtn.disabled=true;

q.choices.forEach((choice,index)=>{

const btn=document.createElement("button");

btn.className="btn btn-outline-primary text-start p-3";

btn.innerHTML=choice;

btn.onclick=()=>selectAnswer(btn,index);

choices.appendChild(btn);

});

}

function selectAnswer(button,index){

const buttons=document.querySelectorAll("#choices button");

buttons.forEach(btn=>btn.disabled=true);

const answer=story.questions[currentQuestion].answer;

if(index===answer){

button.classList.remove("btn-outline-primary");

button.classList.add("btn-success");

score++;

}else{

button.classList.remove("btn-outline-primary");

button.classList.add("btn-danger");

buttons[answer].classList.remove("btn-outline-primary");

buttons[answer].classList.add("btn-success");

}

nextBtn.disabled=false;

}

nextBtn.onclick=()=>{

currentQuestion++;

if(currentQuestion<story.questions.length){

loadQuestion();

}else{

window.location.href=
`result.html?id=${story.id}&score=${score}`;

}

}