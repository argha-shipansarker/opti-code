const utils = optimizely.get('utils');

function handleGettingTrustPilotScript() {
    if (document.getElementById("opti-trustpilot-script") && window.Trustpilot) {
        window.Trustpilot = null;
        const existingScript = document.getElementById("opti-trustpilot-script");
        if (existingScript) {
            existingScript.remove();
            const newScript = document.createElement('script');
            newScript.id = "opti-trustpilot-script"; // use the same ID again
            newScript.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
            newScript.type = "text/javascript";
            newScript.async = true;
            document.body.appendChild(newScript);
        }
    } else {
        const script = document.createElement('script');
        script.id = "opti-trustpilot-script";
        script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);
    }
}

utils.observeSelector('eui-registration-lookup adm-wrap', function (lookup_section) {
    if (window.location.pathname == '/Admiral/direct/search' && !document.querySelector('.opti-trust-pilot-design')) {
        lookup_section.insertAdjacentHTML("beforeend", `<div class="opti-trust-pilot-design">
    <style>
        .opti-trust-pilot-design .benefit-section {
            display: flex;
            padding: 0 16px 16px;
            gap: 16px;
        }

        .opti-trust-pilot-design .benefit-section .benefit {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .opti-trust-pilot-design .benefit-section .benefit .desktop {
            display: block;
        }

        .opti-trust-pilot-design .benefit-section .benefit .mobile {
            display: none;
        }

        .opti-trust-pilot-design .benefit-section .benefit p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #25469B;
            margin: 16px 0 0;
        }

        .opti-trust-pilot-design .star-message {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            color: #444444;
            text-align: center;
            margin-bottom: 19.19px;
        }

        @media (max-width: 500px) {
            .opti-trust-pilot-design .benefit-section {
                flex-direction: column;
                gap: 12px;
                padding: 12px 0;
                border-top: 1px solid #CED9E5;
            }

            .opti-trust-pilot-design .benefit-section .benefit {
                flex-direction: row;
            }

            .opti-trust-pilot-design .benefit-section .benefit p {
                margin: 0 0 0 16px;
            }

            .opti-trust-pilot-design .benefit-section .benefit .desktop {
                display: none;
            }

            .opti-trust-pilot-design .benefit-section .benefit .mobile {
                display: block;
            }

            .opti-trust-pilot-design .star-message {
                padding-bottom: 12px;
                border-bottom: 1px solid #CED9E5;
                margin-bottom: 12px;
            }
        }
    </style>
    <div class="benefit-section">
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 11.6121C31.36 11.6121 37.333 17.5851 37.333 24.9451C37.333 32.3051 31.36 38.2781 24 38.2781C16.64 38.2781 10.667 32.3051 10.667 24.9451C10.667 17.5851 16.64 11.6121 24 11.6121ZM21.333 27.0652L17.8799 23.6248L16 25.5046L21.333 30.8386L32 20.1716L30.1201 18.2781L21.333 27.0652Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 5.33301C15.68 5.33301 18.667 8.32 18.667 12C18.667 15.68 15.68 18.667 12 18.667C8.32 18.667 5.33301 15.68 5.33301 12C5.33301 8.32 8.32 5.33301 12 5.33301ZM10.667 13.0596L8.94043 11.3398L8 12.2803L10.667 14.9463L16 9.61328L15.0596 8.66699L10.667 13.0596Z"
                    fill="white" />
            </svg>
            <p>99% of claims accepted*</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 32.3046L32.24 37.2786L30.054 27.9046L37.334 21.5986L27.746 20.7846L24 11.9446L20.254 20.7846L10.666 21.5986L17.946 27.9046L15.76 37.2786L24 32.3046Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 15.513L16.12 18L15.027 13.313L18.667 10.16L13.873 9.75301L12 5.33301L10.127 9.75301L5.33301 10.16L8.97301 13.313L7.88001 18L12 15.513Z"
                    fill="white" />
            </svg>
            <p>5-star rated car insurance</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M20 26.2781C23.56 26.2781 30.667 28.0654 30.667 31.6121V35.6121H9.33301V31.6121C9.33301 28.0654 16.44 26.2781 20 26.2781ZM30.2266 26.4519C33.9066 26.9852 38.667 28.7054 38.667 31.6121V35.6121H33.333V31.6121C33.333 29.3721 32.0532 27.6919 30.2266 26.4519ZM20 14.2781C22.9455 14.2781 25.333 16.6665 25.333 19.6121C25.3328 22.5574 22.9454 24.9451 20 24.9451C17.0546 24.9451 14.6672 22.5574 14.667 19.6121C14.667 16.6665 17.0545 14.2781 20 14.2781ZM28 14.2781C30.9467 14.2781 33.333 16.6654 33.333 19.6121C33.3328 22.5586 30.9466 24.9451 28 24.9451C27.3733 24.9451 26.7866 24.8114 26.2266 24.6248C27.3331 23.2515 27.9999 21.5052 28 19.6121C28 17.7187 27.3332 15.9717 26.2266 14.5984C26.7866 14.4117 27.3733 14.2781 28 14.2781Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M10 12.667C11.7799 12.667 15.3326 13.5599 15.333 15.333V17.333H4.66699V15.333C4.66743 13.5599 8.22011 12.667 10 12.667ZM15.1133 12.7529C16.9531 13.0196 19.3326 13.8799 19.333 15.333V17.333H16.667V15.333C16.6669 14.2132 16.0265 13.3729 15.1133 12.7529ZM10 6.66699C11.4727 6.66699 12.6668 7.8604 12.667 9.33301C12.667 10.8058 11.4728 12 10 12C8.52724 12 7.33301 10.8058 7.33301 9.33301C7.33318 7.8604 8.52735 6.66699 10 6.66699ZM14 6.66699C15.4732 6.66699 16.6668 7.85982 16.667 9.33301C16.667 10.8063 15.4733 12 14 12C13.6867 12 13.3933 11.9332 13.1133 11.8398C13.6666 11.1532 14 10.2796 14 9.33301C13.9999 8.38659 13.6664 7.5137 13.1133 6.82715C13.3933 6.73382 13.6867 6.66699 14 6.66699Z"
                    fill="white" />
            </svg>
            <p>Join over 5 million drivers</p>
        </div>
    </div>
    <p class="star-message">*Based on claims made during 2024 with Admiral, Gold, Platinum and Telematics covers.</p>
    <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
        data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%"
        data-theme="light">
        <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
    </div>
</div>`);
        handleGettingTrustPilotScript();
    }
});

//applicable for /Admiral/direct/list, /Admiral/direct/summary, /Admiral/direct/aboutyou
utils.observeSelector('adm-page-actions > div', function (page_action_section) {
    if ((window.location.pathname == '/Admiral/direct/list' || window.location.pathname == '/Admiral/direct/summary') && !document.querySelector('.opti-trustpilot')) {
        page_action_section.insertAdjacentHTML("afterbegin", `<style>
    adm-page-actions>div {
        align-items: center;
    }

    adm-page-actions adm-page-actions-primary {
        margin-left: unset !important;
    }

    @media (max-width: 500px) {
        .opti-trustpilot {
            margin: auto;
            order: 99;
            margin-top: 16px;
        }
    }
</style>
<div class="trustpilot-widget opti-trustpilot" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
    data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">
    <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
</div>`);
        handleGettingTrustPilotScript();
    }
});


//applicable for /Admiral/direct/cardetails
utils.observeSelector('eui-vehicle-details .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/cardetails') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `<style>
    .opti-trustpilot {
        margin: 48px auto 0;
    }

    @media (max-width: 500px) {
        .opti-trustpilot {
            margin: 37px auto 25px;
        }
    }
</style>
<div class="trustpilot-widget opti-trustpilot" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
    data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">
    <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
</div>`);
        handleGettingTrustPilotScript();
    }

});

utils.observeSelector('eui-direct-cover-details .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/coverdetails') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `<style>
    .opti-trustpilot {
        margin: 48px auto 0;
    }

    @media (max-width: 500px) {
        .opti-trustpilot {
            margin: 37px auto 25px;
        }
    }
</style>
<div class="trustpilot-widget opti-trustpilot" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
    data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">
    <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
</div>`);
        handleGettingTrustPilotScript();
    }

});

utils.observeSelector('eui-cover-details-mileage-and-excess .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/coverdetailsdirect') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `<style>
    .opti-trustpilot {
        margin: 48px auto 0;
    }

    @media (max-width: 500px) {
        .opti-trustpilot {
            margin: 37px auto 25px;
        }
    }
</style>
<div class="trustpilot-widget opti-trustpilot" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
    data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">
    <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
</div>`);
        handleGettingTrustPilotScript();
    }

});

utils.observeSelector('eui-direct-driver-details .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/driverdetails') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `<style>
    .opti-trustpilot {
        margin: 48px auto 0;
    }

    @media (max-width: 500px) {
        .opti-trustpilot {
            margin: 37px auto 25px;
        }
    }
</style>
<div class="trustpilot-widget opti-trustpilot" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
    data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">
    <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
</div>`);
        handleGettingTrustPilotScript();
    }

});

utils.observeSelector('eui-direct-ncb .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/noclaimsbonus') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `<style>
    .opti-trustpilot {
        margin: 48px auto 0;
    }

    @media (max-width: 500px) {
        .opti-trustpilot {
            margin: 37px auto 25px;
        }
    }
</style>
<div class="trustpilot-widget opti-trustpilot" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
    data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">
    <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
</div>`);
        handleGettingTrustPilotScript();
    }

});

utils.observeSelector('eui-main-driver-reg-keeper .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/maindriver') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `<style>
    .opti-trustpilot {
        margin: 48px auto 0;
    }

    @media (max-width: 500px) {
        .opti-trustpilot {
            margin: 37px auto 25px;
        }
    }
</style>
<div class="trustpilot-widget opti-trustpilot" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
    data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">
    <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
</div>`);
        handleGettingTrustPilotScript();
    }

});

utils.observeSelector('eui-coverable-summary > adm-wrap .adm-wrap__content', function (summary_section) {
    if (window.location.pathname == '/Admiral/direct/quotesummary' && !document.querySelector('.opti-trust-pilot-design')) {
        summary_section.insertAdjacentHTML("beforeend", `<div class="opti-trust-pilot-design">
    <style>
        .opti-trust-pilot-design {
            background: white;
            padding: 16px;
        }

        .opti-trust-pilot-design .benefit-section {
            display: flex;
            margin-bottom: 16px;
            gap: 16px;
        }

        .opti-trust-pilot-design .benefit-section .benefit {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .opti-trust-pilot-design .benefit-section .benefit .desktop {
            display: block;
        }

        .opti-trust-pilot-design .benefit-section .benefit .mobile {
            display: none;
        }

        .opti-trust-pilot-design .benefit-section .benefit p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #25469B;
            margin: 16px 0 0;
            text-align: center;
        }

        .opti-trust-pilot-design .star-message {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            color: #444444;
            text-align: center;
            margin-bottom: 19.19px;
        }

        @media (max-width: 500px) {
            .opti-trust-pilot-design .benefit-section {
                flex-direction: column;
                gap: 12px;
            }

            .opti-trust-pilot-design .benefit-section .benefit {
                flex-direction: row;
            }

            .opti-trust-pilot-design .benefit-section .benefit p {
                margin: 0 0 0 16px;
            }

            .opti-trust-pilot-design .benefit-section .benefit .desktop {
                display: none;
            }

            .opti-trust-pilot-design .benefit-section .benefit .mobile {
                display: block;
            }

            .opti-trust-pilot-design .star-message {
                padding-bottom: 12px;
                border-bottom: 1px solid #CED9E5;
                margin-bottom: 12px;
            }
        }
    </style>
    <div class="benefit-section">
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 11.6121C31.36 11.6121 37.333 17.5851 37.333 24.9451C37.333 32.3051 31.36 38.2781 24 38.2781C16.64 38.2781 10.667 32.3051 10.667 24.9451C10.667 17.5851 16.64 11.6121 24 11.6121ZM21.333 27.0652L17.8799 23.6248L16 25.5046L21.333 30.8386L32 20.1716L30.1201 18.2781L21.333 27.0652Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 5.33301C15.68 5.33301 18.667 8.32 18.667 12C18.667 15.68 15.68 18.667 12 18.667C8.32 18.667 5.33301 15.68 5.33301 12C5.33301 8.32 8.32 5.33301 12 5.33301ZM10.667 13.0596L8.94043 11.3398L8 12.2803L10.667 14.9463L16 9.61328L15.0596 8.66699L10.667 13.0596Z"
                    fill="white" />
            </svg>
            <p>99% of claims accepted*</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 32.3046L32.24 37.2786L30.054 27.9046L37.334 21.5986L27.746 20.7846L24 11.9446L20.254 20.7846L10.666 21.5986L17.946 27.9046L15.76 37.2786L24 32.3046Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 15.513L16.12 18L15.027 13.313L18.667 10.16L13.873 9.75301L12 5.33301L10.127 9.75301L5.33301 10.16L8.97301 13.313L7.88001 18L12 15.513Z"
                    fill="white" />
            </svg>
            <p>5-star rated car insurance</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M20 26.2781C23.56 26.2781 30.667 28.0654 30.667 31.6121V35.6121H9.33301V31.6121C9.33301 28.0654 16.44 26.2781 20 26.2781ZM30.2266 26.4519C33.9066 26.9852 38.667 28.7054 38.667 31.6121V35.6121H33.333V31.6121C33.333 29.3721 32.0532 27.6919 30.2266 26.4519ZM20 14.2781C22.9455 14.2781 25.333 16.6665 25.333 19.6121C25.3328 22.5574 22.9454 24.9451 20 24.9451C17.0546 24.9451 14.6672 22.5574 14.667 19.6121C14.667 16.6665 17.0545 14.2781 20 14.2781ZM28 14.2781C30.9467 14.2781 33.333 16.6654 33.333 19.6121C33.3328 22.5586 30.9466 24.9451 28 24.9451C27.3733 24.9451 26.7866 24.8114 26.2266 24.6248C27.3331 23.2515 27.9999 21.5052 28 19.6121C28 17.7187 27.3332 15.9717 26.2266 14.5984C26.7866 14.4117 27.3733 14.2781 28 14.2781Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M10 12.667C11.7799 12.667 15.3326 13.5599 15.333 15.333V17.333H4.66699V15.333C4.66743 13.5599 8.22011 12.667 10 12.667ZM15.1133 12.7529C16.9531 13.0196 19.3326 13.8799 19.333 15.333V17.333H16.667V15.333C16.6669 14.2132 16.0265 13.3729 15.1133 12.7529ZM10 6.66699C11.4727 6.66699 12.6668 7.8604 12.667 9.33301C12.667 10.8058 11.4728 12 10 12C8.52724 12 7.33301 10.8058 7.33301 9.33301C7.33318 7.8604 8.52735 6.66699 10 6.66699ZM14 6.66699C15.4732 6.66699 16.6668 7.85982 16.667 9.33301C16.667 10.8063 15.4733 12 14 12C13.6867 12 13.3933 11.9332 13.1133 11.8398C13.6666 11.1532 14 10.2796 14 9.33301C13.9999 8.38659 13.6664 7.5137 13.1133 6.82715C13.3933 6.73382 13.6867 6.66699 14 6.66699Z"
                    fill="white" />
            </svg>
            <p>Join over 5 million drivers</p>
        </div>
    </div>
    <p class="star-message">*Based on claims made during 2024 with Admiral, Gold, Platinum and Telematics covers.</p>
    <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc"
        data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%"
        data-theme="light">
        <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
    </div>
</div>`);
        handleGettingTrustPilotScript();
    }
});


