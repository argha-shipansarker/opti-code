const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('#continue', function (continue_btn) {

        continue_btn.addEventListener('click', function () {
            if (document.getElementById('annual-btn') && document.getElementById('annual-btn').checked) {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: "continue_cta__",
                });
            }
        })

    });
}