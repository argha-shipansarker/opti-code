const { observeSelector, waitUntil } = window.optimizely.get("utils");

function isCorrectFlight(container) {
    const forbiddenTerminals = ["CAI", "CZL", "ALG", "SPX"];
    const activeTerminals = [...document.querySelectorAll(".sector")].map(x => x.textContent.replace(/\(.*?\)/g, "").trim().toUpperCase()).filter(terminal => terminal !== "");

    if (!container) return false;
    if (!container.querySelector("i.non-stop")) return false;
    if (activeTerminals.length < 2) return false;
    return !activeTerminals.some(terminal => forbiddenTerminals.includes(terminal));
}

function isDomestic() {
    const domesticTerminals = ["RUH", "JED", "DMM", "MED", "AHB", "TUU", "HAS", "RAE", "TIF", "BHH", "EAM", "ELQ", "YNB", "GIZ", "AJF", "WAE", "URY", "DWD", "ABT", "AQI", "ULH", "TUI"];
    const activeTerminals = [...document.querySelectorAll(".sector")].map(x => x.textContent.replace(/\(.*?\)/g, "").trim().toUpperCase()).filter(terminal => terminal !== "");

    return activeTerminals.every(terminal => domesticTerminals.includes(terminal));
}

function applyMessaging(container) {
    if (!container) return;
    if (document.querySelector('.dropdown-toggle .picon.picon_ru')) return;

    const staff_pad = container.querySelector('.staff-pad');

    const flight_info_image = container.querySelector('div:nth-of-type(1) div:nth-of-type(2)');

    const light_bundle_box = container.querySelector('[class*="light-bundle"], .bundle-top.light');

    const lightPrice_currency = container.querySelector('[class*="light-bundle"] .amount .currency, .bundle-top.light .amount .currency');
    const valuePrice_currency = container.querySelector('[class*="valu-bundle"] .amount .currency, .bundle-top.valu .amount .currency');
    const plusPrice_currency = container.querySelector('[class*="pusd-bundle"] .amount .currency, .bundle-top.pusd .amount .currency');
    const premiumPrice_currency = container.querySelector('[class*="premium-bundle"] .amount .currency, .bundle-top.premium .amount .currency');

    if (staff_pad && flight_info_image && light_bundle_box && !container.querySelector('.opti-new-staff-pad') &&
        (
            (lightPrice_currency && (lightPrice_currency.innerText == "SAR" || lightPrice_currency.innerText == "ريال")) ||
            (valuePrice_currency && (valuePrice_currency.innerText == "SAR" || valuePrice_currency.innerText == "ريال")) ||
            (plusPrice_currency && (plusPrice_currency.innerText == "SAR" || plusPrice_currency.innerText == "ريال")) ||
            (premiumPrice_currency && (premiumPrice_currency.innerText == "SAR" || premiumPrice_currency.innerText == "ريال"))
        )
    ) {

        const lightPrice_staffpad = light_bundle_box.querySelector('[class*="light-bundle"] .amount, .bundle-top.light .amount');

        const flight_info_text = flight_info_image.previousElementSibling;

        const idPrefix = container.id.split('-')[0] + '-';

        const containers = Array.from(document.querySelectorAll(`[id^="${idPrefix}"]`));

        let existing_new_staff_pad = null;
        let existing_staff_pad = null;
        let flight_info_image_altered = null;
        let flight_info_text_altered = null;

        for (const single_container of containers) {
            existing_new_staff_pad = single_container.querySelector('.opti-new-staff-pad');
            existing_staff_pad = single_container.querySelector('.staff-pad.opti-altered');
            flight_info_image_altered = single_container.querySelector('.flight-info-image-altered');
            flight_info_text_altered = single_container.querySelector('.flight-info-text-altered');

            if (existing_new_staff_pad && existing_staff_pad && flight_info_image_altered && flight_info_text_altered) {
                break;
            }
        }

        if (existing_staff_pad && existing_new_staff_pad && flight_info_image_altered && flight_info_text_altered) {
            existing_new_staff_pad.remove();
            existing_staff_pad.style.display = "block";
            existing_staff_pad.classList.remove('opti-altered');

            flight_info_image_altered.classList.remove('col-md-4');
            flight_info_image_altered.classList.add('col-md-7');
            flight_info_image_altered.classList.remove('flight-info-image-altered');

            flight_info_text_altered.classList.remove('col-md-2');
            flight_info_text_altered.classList.add('col-md-3');
            flight_info_text_altered.classList.remove('flight-info-text-altered');
        }

        if (!isCorrectFlight(container)) return;

        if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
            const check_in_eng = isDomestic() ? '<p>Check-In - <span>Online check-in</span></p>' : '';
            staff_pad.insertAdjacentHTML("afterend", `<div class="opti-new-staff-pad col-md-6 text-end m-auto">
                <style>
                    .opti-new-staff-pad {
                        max-width: 520px;
                    }
            
                    .opti-new-staff-pad .pack-block {
                        border: 2px solid #AFAFAF;
                        border-radius: 10px;
                        padding: 20px;
                        display: flex;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info {
                        flex-basis: 65%;
                        text-align: start;
                        display: flex;
                        flex-direction: column;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price {
                        flex-basis: 35%;
                        text-align: center;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p {
                        margin-bottom: 0;
                        font-family: 'flynas-Bold';
                        font-size: 14px;
                        color: #000000;
                        letter-spacing: 0.32px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p span {
                        font-family: 'flynas-Medium';
                        font-size: 14px;
                        color: #949494;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price .name {
                        font-size: 20px;
                        line-height: 21px;
                        color: #AFAFAF;
                        font-family: 'flynas-Bold';
                        margin-bottom: 10px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price .price {
                        margin-bottom: 10px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price .conti-btn {
                        width: 80%;
                        height: 33px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        background-color: #E0396D;
                        color: #FFFFFF;
                        font-size: 18px;
                        line-height: 19px;
                        margin: auto;
                        border-radius: 30px;
                    }
                </style>
                <div class="pack-block">
                    <div class="pack-info">
                        <p>Cabin baggage <span style="display: inline-block;">1x7 kg (56cm x 36cm x 23cm)</span></p>
                        ${check_in_eng}
                        <div style="margin-top: auto;">
                            <p>naSmiles Earned - <span>133 Miles</span></p>
                            <p>Rebooking - <span>Available for a fee ($$)</span></p>
                        </div>
                    </div>
                    <div class="pack-price">
                        <p class="name">Light</p>
                        <p class="price"></p>
                        <div class="conti-btn">Continue</div>
                    </div>
                </div>
            </div>`);
        } else {
            const check_in_arb = isDomestic() ? '<p>إنهاء إجراءات السفر - <span>إنهاء الإجراءات إلكترونياً</span></p>' : '';
            staff_pad.insertAdjacentHTML("afterend", `<div class="opti-new-staff-pad col-md-6 text-end m-auto">
                <style>
                    .opti-new-staff-pad {
                        max-width: 520px;
                    }
            
                    .opti-new-staff-pad .pack-block {
                        border: 2px solid #AFAFAF;
                        border-radius: 10px;
                        padding: 20px;
                        display: flex;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info {
                        flex-basis: 65%;
                        text-align: start;
                        display: flex;
                        flex-direction: column;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price {
                        flex-basis: 35%;
                        text-align: center;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p {
                        margin-bottom: 0;
                        font-family: 'flynas-Bold';
                        font-size: 14px;
                        color: #000000;
                        letter-spacing: 0.32px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p span {
                        font-family: 'flynas-Medium';
                        font-size: 14px;
                        color: #949494;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price .name {
                        font-size: 20px;
                        line-height: 21px;
                        color: #AFAFAF;
                        font-family: 'flynas-Bold';
                        margin-bottom: 10px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price .price {
                        margin-bottom: 10px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price .conti-btn {
                        width: 80%;
                        height: 33px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        background-color: #E0396D;
                        color: #FFFFFF;
                        font-size: 18px;
                        line-height: 19px;
                        margin: auto;
                        border-radius: 30px;
                    }
                </style>
                <div class="pack-block">
                    <div class="pack-info">
                        <p>حقيبة المقصورة <span style="display: inline-block;">1×7 كجم (23 سم × 36 سم × 56 سم)</span></p>
                        ${check_in_arb}
                        <div style="margin-top: auto;">
                            <p>أميال ناسمايلز - <span>133 ميل</span></p>
                            <p>إعادة الحجز - <span>متاح مقابل رسوم ($$)</span></p>
                        </div>
                    </div>
                    <div class="pack-price">
                        <p class="name"> لايت </p>
                        <p class="price"></p>
                        <div class="conti-btn">يكمل</div>
                    </div>
                </div>
            </div>`)
        }

        const priceElement = container.querySelector('.opti-new-staff-pad .pack-block .pack-price .price');
        const continueBtn = container.querySelector('.opti-new-staff-pad .pack-block .pack-price .conti-btn');

        if (priceElement && lightPrice_staffpad) {
            priceElement.appendChild(lightPrice_staffpad.cloneNode(true));
            continueBtn.addEventListener('click', function () {
                light_bundle_box.click();
            });
        } else {
            if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                continueBtn.innerText = "Sold Out";
            } else {
                continueBtn.innerText = "لا تتوفر مقاعد";
            }
            continueBtn.style.cursor = "default";
        }

        light_bundle_box.parentElement.parentElement.style.display = 'none';

        staff_pad.style.setProperty("display", "none", "important");
        staff_pad.classList.add('opti-altered');

        flight_info_image.classList.remove('col-md-7');
        flight_info_image.classList.add('col-md-4')
        flight_info_image.classList.add('flight-info-image-altered')

        flight_info_text.classList.remove('col-md-3');
        flight_info_text.classList.add('col-md-2');
        flight_info_text.classList.add('flight-info-text-altered');


        const value_bundle_box = container.querySelector('[class*="valu-bundle"], .bundle-top.valu');

        if (value_bundle_box) {
            value_bundle_box.style.pointerEvents = "none";

            const price_container = value_bundle_box.querySelector(".selectflightbtn");
            if (price_container) {
                price_container.style.setProperty("border", "none", "important");

                if (document.querySelector('.dropdown-toggle .picon.picon_ar')) {
                    price_container.style.setProperty("padding-top", "0", "important");
                }
            }

            const tamaraplans_section = value_bundle_box.querySelector(".tamaraplans");
            if (tamaraplans_section) {
                tamaraplans_section.style.pointerEvents = "auto";
            }

            const bundle_price_section = value_bundle_box.querySelector('.bundle-price');
            if (bundle_price_section) {
                bundle_price_section.style.marginTop = "6px";
                bundle_price_section.insertAdjacentHTML("afterend", `<div class="opti-value-price-block">
        <style>
            .opti-value-price-block {
                display: flex;
                width: 100%;
                justify-content: space-around;
                align-items: center;
            }
    
            .opti-value-price-block .add-button {
                width: 121px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #E0396D;
                border-radius: 50px;
                color: #E0396D;
                font-family: 'flynas-Medium';
                font-size: 16px;
                background: white;
                pointer-events: auto;
            }
    
            .opti-value-price-block .add-button:hover {
                background: #E0396D;
                color: white;
            }
        </style>
    
        <div class="add-button">
            ${document.querySelector('.dropdown-toggle .picon.picon_en') ? "Add" : "يضيف"}
        </div>
    </div>`)

                const price_block = container.querySelector(".opti-value-price-block");
                price_block.appendChild(bundle_price_section);
            } else {
                value_bundle_box.style.pointerEvents = "auto";
            }

        }

        const plus_bundle_box = container.querySelector('[class*="pusd-bundle"], .bundle-top.pusd');

        if (plus_bundle_box) {
            plus_bundle_box.style.pointerEvents = "none";

            const price_container = plus_bundle_box.querySelector(".selectflightbtn");
            if (price_container) {
                price_container.style.setProperty("border", "none", "important");

                if (document.querySelector('.dropdown-toggle .picon.picon_ar')) {
                    price_container.style.setProperty("padding-top", "0", "important");
                }
            }

            const tamaraplans_section = plus_bundle_box.querySelector(".tamaraplans");
            if (tamaraplans_section) {
                tamaraplans_section.style.pointerEvents = "auto";
            }

            const bundle_price_section = plus_bundle_box.querySelector('.bundle-price');
            if (bundle_price_section) {
                bundle_price_section.style.marginTop = "6px";
                bundle_price_section.insertAdjacentHTML("afterend", `<div class="opti-plus-price-block">
        <style>
            .opti-plus-price-block {
                display: flex;
                width: 100%;
                justify-content: space-around;
                align-items: center;
            }
    
            .opti-plus-price-block .add-button {
                width: 121px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #E0396D;
                border-radius: 50px;
                color: #E0396D;
                font-family: 'flynas-Medium';
                font-size: 16px;
                background: white;
                pointer-events: auto;
            }
    
            .opti-plus-price-block .add-button:hover {
                background: #E0396D;
                color: white;
            }
        </style>
    
        <div class="add-button">
        ${document.querySelector('.dropdown-toggle .picon.picon_en') ? "Add" : "يضيف"}
        </div>
    </div>`)

                const price_block = container.querySelector(".opti-plus-price-block");
                price_block.appendChild(bundle_price_section);
            } else {
                plus_bundle_box.style.pointerEvents = "auto";
            }
        }

        const premium_bundle_box = container.querySelector('[class*="premium-bundle"], .bundle-top.premium');

        if (premium_bundle_box) {
            premium_bundle_box.style.pointerEvents = "none";

            const price_container = premium_bundle_box.querySelector(".selectflightbtn");
            if (price_container) {
                price_container.style.setProperty("border", "none", "important");

                if (document.querySelector('.dropdown-toggle .picon.picon_ar')) {
                    price_container.style.setProperty("padding-top", "0", "important");
                }
            }

            const tamaraplans_section = premium_bundle_box.querySelector(".tamaraplans");
            if (tamaraplans_section) {
                tamaraplans_section.style.pointerEvents = "auto";
            }

            const bundle_price_section = premium_bundle_box.querySelector('.bundle-price');
            if (bundle_price_section) {
                bundle_price_section.style.marginTop = "6px";
                bundle_price_section.insertAdjacentHTML("afterend", `<div class="opti-premium-price-block">
        <style>
            .opti-premium-price-block {
                display: flex;
                width: 100%;
                justify-content: space-around;
                align-items: center;
            }
    
            .opti-premium-price-block .add-button {
                width: 121px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #E0396D;
                border-radius: 50px;
                color: #E0396D;
                font-family: 'flynas-Medium';
                font-size: 16px;
                background: white;
                pointer-events: auto;
            }
    
            .opti-premium-price-block .add-button:hover {
                background: #E0396D;
                color: white;
            }
        </style>
    
        <div class="add-button">
        ${document.querySelector('.dropdown-toggle .picon.picon_en') ? "Add" : "يضيف"}
        </div>
    </div>`)

                const price_block = container.querySelector(".opti-premium-price-block");
                price_block.appendChild(bundle_price_section);
            } else {
                premium_bundle_box.style.pointerEvents = "auto";
            }

        }

    }

    const lightPrice = container.querySelector('[class*="light-bundle"] .amount-price, .bundle-top.light .amount-price');
    const valuePrice = container.querySelector('[class*="valu-bundle"] .amount-price, .bundle-top.valu .amount-price');
    const plusPrice = container.querySelector('[class*="pusd-bundle"] .amount-price, .bundle-top.pusd .amount-price');
    const premiumPrice = container.querySelector('[class*="premium-bundle"] .amount-price, .bundle-top.premium .amount-price');

    const passenger_spans = document.querySelectorAll('.search-result .w-auto.py-2.py-lg-0.ms-lg-2 span');
    const adult_passenger = document.querySelector('.search-result .w-auto.py-2.py-lg-0.ms-lg-2 span:nth-of-type(1)');
    const child_passenger = document.querySelector('.search-result .w-auto.py-2.py-lg-0.ms-lg-2 span:nth-of-type(2)');
    const infant_passenger = document.querySelector('.search-result .w-auto.py-2.py-lg-0.ms-lg-2 span:nth-of-type(3)');
    let is_1_adult_1_infant_0_child = false;
    if ((adult_passenger.innerText == "1 Adult" || adult_passenger.innerText == "1 بالغ") && (infant_passenger.innerText == "1 Infant" || infant_passenger.innerText == "1 رضيع") && (child_passenger.innerText == "0 Child" || child_passenger.innerText == "0 طفل")) {
        is_1_adult_1_infant_0_child = true
    }

    let total_passenger = 0;

    passenger_spans.forEach(span => {
        const number = parseInt(span.innerText.match(/\d+/)[0], 10);
        total_passenger += number;
    });

    if (valuePrice && lightPrice) {
        const currencySibling = valuePrice.parentElement.querySelector('.currency');
        if (currencySibling && (currencySibling.innerText == "SAR" || currencySibling.innerText == "ريال") && !valuePrice.parentElement.querySelector('.currency.opti')) {

            const extra_value_price = (parseFloat(valuePrice.textContent.trim()) - parseFloat(lightPrice.textContent.trim())).toFixed(2);

            const [integerPart, decimalPart] = extra_value_price.split('.');
            const valuePrice_int = valuePrice.querySelector('.priceInt');
            if (valuePrice_int) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    valuePrice_int.innerText = `+${integerPart}`;
                } else {
                    valuePrice_int.innerText = `${integerPart}`;
                }
            }
            const valuePrice_dec = valuePrice.querySelector('.priceDec');
            if (valuePrice_dec) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    valuePrice_dec.innerText = `.${decimalPart}`;
                } else {
                    valuePrice_dec.innerText = `.${decimalPart}`;
                    const plusSpan = document.createElement('span');
                    plusSpan.innerText = ' +';
                    plusSpan.style.fontFamily = 'flynas-Bold';
                    plusSpan.style.fontSize = '22px';
                    valuePrice_dec.appendChild(plusSpan);
                }
            }

            currencySibling.classList.add('opti');

            if (total_passenger > 1 && !is_1_adult_1_infant_0_child) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">per passenger</div>`);
                } else {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">لكل مسافر</div>`);
                }

            }
        }
    }

    if (plusPrice && lightPrice) {
        const currencySibling = plusPrice.parentElement.querySelector('.currency');
        if (currencySibling && (currencySibling.innerText == "SAR" || currencySibling.innerText == "ريال") && !plusPrice.parentElement.querySelector('.currency.opti')) {

            const extra_plus_price = (parseFloat(plusPrice.textContent.trim()) - parseFloat(lightPrice.textContent.trim())).toFixed(2);

            const [integerPart, decimalPart] = extra_plus_price.split('.');

            const plusPrice_int = plusPrice.querySelector('.priceInt');
            if (plusPrice_int) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    plusPrice_int.innerText = `+${integerPart}`;
                } else {
                    plusPrice_int.innerText = `${integerPart}`;
                }
            }
            const plusPrice_dec = plusPrice.querySelector('.priceDec');
            if (plusPrice_dec) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    plusPrice_dec.innerText = `.${decimalPart}`;
                } else {
                    plusPrice_dec.innerText = `.${decimalPart}`;
                    const plusSpan = document.createElement('span');
                    plusSpan.innerText = ' +';
                    plusSpan.style.fontFamily = 'flynas-Bold';
                    plusSpan.style.fontSize = '22px';
                    plusPrice_dec.appendChild(plusSpan);
                }
            }
            currencySibling.classList.add('opti');
            if (total_passenger > 1 && !is_1_adult_1_infant_0_child) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">per passenger</div>`);
                } else {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">لكل مسافر</div>`);
                }
            }
        }
    }

    if (premiumPrice && lightPrice) {
        const currencySibling = premiumPrice.parentElement.querySelector('.currency');
        if (currencySibling && (currencySibling.innerText == "SAR" || currencySibling.innerText == "ريال") && !premiumPrice.parentElement.querySelector('.currency.opti')) {

            const extra_premium_price = (parseFloat(premiumPrice.textContent.trim()) - parseFloat(lightPrice.textContent.trim())).toFixed(2);

            const [integerPart, decimalPart] = extra_premium_price.split('.');

            const premiumPrice_int = premiumPrice.querySelector('.priceInt');
            if (premiumPrice_int) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    premiumPrice_int.innerText = `+${integerPart}`;
                } else {
                    premiumPrice_int.innerText = `${integerPart}`;
                }
            }
            const premiumPrice_dec = premiumPrice.querySelector('.priceDec');
            if (premiumPrice_dec) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    premiumPrice_dec.innerText = `.${decimalPart}`;
                } else {
                    premiumPrice_dec.innerText = `.${decimalPart}`;
                    const plusSpan = document.createElement('span');
                    plusSpan.innerText = ' +';
                    plusSpan.style.fontFamily = 'flynas-Bold';
                    plusSpan.style.fontSize = '22px';
                    premiumPrice_dec.appendChild(plusSpan);
                }
            }
            currencySibling.classList.add('opti');
            if (total_passenger > 1 && !is_1_adult_1_infant_0_child) {
                if (document.querySelector('.dropdown-toggle .picon.picon_en')) {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">per passenger</div>`);
                } else {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">لكل مسافر</div>`);
                }
            }
        }
    }
}
observeSelector('.bundles-background .amount-price, .bundle-container .amount-price', (container) => {
    waitUntil(function () {
        const passenger_spans = [...document.querySelectorAll('.search-result .w-auto.py-2.py-lg-0.ms-lg-2 span')];
        const activeTerminals = [...document.querySelectorAll(".sector")].map(x => x.textContent.trim().toUpperCase());
        return passenger_spans.length > 0 && activeTerminals.length > 0;
    }).then(function () {
        applyMessaging(container.closest('.card, [id^=mcard]'));
    });
});
