<?php

for($i = 0; $i < 20; $i++)
{
    $tab[] = rand(0,20);
}
for($i = 0; $i < 20; $i++)
{
    echo "$tab[$i] <br>";
}

$suma = 0;
$liczbyPodzeileprzez4 = 0; 
$liczbyPodzeileprzez8 = 0; 

for($i = 0; $i < 20; $i++)
{
    $suma += $tab[$i];

    if($tab[$i] % 4 == 0)
    {
        $liczbyPodzeileprzez4++;
    }
    if($tab[$i] > 8)
    {
        $liczbyPodzeileprzez8++;
    }
    /*for($j = 9; $j < $tab[$i]; $j++)
    {
        if($tab[$i] %$j == 0)
        {
            $liczbyPodzeileprzez8++;
        }
    }*/
}
echo "Suma: $suma <br>";
echo "Liczby Podzielne przez 4: $liczbyPodzeileprzez4 <br>";
echo "Liczb wiekszych od 8 jest: $liczbyPodzeileprzez8 <br>";
echo "<hr>";

$liczba = rand(100,200);
$aktualnaliczba = 2;

while($aktualnaliczba < $liczba)
{
    if($liczba % $aktualnaliczba == 0)
    {
        echo "Liczba $liczba Nie jest liczbą Pierwszą!";
        break;
    }
    else
    {
        echo "Liczba $liczba jest Liczbą pierwszą :3";
        break;
    }
    $aktualnaliczba++;
}
echo "<hr>";
$maks = rand(0,100);
$aktualnaliczba = 3;
$aktualnyDzielnik = 2;
$najwieksza = 0;

while($aktualnaliczba <= $maks)
{
    echo "$aktualnaliczba <br>";
    while($aktualnyDzielnik <= $aktualnaliczba)
    {
        if($aktualnaliczba % $aktualnyDzielnik == 0 && $aktualnyDzielnik == $aktualnaliczba)
        {
            $najwieksza = $aktualnaliczba;
        }
        $aktualnyDzielnik++;
    }
    $aktualnyDzielnik = 2;
    $aktualnaliczba++;
}
echo "Najwięskza liczba Pierwsza to: $najwieksza"
?>