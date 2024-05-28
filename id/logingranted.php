<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Success</title>
</head>
<body>
    <h2>Selamat datang, <?php echo isset($_SESSION['username']) ? $_SESSION['username'] : 'Pengunjung'; ?>!</h2>
    <a href="logout.php">Logout</a>
</body>
</html>
