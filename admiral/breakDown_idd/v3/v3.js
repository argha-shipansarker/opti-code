function cleanup(selector) {
    document.querySelectorAll(selector).forEach(el => el.remove());
}

const utils = optimizely.get('utils');

if (window.location.pathname == '/Admiral/ancillary/breakdown') {
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
        breakdownTierHeader.style.marginBottom = "7px";

        cleanup(".opti-uk-europe-radio-inputs");
        breakdownTierHeader.insertAdjacentHTML("afterend", `<div class="opti-uk-europe-radio-inputs">
    <style>
        .opti-uk-europe-radio-inputs {
            padding: 0px 16px 23px;
            display: flex;
            justify-content: center;
        }

        .opti-uk-europe-radio-inputs .radio-inputs {
            display: flex;
        }

        .opti-uk-europe-radio-inputs input[type="radio"] {
            display: none;
        }

        .opti-uk-europe-radio-inputs label {
            width: 140px;
            padding: 6px 0px;
            border: 1px solid #CED9E5;
            margin-bottom: 0;
            background-color: #F7F7F5;
            text-align: center;
            cursor: pointer;
        }

        .opti-uk-europe-radio-inputs .radio-inputs label:nth-of-type(1) {
            border-top-left-radius: 16px;
            border-bottom-left-radius: 16px;
        }

        .opti-uk-europe-radio-inputs .radio-inputs label:nth-of-type(2) {
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
        }

        .opti-uk-europe-radio-inputs .radio-text {
            font-size: 14px;
            line-height: 21px;
            color: #656560;
            font-weight: 400;
        }

        .opti-uk-europe-radio-inputs label:has(input[type="radio"]:checked) {
            background-color: #FFFFFF;
        }

        .opti-uk-europe-radio-inputs input[type="radio"]:checked+.radio-text {
            color: #0A8A19;
            font-weight: 700;
        }

        @media (max-width: 500px) {
            .opti-uk-europe-radio-inputs {
                padding: 0px 16px 6px;
            }
        }
    </style>
    <div class="radio-inputs">
        <label>
            <input type="radio" name="radio-choice" id="uk-only" value="uk-only">
            <span class="radio-text">UK ONLY</span>
        </label>
        <label>
            <input type="radio" name="radio-choice" id="uk-and-europe" value="uk-and-europe">
            <span class="radio-text">UK AND EUROPE</span>
        </label>
    </div>
</div>`);

        if (document.querySelector('#europeCover-yes').checked) {
            document.querySelector('#uk-and-europe').checked = true;
        } else {
            document.querySelector('#uk-only').checked = true;
        }

        const radio_inputs = document.querySelectorAll('.opti-uk-europe-radio-inputs .radio-inputs input[type="radio"]');

        radio_inputs.forEach(radio => {
            radio.addEventListener('change', (event) => {
                if (event.target.value == "uk-only") {
                    const europ_cover_no = document.querySelector('#europeCover-no');
                    const home_cover_no = document.querySelector('#homeCover-no');
                    if (europ_cover_no && home_cover_no) {
                        europ_cover_no.click();
                        home_cover_no.click();
                    }

                    const rodeside_assistance = document.querySelector('#ancillary-table colgroup col:nth-of-type(2)');
                    const national_cover = document.querySelector('#ancillary-table colgroup col:nth-of-type(3)');
                    rodeside_assistance.style.width = "27%";
                    national_cover.style.width = "27%";

                    if (window.innerWidth < 500) {
                        document.querySelector('#ancillary-table').classList.remove('adm-table-col-select--num-cols-3');
                        document.querySelector('#ancillary-table').classList.add('adm-table-col-select--num-cols-2');
                    }

                } else {
                    const europ_cover_yes = document.querySelector('#europeCover-yes');
                    europ_cover_yes.click();
                    if (europ_cover_yes.checked) {
                        const europe_cover = document.querySelector('#ancillary-table colgroup col:nth-of-type(2)');
                        europe_cover.style.width = "54%";

                        if (window.innerWidth < 500) {
                            document.querySelector('#ancillary-table').classList.remove('adm-table-col-select--num-cols-2');
                        }
                    }

                }
            });
        });

        cleanup(".opti-no-best-cover");
        document.querySelector('.opti-uk-europe-radio-inputs').insertAdjacentHTML("afterend", `<div class="opti-no-best-cover">
                            <style>
                                .opti-no-best-cover {
                                    padding: 8px 20px 8px 24px;
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
    });

    utils.observeSelector('#breakdown-tiers-idd', function (breakdownTier) {
        breakdownTier.style.display = 'none';
    });

    utils.observeSelector('#breakdown-tiers-idd + .adm-card__section', function (radioButtonSection) {
        radioButtonSection.style.display = 'none';
        const europ_cover_no = radioButtonSection.querySelector('#europeCover-no');
        const home_cover_no = radioButtonSection.querySelector('#homeCover-no');
        if (europ_cover_no && home_cover_no) {

            if (!document.querySelector('.adm-table-col-select--num-cols-1')) {
                europ_cover_no.click();
                home_cover_no.click();
            }

        }
    });

    utils.observeSelector('#ancillary-table', function (tableSection) {
        const colgroup = tableSection.querySelector('colgroup');
        const rodeside_assistance = colgroup.querySelector('col:nth-of-type(2)');
        const national_cover = colgroup.querySelector('col:nth-of-type(3)');

        if (!document.querySelector('.adm-table-col-select--num-cols-1')) {
            rodeside_assistance.style.width = "27%";
            national_cover.style.width = "27%";

            if (window.innerWidth < 500) {
                tableSection.classList.remove('adm-table-col-select--num-cols-3');
                tableSection.classList.add('adm-table-col-select--num-cols-2');
            }
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

}
