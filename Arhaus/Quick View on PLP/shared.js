const utils = optimizely.get('utils');

utils.observeSelector('.opti-quick-view-modal .quick-view-product .custom-input--materials', function (element) {
    if (!element.dataset.listenerAdded) {
        element.addEventListener("click", function () {
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: "click__quick_view_engagement_",
            });
        });

        // Mark as added
        element.dataset.listenerAdded = "true";
    }
});

utils.observeSelector('.opti-quick-view-modal .quick-view-product button:has(.icon--swatches)', function (element) {
    if (!element.dataset.listenerAdded) {
        element.addEventListener("click", function () {
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: "click__quick_view_engagement_",
            });
        });

        // Mark as added
        element.dataset.listenerAdded = "true";
    }
});

utils.observeSelector('.opti-quick-view-modal .quick-view-product button:has(.icon--more)', function (element) {
    if (!element.dataset.listenerAdded) {
        element.addEventListener("click", function () {
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: "click__quick_view_engagement_",
            });
        });

        // Mark as added
        element.dataset.listenerAdded = "true";
    }
});

utils.observeSelector('.opti-quick-view-modal .quick-view-product .custom-input.custom-input--inside-text', function (element) {
    if (!element.dataset.listenerAdded) {
        element.addEventListener("click", function () {
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: "click__quick_view_engagement_",
            });
        });

        // Mark as added
        element.dataset.listenerAdded = "true";
    }
});