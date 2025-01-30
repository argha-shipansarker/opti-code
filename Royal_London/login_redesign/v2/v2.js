var utils = optimizely.get('utils');

utils.waitForElement('#header .login-container .d-lg-flex a[title="Customer Login"]').then(function (login_btn) {
    login_btn.classList.add("opti-login-dd");
    login_btn.insertAdjacentHTML("afterend", `
<div class="opti-register-btn">
    <style>
        .opti-register-btn .register-btn {
            width: 105px;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid #6C3376;
            color: #6C3376;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 18px;
            font-weight: 700;
        }

        .opti-register-btn .register-btn:hover {
            color: #6C3376;
        }
    </style>
    <a class="register-btn" href="https://www.royallondon.com/existing-customers/online-service/">Register</a>
</div>
    `);

    login_btn.insertAdjacentHTML("afterend", `
<div class="opti-login-dropdown">
    <style>
        .opti-login-dropdown {
            position: absolute;
            top: 52px;
            background: #F2F3F4;
            z-index: 9999999999;
            left: 86px;
            display: none;
        }

        .opti-login-dropdown .dd-container {
            padding: 32px 16px 11px;
            text-align: start;
        }

        .opti-login-dropdown .dd-container a {
            color: #470054;
            font-size: 16px;
            line-height: 21px;
            font-weight: 700;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            text-decoration: none;
            display: inline-block;
            border-bottom: 0;
            position: relative;
        }

        .opti-login-dropdown .dd-container a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #470054;
            display: none;
        }

        .opti-login-dropdown .dd-container a:hover {
            opacity: 0.8;
        }

        .opti-login-dropdown .dd-container a:hover::after {
            display: block;
        }

        .opti-login-dropdown .dd-container .margin-bottom {
            margin-bottom: 24px;
        }

        .opti-login-dropdown .dd-container .horizontal-line {
            width: 100%;
            height: 2px;
            background-color: #D9D9D9;
        }
    </style>
    <div class="dd-container">
        <a class="margin-bottom" href="https://www.royallondon.com/secure/customer/dashboard">Pensions started in 2004
            or later</a>
        <a class="margin-bottom" href="https://my.royallondon.com/">Pensions started before 2004</a>
        <a class="margin-bottom" href="https://www.royallondon.com/existing-customers/online-service/">Not sure?</a>
        <div class="horizontal-line margin-bottom"></div>
        <a class="margin-bottom" href="https://my.royallondon.com/">Life Insurance & Investments</a>
        <div class="horizontal-line margin-bottom"></div>
        <a href="https://www.royallondon.com/existing-customers/online-service/download-our-mobile-app/">Download our
            app <span style="font-weight: 400; display: block; font-family: PT Serif,Georgia,serif;">(Pensions
                started in 2004 or later)</span></a>
    </div>
</div>
    `);

    login_btn.addEventListener('click', function (event) {
        event.preventDefault();
        const login_dd = document.querySelector('.opti-login-dropdown');
        if (login_dd) {
            const login_dd_display_value = window.getComputedStyle(login_dd).display;
            if (login_dd_display_value == "none") {
                login_dd.style.display = 'block';
            } else {
                login_dd.style.display = 'none';
            }
        }
    });

    document.addEventListener("click", function (event) {
        const dropdown = document.querySelector(".opti-login-dropdown");

        const isOutsideClick =
            !event.target.closest('#header .login-container .d-lg-flex a[title="Customer Login"]') &&
            !event.target.closest(".opti-login-dropdown");

        if (isOutsideClick && dropdown) {
            dropdown.style.display = "none";
        }
    });

});

utils.waitForElement('#header .navbar-expand-lg .d-lg-none a[title="Customer Login"]').then(function (login_btn_mobile) {
    login_btn_mobile.innerText = "Login";
    login_btn_mobile.classList.add("opti-login-dd");
    login_btn_mobile.insertAdjacentHTML("afterend", `
<div class="opti-register-btn-mobile">
    <style>
        .opti-register-btn-mobile .register-btn {
            width: 100%;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid #6C3376;
            color: #6C3376;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 18px;
            font-weight: 700;
            margin-top: 8px;
        }

        .opti-register-btn-mobile .register-btn:hover {
            color: #6C3376;
        }
    </style>
    <a class="register-btn" href="https://www.royallondon.com/existing-customers/online-service/">Register</a>
</div>
    `);

    login_btn_mobile.insertAdjacentHTML("afterend", `
<div class="opti-login-dropdown-mobile">
    <style>
        .opti-login-dropdown-mobile {
            background: #F2F3F4;
            height: 0;
            overflow: hidden;
            transition: height 0.3s ease;
        }

        .opti-login-dropdown-mobile .dd-container {
            padding: 32px 16px 11px;
            text-align: start;
        }

        .opti-login-dropdown-mobile .dd-container a {
            color: #470054;
            font-size: 16px;
            line-height: 21px;
            font-weight: 700;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            text-decoration: none;
            display: inline-block;
            border-bottom: 0;
            position: relative;
            display: block;
        }

        .opti-login-dropdown-mobile .dd-container a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #470054;
            display: none;
        }

        .opti-login-dropdown-mobile .dd-container a:hover {
            opacity: 0.8;
        }

        .opti-login-dropdown-mobile .dd-container a:hover::after {
            display: block;
        }

        .opti-login-dropdown-mobile .dd-container .margin-bottom {
            margin-bottom: 24px;
        }

        .opti-login-dropdown-mobile .dd-container .horizontal-line {
            width: 100%;
            height: 2px;
            background-color: #D9D9D9;
        }
    </style>
    <div class="dd-container">
        <a class="margin-bottom" href="https://www.royallondon.com/secure/customer/dashboard">Pensions started in 2004
            or later</a>
        <a class="margin-bottom" href="https://my.royallondon.com/">Pensions started before 2004</a>
        <a class="margin-bottom" href="https://www.royallondon.com/existing-customers/online-service/">Not sure?</a>
        <div class="horizontal-line margin-bottom"></div>
        <a class="margin-bottom" href="https://my.royallondon.com/">Life Insurance & Investments</a>
        <div class="horizontal-line margin-bottom"></div>
        <a href="https://www.royallondon.com/existing-customers/online-service/download-our-mobile-app/">Download our
            app <span style="font-weight: 400; display: block; font-family: PT Serif,Georgia,serif;">(Pensions
                started in 2004 or later)</span></a>
    </div>
</div>
    `);

    login_btn_mobile.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdown = document.querySelector(".opti-login-dropdown-mobile");
        if (dropdown) {
            if (dropdown.style.height === "0px" || !dropdown.style.height) {
                // Expand the dropdown to match its content height
                dropdown.style.height = dropdown.scrollHeight + "px";
            } else {
                // Collapse the dropdown
                dropdown.style.height = "0px";
            }
        }
    });

});