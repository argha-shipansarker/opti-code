var utils = window.optimizely.get('utils');

utils.waitForElement('.shipping-email-container').then(function (email_input) {
    email_input.style.display = "block";
});


utils.waitForElement('.have-an-account').then(function (have_account_section) {
    have_account_section.firstChild.remove();
    have_account_section.insertAdjacentHTML("afterbegin", `
<div class="opti-have-an-account">
    <style>
        .have-an-account {
            margin: 30px 0 40px;
        }

        .have-an-account .js-sign-in-popup {
            display: none;
        }

        .opti-have-an-account .account-section {
            display: flex;
            text-transform: none;
            white-space: nowrap;
            align-items: center;
        }

        .opti-have-an-account .account-section p {
            margin: 0;
            font-weight: 500;
        }

        .opti-have-an-account .account-section .account-msg {
            font-size: 18px;
            line-height: 21.6px;
        }

        .opti-have-an-account .account-section .sign-in-text {
            font-size: 16px;
            line-height: 19.2px;
            margin-left: 10px;
        }

        .opti-have-an-account .account-section .sign-in-btn {
            font-size: 14px;
            line-height: 20px;
            margin-left: 20px;
            height: 45px;
            width: 206px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #0062AB;
            color: #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
        }

        .opti-have-an-account .divider-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
        }

        .opti-have-an-account .divider-container .divider-line {
            flex-grow: 1;
            height: 1px;
            background-color: #D4D4D4;
        }

        .opti-have-an-account .divider-container .divider-text {
            margin: 0 10px;
            white-space: nowrap;
            text-transform: none;
            font-size: 14px;
            line-height: 20px;
        }

        @media (max-width: 1025px) {
            .have-an-account {
                margin: 22px 0 30px;
            }

            .opti-have-an-account .account-section {
                flex-direction: column;
                align-items: unset;
            }

            .opti-have-an-account .account-section .sign-in-text {
                margin: 5px 0 10px;
            }

            .opti-have-an-account .account-section .sign-in-btn {
                margin: 0;
                width: 100%;
            }

            .opti-have-an-account .divider-container {
                margin-top: 30px;
            }
        }
    </style>
    <div class="account-section">
        <p class="account-msg">Already have an account?</p>
        <p class="sign-in-text">Sign in for faster checkout.</p>
        <div class="sign-in-btn">SIGN IN</div>
    </div>
    <div class="divider-container">
        <div class="divider-line"></div>
        <span class="divider-text">or</span>
        <div class="divider-line"></div>
    </div>
</div>
    `);

    const opti_sign_in_btn = document.querySelector('.opti-have-an-account .account-section .sign-in-btn');
    if (opti_sign_in_btn) {
        opti_sign_in_btn.addEventListener('click', function () {
            const sign_in_btn = document.querySelector('.js-sign-in-popup');
            if (sign_in_btn) {
                sign_in_btn.click();
            }
        });
    }
});

utils.waitForElement('.checkoutLogin').then(function (checkout_login_modal) {
    checkout_login_modal.insertAdjacentHTML("afterbegin", `
<style>
    .checkoutLogin {
        max-width: 550px;
        margin: 30px auto 0;
    }

    .checkoutLogin .login-box:not(.login-account) {
        border-radius: 10px;
        background-color: #F4F4F4 !important;
        padding: 50px 100px 40px !important;
    }

    .checkoutLogin .login-box .close {
        right: 30px !important;
        top: 20px !important;
    }

    .checkoutLogin .login-box h2 {
        font-size: 20px !important;
        line-height: 24px !important;
        font-weight: 500 !important;
        text-transform: none;
        margin-bottom: 5px !important;
        color: #000000 !important;
    }

    .checkoutLogin .login-box-content p:first-child {
        line-height: 20px !important;
        color: #000000;
    }

    .checkoutLogin .login-box .login-account {
        background-color: #F4F4F4;
    }

    .checkoutLogin .login-box .login-account .login-box-content {
        background-color: #F4F4F4;
    }

    .checkoutLogin fieldset .form-row:first-child:not(.label-inline) {
        margin: 20px 0 !important;
    }

    .checkoutLogin fieldset .form-row:nth-of-type(2) {
        margin: 20px 0 10px !important;
    }

    .checkoutLogin fieldset .form-row label {
        color: #000000 !important;
    }

    .checkoutLogin label.fancyCheck::before {
        border-radius: 0 !important;
        border: 2px solid #0B233F !important;
    }

    .checkoutLogin .password-reset-desktop,
    .checkoutLogin .password-reset-mobile {
        color: #000000 !important;
    }

    .checkoutLogin button[value="Sign In"] {
        border-radius: 5px !important;
        background-color: #0062AB !important;
        font-size: 14px !important;
        line-height: 20px !important;
        font-weight: 600 !important;
        margin-top: 20px !important;
    }

    .checkoutLogin .ccpa-copy-addition,
    .checkoutLogin .ccpa-copy-addition a {
        color: #000000 !important;
    }

    @media (max-width: 600px) {
        .checkoutLogin .login-box:not(.login-account) {
            padding: 50px 30px 30px !important;
        }
    }
</style>
    `);

    const modal_heading = checkout_login_modal.querySelector('h2');
    if (modal_heading) {
        modal_heading.innerText = 'Already have an account?';
    }

    const modal_first_text = checkout_login_modal.querySelector('.login-box-content p:first-child');
    if (modal_first_text) {
        modal_first_text.innerText = 'Sign in for faster checkout.';
    }

    const sign_in_btn = checkout_login_modal.querySelector('button[value="Sign In"]');

    if (sign_in_btn) {
        sign_in_btn.style.setProperty('margin', '20px 0 0', 'important');
        sign_in_btn.style.setProperty('height', '45px', 'important');
        sign_in_btn.insertAdjacentHTML("afterend", `
            <div class="opti-guest-btn">
                <style>
                    .opti-guest-btn {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: transparent;
                        border: 2px solid #0B233F;
                        font-size: 14px;
                        line-height: 20px;
                        font-weight: 600;
                        cursor: pointer;
                        height: 41px;
                        margin-top: 10px;
                        border-radius: 5px;
                    }
                </style>
                CONTINUE AS GUEST
            </div>         
        `)
    }

    const opti_guest = document.querySelector('.opti-guest-btn')

    if (opti_guest) {

        opti_guest.addEventListener('click', function () {
            const colse_btn = checkout_login_modal.querySelector('.login-box .close');
            if (colse_btn) {
                colse_btn.click();
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
                        if (email_input && modal_email_input && modal_open_btn) {
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
