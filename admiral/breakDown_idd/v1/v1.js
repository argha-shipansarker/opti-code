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

        const section_header = breakdownTierHeader.querySelector('.adm-card__header-title');
        if (section_header) {
            section_header.innerText = "Do you need AA breakdown cover?";
        }

        cleanup('.opti-no-best-cover');
        breakdownTierHeader.insertAdjacentHTML("afterend", `<div class="opti-no-best-cover">
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

    // utils.observeSelector('#no-breakdown-cover-selected', function (no_cover_selected) {
    //     no_cover_selected.style.display = "none";
    // });

    // utils.observeSelector('#breakdown-cover-tier-selected', function (cover_selected) {
    //     cover_selected.parentElement.parentElement.style.display = "none";
    // });

    utils.observeSelector('eui-breakdown #including-ancillary', function (includingAncillary) {
        includingAncillary.style.display = "none";

        let cover_name = includingAncillary.querySelector('h3').innerText;
        let cover_price = includingAncillary.querySelector('#ancillary-price strong').innerText;
        let cover_footer = "";

        if (cover_name == "Add Roadside Assistance Cover?") {
            cover_name = "Add Roadside Assistance";
            cover_footer = "By adding this cover, you confirm that you do not need breakdown cover at home and do not need breakdown cover in Europe";
        } else if (cover_name == "Add National Cover?") {
            cover_name = "Add National Cover";
            cover_footer = "By adding this cover, you confirm that it is essential to have breakdown cover from home and do not need breakdown cover in Europe.";
        } else if (cover_name == "Add European Cover?") {
            cover_name = "Add European Cover";
            cover_footer = "By adding this cover, you confirm that it is essential to have breakdown cover from home and Europe";
        }

        cleanup('.opti-including-ancillary-radio-inputs');
        includingAncillary.insertAdjacentHTML("afterend", `<div class="opti-including-ancillary-radio-inputs">
    <style>
        .opti-including-ancillary-radio-inputs {
            background: #FFFFFF;
            padding: 20px;
        }

        .opti-including-ancillary-radio-inputs input[type="radio"] {
            display: none;
        }

        .opti-including-ancillary-radio-inputs label {
            padding: 12px 16px;
            border: 1px solid #CED9E5;
            border-radius: 4px;
            margin-bottom: 8px;
        }

        .opti-including-ancillary-radio-inputs .radio-label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .opti-including-ancillary-radio-inputs .radio-label.ancillary-text {
            justify-content: space-between;
        }

        .opti-including-ancillary-radio-inputs .radio-label.ancillary-text .price-text {
            display: flex;
            align-items: center;
        }

        .opti-including-ancillary-radio-inputs .radio-label.ancillary-text .price-text .radio-text {
            font-size: 20px;
            line-height: 30px;
            font-weight: 700;
            color: #444444;
        }

        .opti-including-ancillary-radio-inputs .radio-label.ancillary-text .price-value {
            font-size: 24px;
            line-height: 30px;
            color: #444444;
        }

        .opti-including-ancillary-radio-inputs .radio-label.ancillary-text .price-value .price {
            font-weight: 700;
            color: #0F7632;
        }

        .opti-including-ancillary-radio-inputs .radio-label .radio-icon {
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

        .opti-including-ancillary-radio-inputs .radio-label .radio-text {
            font-size: 20px;
            line-height: 30px;
            color: #444444;
        }

        .opti-including-ancillary-radio-inputs .radio-label .radio-icon::after {
            content: "";
            width: 10px;
            height: 10px;
            background-color: transparent;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .opti-including-ancillary-radio-inputs label:has(input[type="radio"]:checked) {
            border-color: #0A8A19;
        }

        .opti-including-ancillary-radio-inputs input[type="radio"]:checked+.radio-label .radio-icon {
            border-color: #0A8A19;
        }

        .opti-including-ancillary-radio-inputs input[type="radio"]:checked+.radio-label .radio-icon::after {
            background-color: #0A8A19;
        }

        .opti-including-ancillary-radio-inputs .footer-info {
            font-size: 14px;
            line-height: 21px;
            color: #656560;
        }

        @media (max-width: 500px) {
            .opti-including-ancillary-radio-inputs .radio-label.ancillary-text {
                flex-direction: column;
                align-items: unset;
            }

            .opti-including-ancillary-radio-inputs .radio-label.ancillary-text .price-text {
                flex: none;
            }

            .opti-including-ancillary-radio-inputs .radio-label.ancillary-text .price-text .radio-icon {
                transform: translateY(75%);
                min-width: 20px;
            }

            .opti-including-ancillary-radio-inputs .radio-label.ancillary-text .price-value {
                flex: none;
                margin-left: 30px;
            }
        }
    </style>
    <label>
        <input type="radio" name="ancillary-choice" id="ancillary-yes" value="yes">
        <span class="radio-label ancillary-text">
            <span class="price-text">
                <span class="radio-icon"></span>
                <span class="radio-text">${cover_name}</span>
            </span>
            <span class="price-value">
                <span class="price">${cover_price}</span>
                year
            </span>
        </span>
    </label>
    <label>
        <input type="radio" name="ancillary-choice" id="ancillary-no" value="no">
        <span class="radio-label">
            <span class="radio-icon"></span>
            <span class="radio-text">No cover needed</span>
        </span>
    </label>
    <span class="footer-info">${cover_footer}</span>
</div>`);

        const add_cover_button = document.querySelector('#add-cover');
        const remove_cover_button = document.querySelector('#remove-cover');

        const yes_radio_btn = document.querySelector('.opti-including-ancillary-radio-inputs #ancillary-yes');
        yes_radio_btn.checked = true;

        if (add_cover_button) {
            if (getComputedStyle(add_cover_button).width != "0px") {
                add_cover_button.click();
            }
        }

        const ancillary_radio_buttons = document.querySelectorAll('.opti-including-ancillary-radio-inputs input[type="radio"]');

        ancillary_radio_buttons.forEach(radio => {
            radio.addEventListener('change', (event) => {
                const cover_message = document.querySelector('#ancillary-cover-added span').innerText.trim();
                const change_btn = document.querySelector('#ancillary-cover-added button');
                if (event.target.value == "yes") {
                    if (cover_message == "No cover added") {
                        change_btn.click();
                        if (cover_name == "Add Roadside Assistance") {
                            cover_footer = "By adding this cover, you confirm that you do not need breakdown cover at home and do not need breakdown cover in Europe";
                        } else if (cover_name == "Add National Cover") {
                            cover_footer = "By adding this cover, you confirm that it is essential to have breakdown cover from home and do not need breakdown cover in Europe.";
                        } else if (cover_name == "Add European Cover") {
                            cover_footer = "By adding this cover, you confirm that it is essential to have breakdown cover from home and Europe";
                        }
                        document.querySelector('.opti-including-ancillary-radio-inputs .footer-info').innerText = cover_footer;
                        setTimeout(() => {
                            add_cover_button.click();
                        }, 1000);
                    }
                } else {
                    if (cover_message == "Cover added") {
                        change_btn.click();
                        cover_footer = "By selecting this option, you confirm that you do not need breakdown cover at home and do not need breakdown cover in Europe";
                        document.querySelector('.opti-including-ancillary-radio-inputs .footer-info').innerText = cover_footer;
                        setTimeout(() => {
                            remove_cover_button.click();
                        }, 1000);
                    }
                }
            });
        });

        const observerCallback = (mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'characterData') {
                    if (mutation.type === 'characterData') {
                        const targetElement = mutation.target.parentElement;

                        if (targetElement && targetElement.matches('h3')) {
                            if (mutation.target.textContent.trim() == "Add Roadside Assistance Cover?") {
                                cover_name = "Add Roadside Assistance";
                                cover_footer = "By adding this cover, you confirm that you do not need breakdown cover at home and do not need breakdown cover in Europe";
                            } else if (mutation.target.textContent.trim() == "Add National Cover?") {
                                cover_name = "Add National Cover";
                                cover_footer = "By adding this cover, you confirm that it is essential to have breakdown cover from home and do not need breakdown cover in Europe.";
                            } else if (mutation.target.textContent.trim() == "Add European Cover?") {
                                cover_name = "Add European Cover";
                                cover_footer = "By adding this cover, you confirm that it is essential to have breakdown cover from home and Europe";
                            }
                        } else if (targetElement && targetElement.matches('#ancillary-price strong')) {
                            cover_price = mutation.target.textContent.trim();
                            document.querySelector('.opti-including-ancillary-radio-inputs .ancillary-text .radio-text').innerText = cover_name;
                            document.querySelector('.opti-including-ancillary-radio-inputs .ancillary-text .price').innerText = cover_price;
                            document.querySelector('.opti-including-ancillary-radio-inputs .footer-info').innerText = cover_footer;
                            yes_radio_btn.checked = true;
                            setTimeout(() => {
                                add_cover_button.click();
                            }, 700);
                        }
                    }
                }
            });
        };

        const observer = new MutationObserver(observerCallback);

        const config = {
            characterData: true,
            childList: true,
            subtree: true
        };

        observer.observe(includingAncillary, config);

    });

    utils.observeSelector('#including-tiers-divided-ancillary', function (dividedAncillary) {
        const header = dividedAncillary.querySelector('.adm-card__header');
        if (header) {
            header.style.borderBottom = 0;
            header.style.paddingBottom = 0;
            cleanup('.opti-ancillary-new-text');
            header.insertAdjacentHTML('afterend', `<div class="opti-ancillary-new-text">
    <style>
        .opti-ancillary-new-text {
            font-size: 14px;
            line-height: 21px;
            padding: 0 16px;
        }

        @media (max-width: 500px) {
            .opti-ancillary-new-text {
                padding: 0 9.6px;
            }
        }
    </style>
    Please consider if you would need this upgrade, and select a level of cover from the options above.
</div>`);
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
