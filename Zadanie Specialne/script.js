var czyPierwszy = false;
var wartosc = 7500;

function sprawdzanie()
{
    var list = [document.getElementById("LakierCena"),
    document.getElementById("FelgiCena"),
    document.getElementById("CzujnikiCena"),
    document.getElementById("ClimatonicCena"),
    document.getElementById("NawigacjaCena")]

    var y = 0;

    for(var i = 0; i < list.length; i++)
    {
        if(list[i].style.display == "none")
        {
            y++;
        }
    }

    if(y == 5)
    {
        document.getElementById("Kreska").style.display = "none"
        document.getElementById("NapisSumy").style.display = "none"
    }
    else
    {
        document.getElementById("Kreska").style.display = "flex"
        document.getElementById("NapisSumy").style.display = "flex";
        document.getElementById("NapisSumy").innerHTML = `RAZEM: ${wartosc}zł`
    }
}

function ustawienie()
{
    document.getElementById("LakierCena").style.display = "none";
    document.getElementById("FelgiCena").style.display = "none"
    document.getElementById("CzujnikiCena").style.display = "none"
    document.getElementById("ClimatonicCena").style.display = "none"
    document.getElementById("NawigacjaCena").style.display = "none"
    document.getElementById("NapisSumy").style.display = "none"
    document.getElementById("Kreska").style.display = "none"
}

function lakier()
{
    var x = document.getElementById("Lakier");

     if(x.value != "szary")
    {
        let p = document.getElementById("LakierCena")
        p.style.display = "flex";
        document.getElementById("zdjecieSamochodu").src=`./zdjecia/${x.value}.png`;
        wartosc += 9000
        sprawdzanie();
    }
    else
    {
        let p = document.getElementById("LakierCena")
        p.style.display = "none";
        document.getElementById("zdjecieSamochodu").src="./zdjecia/szary.png";
        wartosc += 9000    
        sprawdzanie();        
    }
   
}

function felgi()
{
    var x = document.getElementsByName("Felgi")

    for(var i = 0; i < x.length; i++)
    {
        if(x[i].checked)
        {
            if(x[i].value == "Aluminiowe")
            {
                let p = document.getElementById("FelgiCena")
                p.style.display = "flex";
                wartosc += 7000;
                sprawdzanie();
            }
            else
            {
                let p = document.getElementById("FelgiCena")
                p.style.display = "none";
                wartosc -= 7000;
                sprawdzanie();
            }
        }
    }
}

var listazazancoznychAkcesori = [false,false,false]

function wyposazenie()
{
    var x = document.getElementsByName("Wyposazenie")

    var lista = [document.getElementById("CzujnikiCena"),document.getElementById("ClimatonicCena"),document.getElementById("NawigacjaCena")]
    var listaCen = [6500,8500,5000]

    for(var i = 0; i < x.length; i++)
    {
        if(x[i].checked == true && x[i].checked != listazazancoznychAkcesori[i])
        {
            lista[i].style.display = "flex";
            wartosc += listaCen[i];
            console.log("ok");
            listazazancoznychAkcesori[i] = !listazazancoznychAkcesori[i];
            sprawdzanie();
        }
        else if(x[i].checked == false && x[i].checked != listazazancoznychAkcesori[i])
        {
            lista[i].style.display = "none";
            wartosc -= listaCen[i];
            console.log("ok2")
            listazazancoznychAkcesori[i] = !listazazancoznychAkcesori[i];
            sprawdzanie();
        }
    }
}