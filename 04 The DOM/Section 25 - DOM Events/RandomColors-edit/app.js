const btn = document.querySelector("button");
const title = document.querySelector("h1");
btn.addEventListener("click", function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${ r }, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;
    title.innerHTML = newColor;
    if (r + g + b < 200) {
        title.style.color = "white";
    } else {

        title.style.color = "black";
    }
})