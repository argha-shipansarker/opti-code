var utils = optimizely.get('utils');

utils.waitForElement('#header').then(function (head) {
    head.style.borderBottom = "0px";
});

utils.waitForElement('#header .headercontainer .header__content').then(function (head_content) {
    head_content.style.paddingTop = "16px";
});

utils.waitForElement('#header .top-head-section').then(function (topHead) {
    topHead.style.display = "none";
});

utils.waitForElement('#header .mainnavcolumn .navbar').then(function (mainHead) {
    mainHead.style.display = "none";
    mainHead.parentElement.style.display = "flex";

    mainHead.parentElement.insertAdjacentHTML("afterbegin", `
        <div class="opti-back-to-main-site">
            <style>
                .opti-back-to-main-site {
                    margin-left: auto;
                    margin-top: auto;
                }

                .opti-back-to-main-site a {
                    width: 209px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 3px solid #6C3376;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 18px;
                    color: #6C3376;
                    background-color: white;
                    font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
                }

                .opti-back-to-main-site a:hover {
                    color: white;
                    background-color: #6C3376;
                }
            </style>
            <a href="https://www.royallondon.com/">Back</a>
        </div>
    `);
});

utils.waitForElement('.header__burger-menu').then(function (mobileBurgerMenu) {
    mobileBurgerMenu.style.display = "none";
    mobileBurgerMenu.parentElement.style.display = "flex";

    mobileBurgerMenu.parentElement.insertAdjacentHTML("afterbegin", `
        <div class="opti-back-mobile">
            <style>
                .opti-back-mobile {
                    margin-left: auto;
                    margin-top: auto;
                }

                .opti-back-mobile a {
                    width: 90px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid #6C3376;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 18px;
                    color: #6C3376;
                    background-color: white;
                    font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
                }

                .opti-back-mobile a:hover {
                    color: white;
                    background-color: #6C3376;
                }
            </style>
            <a href="https://www.royallondon.com/">Back</a>
        </div>
    `);
});

utils.waitForElement('#main-content .breadcrumbs').then(function (breadcrumbs) {
    breadcrumbs.style.display = "none";
});

utils.waitForElement('#main-content .standardPage .content-heading').then(function (content_heading) {
    const d_block = content_heading.querySelector(".d-none");
    if (d_block) {
        d_block.style.display = "none";
        d_block.style.setProperty("display", "none", "important");
    }

    const page_heading = content_heading.querySelector(".page-heading");
    if (page_heading) {
        page_heading.style.display = "none";
    }

    content_heading.insertAdjacentHTML("afterbegin", `
        <div class="opti-page-heading">
            <style>
                .opti-page-heading {
                    padding: 0 0 0 15px;
                    margin-top: 46px;
                }

                .opti-page-heading h1 {
                    font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
                    font-size: 61px;
                    font-weight: 700;
                    line-height: 70px;
                    color: #6c3376;
                }

                @media (max-width: 600px) {
                    .opti-page-heading h1 {
                        font-size: 43px;
                        line-height: 53px;
                    }

                    .opti-page-heading {
                        margin-top: 19px;
                    }
                }
            </style>
            <h1>Log in or register</h1>
        </div>
    `);
});

utils.waitForElement('.richtextcontainerblock').then(function (rich_text) {
    rich_text.style.display = "none";

    rich_text.insertAdjacentHTML("afterend", `
<div class="opti-login-new-design">
    <style>
        .opti-login-new-design {
            margin-top: 32px;
            margin-bottom: 19px;
        }

        .opti-login-new-design .login-section {
            display: flex;
            gap: 30px;
        }

        .opti-login-new-design .login-section .pension-login,
        .opti-login-new-design .login-section .insurance-login {
            flex-basis: 50%;
            display: flex;
            flex-direction: column;
        }

        .opti-login-new-design ul {
            list-style-type: disc;
            font-size: 16px;
            line-height: 24px;
            margin-left: 18px;
        }

        .opti-login-new-design ul li {
            padding: 0;
            text-indent: -0.125rem;
        }

        .opti-login-new-design ul li::before {
            display: none;
        }

        .opti-login-new-design .common-login-design {
            padding: 24px 32px;
            background-color: #F2F3F4;
        }

        .opti-login-new-design .login-heading {
            font-size: 40px;
            line-height: 50px;
            font-weight: 700;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            margin: 0;
            color: #470054;
        }

        .opti-login-new-design .login-sub-heading {
            font-size: 25px;
            line-height: 33px;
            font-weight: 700;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            margin: 0;
            color: #470054;
        }

        .opti-login-new-design .description-text {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            font-family: PT Serif, Georgia, serif;
            margin: 0;
        }

        .opti-login-new-design .description-text a {
            text-decoration: underline;
            color: #00818A;
            border-bottom: 0;
        }

        .opti-login-new-design .description-text a:hover {
            color: #00818A;
        }

        .opti-login-new-design .common-btn {
            height: 50px;
            font-size: 18px;
            line-height: 18px;
            font-weight: 700;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .opti-login-new-design .login-btn {
            background-color: #00818A;
            width: 116px;
            color: white;
            border-bottom: 0;
        }

        .opti-login-new-design .register-btn {
            border: 3px solid #00818A;
            color: #00818A;
            width: 141px;
        }

        .opti-login-new-design .login-btn:hover,
        .opti-login-new-design .mobile-app-section .section-content .app-btn:hover,
        .opti-login-new-design .online-service-section .online-service-btn:hover {
            color: white;
            background-color: #00676e;
        }

        .opti-login-new-design .register-btn:hover {
            color: white;
            background-color: #00818A;
        }

        .opti-login-new-design .login-section .button-section {
            display: flex;
            margin-top: auto;
            gap: 24px;
        }

        .opti-login-new-design .desktop {
            display: block;
        }

        .opti-login-new-design .mobile {
            display: none;
        }

        .opti-login-new-design .mobile-app-section {
            background-color: #470054;
            margin: 32px calc((100vw - 1140px) / 2* -1);
        }

        .opti-login-new-design .mobile-app-section .section-content {
            max-width: 1140px;
            margin: auto;
            display: flex;
            align-items: end;
        }

        .opti-login-new-design .mobile-app-section .section-content .app-btn {
            background-color: #00818A;
            width: 165px;
            color: white;
            border-bottom: 0;
        }

        .opti-login-new-design .mobile-app-section .section-content .app-heading {
            font-size: 31px;
            line-height: 46px;
            font-weight: 700;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            margin: 0;
            color: white;
        }

        .opti-login-new-design .mobile-app-section .section-content .text-content {
            color: white;
            margin-top: 40px;
            margin-bottom: 32px;
        }

        .opti-login-new-design .online-service-section .online-content {
            background-color: #F2F3F4;
            padding: 72px 169px 72px 201px;
        }

        .opti-login-new-design .online-service-section .online-heading {
            font-size: 31px;
            line-height: 46px;
            font-weight: 700;
            font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
            margin: 0;
            color: #470054;
        }

        .opti-login-new-design .online-service-section .online-service-btn {
            background-color: #00818A;
            width: 170px;
            color: white;
            border-bottom: 0;
        }

        @media (max-width: 600px) {
            .opti-login-new-design .login-section {
                flex-direction: column;
            }

            .opti-login-new-design .common-login-design {
                padding: 24px;
            }

            .opti-login-new-design .login-heading {
                font-size: 27px;
                line-height: 40px;
            }

            .opti-login-new-design .login-sub-heading {
                font-size: 22px;
                line-height: 40px;
            }

            .opti-login-new-design .login-section .button-section {
                flex-direction: column;
                gap: 16px;
            }

            .opti-login-new-design .login-btn {
                width: 100%;
            }

            .opti-login-new-design .register-btn {
                width: 100%;
            }

            .opti-login-new-design .desktop {
                display: none;
            }

            .opti-login-new-design .mobile {
                display: block;
            }

            .opti-login-new-design .mobile-app-section {
                background-color: #470054;
                margin: 32px 0;
            }

            .opti-login-new-design .mobile-app-section .section-content {
                flex-direction: column;
                align-items: unset;
            }

            .opti-login-new-design .mobile-app-section .section-content img {
                margin: 24px 9px;
                border-bottom: 1px solid #D1D8DC;
            }

            .opti-login-new-design .mobile-app-section .section-content .text-content {
                margin: 8px 24px 48px;
            }

            .opti-login-new-design .mobile-app-section .section-content .app-heading {
                font-size: 32px;
                line-height: 42px;
            }

            .opti-login-new-design .mobile-app-section .section-content .app-btn {
                width: 100%;
            }

            .opti-login-new-design .online-service-section .online-content {
                padding: 24px;
            }

            .opti-login-new-design .online-service-section .online-heading {
                font-size: 32px;
                line-height: 42px;
            }

            .opti-login-new-design .online-service-section .online-service-btn {
                width: 100%;
            }
        }
    </style>

    <div class="login-section col-md-12">
        <div class="pension-login common-login-design">
            <p class="login-heading">For pensions started in 2004 or later</p>
            <div class="login-description desktop" style="margin-top: 16px;">
                <p class="description-text" style="margin-bottom: 16px;">Royal London and Scottish Life customers can:
                </p>
                <ul>
                    <li>Access our online service</li>
                    <li>View and manage plans</li>
                    <li>Make payments</li>
                    <li>Nominate beneficiaries</li>
                </ul>
            </div>
            <div class="login-description mobile" style="margin-top: 16px;">
                <p class="description-text" style="margin-bottom: 16px;">Royal London and Scottish Life customers.
                </p>
                <p class="description-text" style="margin-bottom: 24px;">Our <a
                        href="https://www.royallondon.com/existing-customers/online-service/download-our-mobile-app/">mobile
                        app</a> is also available to download.
                </p>
            </div>
            <div class="button-section">
                <a class="login-btn common-btn" href="https://www.royallondon.com/secure/customer/dashboard">Login</a>
                <a class="register-btn common-btn"
                    href="/existing-customers/online-service/register-for-access-to-pensions-started-in-2004-or-later/">Register</a>
            </div>
        </div>
        <div class="insurance-login common-login-design">
            <p class="login-heading">For insurance policies </p>
            <p class="login-sub-heading" style="margin-top: 4px;">(or pensions and investments started before 2004)</p>
            <div class="login-description" style="margin-top: 16px;">
                <p class="description-text">
                    If you have a Personal Menu or Whole of Life insurance policy with Royal London.
                </p>
                <p class="description-text desktop" style="margin-bottom: 16px; margin-top: 20px;">
                    You can also log in to manage pensions or investments started before 2004 with:
                </p>
                <p class="description-text mobile" style="margin-bottom: 16px; margin-top: 20px;">
                    You can also log in to manage pensions or investments started before 2004.
                </p>
                <ul style="margin-bottom: 40px;">
                    <li>Royal London</li>
                    <li>National and Provincial Policy</li>
                    <li>Refuge Assurance</li>
                    <li>Friends Provident</li>
                    <li>Royal Liver</li>
                    <li>United Friendly</li>
                </ul>
            </div>
            <div class="button-section">
                <a class="login-btn common-btn" href="https://my.royallondon.com/">Login</a>
                <a class="register-btn common-btn"
                    href="/existing-customers/online-service/register-to-access-your-insurance-policy-or-pensions-and-investments-started-before-2004/">Register</a>
            </div>
        </div>
    </div>

    <div class="mobile-app-section">
        <div class="section-content">
            <img src="https://cdn.optimizely.com/img/22633721281/ce587257821443d0923d1c7904fa00c7.png" alt="mobile">
            <div class="text-content">
                <p class="app-heading">Manage your pension with our mobile app</p>
                <p class="description-text" style="margin: 16px 0;">For Royal London or Scottish Life pensions started
                    in 2004 or later, our
                    mobile app helps you to:</p>
                <ul style="margin-left: 24px;">
                    <li>See how your plan is doing</li>
                    <li>Make a payment</li>
                    <li>Nominate beneficiaries, and more.</li>
                </ul>
                <!-- <p class="description-text" style="margin-bottom: 24px;">and more.</p> -->
                <a class="app-btn common-btn" href="/existing-customers/online-service/download-our-mobile-app/">Get the
                    app</a>
            </div>
        </div>

    </div>

    <div class="online-service-section col-md-12">
        <div class="online-content">
            <p class="online-heading">Need help with our online service?</p>
            <p class="description-text" style="margin: 23px 0;">If you're not sure which login to use, if you need help
                with
                registering, or if you can't remember your login details, you can visit our online service help page.
            </p>
            <a class="online-service-btn common-btn" href="/existing-customers/online-service/help/">Get support</a>
        </div>
    </div>
</div>
    `);
});

utils.observeSelector('.featurebannerblock', function (featureBlock) {
    featureBlock.style.display = 'none';
});
