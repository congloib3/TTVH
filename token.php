<?php 
$n =0; $id=0; $r1=0; $r2 =0; $c=0;
$k=0; $k2=8259;
$t ="";
$x=0;

$id = 879176;
$k=4256891;
$x = $id;
$n = date("d") *1000 + date("m")*10 + date("s");


$r1= 1+2;//role

$r1= $r1 ^ (($id + 6655) % 10000);
$id = $id ^ $n;
$n = $n ^ $k;
$c=0;
while ($x !=0)
{
$c = $c+ $x%10;
$x = $x /10;
}
$c = $c%10;

$t = "5".$c.strlen($n+$k2).strlen($id).strlen($r1).($n+$k2).$id.$r1;

echo $t;
?>  
<?php 
//5876442524268757645828
$n =0; $id =0; $r =0;
$k =0; $k2=8259;
$t='';
$x =0; $x1 =0; $x2 =0; $x3 =0; $v=0; $c0=0; $c =0;
$k=4256891;
$t = "5876442524268757645828";//'55744425492668235446';

$x  =  substr($t,0,1); //==5
$c0 =  substr($t,1,1);
$x1 =  substr($t,2,1);
$x2 =  substr($t,3,1);
$x3 =  substr($t,4,1);
$v  = 5;
$n  =  ( substr($t,$v,$x1)-$k2) ^ $k;
$v  = $v + $x1;
$id  =   substr($t,$v,$x2) ^$n;
$v  = $v + $x2;
$r  =   substr($t,$v,$x3) ^ (($id+6655) %10000);


echo "<br>";
echo $id;echo "<br>";
echo $r;echo "<br>";
echo $n;echo "<br>";


/*
$x =0;
$s="1234560000";
$x = $s + 1111;
echo substr($s,0,3);
*/
?>  