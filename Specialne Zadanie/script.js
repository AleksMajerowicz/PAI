var lp = 2;
function dodawanie()
{
    //Pobieranie Tytułu i ilości
    //--------------------------------------------------------------
    let tytulKolumna = document.getElementById("podajTytul").value;
    let iloscKolumna = parseInt(document.getElementById("podajIlosc").value);

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
    kolumnaIlosc.setAttribute("id",`kolumnaIlosc${lp - 1}`)
    let pIlosc = document.createElement("p");
    pIlosc.innerHTML = iloscKolumna;
    pIlosc.setAttribute("id",`ilosc${lp - 1}`);
    kolumnaIlosc.appendChild(pIlosc);
    tr.appendChild(kolumnaIlosc);

    //Tworzenie Kolumny z przyciskami
    //------------------------------------------------------
    let kolumnaPrzyciski = document.createElement("td");
    let przyciskKup = document.createElement("button")
    przyciskKup.innerHTML = "Kup"
    przyciskKup.setAttribute("onclick",`kup('kolumnaIlosc${lp - 1}','ilosc${lp - 1}')`)
    let przyciskSprzedaj = document.createElement("button")
    przyciskSprzedaj.innerHTML = "Sprzedaj"
    przyciskSprzedaj.setAttribute("onclick",`sprzedaj('kolumnaIlosc${lp - 1}','ilosc${lp - 1}')`)

    //Dodawanie ich
    kolumnaPrzyciski.appendChild(przyciskKup);
    kolumnaPrzyciski.appendChild(przyciskSprzedaj);
    tr.appendChild(kolumnaPrzyciski);

    if(iloscKolumna != 0)
    {
        if(iloscKolumna < 10 && iloscKolumna > 5)
        {
            document.getElementById(`kolumnaIlosc${lp - 1}`).style.backgroundColor = "yellow"
        }
        else if(iloscKolumna < 5)
        {
            document.getElementById(`kolumnaIlosc${lp - 1}`).style.backgroundColor = "red"
        }
    }
    else
    {
        document.getElementById(`kolumnaIlosc${lp - 1}`).style.backgroundColor = "red"
        document.getElementById(`kolumnaIlosc${lp - 1}`).innerHTML = "Brak Książki!";
    }


}

function kup(kid,id)
{
    let ilosc = document.getElementById(id);

    if(i != "Brak Książki!")
    {
        if(i - 1 != 0)
        {
            i = i - 1

            if(i < 10 && i > 5)
            {
                document.getElementById(kid).style.backgroundColor = "yellow"
            }
            else if(i < 5)
            {
                document.getElementById(kid).style.backgroundColor = "red"
            }

        ilosc.innerHTML = i;
        }
        else
        {
            document.getElementById(id).innerHTML = "Brak Książki!";
        }
    }
}

function sprzedaj(kid,id)
{
    let ilosc = document.getElementById(id);

   if(ilosc.innerHTML == "Brak Książki!")
   {
        i = 1;
   }
   else
   {
        i = parseInt(ilosc.innerHTML)
        i = i + 1
   }

    if(i < 10 && i > 5)
    {
        document.getElementById(kid).style.backgroundColor = "yellow"
    }
    else if(i <= 5)
    {
        document.getElementById(kid).style.backgroundColor = "red"
    }
    else if(i >= 10)
    {
        document.getElementById(kid).style.backgroundColor = "rgba(0,0,0,0)"
    }

    ilosc.innerHTML = i;
}

