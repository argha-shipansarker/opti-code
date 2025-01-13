const { observeSelector, waitUntil } = window.optimizely.get("utils");

function applyMessaging(container) {
    if (!container) return;
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
