var utils = optimizely.get('utils');

utils.observeSelector('#header .navbar-expand-lg .d-lg-none a[title="Customer Login"]:not(.opti-login-dd) , #header .login-container .d-lg-flex a[title="Customer Login"]:not(.opti-login-dd)', function (login_cta) {
    login_cta.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "customer_login_cta_",
        });
    })
});