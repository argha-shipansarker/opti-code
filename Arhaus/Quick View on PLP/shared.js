const utils = optimizely.get('utils');

utils.observeSelector('.opti-quick-view-modal .quick-view-product .custom-input--materials', function (element) {
    element.addEventListener("click", function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "click__quick_view_engagement_",
        });
    });
});

utils.observeSelector('.opti-quick-view-modal .quick-view-product button:has(.icon--swatches)', function (element) {
    element.addEventListener("click", function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "click__quick_view_engagement_",
        });
    });
});

utils.observeSelector('.opti-quick-view-modal .quick-view-product button:has(.icon--more)', function (element) {
    element.addEventListener("click", function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "click__quick_view_engagement_",
        });
    });
});

utils.observeSelector('.opti-quick-view-modal .quick-view-product .custom-input.custom-input--inside-text', function (element) {
    element.addEventListener("click", function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "click__quick_view_engagement_",
        });
    });
});