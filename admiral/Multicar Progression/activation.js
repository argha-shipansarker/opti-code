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
            if (productTracking.currentProduct == "MULTICAR") {
                return true;
            }
        }
        return false;
    }).then(function () {
        activate();
    });
}