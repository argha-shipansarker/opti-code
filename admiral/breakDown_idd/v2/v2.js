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
        breakdownTierHeader.style.marginBottom = "4px";

        const section_header = breakdownTierHeader.querySelector('.adm-card__header-title');
        if (section_header) {
            section_header.innerText = "Do you need AA breakdown cover?";
        }

        cleanup('.opti-europe-checkbox');
        breakdownTierHeader.insertAdjacentHTML("afterend", `<div class="opti-europe-checkbox">
                <style>
                    .opti-europe-checkbox {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        padding-left: 16px;
                        margin-bottom: 20px;
                    }

                    .opti-europe-checkbox input {
                        display: none;
                        /* Hide the default checkbox */
                    }

                    .opti-europe-checkbox label {
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        padding: 12px;
                        border: 1px solid #CED9E5;
                        border-radius: 3px;
                        margin-bottom: 0;
                    }

                    .opti-europe-checkbox .checkbox-text {
                        min-width: 236px;
                        margin-left: 10px;
                        font-size: 16px;
                        line-height: 20px;
                        color: #444444;
                    }

                    .opti-europe-checkbox .checkbox-icon {
                        width: 20px;
                        height: 20px;
                        border: 2px solid #006dcc;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: transparent;
                        transition: background-color 0.3s, border-color 0.3s;
                    }

                    .opti-europe-checkbox input:checked+label .checkbox-icon {
                        background-color: #0A8A19;
                        border-color: #0F7632;
                    }

                    .opti-europe-checkbox input:checked+label {
                        border-color: #00C535;
                    }

                    .opti-europe-checkbox input:checked+label .checkbox-icon::after {
                        content: url('data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2211%22%20viewBox%3D%220%200%2015%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.5%2010.9L0.5%205.9L1.9%204.5L5.5%208.1L13.1%200.5L14.5%201.9L5.5%2010.9Z%22%20fill%3D%22white%22/%3E%3C/svg%3E');
                        display: inline-block;
                        width: 15px;
                        height: 25px;
                    }
                </style>
                <input type="checkbox" id="opti-euro-checkbox" />
                <label for="opti-euro-checkbox">
                    <span class="checkbox-icon"></span>
                    <span class="checkbox-text">Include cover in Europe</span>
                </label>
            </div>`);

        if (document.querySelector('#europeCover-yes').checked) {
            document.querySelector('#opti-euro-checkbox').checked = true
        }

        document.getElementById('opti-euro-checkbox').addEventListener('change', (event) => {

            if (event.target.checked) {
                const europ_cover_yes = document.querySelector('#europeCover-yes');
                europ_cover_yes.click();
                if (europ_cover_yes.checked) {
                    const europe_cover = document.querySelector('#ancillary-table colgroup col:nth-of-type(2)');
                    europe_cover.style.width = "54%";

                    if (window.innerWidth < 500) {
                        document.querySelector('#ancillary-table').classList.remove('adm-table-col-select--num-cols-2');
                    }
                }

            } else {
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

            }

        });

        cleanup('.opti-no-best-cover');
        document.querySelector('.opti-europe-checkbox').insertAdjacentHTML("afterend", `<div class="opti-no-best-cover">
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
        tableSection.style.overflow = "hidden";

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

    // utils.observeSelector('#no-breakdown-cover-selected', function (no_cover_selected) {
    //     no_cover_selected.style.display = "none";
    // });

    // utils.observeSelector('#breakdown-cover-tier-selected', function (cover_selected) {
    //     cover_selected.parentElement.parentElement.style.display = "none";
    // });

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
