function callbackFn(activate, options) {
    const utils = optimizely.get('utils');

    utils.observeSelector('.product-image', function (product_image) {
        product_image.addEventListener('click', activate);
    });
}