const utils = optimizely.get('utils');

if (window.location.pathname == '/Admiral/ancillary/breakdown') {
    utils.observeSelector('#breakdown-benefits-and-contents-header', function (headerSection) {
        headerSection.style.fontWeight = '700';
        headerSection.style.marginBottom = '20px';

        headerSection.insertAdjacentHTML("beforebegin", `<style>
    #breakdown-benefits-and-contents-header {
        font-size: 16px;
    }

    #breakdown-benefits-and-contents-header #breakdown-benefits-and-contents-info {
        font-size: 14px;
        font-weight: 400;
    }

    @media (max-width: 500px) {
        #breakdown-benefits-and-contents-header {
            font-size: 18px;
        }

        #breakdown-benefits-and-contents-header #breakdown-benefits-and-contents-info {
            font-size: 14px;
        }

    }
</style>`)

        headerSection.insertAdjacentHTML("afterend", `<div class="opti-whats-included">
    <style>
        .opti-whats-included .heading {
            font-size: 20px;
            line-height: 30px;
            font-weight: 700;
            color: #25469B;
            margin-bottom: 0;
        }

        .opti-whats-included .sub-heading {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: #444444;
            margin-bottom: 8px;
        }

        .opti-whats-included .include-point {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }

        .opti-whats-included .include-point p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: #444444;
            margin-left: 9px;
        }
    </style>
    <p class="heading">What’s included</p>
    <p class="sub-heading">The following benefits are <span style="font-weight: 700;">included with all levels</span> of
        breakdown cover:</p>
    <div class="include-point">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00013 13.475L4.52513 9.99999L3.3418 11.175L8.00013 15.8333L18.0001 5.83333L16.8251 4.65833L8.00013 13.475Z"
                fill="#41A5F5" />
        </svg>
        <p>Cover for electric vehicles</p>
    </div>
    <div class="include-point">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00013 13.475L4.52513 9.99999L3.3418 11.175L8.00013 15.8333L18.0001 5.83333L16.8251 4.65833L8.00013 13.475Z"
                fill="#41A5F5" />
        </svg>
        <p>No callout or excess charges</p>
    </div>
    <div class="include-point">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00013 13.475L4.52513 9.99999L3.3418 11.175L8.00013 15.8333L18.0001 5.83333L16.8251 4.65833L8.00013 13.475Z"
                fill="#41A5F5" />
        </svg>
        <p>Misfuel cover</p>
    </div>
    <div class="include-point">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00013 13.475L4.52513 9.99999L3.3418 11.175L8.00013 15.8333L18.0001 5.83333L16.8251 4.65833L8.00013 13.475Z"
                fill="#41A5F5" />
        </svg>
        <p>Alternative transport</p>
    </div>
    <div class="include-point">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00013 13.475L4.52513 9.99999L3.3418 11.175L8.00013 15.8333L18.0001 5.83333L16.8251 4.65833L8.00013 13.475Z"
                fill="#41A5F5" />
        </svg>
        <p>Return trip allowance up to £150</p>
    </div>
    <div class="include-point">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00013 13.475L4.52513 9.99999L3.3418 11.175L8.00013 15.8333L18.0001 5.83333L16.8251 4.65833L8.00013 13.475Z"
                fill="#41A5F5" />
        </svg>
        <p>Overnight accommodation up to £600</p>
    </div>
    <div class="include-point">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00013 13.475L4.52513 9.99999L3.3418 11.175L8.00013 15.8333L18.0001 5.83333L16.8251 4.65833L8.00013 13.475Z"
                fill="#41A5F5" />
        </svg>
        <p>Recovery for caravans and trailers (up to 8ft 3in width and 3.5t weight)</p>
    </div>
</div>`);
    });

    utils.observeSelector('#breakdown-tiers-banner-header', function (breakdownTierHeader) {
        breakdownTierHeader.style.borderBottom = 0;
        breakdownTierHeader.style.marginBottom = "4px";
        breakdownTierHeader.insertAdjacentHTML("afterend", `<div class="opti-europe-home-radio-inputs">
    <style>
        .opti-europe-home-radio-inputs {
            padding: 0px 16px 16px;
        }

        .opti-europe-home-radio-inputs .europe-section,
        .opti-europe-home-radio-inputs .home-section {
            display: flex;
            align-items: baseline;
            flex-direction: row;
        }

        .opti-europe-home-radio-inputs .home-section .home-radio-inputs {
            padding-top: 10px;
        }

        .opti-europe-home-radio-inputs .home-section {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s;
        }

        .opti-europe-home-radio-inputs .europe-section .europe-radio-inputs,
        .opti-europe-home-radio-inputs .home-section .home-radio-inputs {
            display: flex;
            flex: 1 1 50%;
            justify-content: space-around;
        }

        .opti-europe-home-radio-inputs .europe-section .europe-question,
        .opti-europe-home-radio-inputs .home-section .home-question {
            flex: 1 1 50%;
            margin-bottom: 0;
        }


        .opti-europe-home-radio-inputs input[type="radio"] {
            display: none;
        }

        .opti-europe-home-radio-inputs label {
            width: 140px;
            padding: 9px 12px;
            border: 1px solid #CED9E5;
            border-radius: 2px;
            margin-bottom: 0;
        }

        .opti-europe-home-radio-inputs .radio-label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .opti-europe-home-radio-inputs .radio-label .radio-icon {
            width: 20px;
            height: 20px;
            border: 2px solid #006DCC;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            transition: border-color 0.3s ease;
        }

        .opti-europe-home-radio-inputs .radio-label .radio-text {
            font-size: 16px;
            line-height: 24px;
            color: #444444;
        }

        .opti-europe-home-radio-inputs .radio-label .radio-icon::after {
            content: "";
            width: 10px;
            height: 10px;
            background-color: transparent;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .opti-europe-home-radio-inputs label:has(input[type="radio"]:checked) {
            border-color: #0A8A19;
        }

        .opti-europe-home-radio-inputs input[type="radio"]:checked+.radio-label .radio-icon {
            border-color: #0A8A19;
        }

        .opti-europe-home-radio-inputs input[type="radio"]:checked+.radio-label .radio-icon::after {
            background-color: #0A8A19;
        }

        @media (max-width: 500px) {

            .opti-europe-home-radio-inputs .europe-section,
            .opti-europe-home-radio-inputs .home-section {
                flex-direction: column;
            }

            .opti-europe-home-radio-inputs .home-section .home-question {
                margin-top: 10px;
            }

            .opti-europe-home-radio-inputs .europe-section .europe-question {
                margin-bottom: 6px;
            }

            .opti-europe-home-radio-inputs .home-section .home-radio-inputs {
                padding-top: 6px;
            }

            .opti-europe-home-radio-inputs .europe-section .europe-radio-inputs,
            .opti-europe-home-radio-inputs .home-section .home-radio-inputs {
                justify-content: space-between;
                width: 100%;
            }

            .opti-europe-home-radio-inputs .europe-section .europe-radio-inputs label,
            .opti-europe-home-radio-inputs .home-section .home-radio-inputs label {
                flex-basis: 48%;
            }
        }
    </style>
    <div class="europe-section">
        <p class="europe-question">Is Breakdown cover in Europe essential?</p>
        <div class="europe-radio-inputs">
            <label>
                <input type="radio" name="europe-choice" id="europe-cover-yes" value="yes">
                <span class="radio-label"><span class="radio-icon"></span><span class="radio-text">Yes</span></span>
            </label>
            <label>
                <input type="radio" name="europe-choice" id="europe-cover-no" value="no">
                <span class="radio-label"><span class="radio-icon"></span><span class="radio-text">No</span></span>
            </label>
        </div>
    </div>
    <div class="home-section">
        <p class="home-question">Is Breakdown cover at your home address essential?</p>
        <div class="home-radio-inputs">
            <label>
                <input type="radio" name="home-choice" id="home-cover-yes" value="yes">
                <span class="radio-label"><span class="radio-icon"></span><span class="radio-text">Yes</span></span>
            </label>
            <label>
                <input type="radio" name="home-choice" id="home-cover-no" value="no">
                <span class="radio-label"><span class="radio-icon"></span><span class="radio-text">No</span></span>
            </label>
        </div>
    </div>
</div>`);

        const europe_home_radio_section = document.querySelector('.opti-europe-home-radio-inputs');

        const home_radio_inputs = document.querySelectorAll('.opti-europe-home-radio-inputs .home-section .home-radio-inputs input[type="radio"]');

        const europe_radio_inputs = document.querySelectorAll('.opti-europe-home-radio-inputs .europe-section .europe-radio-inputs input[type="radio"]');

        europe_radio_inputs.forEach(radio => {
            radio.addEventListener('change', (event) => {
                if (event.target.value == "yes") {
                    home_radio_inputs.forEach(radio => {
                        radio.checked = false;
                    });

                    const no_best_cover = document.querySelector('.opti-no-best-cover');
                    if (no_best_cover) {
                        no_best_cover.remove();
                    }
                    const national_best_cover = document.querySelector('.opti-national-best-cover');
                    if (national_best_cover) {
                        national_best_cover.remove();
                    }
                    const home_section = document.querySelector('.opti-europe-home-radio-inputs .home-section');
                    home_section.style.maxHeight = 0;
                    europe_home_radio_section.insertAdjacentHTML("afterend", `<div class="opti-europe-best-cover">
                        <style>
                            .opti-europe-best-cover {
                                padding: 8px 20px 8px 20px;
                                border-left: solid 4px;
                                border-left-color: #41A5F5;
                                background: #E0F2FF;
                            }

                            .opti-europe-best-cover .heading {
                                font-size: 14px;
                                line-height: 21px;
                                font-weight: 700;
                                color: #25469B;
                                margin-bottom: 0;
                            }

                            .opti-europe-best-cover .info {
                                font-size: 12px;
                                line-height: 21px;
                                font-weight: 400;
                                color: #25469B;
                                margin-bottom: 0;
                            }
                        </style>
                        <p class="heading">Based on your answers, we think European Cover is the most suitable to your needs.</p>
                        <p class="info">Please compare the benefits below and select the cover that's right for you.</p>
                    </div>`);

                    const europe_select_btn = document.querySelector('#ancillary-table tfoot td:nth-of-type(3) button');
                    europe_select_btn.click();

                } else {
                    const home_section = document.querySelector('.opti-europe-home-radio-inputs .home-section');
                    home_section.style.maxHeight = home_section.scrollHeight + 'px';
                    const europe_best_cover = document.querySelector('.opti-europe-best-cover');
                    if (europe_best_cover) {
                        europe_best_cover.remove();
                    }

                    const home_cover_no = document.querySelector('#homeCover-no');
                    home_cover_no.checked = false;
                    home_cover_no.click();

                }

            });
        });

        home_radio_inputs.forEach(radio => {
            radio.addEventListener('change', (event) => {
                if (event.target.value == "yes") {
                    const no_best_cover = document.querySelector('.opti-no-best-cover');
                    if (no_best_cover) {
                        no_best_cover.remove();
                    }
                    europe_home_radio_section.insertAdjacentHTML("afterend", `<div class="opti-national-best-cover">
                        <style>
                            .opti-national-best-cover {
                                padding: 8px 20px 8px 20px;
                                border-left: solid 4px;
                                border-left-color: #41A5F5;
                                background: #E0F2FF;
                            }

                            .opti-national-best-cover .heading {
                                font-size: 14px;
                                line-height: 21px;
                                font-weight: 700;
                                color: #25469B;
                                margin-bottom: 0;
                            }

                            .opti-national-best-cover .info {
                                font-size: 12px;
                                line-height: 21px;
                                font-weight: 400;
                                color: #25469B;
                                margin-bottom: 0;
                            }
                        </style>
                        <p class="heading">Based on your answers, we think National Cover is the most suitable to your needs.</p>
                        <p class="info">Please compare the benefits below and select the cover that's right for you.</p>
                    </div>`);
                    const national_select_btn = document.querySelector('#ancillary-table tfoot td:nth-of-type(2) button');
                    national_select_btn.click();

                } else {
                    europe_home_radio_section.insertAdjacentHTML("afterend", `<div class="opti-no-best-cover">
                        <style>
                            .opti-no-best-cover {
                                padding: 8px 20px 8px 20px;
                                border-left: solid 4px;
                                border-left-color: #41A5F5;
                                background: #E0F2FF;
                            }

                            .opti-no-best-cover .info {
                                font-size: 12px;
                                line-height: 21px;
                                font-weight: 400;
                                color: #25469B;
                                margin-bottom: 0;
                            }
                        </style>
                        <p class="info">Please compare the benefits below and select the cover that's right for you.</p>
                    </div>`);
                    const national_best_cover = document.querySelector('.opti-national-best-cover');
                    if (national_best_cover) {
                        national_best_cover.remove();
                    }

                    const home_cover_no = document.querySelector('#homeCover-no');
                    home_cover_no.checked = false;
                    home_cover_no.click();

                }

            });
        });

    });

    utils.observeSelector('#breakdown-tiers-idd', function (breakdownTier) {
        breakdownTier.style.display = 'none';
    });

    utils.observeSelector('#breakdown-tiers-idd + .adm-card__section', function (radioButtonSection) {
        radioButtonSection.style.display = 'none';
        const europ_cover_no = radioButtonSection.querySelector('#europeCover-no');
        const home_cover_no = radioButtonSection.querySelector('#homeCover-no');
        if (europ_cover_no && home_cover_no) {
            europ_cover_no.click();
            home_cover_no.click();
        }
    });

    utils.observeSelector('#no-breakdown-cover-selected', function (no_cover_selected) {
        no_cover_selected.style.display = "none";
    });

    utils.observeSelector('#breakdown-cover-tier-selected', function (cover_selected) {
        cover_selected.parentElement.parentElement.style.display = "none";
    });

    utils.observeSelector('#including-tiers-divided-ancillary', function (dividedAncillary) {
        const header = dividedAncillary.querySelector('.adm-card__header');
        if (header) {
            header.style.borderBottom = 0;
            header.style.paddingBottom = 0;
        }

        const money_section = dividedAncillary.querySelector('.adm-card__section:not(.adm-card__section--flush)');

        if (money_section) {
            money_section.style.borderTop = 0;
        }

    });
}