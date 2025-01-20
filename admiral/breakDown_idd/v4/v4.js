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
            thead adm-table-col-select-option-price {display: none !important;}
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
        breakdownTierHeader.insertAdjacentHTML("afterend", `<div class="opti-europe-home-radio-inputs">
            <style>
                .opti-europe-home-radio-inputs {
                    padding: 0px 16px 16px;
                }

                .opti-europe-home-radio-inputs .europe-section,
                .opti-europe-home-radio-inputs .home-section {
                    display: flex;
                    align-items: baseline;
                }

                .opti-europe-home-radio-inputs .home-section .home-radio-inputs{
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

                    const recomended_section = document.querySelector('.opti-recomended-section');
                    recomended_section.style.display = 'block';
                    recomended_section.style.right = '0px';

                    if (window.innerWidth < 500) {
                        recomended_section.style.top = '37px';
                        recomended_section.style.zIndex = 10;
                    }
                } else {
                    const home_section = document.querySelector('.opti-europe-home-radio-inputs .home-section');
                    home_section.style.maxHeight = home_section.scrollHeight + 'px';
                    const europe_best_cover = document.querySelector('.opti-europe-best-cover');
                    if (europe_best_cover) {
                        europe_best_cover.remove();
                    }

                    const recomended_section = document.querySelector('.opti-recomended-section');
                    recomended_section.style.display = 'none';
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

                    const recomended_section = document.querySelector('.opti-recomended-section');
                    recomended_section.style.display = 'block';

                    if (window.innerWidth < 500) {
                        recomended_section.style.right = '0px';
                        recomended_section.style.top = '76px';
                        recomended_section.style.zIndex = 10;
                    } else {
                        recomended_section.style.right = '115px';
                    }

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
                    recomended_section.style.display = 'none';
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
}
