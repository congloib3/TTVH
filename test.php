<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>
<?php

$string = file_get_contents("data/dantoc.json");
$json_a = json_decode($string, true);




foreach ($json_a as $person_name => $person_a) {
    echo $person_a['dan_toc'];

    $fp = fopen('data/dantoc2.json', 'w');
    fwrite($fp, json_encode($json_a, JSON_PRETTY_PRINT));   //here it will print the array pretty
    fclose($fp);    
}

?>
<br />
<br />
<br />
<br />
<br />

<?php
    $str = '
    {
        "account":[
        {
            "username":"lehavn",
            "password":"123123",
            "email":"lehavn123456@gmail.com",
            "id":"1",
            "role":"7"
        },
        {
            "username":"khoai",
            "password":"www123",
            "email":"lehavn@yahoo.com",
            "id":"2",
            "role":"7"
        }
    ]
    }
    
      ';
      
      $json = json_decode($str);
      foreach($json->account as $item)
      {
          if($item->username == "lehavn")
          {
              echo $item->id;
          }
      }
?>

</body>
</html>