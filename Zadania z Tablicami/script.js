znak = ""
odstep = 0
x  = 0
y = 0

index = 0

znak = prompt("Jaki znak chcesz wyswietlić?");
odstep = parseInt(prompt("Co ile chesz wyświetlać ten znak?"));
x = parseInt(prompt("Podaj Szerokość"));
y = parseInt(prompt("Podaj Wysokość"));

for(i = 0; i < y; i++)
{
    for(j = 0; j < x; j++)
    {
        if(index == odstep)
        {
            document.write(znak);
            index = 0;
        }
        else
        {
            document.write("*");
            index++;
        }
    }
    index = 0;
    document.write("<br>")
}
