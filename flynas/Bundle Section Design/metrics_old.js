const { observeSelector, waitUntil } = window.optimizely.get("utils");

observeSelector('.footer-wrapper #summaryNext', (addPassengerDetailsBtn) => {
    addPassengerDetailsBtn.addEventListener("click", function () {
        const selected_flight_box = document.querySelector('.selected_flight_detail .fare-type');
        const selected_package_box = document.querySelector('.bundles-background .BundleSelected .bundle-header');

        if (selected_flight_box) {
            if (selected_flight_box.innerText == "Value" || selected_flight_box.innerText == "Plus" || selected_flight_box.innerText == "Premium") {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: "add_passenger_details___bundle",
                });

            }
        } else {
            if (selected_package_box) {
                if (selected_package_box.innerText == "Value" || selected_package_box.innerText == "Plus" || selected_package_box.innerText == "Premium") {
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "add_passenger_details___bundle",
                    });

                }
            }
        }
    });
});