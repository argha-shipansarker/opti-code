var utils = optimizely.get('utils');

utils.waitForElement('#header .navbar-expand-lg .d-lg-none a[title="Customer Login"]').then(function (login_btn_mobile) {
    login_btn_mobile.innerText = "Customer login or register";
});