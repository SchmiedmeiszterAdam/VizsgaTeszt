<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/stilus.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/TesztKerdes.js"></script>
    <script src="js/script.js"></script>
    <title>Teszt</title>

    </head>
    <body>
        <main>
            <select id="kategoriak">
                <option value="" disabled selected>Válassz!</option>
            </select>
            <div id="kerdesek"></div>
        </main>
    </body>
</html>
