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
