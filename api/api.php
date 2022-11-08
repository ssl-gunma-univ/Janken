<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Origin, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET');
header('Content-Type: text/plain; charset=UTF-8');

// Change depending on the locale of your server
putenv("LANG=C.UTF-8");
setlocale(LC_CTYPE, "C.UTF-8");

$shape = $_POST['shape'];

exec("./janken $shape", $output);

//表示
for ($i = 0; $i < count($output); $i++) {
    echo $output[$i] . '<br>';
}
echo '<br>';

?>
