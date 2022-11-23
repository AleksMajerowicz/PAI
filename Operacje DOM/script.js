ostatecznyTyp = "";
poziom = "";
zawartosc = null;
atrybuty = null;
wartoscAtrybutow = null;
obiekt = null;
function tworzenieObiektu()
{
    let obiekt = null;
    let typy = document.getElementsByName("typObiektu");
    
    for(var i =0; i < typy.length; i++)
    {
        if(typy[i].checked)
        {
            ostatecznyTyp = typy[i].value;
            if(ostatecznyTyp == "h")
            {
                poziom = document.getElementById("poziom").value;
            }
        }
    }
    zawartosc = document.getElementById("zawartosc").value;
    atrybuty = document.getElementsByName("atrybuty").values;
    wartoscAtrybutow = document.getElementsByName("wartosc").values;

    if(ostatecznyTyp != "h")
    {
        obiekt = document.createElement(ostatecznyTyp);
    }
    else
    {
        obiekt = document.createElement((ostatecznyTyp + poziom));
    }
    obiekt.document.innerHTML = zawartosc;
    for(var i = 0; i < atrybuty.length; i++)
    {
        obiekt.setAttribute(atrybuty[i],wartoscAtrybutow[i]);
    }
}