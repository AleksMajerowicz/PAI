<?php

$x = -10;

if($x < 0)
{
    $x *= -1;
}
echo "Wartośc Bewzgledna z Zmiennej x o wartości -$x to: ".$x."<br>";


$x = -10;
echo $x < 0 ? "Wartośc Bewzgledna z Zmiennej x o wartości $x to: ".-$x."<hr>" : "Wartośc Bewzgledna z Zmiennej x o wartości -$x to: ".$x."<hr>";

$wzrost = 1.73;
$waga = 62;

$bmi = $waga/$wzrost**2; 

if($bmi > 25)
{
    echo "Masz Nadwagę";
}
else if($bmi < 18.5)
{
    echo "Masz Niedowagę";
}
else
{
    echo "Wszytko ok :3";
}

echo "<hr>";
$a = 2;
$b = 7;
$c = 6;

$delta = $b**2 -(4 * $a *$c);

echo "Delta Wynosi: $delta więc jest możliwe dwa Pierwiastki";

echo "<hr>";

$d = 2;

switch($d)
{
    case 1:
        echo "Poneidziałek <hr>";
        break;
    case 2:
        echo "Wtorek <hr>";
        break;
    case 3:
        echo "Środa <hr>";
        break;
    case 4:
        echo "Czwartek <hr>";
        break;
    case 5:
        echo "Piątek <hr>";
        break;
    case 6:
        echo "Sobota <hr>";
        break;
    case 7:
        echo "Niedziela <hr>";
        break;
    default:
        echo "Nie ma takeigo dnia tygodnia!";
        break;
}
?>