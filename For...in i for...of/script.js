let tablica = ["Koza Śnieżna",34,56,98,"Robi BRRRRR","MIAAAU!"];

for(let i = 0; i < tablica.length; i++)
{
    document.write(tablica[i]+ "<br>");
}

document.write("<br>");

for(let wartosc of tablica)
{
    document.write(wartosc + "<br>");
}

document.write("<br>");

tab = [];
tab["Klucz"] = "kluczyk";
tab["Plik"] = "exe";
tab["Zwierzę"] = "Kotek :3"
tab["Bóg"] = "KOZA ŚNIEŻNA!"

for(klucz in tab)
{
    document.write(klucz + "-->"+tab[klucz] +"<br>");
}

document.write("<br>");

zadanie = ["Koza Snieżna", 370, "ROBI BRRRRR"]
for(wartosc of zadanie)
{
    document.write(wartosc + "<br>");
}