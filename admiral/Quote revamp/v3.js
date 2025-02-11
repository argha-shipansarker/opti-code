const utils = optimizely.get('utils');

if (window.location.href.indexOf('/Admiral/quote') > -1) {
    utils.observeSelector('.adm-section:has(+#quote-summary)', function (home_car_van_section) {
        home_car_van_section.style.display = "none";
    });
}