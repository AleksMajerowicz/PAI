<?php

function wyswietl20Gwiazdek()
{
    for($i = 0; $i < 20; $i++)
    {
        echo "*";
    }
}

function wyswietlWiersz(int $n)
{
    for($i = 0; $i < $n; $i++)
    {
        echo "*";
    }
}

function obliczVat(int $cenaNetto, $stawkaVAT)
{
    return $cenaNetto+ ($cenaNetto * $stawkaVAT);
}
wyswietl20Gwiazdek();
echo "<br>";
wyswietlWiersz(30);
echo "<br>";
$cenaBrutto = obliczVAT(100,0.23);
echo "Cena Brutto = $cenaBrutto";

?>