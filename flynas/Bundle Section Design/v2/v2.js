const { observeSelector, waitUntil } = window.optimizely.get("utils");

function applyMessaging(container) {
    if (!container) return;

    const staff_pad = container.querySelector('.staff-pad');

    const flight_info_image = container.querySelector('div:nth-of-type(1) div:nth-of-type(2)');

    const light_bundle_box = container.querySelector('[class*="light-bundle"], .bundle-top.light');

    if (staff_pad && flight_info_image && light_bundle_box && !container.querySelector('.opti-new-staff-pad')) {

        const lightPrice_staffpad = light_bundle_box.querySelector('[class*="light-bundle"] .amount, .bundle-top.light .amount');

        const flight_info_text = flight_info_image.previousElementSibling;

        const existing_new_staff_pad = document.querySelector('.opti-new-staff-pad');
        const existing_staff_pad = document.querySelector('.staff-pad.opti-altered');
        const flight_info_image_altered = document.querySelector('.flight-info-image-altered');
        const flight_info_text_altered = document.querySelector('.flight-info-text-altered');

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

        if (document.querySelector('.picon.picon_en')) {
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
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price {
                        flex-basis: 35%;
                        text-align: center;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p {
                        margin-bottom: 0;
                        font-family: 'flynas-Bold';
                        font-size: 16px;
                        color: #000000;
                        letter-spacing: 0.32px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p span {
                        font-family: 'flynas-Medium';
                        font-size: 16px;
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
                        <p>حقيبة المقصورة - <span>7كجمx1 </span></p>
                        <p>حقيبة الشحن  - <span>20كجمx1</span></p>
                        <p>الوجبات - <span>وجبة خفيفة</span></p>
                        <p>أميال ناسمايلز: <span>200 ميل</span></p>
                        <p>إعادة الحجز: <span>متاح مقابل رسوم ($$)</span></p>
                    </div>
                    <div class="pack-price">
                        <p class="name"> لايت </p>
                        <p class="price"></p>
                        <div class="conti-btn">يكمل</div>
                    </div>
                </div>
            </div>`)
        } else {
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
                    }
            
                    .opti-new-staff-pad .pack-block .pack-price {
                        flex-basis: 35%;
                        text-align: center;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p {
                        margin-bottom: 0;
                        font-family: 'flynas-Bold';
                        font-size: 16px;
                        color: #000000;
                        letter-spacing: 0.32px;
                    }
            
                    .opti-new-staff-pad .pack-block .pack-info p span {
                        font-family: 'flynas-Medium';
                        font-size: 16px;
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
                        <p>Cabin baggage - <span>1x7 kg</span></p>
                        <p>Checked baggage - <span>1x20 kg</span></p>
                        <p>Meal - <span>Snack meal</span></p>
                        <p>naSmiles Earned: <span>200 Miles</span></p>
                        <p>Rebooking: <span>Available for a fee ($$)</span></p>
                    </div>
                    <div class="pack-price">
                        <p class="name">Light</p>
                        <p class="price"></p>
                        <div class="conti-btn">Continue</div>
                    </div>
                </div>
            </div>`);
        }

        const priceElement = document.querySelector('.opti-new-staff-pad .pack-block .pack-price .price');
        const continueBtn = document.querySelector('.opti-new-staff-pad .pack-block .pack-price .conti-btn');

        if (priceElement && lightPrice_staffpad) {
            priceElement.appendChild(lightPrice_staffpad.cloneNode(true));
            continueBtn.addEventListener('click', function () {
                light_bundle_box.click();
            });
        } else {
            continueBtn.innerText = "Sold Out";
            continueBtn.style.cursor = "default";
        }

        light_bundle_box.parentElement.parentElement.style.display = 'none';

        staff_pad.style.display = "none";
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
            ${document.querySelector('.picon.picon_en') ? "يضيف" : "Add"}
        </div>
    </div>`)

                const price_block = document.querySelector(".opti-value-price-block");
                price_block.appendChild(bundle_price_section);
            }

        }

        const plus_bundle_box = container.querySelector('[class*="pusd-bundle"], .bundle-top.pusd');

        if (plus_bundle_box) {
            plus_bundle_box.style.pointerEvents = "none";

            const price_container = plus_bundle_box.querySelector(".selectflightbtn");
            if (price_container) {
                price_container.style.setProperty("border", "none", "important");
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
        ${document.querySelector('.picon.picon_en') ? "يضيف" : "Add"}
        </div>
    </div>`)

                const price_block = document.querySelector(".opti-plus-price-block");
                price_block.appendChild(bundle_price_section);
            }
        }

        const premium_bundle_box = container.querySelector('[class*="premium-bundle"], .bundle-top.premium');

        if (premium_bundle_box) {
            premium_bundle_box.style.pointerEvents = "none";

            const price_container = premium_bundle_box.querySelector(".selectflightbtn");
            if (price_container) {
                price_container.style.setProperty("border", "none", "important");
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
        ${document.querySelector('.picon.picon_en') ? "يضيف" : "Add"}
        </div>
    </div>`)

                const price_block = document.querySelector(".opti-premium-price-block");
                price_block.appendChild(bundle_price_section);
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
                if (document.querySelector('.picon.picon_en')) {
                    valuePrice_int.innerText = `${integerPart}`;
                } else {
                    valuePrice_int.innerText = `+${integerPart}`;
                }
            }
            const valuePrice_dec = valuePrice.querySelector('.priceDec');
            if (valuePrice_dec) {
                if (document.querySelector('.picon.picon_en')) {
                    valuePrice_dec.innerText = `.${decimalPart}`;
                    const plusSpan = document.createElement('span');
                    plusSpan.innerText = ' +';
                    plusSpan.style.fontFamily = 'flynas-Bold';
                    plusSpan.style.fontSize = '22px';
                    valuePrice_dec.appendChild(plusSpan);
                } else {
                    valuePrice_dec.innerText = `.${decimalPart}`;
                }
            }

            currencySibling.classList.add('opti');

            if (total_passenger > 1 && !is_1_adult_1_infant_0_child) {
                if (document.querySelector('.picon.picon_en')) {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">لكل مسافر</div>`);
                } else {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">per passenger</div>`);
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
                if (document.querySelector('.picon.picon_en')) {
                    plusPrice_int.innerText = `${integerPart}`;
                } else {
                    plusPrice_int.innerText = `+${integerPart}`;
                }
            }
            const plusPrice_dec = plusPrice.querySelector('.priceDec');
            if (plusPrice_dec) {
                if (document.querySelector('.picon.picon_en')) {
                    plusPrice_dec.innerText = `.${decimalPart}`;
                    const plusSpan = document.createElement('span');
                    plusSpan.innerText = ' +';
                    plusSpan.style.fontFamily = 'flynas-Bold';
                    plusSpan.style.fontSize = '22px';
                    plusPrice_dec.appendChild(plusSpan);
                } else {
                    plusPrice_dec.innerText = `.${decimalPart}`;
                }
            }
            currencySibling.classList.add('opti');
            if (total_passenger > 1 && !is_1_adult_1_infant_0_child) {
                if (document.querySelector('.picon.picon_en')) {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">لكل مسافر</div>`);
                } else {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">per passenger</div>`);
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
                if (document.querySelector('.picon.picon_en')) {
                    premiumPrice_int.innerText = `${integerPart}`;
                } else {
                    premiumPrice_int.innerText = `+${integerPart}`;
                }
            }
            const premiumPrice_dec = premiumPrice.querySelector('.priceDec');
            if (premiumPrice_dec) {
                if (document.querySelector('.picon.picon_en')) {
                    premiumPrice_dec.innerText = `.${decimalPart}`;
                    const plusSpan = document.createElement('span');
                    plusSpan.innerText = ' +';
                    plusSpan.style.fontFamily = 'flynas-Bold';
                    plusSpan.style.fontSize = '22px';
                    premiumPrice_dec.appendChild(plusSpan);
                } else {
                    premiumPrice_dec.innerText = `.${decimalPart}`;
                }
            }
            currencySibling.classList.add('opti');
            if (total_passenger > 1 && !is_1_adult_1_infant_0_child) {
                if (document.querySelector('.picon.picon_en')) {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">لكل مسافر</div>`);
                } else {
                    currencySibling.insertAdjacentHTML("afterend", `<div style="margin-top: 6px;font-size: 14px;">per passenger</div>`);
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
