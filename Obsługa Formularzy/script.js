function logowanie()
{
    var login = document.getElementById("Login")
    var haslo = document.getElementById("Haslo")

    document.getElementById("login").textContent = login.value
    document.getElementById("haslo").textContent = haslo.value
}

function writeFormularz()
{
    document.getElementById("pytanie1").textContent = null
    document.getElementById("pytanie2").textContent = null
    document.getElementById("pytanie3").textContent = null
    document.getElementById("pytanie4").textContent = null

    var pytanie = document.getElementById("Pytanie")
    var Imie = document.getElementById("imie")
    var rasa = document.getElementsByName("rasa")
    var zdolnosci = document.getElementsByName("Zdolnosci")

    document.getElementById("pytanie1").textContent = pytanie.value
    document.getElementById("pytanie2").textContent = Imie.value

    for(var i = 0; i < rasa.length; i++)
    {
        document.getElementById("pytanie3").textContent += rasa[i].value

        if(i + 1 < rasa.length)
        {
            document.getElementById("pytanie3").textContent += " , "
        }
    }

    var value = ""

    for(var i = 0; i < zdolnosci.length; i++)
    {
        if(zdolnosci[i].checked)
        {
            value = value + zdolnosci[i].value + " "
        }

        if(i + 1 < zdolnosci.length)
        {
            document.getElementById("pytanie4").textContent += " , "
        }
    }
    document.getElementById("pytanie4").textContent = value
}

var procentZaplaty = 0

function Wylicz()
{
    let kwota = parseFloat(document.getElementById("kwota").value);
    let miesiac = parseInt(document.getElementById("miesiac").value);
    let procent = parseFloat(document.getElementById("procent").value);

    let wiadomosc = document.getElementById("wiadomosc");

    oblicz(kwota,procent,miesiac)
        
    wiadomosc.textContent += document.write("Miesięczna zapłata Wynosi: " + procentZaplaty + " zł <br>");
}

function oblicz(k,p,m)
{
    procentZaplaty = (k/m) + (k * ((p/100) / m));
}

function Wyswietl()
{
    text = document.getElementById("Text").value;
    ilosc = parseInt(document.getElementById("Ilosc").value)

    for(var i =0; i < ilosc; i++)
    {
        alert(text);
    }
}

function Oblicz()
{
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    var operacja = document.getElementsByName('Operacje');
    var i = 0

    for(var i = 0; i < operacja.length; i++)
    {
        if(operacja[i].checked)
        {
           switch(operacja[i].value)
           {
                case "+":
                    alert(a + b)
                    break
                case "-":
                    alert(a - b)
                    break
                case "*":
                    alert(a * b)
                    break
                case "/":
                    if(b != 0)
                    {
                        alert(a / b);
                    }
                    else
                    {
                        alert("Nie dizleimy przez 0! Podaj Inną liczbę!");
                    }
                    break
           }
        }
        else
        {
            i += 1
        }
    }

    if(i == 4)
    {
        alert("Nie podałeś zadnej Operacji!");
    }
}
