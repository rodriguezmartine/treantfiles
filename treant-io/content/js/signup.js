
import FetchService from './service/FetchService.js';
/*-- Objects --*/
const fetchService = new FetchService();
/*-- /Objects --*/

/*--Functions--*/

async function submitForm(e, form, url) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);

    // 2.3 Build Headers
    const headers = buildHeaders();
    // 2.4 Request & Response
    var response = await fetchService.performPostHttpRequest(url, headers, jsonFormData); // Uses JSON Placeholder
    console.log(response);
    // 2.5 Inform user of result

    if(response.id){
        window.location = '/';
    }
    else{
        modal.style.display = "none";
        window.location = './';
        alert('An error occured, check your submitted data');
    }
}

function buildHeaders(authorization = null) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": (authorization) ? authorization : "Bearer TOKEN_MISSING"
    };
    return headers;
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    const jsonContact = { };
    for(const pair of new FormData(form)) {
        if(pair[0] == 'contact_email')
            jsonContact[pair[0]] = pair[1]
        if(pair[0] == 'contact_name')
            jsonContact[pair[0]] = pair[1];
        if(pair[0] != 'contact_email' && pair[0] != 'contact_name')
            jsonFormData[pair[0]] = pair[1];
    }
    jsonFormData['contact'] = jsonContact
    
    return jsonFormData;
}
/*--/Functions--*/

/*--Event Listeners--*/
const signup = document.querySelector("#signup");


if(signup) {
    signup.addEventListener("submit", function(e) {
        submitForm(e, this, 'https://gateway.treant.io/company');
    });
}


/*--Event Listeners--*/
const sampleForm = document.querySelector("#sampleForm");
if(sampleForm) {
    sampleForm.addEventListener("submit", function(e) {
        submitForm(e, this,'https://gateway.treant.io/support/sendmail');
    });
}