<?php

// session_start();

// if (!isset($_SESSION['user_id'])) {
//     $_SESSION['user_id'] = uniqid();
// }

// $userId = $_SESSION['user_id'];

// if (!isset($_SESSION['counter'])) {
//     $_SESSION['counter'] = 1;
// } else {
//     $_SESSION['counter']++;
// }

// echo "Page Views: " . $_SESSION['counter'];

// $userIP = $_SERVER['REMOTE_ADDR'];
// $apiUrl = "http://www.geoplugin.net/json.gp?ip={$userIP}";

// $response = file_get_contents($apiUrl);
// $data = json_decode($response);

// $country = $data->geoplugin_countryName;

// $_SESSION['country'] = $country;

// echo "User country: " . $_SESSION['country'];

// foreach ($_SESSION as $key => $value) {
//     echo "$key: $value<br>";
// }



// if (extension_loaded('mysqli')) {
//     echo 'mysqli extension is enabled';
// } else {
//     echo 'mysqli extension is NOT enabled';
// }

echo '<script>console.log("ACCEPT ALL"); </script>';


?>


