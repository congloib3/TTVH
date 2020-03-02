<?php
$msg="";
$userid=0;
session_start();
if (isset($_SESSION['userid']))
    $userid=$_SESSION["userid"];
?>