if(confirm("Czy lubisz Pizze?"))
{
    x = prompt("Jaką?")
    document.write(x + "<br>")
}
else
{
    alert("Szkoda :C")
}

var x = parseInt(prompt("Podaj szerokość Prosotkata"))
var y = parseInt(prompt("Podaj wysokość Prosotkata"))

for(i = 0; i < y; i++)
{
    for(j = 0; j < x; j++)
    {
        document.write("*")
    }
    document.write("<br>")
}