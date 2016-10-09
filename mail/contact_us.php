<?php
if(empty($_POST['subject'])  		||
   empty($_POST['emailadres']) 		||
   empty($_POST['bericht'])	||
   !filter_var($_POST['emailadres'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$subject = $_POST['subject'];	
$email_address = $_POST['emailadres'];
$message = $_POST['bericht'];

$to = 'info@designosource.be'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $subject";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nEmail: $email_address\n\Subject: $subject\n\nMessage:\n$message";
$headers = "From: noreply@designosource.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
mail($to,$email_subject,$email_body,$headers);
return true;		
?>




