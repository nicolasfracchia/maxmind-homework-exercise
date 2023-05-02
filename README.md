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
- The main page consists on a form with only one field to search for an IP and the option to add more fields dynamically (blue (+) button at the top-right corner).
- The new fields can be removed with the red button (X) right next to the field.
- The search will only be executed if there is at least one completed field in the form.
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
- Form listeners.
- Functions to add/remove fields from the form.
- Requests to **Reader.php** to handle the IP information and error messages.
- Imports the functions from **scripts/componentsHTML.js** and calls to generate the proper HTML.
##### scripts/componentsHTML.js
- Only has the functions to show the HTML results and the form fields.