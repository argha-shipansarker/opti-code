const utils = optimizely.get('utils');

utils.observeSelector('.search-result-items .grid-tile .quickview', function (quickview_icon) {
    quickview_icon.addEventListener('touchstart', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "prod_rec___all_product_engagement_",
        });
    });
});

utils.observeSelector('.search-result-items .grid-tile .product-image', function (product_image) {
    product_image.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "prod_rec___all_product_engagement_",
        });
    });
});

utils.observeSelector('.search-result-items .grid-tile .product-name', function (product_name) {
    product_name.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "prod_rec___all_product_engagement_",
        });
    });
});

utils.observeSelector('.search-result-items .grid-tile .product-swatches-text', function (product_swatches_text) {
    product_swatches_text.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "prod_rec___all_product_engagement_",
        });
    });
});
