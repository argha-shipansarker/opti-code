var utils = window.optimizely.get('utils');

utils.waitForElement('.shipping-email-container').then(function (email_input) {
    email_input.style.display = "block";
});

utils.waitForElement('.have-an-account').then(function (have_account_section) {
    have_account_section.style.display = "none";
});