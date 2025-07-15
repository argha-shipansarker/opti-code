var modifyElement = (selector, callback) => {
    optimizely.get('utils').waitForElement(selector + ":not(.opt-set)").then(e => {
        e.classList.add('opt-set');
        callback(e)
        modifyElement(selector, callback)
    });
}

var homePrice = 0;
var homeStart = "";
var carPrice = 0;
var carStart = "";

var renderChanges = () => {
    if (document.querySelectorAll("#quote-summary adm-card-deck [data-test='coverable-title'] h3").length < 3) {
        document.querySelectorAll("#quote-summary adm-card-deck [data-test='coverable-title'] h3").forEach(h3 => {
            var parent = h3.closest("#quote-summary adm-card-deck");
            var priceElement = parent.querySelector("[data-test*='prices'] strong");
            var startElement = parent.querySelector("adm-timeline, #startDate");
            if (parent) {
                switch (h3.innerText) {
                    case "Home": {
                        parent.setAttribute("risk", "home");
                        if (priceElement) homePrice = priceElement.innerText;
                        if (startElement) homeStart = startElement.innerText.replaceAll(/[a-zA-Z ]/gi, "");
                        break;
                    }
                    case "Car": {
                        parent.setAttribute("risk", "car");
                        if (priceElement) carPrice = priceElement.innerText;
                        if (startElement) carStart = startElement.innerText.replaceAll(/[a-zA-Z ]/gi, "");
                        break;
                    }
                    default: break;
                }
            }
        });

        if (!document.querySelector("#quote-summary adm-card-deck [data-test='coverable-title'] h3:not(.opt-set)")) {
            var header = document.querySelector("adm-quote-hero-price [size=h1]")
            if (header) {
                var homeRisk = document.querySelector('#quote-summary adm-card-deck[risk=home]');
                var carRisk = document.querySelector('#quote-summary adm-card-deck[risk=car]');
                var total = document.querySelector('adm-multi-risk-quote-price-amount');

                if (carRisk && homeRisk && total) {
                    var homeRiskIndex = homeRisk.getAttribute('id').replaceAll(/[a-zA-Z\- ]/gi, "");
                    var carRiskIndex = carRisk.getAttribute('id').replaceAll(/[a-zA-Z\- ]/gi, "");

                    // we determine if the home risk appears first or the car
                    var homeFirst = homeRiskIndex < carRiskIndex;

                    header.innerHTML = `<style>
                        adm-quote-hero-price { transform: translateY(-10px); display: block; color: #444444 !important; }
                        .opt-447-insert + br {display: none;} 
                        adm-enter h2 {display: none;}
                    </style><span style="font-weight: 400">Pay</span> ${carStart == homeStart ? total.innerText : (homeFirst ? homePrice : carPrice)} <span style="font-weight: 400">today</span>`;

                    // if the risks have different dates, add additional line
                    if (carStart != homeStart) {
                        var textToInsert = `Then <span style="font-weight: 700">${homeFirst ? carPrice : homePrice}</span> when your ${homeFirst ? "car" : "home"} cover starts on ${homeFirst ? carStart : homeStart}`;

                        var inserted = document.querySelector('.opt-447-insert');
                        if (inserted) {
                            inserted.innerHTML = textToInsert;
                        }
                        else {
                            header.insertAdjacentHTML('afterEnd', `<div class="opt-447-insert" style="font-weight: 400; font-size: 16px; line-height: 24px;"> ${textToInsert} </div>`);
                        }
                    }
                    else {
                        var headerInsert = document.querySelector('.opt-447-insert');
                        if (headerInsert) {
                            headerInsert.remove();
                        }
                    }
                }
            }
        }
    }
}

const maintain_opt_447_insert_section = () => {
    const frequency_value = document.querySelector('adm-multi-risk-quote-price-frequency');
    const opt_447_div = document.querySelector('.opt-447-insert');

    if (frequency_value && opt_447_div) {
        if (frequency_value.innerText.trim() == "month") {
            opt_447_div.style.display = "none";
        } else {
            opt_447_div.style.display = "block";
            const parent = opt_447_div.parentElement;
            const total_value = parent.querySelector('adm-quote-hero-price [size="h1"]');
            if (total_value) {
                if (opt_447_div.compareDocumentPosition(total_value) & Node.DOCUMENT_POSITION_FOLLOWING) {
                    // Move total_value before opt_447_div
                    parent.insertBefore(total_value, opt_447_div);
                }
            }
        }

    }
}

modifyElement("#quote-summary adm-card-deck [data-test='coverable-title'] h3", () => {
    renderChanges();
    var total = document.querySelector('adm-multi-risk-quote-price-amount');
    if (total) {
        var mutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                renderChanges();
                maintain_opt_447_insert_section();
            });
        });
        mutationObserver.observe(total, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    }
});