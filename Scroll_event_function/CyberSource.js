try {
    (function () {
        (function () {
            // Prepare Optimizely reference.
            window.optimizely = window.optimizely || [];

            var percentages = [
                // Scrolled Past 1% of Page
                {
                    'amount': 1,
                    'event': 'scroll_rate_1_',
                    'fired': false
                },
                // Scrolled Past 25% of Page
                {
                    'amount': 25,
                    'event': 'scroll_rate_25_',
                    'fired': false
                },
                // Scrolled Past 50% of Page
                {
                    'amount': 50,
                    'event': 'scroll_rate_50_',
                    'fired': false
                },
                {
                    'amount': 75,
                    'event': 'scroll_rate_75_',
                    'fired': false
                },
                {
                    'amount': 99,
                    'event': 'scroll_rate_100_',
                    'fired': false
                }];

            function debounce(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this,
                        args = arguments;
                    var later = function later() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }

            window.addEventListener('scroll', debounce(function () {
                //                   most browsers                                                  IE with DOCTYPE                      IE < 9 / quirks mode
                var h = document.documentElement,
                    b = document.body,
                    st = 'scrollTop',
                    sh = 'scrollHeight';

                var scrollPosition = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

                for (var i = 0; i < percentages.length; i++) {
                    var percent = percentages[i];

                    // Dedupe.
                    if (percent.fired) continue;

                    // If we've crested this percent amount threshold.
                    if (!!document.body && scrollPosition > percent.amount) {
                        window.optimizely.push({
                            type: 'event',
                            eventName: percent.event
                        });

                        percent.fired = true;
                    }
                }
            }, 250));
        })();
    })();
} catch (e) {
    console.warn('opt-scroll metric issue');
}
