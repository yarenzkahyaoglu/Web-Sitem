<?php
// Kullanıcıdan gelen bilgileri al
$username = $_POST['username'];
$password = $_POST['password'];

// E-mail'den sadece numarayı çekiyoruz (örnek: b1812100001@sakarya.edu.tr → b1812100001)
$expectedPassword = substr($username, 0, strpos($username, '@'));

// Doğrulama
if ($password === $expectedPassword) {
    echo "<h2>Hoşgeldiniz $password</h2>";
    echo "<p>Giriş başarılı!</p>";
} else {
    // Başarısızsa tekrar login sayfasına yönlendir
    header("Location: login.html");
    exit();
}
?>
