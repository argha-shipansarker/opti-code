const utils = optimizely.get('utils');

if (window.location.pathname == "/Admiral/quote") {
    utils.observeSelector('.adm-section__content-inner .adm-subsection[data-test="motor-quotes-banners"] .adm-card__inner .adm-card__section:first-child', function (car_section) {

        let footer_section = car_section.querySelector('[data-test="add-car-van-banner-car-footer"] span');
        if (footer_section) {
            footer_section.classList.add('opti-car-footer');
        }
    });

    utils.observeSelector('.adm-section__content-inner .adm-subsection[data-test="motor-quotes-banners"] .adm-card__inner [data-test="add-car-van-banner-van-section"]', function (van_section) {

        let cta_button = van_section.querySelector('[data-test="add-car-van-banner-van-button"]');
        if (cta_button) {
            cta_button.insertAdjacentHTML("afterend", `
                <div class="van-learn-more-cta" onclick="window.showVanModal()">
        <style>
            .van-learn-more-cta {
                margin-top: 4px;
                font-size: 14px;
                line-height: 21px;
                font-weight: 400;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
    
            .van-learn-more-cta span {
                color: #006DCC;
                margin-left: 9px;
            }
        </style>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                fill="#41A5F5" />
        </svg>
    
        <span>
            Learn more about our van insurance
        </span>
    </div>
    `);
        }

        let footer_text = van_section.querySelector('[data-test="add-car-van-banner-van-disclaimer"] span');
        if (footer_text) {
            footer_text.classList.add('opti-van-footer');
        }
    });


    utils.observeSelector('.adm-section__content-inner .adm-subsection:nth-child(2) .adm-card__section .adm-flex-grid:first-child .adm-flex-grid', function (home_section_cta_button) {
        home_section_cta_button.insertAdjacentHTML("afterend", `
            <div class="home-learn-more-cta" onclick="window.showHomeModal()">
    <style>
        .home-learn-more-cta {
            margin-top: 4px;
            font-size: 14px;
            line-height: 21px;
            font-weight: 400;
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-bottom: 8px;
        }
    
        .home-learn-more-cta span {
            color: #FFFFFF;
            margin-left: 9px;
        }
    </style>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z" fill="white"/>
    </svg>
    
    <span>
        Learn more about our home insurance
    </span>
    </div>
    `);
    });


    window.showVanModal = () => {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opt-van-container"
        style="display: flex; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px;">
        <style>
            .opt-van-close {
                position: absolute;
                right: 10px;
                top: 10px;
                cursor: pointer;
            }
    
            .opt-van-modal {
                max-width: 351px;
                background-color: white;
                margin: auto;
                padding: 16px;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }
    
            .opt-van-modal-body {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
    
            .opt-van-modal-body svg {
                margin-bottom: 10px;
            }
    
            .opt-van-modal-header {
                color: #0045a0;
                font-weight: bold;
                font-size: 18px;
            }
    
            .opt-van-modal-sub-header {
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                color: #656560;
                margin: 6px 0px 20px;
            }
    
            .opt-van-modal-sub-header p:first-child {
                font-weight: 600;
                font-size: 15px;
            }
    
            .opti-blue-button {
                transition: filter .2s ease-in-out;
                background: var(--btn--secondary-background);
                border-color: var(--btn--secondary-border-color);
                color: var(--btn--secondary-color);
                width: 100%;
                padding: .5em 1em;
                text-align: center;
                font-family: var(--font-family);
                border-radius: 4px;
                margin-bottom: 4px;
                cursor: pointer;
            }
    
            .opti-blue-button:hover,
            .opti-blue-button:focus {
                filter: brightness(.9) saturate(1.025) contrast(1.5);
                outline: none;
            }
        </style>
        <div class="opt-van-modal">
            <div style="" class="opt-van-close" onclick="document.querySelector('.opt-van-container').remove()">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5"></rect>
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#41A5F5"></path>
                </svg>
            </div>
            <div class="opt-van-modal-body">
                <svg width="30" height="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.99984 0.166626C4.39984 0.166626 0.666504 3.89996 0.666504 8.49996C0.666504 13.1 4.39984 16.8333 8.99984 16.8333C13.5998 16.8333 17.3332 13.1 17.3332 8.49996C17.3332 3.89996 13.5998 0.166626 8.99984 0.166626ZM9.83317 12.6666H8.1665V7.66663H9.83317V12.6666ZM9.83317 5.99996H8.1665V4.33329H9.83317V5.99996Z"
                        fill="#41A5F5"></path>
                </svg>
                <div class="opt-van-modal-header">
                    You'll need to return to this page​
                </div>
                <div class="opt-van-modal-sub-header">
                    <p>To add a van to your existing quote and receive a MultiCover discount, you’ll need to return to this
                        page after visiting our main site.​</p>
                    <p>Continue to our main site to learn more about our van insurance cover.</p>
                </div>
                <a class="opti-blue-button" style="text-transform: uppercase;" href="https://www.admiral.com/van-insurance" target="_blank">Continue to Van Insurance</a>
            </div>
        </div>
    </div>`);
    };

    window.showHomeModal = () => {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opt-home-container"
        style="display: flex; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px;">
        <style>
            .opt-home-close {
                position: absolute;
                right: 10px;
                top: 10px;
                cursor: pointer;
            }
    
            .opt-home-modal {
                max-width: 351px;
                background-color: white;
                margin: auto;
                padding: 16px;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }
    
            .opt-home-modal-body {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
    
            .opt-home-modal-body svg {
                margin-bottom: 10px;
            }
    
            .opt-home-modal-header {
                color: #0045a0;
                font-weight: bold;
                font-size: 18px;
            }
    
            .opt-home-modal-sub-header {
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                color: #656560;
                margin: 6px 0px 20px;
            }
    
            .opt-home-modal-sub-header p:first-child {
                font-weight: 600;
                font-size: 15px;
            }
    
            .opti-blue-button {
                transition: filter .2s ease-in-out;
                background: var(--btn--secondary-background);
                border-color: var(--btn--secondary-border-color);
                color: var(--btn--secondary-color);
                width: 100%;
                padding: .5em 1em;
                text-align: center;
                font-family: var(--font-family);
                border-radius: 4px;
                margin-bottom: 4px;
                cursor: pointer;
            }
    
            .opti-blue-button:hover,
            .opti-blue-button:focus {
                filter: brightness(.9) saturate(1.025) contrast(1.5);
                outline: none;
            }
        </style>
        <div class="opt-home-modal">
            <div style="" class="opt-home-close" onclick="document.querySelector('.opt-home-container').remove()">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5"></rect>
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#41A5F5"></path>
                </svg>
            </div>
            <div class="opt-home-modal-body">
                <svg width="30" height="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.99984 0.166626C4.39984 0.166626 0.666504 3.89996 0.666504 8.49996C0.666504 13.1 4.39984 16.8333 8.99984 16.8333C13.5998 16.8333 17.3332 13.1 17.3332 8.49996C17.3332 3.89996 13.5998 0.166626 8.99984 0.166626ZM9.83317 12.6666H8.1665V7.66663H9.83317V12.6666ZM9.83317 5.99996H8.1665V4.33329H9.83317V5.99996Z"
                        fill="#41A5F5"></path>
                </svg>
                <div class="opt-home-modal-header">
                    You'll need to return to this page​
                </div>
                <div class="opt-home-modal-sub-header">
                    <p>To add a home to your existing quote and receive a MultiCover discount, you’ll need to return to this
                        page after visiting our main site.​</p>
                    <p>Continue to our main site to learn more about our home insurance cover.</p>
                </div>
                <a class="opti-blue-button" style="text-transform: uppercase;" href="https://www.admiral.com/home-insurance" target="_blank">About Home insurance</a>
            </div>
        </div>
    </div>`);
    };
}