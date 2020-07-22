<?php $name = $_POST['fname'];
$email = $_POST['femail'];
$message = $_POST['fmessage'];
$formcontent="From: $name \n Message: $message";
$recipient = "liz.fibleuil@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>