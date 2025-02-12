const { observeSelector } = window.optimizely.get("utils");

function isDirectDomesticFlight(container) {
    if (!container.querySelector("i.non-stop")) return false;
    const domesticTerminals = ["AHB", "ABT", "AJF", "ULH", "DMM", "HAS", "JED", "MED", "ELQ", "RUH", "TUU", "TIF", "YNB"];
    const activeTerminals = [...document.querySelectorAll(".sector")].map(x => x.textContent.trim().toUpperCase());
    return activeTerminals.every(x => domesticTerminals.includes(x));
}
function getSavingPercentage(lowTierPrice, highTierPrice) {
    lowTierPrice = parseInt(parseFloat(lowTierPrice.textContent.trim()) * 100);
    highTierPrice = parseInt(parseFloat(highTierPrice.textContent.trim()) * 100);
    const priceGap = highTierPrice - lowTierPrice;
    switch (priceGap) {
        case 6099:
            return 49;
        case 7099:
            return 41;
        case 8599:
            return 28;
        case 9999:
            return 17;
        case 15099:
            return 53;
        case 17099:
            return 47;
        case 21099:
            return 35;
        case 25099:
            return 23;
        default:
            return 0;
    }
}

function applyMessaging(container) {
    if (!container) return;
    if (!isDirectDomesticFlight(container)) return;

    function getCopy(amount) {
        const lang = document.documentElement.lang;
        const copy = {
            ar: `استمتع بتوفير يصل إلى %${amount}`,
            en: `Save up to ${amount}%`,
        };
        return copy[lang] || copy.en;
    }

    const lightPrice = container.querySelector('[class*="light-bundle"] .amount-price, .bundle-top.light .amount-price');
    const valuePrice = container.querySelector('[class*="valu-bundle"] .amount-price, .bundle-top.valu .amount-price');
    const plusPrice = container.querySelector('[class*="pusd-bundle"] .amount-price, .bundle-top.pusd .amount-price');

    const valueSaving = getSavingPercentage(lightPrice, valuePrice);
    if (valueSaving) {
        const valueBadge = container.querySelector(".mobile-bundle-td .bundle-top.valu, .bundle-header.valu");
        valueBadge.classList.add("opt-saving");
        valueBadge.setAttribute("data-opt-saving", getCopy(valueSaving));
    }
    const plusSaving = getSavingPercentage(lightPrice, plusPrice);
    if (plusSaving) {
        const plusBadge = container.querySelector(".mobile-bundle-td .bundle-top.pusd, .bundle-header.pusd");
        plusBadge.classList.add("opt-saving");
        plusBadge.setAttribute("data-opt-saving", getCopy(plusSaving));
    }
}
observeSelector('.bundles-background .amount-price, .bundle-container .amount-price', (container) => {
    applyMessaging(container.closest('.card, [id^=mcard]'));
});
