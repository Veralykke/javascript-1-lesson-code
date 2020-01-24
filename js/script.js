const container = document.querySelector(".container");

let newHTML = "";

for (let i = 0; i < actionGames.length; i++) {

    let ratingValue = "Not rated";

    if (actionGames[i].rating) {
        ratingValue = actionGames[i].rating;
    }

    const GENRES = actionGames[i].genres;
    const genreHTML = makeGenres(GENRES);
    const platforms = actionGames[i].platforms;

    const platformsHTML = makePlatforms(platforms);
    const details = `<div class="card">
                        <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
                        <div class="details">
                            <h4 class="name">${actionGames[i].name}</h4>
                            <div class="rating">${ratingValue}</div>
                            ${genreHTML}
                            ${platformsHTML}
                        </div>
                    </div>`;
    newHTML += details;
}

function makeGenres(genreArray) {
    let genresHTML = "";
    for (let i = 0; i < genreArray.length; i++) {
        genresHTML += `<a class ="genre">${genreArray[i].name}</a>`;
    }

    return genresHTML;
}

const platform = "";

function makePlatforms(platformsArray) {
    let platformsHTML = "";
    for (let i = 0; i < platformsArray.length; i++) {
        platformsHTML += `<a class = "platforms"${platformsArray[i].platform.name}</a>`;
    }
    return platformsHTML;
}




container.innerHTML = newHTML;