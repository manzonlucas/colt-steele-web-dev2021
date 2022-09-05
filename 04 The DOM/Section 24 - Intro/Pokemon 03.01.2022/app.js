// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector("section#container");
const png = ".png";

for (i = 1; i <= 151; i++) {
    let subContainer = document.createElement("div");
    container.appendChild(subContainer);

    let image = document.createElement("img");
    image.src = `${baseURL}${i}.png`;
    subContainer.appendChild(image);

    subContainer.style.textAlign = "center";
    subContainer.style.display = "inline-block";
    image.style.display = "block";
    let span = document.createElement("span");
    subContainer.appendChild(span);
    span.innerHTML = "#" + i;
}