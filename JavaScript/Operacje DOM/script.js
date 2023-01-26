function tworzenie()
{
    let obiekt = document.createElement("div");
    obiekt.style.height = "200px"
    obiekt.style.width = "200px"
    obiekt.style.backgroundColor = "green";

    let body = document.querySelector("body");
    body.appendChild(obiekt);
}



function tworzenieProstokacika()
{
    const body = document.querySelector("body");
    let prosokacik = document.createElement("div");
    let zawartosc = document.getElementById("zawartosc").value;
    let szerokosc = parseInt(document.getElementById("szerokosc").value);
    let wysokosc = parseInt(document.getElementById("wysokosc").value);
    let kolor = document.getElementById("kolor").value;
    let textColor = document.getElementById("kolorTekstu").value;

    prosokacik.innerHTML = zawartosc;
    prosokacik.style.width = szerokosc;
    prosokacik.style.height = wysokosc;
    prosokacik.style.backgroundColor = kolor;
    prosokacik.style.color = textColor;
    body.appendChild(prosokacik);
}
function tworzenieObiektu()
{

}