function changeColor(id,color)
{
    let p = document.getElementById(id);
    p.style.color = color;
}

function pogrubienie(id,textWidth)        
{
    let p = document.getElementById(id);
    p.style.fontWeight = textWidth;
}

function format(id)
{
    let p = document.getElementById(id);
    p.style.color = "black";
    p.style.fontWeight = "normal";
}

function kup()
{
    let ilsocServerow = document.getElementById("iloscServerow");
    var i = parseInt(ilsocServerow.innerHTML);
    i = i + 1

    changeTextColor(i,ilsocServerow);

    ilsocServerow.innerHTML = i

}
function sprzedaj()
{
    let ilsocServerow = document.getElementById("iloscServerow");
    var i = parseInt(ilsocServerow.innerHTML);
    if( i > 0)
    {

        i = i - 1

        changeTextColor(i,ilsocServerow);

        ilsocServerow.innerHTML = i
    }
}

function changeTextColor(ilosc,servery)
{
    if(ilosc <= 2)
    {
        servery.style.color = "red";
    }
    if(ilosc <= 5 && ilosc > 3)
    {
        servery.style.color = "yellow";
    }
    if(ilosc > 5)
    {
        servery.style.color = "black";
    }
}

function kupWiele()
{
    ile = parseInt(prompt("Ile chcesz kupić sztuk?"));
    let ilsocServerow = document.getElementById("iloscServerow");

    ilsocServerow.innerHTML = parseInt(ilsocServerow.innerHTML) + ile;

    changeTextColor(parseInt(ilsocServerow.innerHTML),ilsocServerow);
}

function sprzedajWiele()
{
    ile = parseInt(prompt("Ile chcesz sprzedać sztuk?"));
    let ilsocServerow = document.getElementById("iloscServerow");

    ilsocServerow.innerHTML = parseInt(ilsocServerow.innerHTML) - ile;

    changeTextColor(parseInt(ilsocServerow.innerHTML),ilsocServerow);
}

function zwieksz()
{
    let p = document.getElementById("p");
    console.log(p);

    i = parseInt(p.innerHTML);
    i = i + 1;

    if(i < 10)
    {
        document.getElementById("zmiejsz").style.visibility = "hidden";
    }
    else if( i >= 10)
    {
        document.getElementById("zmiejsz").style.visibility = "inherit";     
        document.getElementById("zwieksz").style.visibility = "hidden"; 
    }

    p.innerHTML = i;
}

function zmiejsz()
{
    let p = document.getElementById("p");
    console.log(p);

    i = parseInt(p.innerHTML)
    i = i - 1;

    if(i > 0)
    {
        document.getElementById("zwieksz").style.visibility = "hidden";
    }
    else if( i <= 0)
    {
        document.getElementById("zwieksz").style.visibility = "inherit";     
        document.getElementById("zmiejsz").style.visibility = "hidden"; 
    }

    p.innerHTML = i;
}