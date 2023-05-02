# INSTRUCTIONS

### Clone the repository
```
git clone https://github.com/nicolasfracchia/maxmind-homework-exercise
```

### Install dependencies with Composer
```
composer install
```

### Download a new version of GeoLite2-City database and insert it into the project
- Download the GZIP file from https://www.maxmind.com/en/accounts/857732/geoip/downloads
- Unzip the file
- Insert the .mmdb file into the project

### Update the Reader.php file to insert the route of the database (line 9)
```
...
$databaseFile = 'MMDB_LOCATION_HERE';
...
```


# DOCUMENTATION

## USAGE
- The main page consists of a form with one field for searching for an IP address. You can add additional fields dynamically using the blue (+) button in the top-right corner.
- The new fields can be removed using the red button (X) next to the field.
- The search will only be executed if there is at least one field in the form that has been filled out completely.
- The form has some client-side validations to prevent unnecessary requests to the server and the errors will be shown in the right column (results column).
- The blue "SEARCH" button executes the search.
- The white "RESET" button eliminates all the added fields on the form and empties the main one to start clean search.

## READER
- The **Reader.php** file was generated following the instructions provided at https://github.com/maxmind/MaxMind-DB-Reader-php
- The example has the necesary modifications for JavaScript calls.
- It needs the proper route for the database file.

## SCRIPTS

##### scripts/search.js
- This script contains event listeners for the search form, as well as functions to add and remove fields from the form.
- It also sends requests to **Reader.php** to handle the IP information and error messages.
- Finally, it imports functions from **scripts/componentsHTML.js** to generate the proper HTML.

##### scripts/componentsHTML.js
- This script contains functions to display the search results and the form fields.
- It is imported by **search.js** to generate the appropriate HTML for the search results.