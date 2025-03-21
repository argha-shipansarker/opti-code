const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('.trip-type-container .annual', function (annual_trip_btn) {
        annual_trip_btn.addEventListener('click', function () {
            utils.observeSelector('.section:has(.start-date) input[name="startDate"]', function (start_date_input) {

                start_date_input.classList.add("opti-start-date");

                let opti_start_date = document.querySelector(".opti-start-date");

                if (opti_start_date && !opti_start_date.dataset.observerInitialized) {
                    const observer = new MutationObserver(() => {
                        console.log("argha", document.getElementById('annual-btn').checked)

                        if (opti_start_date.getAttribute("value") && opti_start_date.getAttribute("value").length == 10 && document.getElementById('annual-btn').checked) {
                            console.log("Value attribute changed:", opti_start_date.getAttribute("value"));
                            window['optimizely'] = window['optimizely'] || [];
                            window['optimizely'].push({
                                type: "event",
                                eventName: "cover_start_date_complete",
                            });
                        }
                    });

                    observer.observe(opti_start_date, { attributes: true, attributeFilter: ["value"] });

                    opti_start_date.dataset.observerInitialized = "true";
                }

            });
        })
    });

    utils.observeSelector('.trip-type-container .single', function (single_trip_btn) {
        single_trip_btn.addEventListener('click', function () {
            utils.observeSelector('.section:has(.start-date) input[name="startDate"]', function (start_date_input) {
                start_date_input.classList.remove('opti-start-date')
            })
        });
    });
}