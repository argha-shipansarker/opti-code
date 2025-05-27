const utils = optimizely.get('utils');

utils.observeSelector('.opt-home-container .test .product-image-zoom-block', function (product_container) {
    console.warn("window.product_url", window.product_url)
});