# INSTRUCTIONS
### Clone the repository
```
git clone https://github.com/nicolasfracchia/maxmind-homework-exercise
```
### Install dependencies with Composer
```
composer install
```

# DOCUMENTATION
## USAGE
- The main page consists of a form with one field for searching for an IP address. You can add additional fields dynamically using the blue (+) button in the top-right corner.
- The new fields can be removed using the red button (X) next to the field.
- The search will only be executed if there is at least one field in the form that has been filled out completely.
- The form has some client-side validations to prevent unnecessary requests to the server and the errors will be shown in the right column (results column).
- The blue "SEARCH" button executes the search.
- The white "RESET" button eliminates all the added fields on the form and empties the main one to start clean search.

## DATABASE
- This project is using GeoLite2-City_20230502 version of the MaxMind database.
- This database was downloaded from https://www.maxmind.com/en/accounts/857732/geoip/downloads (GeoLite2 City ---> Download GZIP).

## READER
- The **Reader.php** file was generated following the instructions provided at https://github.com/maxmind/MaxMind-DB-Reader-php
- The example has the necesary modifications for JavaScript calls.

## SCRIPTS
##### scripts/search.js
- This script contains event listeners for the search form, as well as functions to add and remove fields from the form.
- It also sends requests to **Reader.php** to handle the IP information and error messages.
- Finally, it imports functions from **scripts/componentsHTML.js** to generate the proper HTML.

##### scripts/componentsHTML.js
- This script contains functions to display the search results and the form fields.
- It is imported by **search.js** to generate the appropriate HTML for the search results.