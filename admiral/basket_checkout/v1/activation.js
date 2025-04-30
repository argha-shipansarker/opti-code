/**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    const utils = optimizely.get('utils');

    utils.waitUntil(function () {
        const multicarPrice_event = dataLayer.find(obj => obj.event === 'multicarPrice');
        if (multicarPrice_event) {
            if (multicarPrice_event.carsOnQuote >= 2) {
                return true;
            }
        }
        return false;
    }).then(function () {
        activate();
    });
}