const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('.section:has(.start-date) input[name="startDate"]', function (start_date_input) {

        if (start_date_input && !start_date_input.dataset.observerInitialized) {
            const observer = new MutationObserver(() => {

                if (start_date_input.getAttribute("value") && start_date_input.getAttribute("value").length == 10 && document.getElementById('annual-btn') && document.getElementById('annual-btn').checked && !start_date_input.parentElement.classList.contains('has-error')) {
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "cover_start_date_complete",
                    });
                }
            });

            observer.observe(start_date_input, { attributes: true, attributeFilter: ["value"] });

            start_date_input.dataset.observerInitialized = "true";
        }

    });
}