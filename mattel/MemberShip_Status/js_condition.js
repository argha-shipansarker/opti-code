/**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
    if (document.cookie.includes('bc_segments2=') || document.cookie.includes('bc_segments=')) {
        return true;
    } else {
        return false;
    }
}











/**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    const utils = optimizely.get('utils');

    utils.waitUntil(function () {
        return document.cookie.includes('bc_segments2=') || document.cookie.includes('bc_segments=');
    }).then(function () {
        activate();
    });
}




