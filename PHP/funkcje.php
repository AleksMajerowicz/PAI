<?php

function wyswietl20Gwiazdek()
{
    for($i = 0; $i < 20; $i++)
    {
        echo "*";
    }
}

function wyswietlWiersz(int $dlugosc)
{
    for($i = 0; $i < $dlugosc; $i++)
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
wyswietlWiersz(3000);
echo "<br>";
$cenaBrutto = obliczVAT(30,0.2);
echo $cenaBrutto;

?>