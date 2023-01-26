function napoj()
{
    let typ = document.getElementsByName("radio");
    let rodzaj = document.getElementById("rodzaj");
    let wyswietl = document.querySelector("p");

    var wartoscTypu = null;

    for(var i = 0; i < typ.length; i++)
    {
        if(typ[i].checked)
        {
            wartoscTypu = typ[i].value;
        }
    }

    wyswietl.innerHTML = "Lubisz pić z rana " + wartoscTypu + " " + rodzaj.value;
}