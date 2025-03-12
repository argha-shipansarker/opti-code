const utils = optimizely.get('utils');

utils.observeSelector('.opti-upsell-section .btn', function (cart_modal_join_btn) {
    cart_modal_join_btn.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "join_now_clicks_-_aggregate",
        });
    });
});

utils.waitForElement('.opti-upsell-cart-page .btn').then(function (cart_page_join_btn_desktop) {
    cart_page_join_btn_desktop.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "join_now_clicks_-_aggregate",
        });
    });
});

utils.waitForElement('.opti-upsell-cart-page-mobile .btn').then(function (cart_page_join_btn_mobile) {
    cart_page_join_btn_mobile.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "join_now_clicks_-_aggregate",
        });
    });
});