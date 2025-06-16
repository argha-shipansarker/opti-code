var utils = optimizelyEdge.get('utils');

utils.waitForElement('body').then(function (body) {
    let timeoutPhone;
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        function resetTimer() {
            clearTimeout(timeoutPhone);

            timeoutPhone = setTimeout(function () {
                if (isMobile) {
                    window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                    window['optimizelyEdge'].push({
                        type: "event",
                        eventName: "mobile-eight-second",
                    });
                }
            }, 8000);
        }

        window.addEventListener('touchstart', function () {
            resetTimer();
        });
        window.addEventListener('scroll', function () {
            resetTimer();
        });

        resetTimer();
    } else {
        // Desktop
        document.querySelector('body').addEventListener('mouseleave', function (e) {
            window['optimizelyEdge'] = window['optimizelyEdge'] || [];
            window['optimizelyEdge'].push({
                type: "event",
                eventName: "desktop-exit-intent",
            });
        });
    }
});