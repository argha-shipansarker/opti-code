/**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    const utils = optimizely.get('utils');

    utils.waitUntil(function () {
        let personalDetails = dataLayer.find(obj => obj.event === 'yourDetails');
        if (personalDetails) {
            if (personalDetails.product == "singleCar" && personalDetails.levelOfCover == "Comprehensive") {
                return true;
            }
        }
        return false;
    }).then(function () {
        activate();
    });
}