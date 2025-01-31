function cleanup(selector) {
    document.querySelectorAll(selector).forEach(el => el.remove());
}

const utils = optimizely.get('utils');

if (window.location.pathname == '/Admiral/ancillary/breakdown') {
    document.body.classList.add("ad409-v4");
    utils.observeSelector('#breakdown-benefits-and-contents-header', function (headerSection) {
        headerSection.style.fontWeight = '700';
        headerSection.style.marginBottom = '20px';

        cleanup('#opti-header-styles');
        headerSection.insertAdjacentHTML("beforebegin", `<style id="opti-header-styles">
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
        </style>`);
    });

    utils.observeSelector('#breakdown-tiers-banner-header', function (breakdownTierHeader) {
        breakdownTierHeader.style.borderBottom = 0;
        breakdownTierHeader.style.marginBottom = "4px";

        cleanup(".opti-europe-home-radio-inputs");
        breakdownTierHeader.insertAdjacentHTML("afterend", `
<div class="opti-europe-home-radio-inputs">
    <style>
        .opti-europe-home-radio-inputs {
            padding: 0px 16px 16px;
        }

        .opti-europe-home-radio-inputs .europe-section,
        .opti-europe-home-radio-inputs .home-section {
            display: flex;
            align-items: baseline;
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

        .opti-europe-home-radio-inputs .europe-section .europe-input-error,
        .opti-europe-home-radio-inputs .home-section .home-input-error {
            display: flex;
            flex: 1 1 50%;
            flex-direction: column;
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

        .opti-europe-home-radio-inputs .error-design {
            padding: 8px 16px;
            display: flex;
            background: #fae5ea;
            width: 96.5%;
            margin-left: 6px;
            margin-top: 8px;
            color: rgb(204, 0, 51);
            border-left: 2px solid rgb(204, 0, 51);
        }

        .opti-europe-home-radio-inputs .error-design svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
            margin-right: 8px;
            flex-basis: 9%;
            margin-top: 4px;
        }

        .opti-europe-home-radio-inputs .error-design p {
            font-size: 14px;
            line-height: 21px;
        }

        .opti-europe-home-radio-inputs .europe-error,
        .opti-europe-home-radio-inputs .home-error {
            display: none;
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

            .opti-europe-home-radio-inputs .europe-section .europe-input-error,
            .opti-europe-home-radio-inputs .home-section .home-input-error {
                width: 100%;
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

            .opti-europe-home-radio-inputs .error-design {
                width: 100%;
                margin-left: 0px;
            }
        }
    </style>
    <div class="europe-section">
        <p class="europe-question">Is Breakdown cover in Europe essential?</p>
        <div class="europe-input-error">
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
            <div class="europe-error error-design">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path
                        d="M1.333 28h29.333l-14.667-25.333-14.667 25.333zM17.333 24h-2.667v-2.667h2.667v2.667zM17.333 18.667h-2.667v-5.333h2.667v5.333z"
                        _ngcontent-qra-c18="">
                    </path>
                </svg>
                <p>This is required before selecting a level of cover</p>
            </div>
        </div>

    </div>
    <div class="home-section">
        <p class="home-question">Is Breakdown cover at your home address essential?</p>
        <div class="home-input-error">
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
            <div class="home-error error-design">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path
                        d="M1.333 28h29.333l-14.667-25.333-14.667 25.333zM17.333 24h-2.667v-2.667h2.667v2.667zM17.333 18.667h-2.667v-5.333h2.667v5.333z"
                        _ngcontent-qra-c18="">
                    </path>
                </svg>
                <p>This is required before selecting a level of cover</p>
            </div>
        </div>

    </div>
</div>
        `);

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

                    cleanup(".opti-europe-best-cover");
                    europe_home_radio_section.insertAdjacentHTML("afterend", `<div class="opti-europe-best-cover">
                        <style>
                            .opti-europe-best-cover {
                                padding: 8px 20px 8px 20px;
                                border-left: solid 4px;
                                border-left-color: #41A5F5;
                                background: #E0F2FF;
                                margin-bottom: 10px;
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

                            @media (max-width: 500px) {
                                .opti-europe-best-cover {
                                    margin-bottom: 0px;
                                }
                            }
                        </style>
                        <p class="heading">Based on your answers, we think European Cover is the most suitable to your needs.</p>
                        <p class="info">Please compare the benefits below and select the cover that's right for you.</p>
                    </div>`);

                    if (window.innerWidth < 500) {
                        const recomended_section_mobile = document.querySelector('.opti-recomended-section-mobile');
                        recomended_section_mobile.style.display = 'block';
                        recomended_section_mobile.style.right = '0px';
                        recomended_section_mobile.style.top = '4px';
                    } else {
                        const recomended_section = document.querySelector('.opti-recomended-section');
                        recomended_section.style.display = 'block';
                        recomended_section.style.right = '0px';
                    }

                    const overlay = document.querySelector('.opti-table-overlay');
                    if (overlay) {
                        overlay.style.display = "none";
                    }

                    document.querySelector('.opti-europe-home-radio-inputs .europe-error').style.display = "none";
                } else {
                    const home_section = document.querySelector('.opti-europe-home-radio-inputs .home-section');
                    home_section.style.maxHeight = home_section.scrollHeight + 'px';
                    const europe_best_cover = document.querySelector('.opti-europe-best-cover');
                    if (europe_best_cover) {
                        europe_best_cover.remove();
                    }

                    const recomended_section = document.querySelector('.opti-recomended-section');
                    const recomended_section_mobile = document.querySelector('.opti-recomended-section-mobile');
                    recomended_section.style.display = 'none';
                    recomended_section_mobile.style.display = 'none';

                    const overlay = document.querySelector('.opti-table-overlay');
                    if (overlay) {
                        overlay.style.display = "block";
                    }

                    document.querySelector('.opti-europe-home-radio-inputs .europe-error').style.display = "none";
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

                    cleanup(".opti-national-best-cover");
                    europe_home_radio_section.insertAdjacentHTML("afterend", `<div class="opti-national-best-cover">
                        <style>
                            .opti-national-best-cover {
                                padding: 8px 20px 8px 20px;
                                border-left: solid 4px;
                                border-left-color: #41A5F5;
                                background: #E0F2FF;
                                margin-bottom: 10px;
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

                            @media (max-width: 500px) {
                                .opti-national-best-cover {
                                    margin-bottom: 0px;
                                }
                            }
                        </style>
                        <p class="heading">Based on your answers, we think National Cover is the most suitable to your needs.</p>
                        <p class="info">Please compare the benefits below and select the cover that's right for you.</p>
                    </div>`);

                    if (window.innerWidth < 500) {
                        const recomended_section_mobile = document.querySelector('.opti-recomended-section-mobile');
                        recomended_section_mobile.style.display = 'block';
                        recomended_section_mobile.style.right = '20px';
                        recomended_section_mobile.style.top = '42px';
                    } else {
                        const recomended_section = document.querySelector('.opti-recomended-section');
                        recomended_section.style.display = 'block';
                        recomended_section.style.right = '115px';
                    }

                    const overlay = document.querySelector('.opti-table-overlay');
                    if (overlay) {
                        overlay.style.display = "none";
                    }

                    document.querySelector('.opti-europe-home-radio-inputs .home-error').style.display = "none";

                } else {

                    cleanup(".opti-no-best-cover");
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
                    const recomended_section = document.querySelector('.opti-recomended-section');
                    const recomended_section_mobile = document.querySelector('.opti-recomended-section-mobile');
                    recomended_section.style.display = 'none';
                    recomended_section_mobile.style.display = 'none';

                    const overlay = document.querySelector('.opti-table-overlay');
                    if (overlay) {
                        overlay.style.display = "none";
                    }

                    document.querySelector('.opti-europe-home-radio-inputs .home-error').style.display = "none";
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

    utils.observeSelector('#ancillary-table', function (tableSection) {
        cleanup(".opti-recomended-section");
        tableSection.parentElement.parentElement.insertAdjacentHTML("beforebegin", `<div class="opti-recomended-section">
            <style>
                .opti-recomended-section {
                    position: relative;
                    display: none;
                    height: 32px;
                }

                .recomended-text {
                    width: 115px;
                    height: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    line-height: 21px;
                    font-weight: 700;
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: #0A8A19;
                    color: #FFFFFF;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }

                @media (max-width: 500px) {
                    .opti-recomended-section {
                        display: none;
                    }
                }
            </style>
            <div class="recomended-text">
                Recommended
            </div>
        </div>`);
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

    utils.observeSelector('#including-tiers-divided-ancillary .adm-confirm__result-change', function (change_btn) {
        change_btn.addEventListener('click', function () {
            const europ_cover_no = document.querySelector('#europeCover-no');
            const home_cover_no = document.querySelector('#homeCover-no');
            if (europ_cover_no && home_cover_no) {
                europ_cover_no.click();
                home_cover_no.click();
            }
        });
    });

    utils.observeSelector('#ancillary-table', function (ancillary_table) {

        ancillary_table.parentElement.parentElement.style.position = "relative";
        cleanup(".opti-table-overlay");
        ancillary_table.parentElement.insertAdjacentHTML("afterend", `
        <div class="opti-table-overlay">
            <style>
                .opti-table-overlay {
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    position: absolute;
                    z-index: 9;
                }
            </style>
        </div>    
        `);

        cleanup(".opti-recomended-section-mobile");
        ancillary_table.parentElement.insertAdjacentHTML("afterend", `
<div class="opti-recomended-section-mobile">
            <style>
                .opti-recomended-section-mobile {
                    position: absolute;
                    display: none;
                    height: 32px;
                    z-index: 10;
                    width: 115px !important;
                }

                .recomended-text {
                    width: 115px;
                    height: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    line-height: 21px;
                    font-weight: 700;
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: #0A8A19;
                    color: #FFFFFF;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
            </style>
            <div class="recomended-text">
                Recommended
            </div>
        </div>    
        `);

        const overlay = document.querySelector('.opti-table-overlay');
        if (overlay) {
            overlay.addEventListener('click', function () {

                if (document.querySelector('.adm-table-col-select--col-0-disabled.adm-table-col-select--col-1-disabled.adm-table-col-select--col-2-disabled')) {

                    document.querySelector("#including-tiers-divided-ancillary").scrollIntoView({ behavior: "smooth", block: "center" });

                } else {
                    const europe_radios = document.querySelectorAll('.opti-europe-home-radio-inputs .europe-radio-inputs input[type="radio"]');

                    const isChecked = Array.from(europe_radios).some(radio => radio.checked);

                    if (!isChecked) {
                        const europe_error = document.querySelector('.opti-europe-home-radio-inputs .europe-error');
                        europe_error.style.display = "flex";
                        const home_error = document.querySelector('.opti-europe-home-radio-inputs .home-error');
                        home_error.style.display = "flex";

                        document.querySelector(".opti-europe-home-radio-inputs").scrollIntoView({ behavior: "smooth", block: "center" });
                    } else {
                        const home_radios = document.querySelectorAll('.opti-europe-home-radio-inputs .home-radio-inputs input[type="radio"]');

                        const home_isChecked = Array.from(home_radios).some(radio => radio.checked);

                        if (!home_isChecked) {
                            const home_error = document.querySelector('.opti-europe-home-radio-inputs .home-error');
                            home_error.style.display = "flex";

                            const home_section = document.querySelector('.opti-europe-home-radio-inputs .home-section');

                            if (window.innerWidth < 500) {
                                home_section.style.maxHeight = '180px';
                            } else {
                                home_section.style.maxHeight = document.querySelector('.opti-europe-home-radio-inputs .home-input-error').scrollHeight + 'px';
                            }

                            document.querySelector(".opti-europe-home-radio-inputs .home-radio-inputs").scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                    }
                }

            });

            if (document.querySelector('.adm-table-col-select--col-0-active') || document.querySelector('.adm-table-col-select--col-1-active') || document.querySelector('.adm-table-col-select--col-2-active')) {
                overlay.style.display = "none";
            }
        }
    });
}
