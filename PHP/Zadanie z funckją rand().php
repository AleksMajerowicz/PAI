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
    if($tab[$i] % 8 == 0)
    {
        $liczbyPodzeileprzez8++;
    }
}
echo "Suma: $suma <br>";
echo "Liczby Podzielne przez 4: $liczbyPodzeileprzez4 <br>";
echo "Liczby Podzilene Przez 8: $liczbyPodzeileprzez8 <br>";
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
?>