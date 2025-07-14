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

modifyElement("adm-enter h2", preHeader => {
    preHeader.style = "color: #25469B !important;"
    preHeader.innerHTML = "Amount to pay today";
});

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
        })

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
                        adm-quote-hero-price { display: block; margin-bottom: 8px !important; color: #444444 !important;}
                        .opt-447-insert + br {display: none;} 
                    </style>${carStart == homeStart ? total.innerText : (homeFirst ? homePrice : carPrice)}`;

                    // if the risks have different dates, add additional line
                    if (carStart != homeStart) {
                        var textToInsert = `Then ${homeFirst ? carPrice : homePrice} when your ${homeFirst ? "car" : "home"} joins cover on ${homeFirst ? carStart : homeStart}`;

                        var inserted = document.querySelector('.opt-447-insert');
                        if (inserted) {
                            inserted.innerHTML = textToInsert
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
            };
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