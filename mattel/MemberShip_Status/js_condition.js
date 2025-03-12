/**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    const utils = optimizely.get('utils');

    utils.waitUntil(function () {
        return document.cookie.includes('bc_member_upsell_hw=true') || document.cookie.includes('bc_member_upsell_bs=true');
    }).then(function () {
        activate();
    });
}