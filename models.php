<?php
class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('81219.db');
    }
}

$db = new MyDB();
$results = $db->query ("select * from models");

$models = array();

while($row = $results->fetchArray(SQLITE3_ASSOC) ){
    $model = array();
    $model["name"] = $row["uid"];
    $model["description"] = $row["description"];
    $model["path"] = $row["path"];
    $model["img"] = $row["img"];
    $models[] = $model;
}

header("Content-Type: application/json");
echo json_encode($models);