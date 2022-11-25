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
    let prosokacik = document.createElement("div");
    let zawartosc = document.getElementById("zawartosc").value;
    let szerokosc = parseInt(document.getElementById("szerokosc").value);
    let wysokosc = parseInt(document.getElementById("wysokosc").value);
    let kolor = document.getElementById("kolor").value;

    prosokacik.innerHTML = zawartosc;
    prosokacik.style.width = szerokosc;
    prosokacik.style.height = wysokosc;
    prosokacik.style.backgroundColor = kolor;
    body.appendChild(prosokacik);
}