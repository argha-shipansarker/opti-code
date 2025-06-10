/**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    const utils = optimizely.get('utils');
    utils.waitUntil(function () {
        let productTracking = dataLayer.find(obj => obj.event === 'productTracking');
        if (productTracking) {
            if (productTracking.currentProduct == "MULTICAR" && (window.location.pathname.includes('/Admiral/cover/') || window.location.pathname.includes('/Admiral/vehicleupgrades') || window.location.pathname.includes('/Admiral/quote') || window.location.pathname.includes('/Admiral/checks') || window.location.pathname.includes('/Admiral/payment'))) {
                return true;
            }
        }
        return false;
    }).then(function () {
        activate();
    });
}