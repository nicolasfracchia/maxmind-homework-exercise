import {addAddressHTML, successHTML, errorHTML} from './componentsHTML.js';

document.getElementById('ip-search-form').addEventListener('click', (e) => {
    e.preventDefault();
    
    const target = e.target;
    const field = target.parentElement;
    
    switch (true) {
        case target.classList.contains('removeField'):
            // Remove address field from the form (button)
            field.remove();
            break;
        case target.classList.contains('removeFieldImg'):
            // Remove address field from the form (button image)
            field.parentElement.remove();
            break;
        case target.classList.contains('addAddress'):
            addAddress();
            break;
        case target.classList.contains('resetButton'):
            resetForm();
            break;
        case target.classList.contains('searchButton'):
            search();
            break;
    }
});

const search = () => {
    document.querySelectorAll('#ip-search-form input[type=text]').forEach((e) => {
        let ip = e.value;
        let invalidMessage = 'The value "' + ip + '" is not a valid IP address.';
        if(ip !== '')
            (validateIP(ip)) ? searchValidIP(ip) : createHTML(ip, ['ERROR', invalidMessage]);
    });
}

const validateIP = (ip) => {
    const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    const ipv6Regex = /^((([0-9A-Fa-f]{1,4}:){6}|(([0-9A-Fa-f]{1,4}:){1,6})?((:[0-9A-Fa-f]{1,4}){1,6}:|:))|((([0-9A-Fa-f]{1,4}:){5}|(([0-9A-Fa-f]{1,4}:){1,5})?((:[0-9A-Fa-f]{1,4}){1,5}:|:)):([0-9A-Fa-f]{1,4}:){1,2}|(([0-9A-Fa-f]{1,4}:){4}|(([0-9A-Fa-f]{1,4}:){1,4})?((:[0-9A-Fa-f]{1,4}){1,4}:|:)):([0-9A-Fa-f]{1,4}:){1,3}|(([0-9A-Fa-f]{1,4}:){3}|(([0-9A-Fa-f]{1,4}:){1,3})?((:[0-9A-Fa-f]{1,4}){1,3}:|:)):([0-9A-Fa-f]{1,4}:){1,4}|(([0-9A-Fa-f]{1,4}:){2}|(([0-9A-Fa-f]{1,4}:){1,2})?((:[0-9A-Fa-f]{1,4}){1,2}:|:)):([0-9A-Fa-f]{1,4}:){1,5}|(([0-9A-Fa-f]{1,4}:){1}|([0-9A-Fa-f]{1,4}:)?(:[0-9A-Fa-f]{1,4}){1,6}):((:[0-9A-Fa-f]{1,4}){1,7}|:)))/;


    if(ipv4Regex.test(ip)){
        return true; // valid IPv4 address
    }else if(ipv6Regex.test(ip)){
        return true; // valid IPv6 or IPv6 with IPv4 address
    }else{
        return false; // invalid IP address
    }
}

const searchValidIP = async (ip) => {
    const response = await fetch('Reader.php', {
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'ip-address':ip}),
    });

    const result = await response.json();

    createHTML(ip, result);
}

const createHTML = (ip, result) => {
    let HTML = (result === null || result[0] === 'ERROR') ? errorHTML(ip, result) : successHTML(ip, result);
    
    document.getElementById('response').insertAdjacentHTML('afterbegin', HTML);
}

const addAddress = () => {
    let HTML = addAddressHTML();

    document.getElementById('buttonsContainer').insertAdjacentHTML('beforebegin', HTML);
}

const resetForm = () => {
    document.querySelectorAll('.ipAddressContainer').forEach((e) => {
        e.remove();
    });
    document.querySelector('#ip-search-form div input[type=text]').value = '';
}