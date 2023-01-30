<html>
    <head>
        <style>
            table 
            {
                border: 1px black solid;
            }
            table tr td 
            {
                border: 1px black solid;
            }

        </style>
    </head>    
</html>

<?php
echo "<table>";
for($y = 1; $y <= 10; $y++)
{
    echo "<tr>";
    for($x = 1; $x < 10; $x++)
    {
        echo "<td>".$y * $x."</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>