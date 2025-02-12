/**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */
function callbackFn(activate, options) {
    var utils = optimizely.get('utils');
    function isDirectDomesticFlight(container) {
        const domesticTerminals = ["AHB", "ABT", "AJF", "ULH", "DMM", "HAS", "JED", "MED", "ELQ", "RUH", "TUU", "TIF", "YNB"];
        const activeTerminals = [...document.querySelectorAll(".sector")].map(x => x.textContent.trim().toUpperCase());
        if (!container) return false;
        if (!container.querySelector("i.non-stop")) return false;
        if (activeTerminals.length < 2) return false;
        return activeTerminals.every(x => domesticTerminals.includes(x));
    }
    if (window.location.href.indexOf('/booking/flights') > -1 ||
        window.location.href.indexOf('/booking/search') > -1) {
        utils.observeSelector('.selectflightbtn', function (selectBtn) {
            selectBtn.addEventListener('click', function () {
                if (!isDirectDomesticFlight(selectBtn.closest(".card, [id^=mcard]"))) return;
                activate();
            });
        });
    }
}