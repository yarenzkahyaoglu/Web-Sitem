<?php
// login.php

// POST ile gönderilen değerleri al
$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? trim($_POST['password']) : '';

// Geçerli kullanıcı adı ve şifre kontrolü için düzenli ifade ve kontrol
$emailPattern = '/^[a-zA-Z0-9._%+-]+@sakarya\.edu\.tr$/';

if (!$username || !$password) {
    // Boş alan varsa login sayfasına yönlendir
    header("Location: index.html");
    exit();
}

if (!preg_match($emailPattern, $username)) {
    // Mail adresi formatı yanlışsa login sayfasına yönlendir
    header("Location: index.html");
    exit();
}

// Kullanıcı adı örnek: b1812100001@sakarya.edu.tr
// Şifre örnek: b1812100001 (mail adresinden domain çıkarılmış hali)

// Mail adresinden kullanıcı numarasını ayıkla
$userPart = explode('@', $username)[0];

// Şifre kontrolü: şifre kullanıcı numarasına eşit olmalı
if ($password === $userPart) {
    // Başarılı giriş
    echo "<!DOCTYPE html>
    <html lang='tr'>
    <head><meta charset='UTF-8'><title>Hoşgeldiniz</title></head>
    <body style='font-family: Arial, sans-serif; text-align:center; margin-top: 100px;'>
        <h1>Hoşgeldiniz, <strong>{$userPart}</strong></h1>
        <p>Giriş işleminiz başarılı oldu.</p>
        <a href='index.html'>Ana Sayfaya Dön</a>
    </body>
    </html>";
} else {
    // Hatalı giriş, login sayfasına geri yönlendir
    header("Location: index.html");
    exit();
}
?>
