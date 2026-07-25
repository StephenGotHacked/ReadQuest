const params = new URLSearchParams(window.location.search);

const storyId = Number(params.get("id"));

const score = Number(params.get("score"));

const story = stories.find(s => s.id === storyId);

document.getElementById("storyTitle").innerHTML =
`${story.emoji} ${story.title}`;

document.getElementById("scoreText").innerHTML =
`${score} / ${story.questions.length}`;

document.getElementById("retryBtn").href =
`quiz.html?id=${story.id}`;

const stars = document.getElementById("stars");

const message = document.getElementById("message");

let earnedStars = "";

if(score == 5){

earnedStars = "⭐⭐⭐⭐⭐";

message.innerHTML =
"Perfect! You are a Reading Hero! 🎉";

}else if(score == 4){

earnedStars = "⭐⭐⭐⭐☆";

message.innerHTML =
"Excellent job! Keep reading! 🌟";

}else if(score == 3){

earnedStars = "⭐⭐⭐☆☆";

message.innerHTML =
"Great work! Practice makes perfect! 📚";

}else if(score == 2){

earnedStars = "⭐⭐☆☆☆";

message.innerHTML =
"Nice try! Read the story again and try once more! 😊";

}else{

earnedStars = "⭐☆☆☆☆";

message.innerHTML =
"Don't give up! Every reader gets better with practice! 💙";

}

stars.innerHTML = earnedStars;