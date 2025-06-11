<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (!empty($_POST['email_verify'])) {
    http_response_code(403);
    exit('Something went wrong...');
}

session_start();

if (!empty($_SESSION['last_sent']) && time() - $_SESSION['last_sent'] < 60) {
    http_response_code(429); 
    exit('Please wait before sending another message.');
}
$_SESSION['last_sent'] = time();



require '../../vendor/autoload.php'; 

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$smtpPassword = $_ENV['SMTP_APP_PASSWORD'] ?? null;
$smtpUsername = $_ENV['SMTP_APP_USERNAME'] ?? null;

if (!$smtpPassword || !$smtpUsername) {
  die('SMTP credentials not loaded.');
}

$name = strip_tags($_POST["name"] ?? '');
$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$message = strip_tags($_POST["message"] ?? '');

if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Error occurred! Please ensure all fields are completed before re-submission, thanks!";
    exit;
}

$mail = new PHPMailer(true);
$mail->SMTPDebug = 2;   
$mail->Debugoutput = 'html';  

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';        
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   =  $smtpPassword;
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom($email, $name);
    $mail->addAddress('justscarl@gmail.com');

    $mail->isHTML(false); 
    $mail->Subject = "Portfolio Notification: Message from: $name sent via $email";
    $mail->Body    = $message;


    $mail->send();
    http_response_code(200);
    echo "Successfully sent.";
} catch (Exception $e) {
    http_response_code(500);
    echo "Something went wrong. Mailer Error: {$mail->ErrorInfo}";
}
?>
