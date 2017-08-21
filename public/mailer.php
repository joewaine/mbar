<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.


        $recipientEmail = filter_var(trim($_POST["recipient"]), FILTER_SANITIZE_EMAIL);


        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // $doc = new DOMDocument();
        // $doc->loadHTML($buffer);
        // $recipEmail = $doc->getElementById('recipient_email');
        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = $recipientEmail;
        // $recipient = "joe.waine@gmail.com";

        $sender = $email;

        $senderfollowup = 'your message to MBAR';

        // Set the email subject.
        $subject = "New Message from $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            $str = "Thank You! Your message has been sent.";
            echo htmlspecialchars_decode($str);

        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            $str = "Oops! Something went wrong and we couldn't send your message.";
            echo htmlspecialchars_decode($str);
        }

        if (mail($sender, $senderfollowup, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            // echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            // echo "Oops! Something went wrong and we couldn't send your message.";
        }





    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
