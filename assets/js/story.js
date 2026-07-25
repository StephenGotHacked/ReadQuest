const params = new URLSearchParams(window.location.search);

const storyId = Number(params.get("id"));

const story = stories.find(s => s.id === storyId);

const container = document.getElementById("storyContent");

if(story){

container.innerHTML = `

<div class="text-center">

<div style="font-size:80px;">

${story.emoji}

</div>

<h1 class="mt-3">

${story.title}

</h1>

<p>

${story.difficulty}

|

⏰ ${story.time}

</p>

<hr>

</div>

<div class="mt-4">

${story.story.replace(/\n/g,"<br><br>")}

</div>

<hr>

<h3>

📚 Vocabulary

</h3>

<div class="row mt-4">

${story.vocabulary.map(word=>`

<div class="col-md-4 mb-3">

<div class="card border-0 shadow-sm h-100">

<div class="card-body">

<h5>${word.word}</h5>

<p>${word.meaning}</p>

</div>

</div>

</div>

`).join("")}

</div>

<div class="text-center mt-5">

<a href="quiz.html?id=${story.id}" class="btn btn-primary btn-lg">

🧠 Start Challenge

</a>

</div>

`;

}