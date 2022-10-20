function Mnozenie(x,y)
{
    z = x * y

    return z
}

l1 = parseInt(prompt("Podaj I liczbę"))
l2 = parseInt(prompt("Podaj II liczbe"))

document.write(Mnozenie(l1,l2) + "<br>")

prostokat = confirm("Jeżeli chcesz wyświetlić prostokąt z gwiazdek, kliknij OK, jeżeli wciśniesz Anuluj dostaniesz linię poziomą z gwiazdek")

if(prostokat)
{
    for(var i = 0; i < 5; i++)
    {
        for(var j = 0; j < 30; j++)
        {
            document.write("*")
        }
        document.write("<br>")
    }
}
else
{
    for(var i = 0; i < 30; i++)
    {
        document.write("*")
    }
}