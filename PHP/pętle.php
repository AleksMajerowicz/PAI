<?php
for($i = 0; $i <= 12; $i++)//w pętli for ++$zmienna a $zmienna++ NIE MA ZNACZENIA!
{
    echo "test$i<br>";
}
echo "ZADANIA <hr>";

for($i = 5; $i <= 15; ++$i)
{
    echo "$i<br>";
}
echo "<hr>";

$a = 3;
$b = 30;
for($i = $a; $i <= $b; ++$i)
{
    echo "$i<br>";
}
echo "<hr>";
for($i = 0; $i < 5; ++$i)
{
    echo "Aleks <br>";
}
echo "<hr>";
for($i = 1; $i <= 5; ++$i)
{
    echo "$i.Aleks <br>";
}
echo "<hr>";
$l = 1;
for($i = 1; $i <= 10; ++$i)
{
    if($l != 6)
    {
        echo "*";
        if($i >= 10)
        {
            $l += 1;
            $i = 0;
            echo "<br>";
        }
    }
}
echo "<hr>";
for($i = 50; $i <= 100; ++$i)
{
    if($i % 11 == 0)
    {
        echo "$i<br>";
    }
}
?>