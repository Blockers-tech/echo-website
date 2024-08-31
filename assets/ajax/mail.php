<?php
parse_str($_POST['form_data'], $form);
$subject = (isset($_POST['subject']) && !empty($_POST['subject']) ? $_POST['subject'] : 'Anmo User Query');

define('TO_EMAIL', 'themewar@gmail.com');
define('SUBJECT', $subject);
define('FROM_EMAIL', $form['email']);

$MESSAGE = 'Hi Admin, <br/><br/>';
$MESSAGE .= 'You got an user query from Anmo. User details and Message are noted bellow: <br/><br/>';
$MESSAGE .= 'Name : '.$form['name'].'<br/>';
$MESSAGE .= 'Email : '.$form['email'].'<br/>';

$MESSAGE .= 'Message : <br/>'.$form['message'].'<br/><br/>';
$MESSAGE .= 'Regards';

$HEADERS = "MIME-Version: 1.0" . "\r\n";
$HEADERS .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$HEADERS .= 'From: <'.FROM_EMAIL.'>' . "\r\n";

mail(TO_EMAIL, SUBJECT, $MESSAGE, $HEADERS);
exit();