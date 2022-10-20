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
    y = parseInt(prompt("Podaj wysokość"))
    x = parseInt(prompt("Podaj szerokość"))

    for(var i = 0; i < y; i++)
    {
        for(var j = 0; j < x; j++)
        {
            document.write("*")
        }
        document.write("<br>")
    }
}
else
{
    x = parseInt(prompt("Podaj długość"))

    for(var i = 0; i < x; i++)
    {
        document.write("*")
    }
}