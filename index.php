<?php
// Mulai sesi


error_reporting(0);
session_start();



if (isset($_SESSION['username'])) {
    header("Location: /id/home.html");
    exit;
}

// Cek jika form login telah dikirim
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil nilai yang dikirimkan dari form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Anda bisa menambahkan validasi lebih lanjut di sini

    // Contoh validasi sederhana
    if ($username === 'admin' && $password === 'admin') {
        // Jika login berhasil, set sesi username
        $_SESSION['username'] = $username;
        // Redirect ke halaman selamat datang atau halaman utama
        header("Location: /id/home.html");
        exit;
    } else {
        // Jika login gagal, kirim pesan error
        $error = "<p class='error' style='text-align:center;'>Username atau password salah!</p>";
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | GameSkuy</title>
    <link rel="shortcut icon" href="id/logo1.ico">
    <link rel="stylesheet" href="id/loginstyle.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit&display=swap" rel="stylesheet">
<meta http-equiv="Cache-control" content="no-cache">
</head>
<body>

    <!-- Konten Header -->
    <header>
        <div class="kontenttest">
        <nav>
                
                
               <h1 style="color: #ffff;letter-spacing:2px;position:absolute;margin-top:24px;margin-left:14cm;">GAME SKUY</h1>
                
        </nav>
    </div>
    </header>

    <div class="logoborder">
                    
                    </div><img class="logo" src="id/logo1.png" style="display: block;">

        <div class="loginform" style="justify-content: center;">


                    <h1>MASUKAN USERNAME DAN PASSWORD</h1>
                    <?php echo $error; ?><br><br>
                <form action="index.php" method="POST" class="login">
                    
                    <label for="username"><h2>USERNAME : </h2></label><br>
                    <input type="text" id="username" name="username" required><br><br>
                    <label for="password"><h2>PASSWORD : </h2></label><br>
                    <input type="password" id="password" name="password" required><br><br>
                    <button type="submit" name="submit">LOGIN</button>
                    
                </form>


        </div>

        <script src="loginscript.js"></script>
</body>
</html>


