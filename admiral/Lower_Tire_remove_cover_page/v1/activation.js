/**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    const utils = optimizely.get('utils');

    utils.waitUntil(function () {
        const motorTier_event = dataLayer.find(obj => obj.event === 'motorTier');
        const yourDetails_event = dataLayer.find(obj => obj.event === 'yourDetails');
        if (motorTier_event && motorTier_event.tier && yourDetails_event && yourDetails_event.driver1name) {
            sessionStorage.setItem('opti-landing-tier', JSON.stringify(motorTier_event.tier));
            return true;
        }
        return false;
    }).then(function () {
        activate();
    });
}