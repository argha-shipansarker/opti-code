var utils = window.optimizely.get('utils');

utils.waitForElement('.shipping-email-container').then(function (email_input) {
    email_input.style.display = "block";
});

utils.waitForElement('.checkoutLogin').then(function (checkout_login_modal) {

    const close_btn = checkout_login_modal.querySelector(".close");

    if (close_btn) {
        close_btn.addEventListener('click', function () {
            if (checkout_login_modal.classList.contains('opti-existing-user-login-modal')) {
                checkout_login_modal.classList.remove('opti-existing-user-login-modal');
            }
        })
    }

    const continue_as_guest = checkout_login_modal.querySelector(".continue-the-guest");

    if (continue_as_guest) {
        continue_as_guest.addEventListener('click', function () {
            if (checkout_login_modal.classList.contains('opti-existing-user-login-modal')) {
                checkout_login_modal.classList.remove('opti-existing-user-login-modal');
            }
        })
    }
});

(function () {
    // Save the original open and send methods
    const originalSend = XMLHttpRequest.prototype.send;

    // Override the send method
    XMLHttpRequest.prototype.send = function (body) {
        // Check if the URL contains the specific string
        if (this._url.includes("/Login-CheckExistingUser")) {
            // console.log(`[Intercept] XHR Send called for /Login-CheckExistingUser:`, { url: this._url, body });

            // Add an event listener to monitor the state changes of the XHR
            this.addEventListener('readystatechange', function () {
                // console.log(`[Intercept] XHR readyState change for ${this._url}:`, { readyState: this.readyState });

                if (this.readyState === 4) { // Check if the request is complete
                    console.log(`[Intercept] XHR Response for ${this._url}:`, {
                        status: this.status,
                        statusText: this.statusText,
                        response: this.responseText
                    });

                    const responseJSON = JSON.parse(this.responseText);
                    if (responseJSON.existingUser == true) {
                        const email_input = document.querySelector('.shipping-email-container input');
                        const modal_email_input = document.querySelector('.checkoutLogin input[type="email"]');
                        const modal_open_btn = document.querySelector(".js-sign-in-popup");
                        const modal_div = document.querySelector('.checkoutLogin');

                        if (email_input && modal_email_input && modal_open_btn && modal_div) {
                            modal_div.classList.add('opti-existing-user-login-modal');
                            modal_email_input.value = email_input.value;

                            modal_open_btn.click();
                        }
                    } else {
                        const modal_email_input = document.querySelector('.checkoutLogin input[type="email"]');
                        if (modal_email_input) {
                            modal_email_input.value = "";
                        }
                    }
                }
            });
        }

        // Continue with the original send method
        return originalSend.apply(this, arguments);
    };
})();
