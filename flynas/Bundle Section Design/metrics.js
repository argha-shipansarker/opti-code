const { observeSelector, waitUntil } = window.optimizely.get("utils");

observeSelector('.footer-wrapper #summaryNext', (addPassengerDetailsBtn) => {
    addPassengerDetailsBtn.addEventListener("click", function () {

        const selected_flight_box = Array.from(document.querySelectorAll('.selected_flight_detail .fare-type'));
        const selected_package_box = Array.from(document.querySelectorAll('.bundles-background .BundleSelected .bundle-header'));
        let will_metrics_throw = false;

        for (const flight_box of selected_flight_box) {
            if (flight_box.innerText == "Value" || flight_box.innerText == "Plus" || flight_box.innerText == "Premium") {
                will_metrics_throw = true;
                break;
            }
        }

        for (const package_box of selected_package_box) {
            if (package_box.innerText == "Value" || package_box.innerText == "Plus" || package_box.innerText == "Premium") {
                will_metrics_throw = true;
                break;
            }
        }

        if (will_metrics_throw) {
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: "add_passenger_details___bundle_",
            });
        }
    });
});