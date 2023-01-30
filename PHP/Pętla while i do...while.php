<?php
echo "Pętla while <hr>";
$liczba = 5;
while( $liczba <= 15)
{
    echo "$liczba"."<br>";
    $liczba++;
}
echo "<br>";

$a = 5;
$b = 10;

while($a <= $b)
{
    echo "$a <br>";
    $a++;
}
echo "<br>";

$a = 0;

while($a < 5)
{
    echo "Aleks <br>";
    $a++;
}
echo "<br>";

$a = 1;

while($a <= 10)
{
    echo "$a.Aleks <br>";
    $a++;
}
echo "<br>";

$x = 1;
$y = 1;
while($y <= 5)
{
    while($x <= 10)
    {
        echo "*";
        $x++;
    }
    echo "<br>";
    $y++;
    $x = 1;
}
echo "<br>";

$liczba = 50;
while($liczba <= 100)
{
    if($liczba % 11 == 0)
    {
        echo "$liczba <br>";
    }
    $liczba++;
}
echo "<hr>";

echo "Pętla do . . . wchile Ćwiczenie <hr>";
$count = 1;
do
{
    $count++;
    echo "$count pomnożone przez 12 wynosi ".$count * 12.;
    echo "<br>";
}
while($count <= 5);

echo "<hr>Pętla do . . . wchile ";

$liczba = 4;
do
{
    $liczba++;
    echo "$liczba <br>";
}
while($liczba < 10);

echo "<br>";
$a = 10;
$b = 15;
do
{
    echo "$a <br>";
    $a++;
}
while($a <= $b);

echo "<br>";
$ile = 1;
do
{
    echo "Aleks <br>";
    $ile++;
}
while($ile <= 5);

echo "<br>";
$ile = 1;
do
{
    echo "$ile.Aleks <br>";
    $ile++;
}
while($ile <= 10);

echo "<br>";

$x = 1;
$y = 1;
do
{
    do
    {
        echo "*";
        $x++;
    }
    while($x <= 10);
    
    echo "<br>";
    $x = 1;
    $y++;
}
while($y <= 5);

echo "<br>";

$liczba = 49;
do
{
    $liczba++;

    if($liczba % 11 == 0)
    {
        echo $liczba;
        echo "<br>";
    }
}
while($liczba <= 100);

echo "<hr>";
?>