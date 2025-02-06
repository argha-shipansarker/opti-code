var utils = optimizely.get('utils');

utils.waitForElement('#header .navbar-expand-lg .d-lg-none a[title="Customer Login"]').then(function (login_btn_mobile) {
    login_btn_mobile.innerText = "Customer login or register";
});

utils.waitForElement('#header .navbar-expand-lg').then(function (mobile_nav_section) {
    const login_btn = mobile_nav_section.querySelector('.header__login-navigation');
    const scroll_wrapper = mobile_nav_section.querySelector('.scroll-wrapper');
    if (login_btn && scroll_wrapper) {
        scroll_wrapper.prepend(login_btn);
    }
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