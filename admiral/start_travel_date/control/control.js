const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('.trip-type-container .annual', function (annual_trip_btn) {
        annual_trip_btn.addEventListener('click', function () {
            utils.observeSelector('.section:has(.start-date)', function (start_date_section) {

                const date_input = start_date_section.querySelector('input[name="startDate"]');

                if (date_input) {
                    date_input.classList.add('opti-start-date');

                    setTimeout(() => {
                        const opti_policy_date = document.querySelector('.section:has(.start-date) input[name="startDate"].opti-start-date');

                        if (opti_policy_date && !opti_policy_date.dataset.observerInitialized) {
                            const observer = new MutationObserver(() => {
                                console.log("Value attribute changed:", opti_policy_date.getAttribute("value"));
                                if (opti_policy_date.getAttribute("value") && opti_policy_date.getAttribute("value").length == 10) {
                                    window['optimizely'] = window['optimizely'] || [];
                                    window['optimizely'].push({
                                        type: "event",
                                        eventName: "cover_start_date_complete",
                                    });
                                }
                            });

                            observer.observe(opti_policy_date, { attributes: true, attributeFilter: ["value"] });

                            opti_policy_date.dataset.observerInitialized = "true";
                        }
                    }, 20);
                }

            });
        });
    });

    utils.observeSelector('.trip-type-container .single', function (single_trip_btn) {
        single_trip_btn.addEventListener('click', function () {
            utils.observeSelector('.section:has(.start-date)', function (start_date_section) {
                const date_input = start_date_section.querySelector('input[name="startDate"]');

                if (date_input) {
                    date_input.classList.remove('opti-start-date');
                }
            });
        });
    });
}