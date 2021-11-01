<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$amount = $_POST['CamerasAmounts'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	$mailTo = "majunbin@majunbin.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an e-mail from".$name.".\n\n".$message;

	mail($mailTo, $amount, $txt, $headers);
	header("Location: index.php?mailsend");

}