var utils = optimizely.get('utils');

utils.waitForElement('#header .navbar-expand-lg .d-lg-none a[title="Customer Login"]').then(function (login_btn_mobile) {
    login_btn_mobile.innerText = "Customer login or register";
});

utils.observeSelector('#header .navbar-expand-lg .d-lg-none a[title="Customer Login"] , #header .login-container .d-lg-flex a[title="Customer Login"]', function (login_cta) {
    login_cta.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "customer_login_cta_",
        });
    });
});