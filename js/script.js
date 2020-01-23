const CONTEINER = document.querySelector(".container");
console.dir(CONTEINER);

let newHTML = "";



for (let i = 0; i < actionGames.length; i++) {
    //const NAME = <h4> ${actionGames[i].name} </h4>;//

    actionGames[i].rating = actionGames[i].rating ?
        actionGames[i].rating :
        "No Rated";


    const DETAILS = `
    <div class="card">
        <div class="image" style="background-image: url(${actionGames[i].background_image});">
        </div>
        <div class="details">
            <h4 class="name">${actionGames[i].name}</h4>
            <div class="rating">${actionGames[i].rating}</div>
        </div>
    </div>`;
    newHTML += DETAILS;
}

CONTEINER.innerHTML = newHTML;

console.log(newHTML);