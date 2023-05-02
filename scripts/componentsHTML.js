const addAddressHTML = () => {
    // INSERTS A NEW IP ADDRESS IN THE FORM
    let HTML = "<div class='ipAddressContainer'>";
    HTML += "<input type='text' placeholder='I.E. 24.24.24.24 or 2a02:26f7:b504:4000::' />";
    HTML += "<button type='button' class='removeField'>";
    HTML += "<img src='icons/delete.svg' class='removeFieldImg' alt='Remove IP address field' />";
    HTML += "</button>";
    HTML += "</div>";

    return HTML;
}

const successHTML = (ip, r) => {
    // INSERTS A BOX WITH THE INFORMATION IN THE RESULTS COLUMN
    let iso_code = (r.country != null) ? r.country.iso_code : null;
    let postal_code = (r.postal != null) ? r.postal.code : null;
    let city_name = (r.city != null && r.city.names) ? r.city.names.en : null;
    let time_zone = (r.location != null) ? r.location.time_zone : null;
    let accuracy_radius = (r.location != null) ? r.location.accuracy_radius : null;

    let HTML = "<article class='success'>";
    HTML += "<h3>IP ADDRESS: " + ip + "</h3>";
    HTML += (iso_code) ? "<div><label>Country Code:</label><span>" + iso_code + "</span></div>" : '';
    HTML += (postal_code) ? "<div><label>Postal Code:</label><span>" + postal_code + "</span></div>" : '';
    HTML += (city_name) ? "<div><label>City name:</label><span>" + city_name + "</span></div>" : '';
    HTML += (time_zone) ? "<div><label>Time Zone:</label><span>" + time_zone + "</span></div>" : '';
    HTML += (accuracy_radius) ? "<div><label>Accuracy radius:</label><span>" + accuracy_radius + "km.</span></div>" : '';
    HTML += "</article>";

    return HTML;
}

const errorHTML = (ip, result) => {
    // INSERTS A BOX WITH THE ERROR MESSAGE IN THE RESULTS SECTION
    let notFoundText = "The IP address " + ip + " couldn't be found in the database.";
    let HTML = "<article class='error'>";
    HTML += "<h3>";
    HTML += (result === null) ? notFoundText : result[1];
    HTML += "</h3>";
    HTML += "</article>";

    return HTML;
}

// EXPORT FUNCTIONS TO USE IN search.js
export{
    addAddressHTML, 
    successHTML, 
    errorHTML
};