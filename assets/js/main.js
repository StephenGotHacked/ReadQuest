const container = document.getElementById("storyContainer");

stories.forEach((story) => {

    container.innerHTML += `

    <div class="col-lg-4 col-md-6">

        <div class="card story-card text-center">

            <div class="story-icon">

                ${story.emoji}

            </div>

            <div class="card-body">

                <small class="text-primary fw-bold">

                    🎯 Mission ${story.id}

                </small>

                <h4 class="mt-3">

                    ${story.title}

                </h4>

                <p class="story-info">

                    ${story.difficulty}

                    <br>

                    ⏰ ${story.time}

                </p>

                <div class="mb-3">

                    ⭐ Reward: ${story.reward} Stars

                </div>

                <a href="story.html?id=${story.id}" class="btn read-btn w-100">

                    ▶ Start Mission

                </a>

            </div>

        </div>

    </div>

    `;

});