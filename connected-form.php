<?php
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "jatindergill047@gmail.com";

        $headers = "From: ".$mailFrom;
        $txt = "hi there ".$name." send you an email regarding <b>".$subject."<b>.\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: ./html/contactme.html?mailsend");
        die("<h4 class='success'>Success! Your message has been sent.</h4>");
    }
    ?>