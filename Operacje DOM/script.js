function tworzenie()
{
    let obiekt = document.createElement("div");
    obiekt.style.height = "200px"
    obiekt.style.width = "200px"
    obiekt.style.backgroundColor = "green";

    let body = document.querySelector("body");
    body.appendChild(obiekt);
}



function tworzenieObiektu()
{
    const body = document.querySelector("body");
    body.addEventListener("input", e => {
    e.preventDefault();
    let prosokacik = null;
    let zawartosc = document.getElementById("zawartosc");
    let szerokosc = parseInt(document.getElementById("szerokosc"));
    let wysokosc = parseInt(document.getElementById("wysokosc"));
    let kolor = document.getElementById("kolor");
    e.appendChild(prosokacik);})
}