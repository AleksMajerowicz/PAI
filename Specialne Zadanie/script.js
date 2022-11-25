var lp = 2;
function dodawanie()
{
    //Pobieranie Tytułu i ilości
    //--------------------------------------------------------------
    let tytulKolumna = document.getElementById("podajTytul").value;
    let iloscKolumna = document.getElementById("podajIlosc").value;

    //odwoływanie się do tbody i tworzenie tr
    //------------------------------------------------
    let table = document.querySelector("tbody")
    let tr = document.createElement("tr");

    table.appendChild(tr);

    let lpkolumna = document.createElement("td");
    lpkolumna.innerHTML = lp;
    
    lp += 1;

    tr.appendChild(lpkolumna);

    //Tworzenie Kolumny z Tytułem
    //------------------------------------------------------
    let kolumnaTytul = document.createElement("td");
    let pTytul = document.createElement("p");
    pTytul.innerHTML = tytulKolumna;
    pTytul.setAttribute("id","tytul");
    kolumnaTytul.appendChild(pTytul);
    tr.appendChild(kolumnaTytul);

    //Tworzenie Kolumny z Iloscia
    //------------------------------------------------------
    let kolumnaIlosc = document.createElement("td");
    let pIlosc = document.createElement("p");
    pIlosc.innerHTML = iloscKolumna;
    pIlosc.setAttribute("id","ilosc" + String(lp - 1));
    kolumnaIlosc.appendChild(pIlosc);
    tr.appendChild(kolumnaIlosc);

    //Tworzenie Kolumny z przyciskami
    //------------------------------------------------------
    let kolumnaPrzyciski = document.createElement("td");
    let przyciskKup = document.createElement("button")
    przyciskKup.innerHTML = "Kup"
    przyciskKup.setAttribute("onclick","kup()")
    let przyciskSprzedaj = document.createElement("button")
    przyciskSprzedaj.innerHTML = "Sprzedaj"
    przyciskSprzedaj.setAttribute("onclick",'sprzedaj(})')

    //Dodawanie ich
    kolumnaPrzyciski.appendChild(przyciskKup);
    kolumnaPrzyciski.appendChild(przyciskSprzedaj);
    tr.appendChild(kolumnaPrzyciski);
}

