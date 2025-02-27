<?php
define("TESTMODUS",false); //Konstante; gibt an, ob wir uns in einem Development-System (TESTMODUS ist true) oder in einem Produktivsystem (TESTMODUS ist false) befinden

define("DB",[
	"host" => "localhost",
	"user" => "root",
	"pwd" => "",
	"name" => "",
	"charset" => "utf8mb4",
	"errorpages" => [
		"dbconnect" => "errors/dbconnect.html"
	]
]);

if(TESTMODUS) {
	error_reporting(E_ALL);
	ini_set("display_errors",1);
}
else {
	error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);
	ini_set("display_errors",1);
}
?>