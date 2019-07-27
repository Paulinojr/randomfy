<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;
$app->get('/', function (Request $request, Response $response, array $args) {
    $response->getBody()->write("
    <a href='https://accounts.spotify.com/authorize?client_id=b8eda3cbb1534b54923faccc9b0dac7c&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback%2F&scope=user-read-private%20user-read-email'>
    Login with spotify </a>
    ");

    return $response;
});

$app->get('/callback', function(Request $request, Response $response, array $args){
    $response->getBody()->write("Authorized");

    return $response;
});
$app->run();