<?php
	require_once 'vendor/autoload.php';

	use MaxMind\Db\Reader as Reader;

	$content = trim(file_get_contents("php://input"));
	$decoded = json_decode($content, true);
	
	$databaseFile = 'MMDB_LOCATION_HERE';

	$reader = new Reader($databaseFile);

	try{
		$ipData = $reader->get($decoded['ip-address']);
	}catch(Exception $e){
		$ipData = ['ERROR', $e->getMessage()];
	}
	
	echo json_encode($ipData);

	$reader->close();