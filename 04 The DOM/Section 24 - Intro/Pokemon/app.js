// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png



for (let i = 1; i <= 151; i++) {
    const container = document.createElement("div");
    container.classList.add("pokemon")
    const myImg = document.createElement("img");
    document.body.appendChild(container);
    container.appendChild(myImg);
    myImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
    const pokeNumber = document.createElement("p");
    container.appendChild(pokeNumber);
    pokeNumber.innerText = "#" + i;
}



