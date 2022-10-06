function funkcja (tekst = "Ni ma :C")
{
    document.write("<hl>");
    document.write(tekst);
    document.write("<hl>");

    return "Wykonałem Funkcje  warotści atrybutu: " + tekst;
}

funkcja("Koza Śnieżna!!!")

zm = funkcja();
document.write(zm);

function Kursywa (text)
{
    document.write("<h3><em>" + text + "</em></h3>");
}

Kursywa("Koza Śnieżna :3")