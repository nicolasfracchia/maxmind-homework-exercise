<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Nicolas Fracchia - Senior Web Developer/Software Engineer Homework Assignment</title>
	<link rel="stylesheet" href="styles/styles.css"/>
</head>
<body>
	<main>
		<h1>Senior Web Developer/Software Engineer Homework Assignment</h1>
		<h2>Nicolas Fracchia</h2>
		<section>
			<form id='ip-search-form'>
				<div>
					<label>IP Address:</label>
					<button type='button' class='addAddress' title="Add new IP address field">
						<img src='icons/new.svg' alt='Add IP address field' class='addAddress' />
					</button>
				</div>
				<div>
					<input type='text' placeholder='I.E. 24.24.24.24 or 2a02:26f7:b504:4000::' />
				</div>
				<div id='buttonsContainer'>
					<button type="button" class="resetButton">RESET</button>
					<button type="submit" class="searchButton">SEARCH</button>
				</div>
			</form>
		</section>
		<section id='response'>
			<!-- SEARCH RESULTS APPEAR HERE -->
		</section>
	</main>
	
	<script type='module' src='scripts/search.js'></script>
</body>
</html>