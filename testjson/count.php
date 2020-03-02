<?php header ('Content-type: text/html; charset=utf-8'); ?>
<?php

$str = file_get_contents("account.json");
$list = json_decode($str);
$t = count($list);

$k=0;
    foreach($list as $x)
    {
        $k++;
    }    

echo $k;
echo "---------------------";
echo $t;
?>
