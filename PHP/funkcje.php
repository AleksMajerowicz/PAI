<?php

function wyswietl20Gwiazdek($znak)
{
    $x = rand(1,50);
    $y = rand(1,50);
    for($i = 0; $i < $x; $i++)
    {
        for($j = 0; $j < $x; $j++)
        {
            echo "$znak";
        }
        echo "<br>";
    }
}

function wyswietlWiersz(int $n)
{
    for($i = 0; $i < $n; $i++)
    {
        echo "*";
    }
}

function obliczVat(int $cenaNetto, $stawkaVAT = 0.23)
{
    return $cenaNetto+ ($cenaNetto * $stawkaVAT);
}

function iloscPierwiastkow(int $a,int $b,int $c)
{
    return $b**2 + (-4 * $a * $c);
}
wyswietl20Gwiazdek("'");
echo "<br>";
wyswietlWiersz(30);
echo "<br>";
$cenaBrutto = obliczVAT(100,0.23);
echo "Cena Brutto = $cenaBrutto";
$delta = iloscPierwiastkow(1,2,-3);
echo "<br>";
echo "$delta";


?>