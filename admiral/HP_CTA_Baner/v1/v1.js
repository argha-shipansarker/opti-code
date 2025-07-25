const utils = optimizely.get('utils');

utils.observeSelector('.hero-banner--electric-vehicle', function (hero_banner) {
    hero_banner.style.display = "none";
    hero_banner.insertAdjacentHTML("afterend", `<div class="opti-new-home-banner">
    <style>
        .opti-new-home-banner {
            position: relative;
            max-width: 1440px;
            height: 543px;
            background-image: url(https://cdn.optimizely.com/img/17941920996/7360a0738f5344f8b465cd0efb5cd776.png);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            margin: auto;
        }

        .opti-new-home-banner .opti-container {
            max-width: 1024px;
            height: 100%;
            padding: 0 24px;
            position: relative;
            margin: auto;
        }

        .opti-new-home-banner .opti-container .banner-info {
            position: absolute;
            bottom: 0;
            right: 0;
            max-width: 550px;
        }

        .opti-new-home-banner .opti-container .banner-info .heading {
            font-size: 42px;
            line-height: 48px;
            font-weight: 600;
            padding: 0 0 8px;
            border-bottom: 1px solid #357BB0;
            color: #2350A5;
            margin: 0 0 24px;
            text-align: center;
        }

        .opti-new-home-banner .opti-container .banner-info .sub-heading {
            font-size: 22px;
            line-height: 28px;
            font-weight: 600;
            margin: 0 0 8px;
            color: #2350A5;
            padding: 0;
            text-align: center;
        }

        .opti-new-home-banner .opti-container .banner-info .sub-description {
            font-size: 20px;
            line-height: 28px;
            font-weight: 300;
            margin: 0 0 24px;
            color: #21201C;
            padding: 0;
            text-align: center;
        }

        .opti-new-home-banner .opti-container .banner-info .login-cta {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px 38px;
            color: #FFFFFF;
            border-radius: 100px;
            background-color: #B00058;
            max-width: fit-content;
            font-size: 18px;
            line-height: 100%;
            font-weight: 600;
            margin: 0 auto 98px;
        }

        .opti-new-home-banner .opti-container .banner-info .banner-logo.mobile {
            display: none;
        }

        .opti-new-home-banner .opti-container .banner-info .login-cta svg {
            margin-right: 8px;
        }

        .opti-new-home-banner .opti-container .banner-info .policy-options {
            display: flex;
            border: 1px solid #B8B8CC;
            border-top-right-radius: 16px;
            border-top-left-radius: 16px;
            border-bottom: 0;
        }

        .opti-new-home-banner .opti-container .banner-info .policy-options .policy {
            flex-basis: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 16.5px 0 13.5px;
        }

        .opti-new-home-banner .opti-container .banner-info .policy-options .policy p {
            margin: 0;
            padding: 0;
            font-size: 18px;
            line-height: 24px;
            font-weight: 600;
        }

        .opti-new-home-banner .opti-container .banner-info .policy-options .policy.car {
            background: #AFF0F0;
            color: #00535C;
            border-top-left-radius: 16px;
            border-right: 1px solid #B8B8CC;
        }

        .opti-new-home-banner .opti-container .banner-info .policy-options .policy.home {
            background: #FFDBEA;
            color: #94004C;
            border-right: 1px solid #B8B8CC;
        }

        .opti-new-home-banner .opti-container .banner-info .policy-options .policy.claims {
            background: #FFE4D1;
            color: #922007;
            border-right: 1px solid #B8B8CC;
        }

        .opti-new-home-banner .opti-container .banner-info .policy-options .policy.contact {
            background: #E8F7CC;
            color: #1A6035;
            border-top-right-radius: 16px;
        }

        @media (max-width: 768px) {
            .opti-new-home-banner {
                background-image: none;
                background-position: unset;
                background-size: unset;
                background-repeat: unset;
                min-height: 500px;
                height: auto;
                background-color: white;
            }

            .opti-new-home-banner .opti-container {
                padding: 0px;
            }

            .opti-new-home-banner .opti-container .banner-info {
                position: unset;
                max-width: unset;
            }

            .opti-new-home-banner .opti-container .banner-info .heading {
                font-size: 24px;
                line-height: 30px;
                padding: 40px 0px 8px;
                margin: 0 24px 24px;
            }

            .opti-new-home-banner .opti-container .banner-info .sub-heading {
                font-size: 18px;
                line-height: 24px;
                padding: 0 24px;
            }

            .opti-new-home-banner .opti-container .banner-info .sub-description {
                font-size: 16px;
                line-height: 22px;
                margin: 0 0 16px;
                padding: 0 24px;
            }

            .opti-new-home-banner .opti-container .banner-info .login-cta {
                padding: 15px 24px;
                font-size: 15px;
                line-height: 100%;
                font-weight: 600;
                margin: 0 auto 0px;
                position: relative;
                z-index: 9;
            }

            .opti-new-home-banner .opti-container .banner-info .banner-logo.mobile {
                display: block;
                width: 100%;
                height: 197px;
                margin-top: -28px;
            }

            .opti-new-home-banner .opti-container .banner-info .policy-options {
                border: 1px solid #B8B8CC;
                border-top-right-radius: 0px;
                border-top-left-radius: 0px;
                border-bottom: 1px solid #B8B8CC;
            }

            .opti-new-home-banner .opti-container .banner-info .policy-options .policy p {
                text-align: center;
                font-size: 15px;
            }

            .opti-new-home-banner .opti-container .banner-info .policy-options .policy.car {
                border-top-left-radius: 0px;
            }

            .opti-new-home-banner .opti-container .banner-info .policy-options .policy.contact {
                border-top-right-radius: 0px;
            }
        }
    </style>
    <div class="opti-container">
        <div class="banner-info">
            <p class="heading">Take control of your policy</p>
            <p class="sub-heading">Managing your insurance is easy with MyAccount</p>
            <p class="sub-description">Whether you’re here to add cover or update your details, we’ve got your back.
                Just log in to MyAccount and take charge of your policy, your way.</p>

            <a href="https://login.admiral.com/myaccount/login/" class="login-cta">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.8218 3.76881C3.8758 5.49281 5.2758 6.89381 6.9998 6.89381C8.7768 6.89381 10.1778 5.38481 10.1778 3.66181C10.1778 1.99181 8.7228 0.482807 6.9998 0.536807C5.2758 0.536807 3.8218 2.04481 3.8218 3.76881ZM6.9998 13.4648H3.2828C0.697801 13.4648 0.643801 13.4648 0.643801 12.3328C0.590801 11.6868 0.643801 11.0408 0.751801 10.3938C0.858801 9.80181 1.0748 9.26281 1.3978 8.77881C1.8288 8.13181 2.4218 7.91681 3.2828 7.80881C4.1448 7.64681 5.1148 8.50881 5.7068 8.67081C6.9458 8.99381 8.0768 8.83181 9.2088 8.29381C9.4238 8.18581 10.0158 7.70081 10.8238 7.80881C11.6328 7.91681 12.1708 8.18581 12.6018 8.77881C12.9788 9.31681 13.1398 9.85581 13.2488 10.4478C13.3558 11.0408 13.4098 11.6328 13.3558 12.2258C13.3558 13.4648 13.3558 13.4648 10.8788 13.4648H6.9998Z"
                        fill="white" />
                </svg>
                Log in to MyAccount
            </a>

            <img class="banner-logo mobile"
                src="https://cdn.optimizely.com/img/17941920996/605bd568bd2743ceb692ca749cabccdc.png" alt="banner-logo">

            <div class="policy-options">
                <a href="https://www.admiral.com/car-insurance" class="policy car">
                    <svg width="58" height="38" viewBox="0 0 58 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.7555 9.86182C20.583 8.16536 21.9413 6.16994 23.2367 5.86379C24.3924 5.59005 26.9099 5.5 28.75 5.5C30.5901 5.5 33.1041 5.59005 34.2598 5.86379C35.5622 6.17355 36.9275 8.19057 37.755 9.89424C37.8039 9.94466 38.6838 11.8068 38.6838 11.8068C38.778 11.9293 40.0316 13.5501 40.5937 14.2236C41.0651 14.7891 41.6377 17.3464 40.887 21.7155L40.8276 26.4375C40.8276 26.9525 40.5763 27.4136 40.0595 27.4892L36.8576 27.4964C36.3758 27.4424 36.0266 27.0282 36.0301 26.4411V25.1984C34.2075 25.3569 31.6551 25.501 28.75 25.5442C25.8414 25.501 23.2925 25.3569 21.4699 25.1984V26.4447C21.4699 27.0318 21.1242 27.4496 20.6424 27.5L17.4405 27.4928C16.9238 27.4172 16.6724 26.9561 16.6724 26.4411L16.613 21.7191C15.8623 17.35 16.4349 14.7927 16.9063 14.2272C17.4894 13.5285 18.8197 11.8032 18.8197 11.8032C18.8197 11.8032 19.7066 9.96988 19.759 9.86543M34.5252 19.7669C36.3444 19.7344 37.7026 19.5868 38.4952 19.0105C39.3507 18.3874 39.0539 17.0763 38.5197 15.9669C38.3521 15.6212 37.9575 15.4663 37.6153 15.6139C35.2061 16.6585 34.5147 17.8003 33.9421 18.6251C33.6069 19.1077 33.9456 19.7777 34.5217 19.7669M22.9923 19.7633C21.1731 19.7308 19.7904 19.5832 18.9978 19.0069C18.1423 18.3874 18.4391 17.0727 18.9734 15.9633C19.141 15.6176 19.5355 15.4627 19.8777 15.6139C22.2869 16.6549 23.0027 17.8003 23.5754 18.6251C23.9106 19.1077 23.5719 19.7777 22.9957 19.7669M28.7465 7.32613C25.3037 7.32613 24.0677 7.55304 24.0677 7.55304C23.6731 7.60347 23.1564 7.87001 22.9189 8.16175C22.9189 8.16175 22.5977 8.4499 21.9832 9.57367C21.3686 10.6974 21.1661 11.2845 21.1661 11.2845C21.0509 11.5763 21.2325 11.8428 21.5781 11.8717C21.5781 11.8717 22.9783 12.0373 28.2018 12.0769H29.2877C34.5112 12.0409 35.9114 11.8717 35.9114 11.8717C36.2571 11.8428 36.4421 11.5763 36.3234 11.2845C36.3234 11.2845 36.1209 10.6938 35.5064 9.57367C34.8918 8.4499 34.5706 8.16175 34.5706 8.16175C34.3367 7.87361 33.8164 7.60347 33.4218 7.55304C33.4218 7.55304 32.1893 7.32613 28.743 7.32613"
                            fill="#00535C" />
                    </svg>
                    <p>Add a car</p>
                </a>

                <a href="https://www.admiral.com/home-insurance" class="policy home">
                    <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M28.2152 27.5H21.7968C21.3742 27.5 21.0381 27.4149 20.782 27.0022C20.6988 26.8352 20.6123 26.5863 20.6123 26.4193V18.4413C20.6123 18.3594 20.6956 18.1924 20.782 18.1105C23.9064 15.5331 30.1936 10.2964 30.2768 10.2964C30.869 10.7942 37.2459 16.0309 39.7812 18.1105C39.9509 18.1924 39.9509 18.3594 39.9509 18.5264V26.3373C39.9509 27.0841 39.5283 27.5 38.7696 27.5H32.5209V21.0156H28.2152V27.5ZM35.6549 9.48976C35.4244 9.2755 32.8666 7.07936 31.6021 5.99862C30.757 5.33379 29.659 5.33379 28.9003 5.99862C28.0552 6.74537 20.1193 13.3117 17.0782 15.8891C16.6556 16.22 16.6556 16.472 16.9949 16.8879C17.3311 17.2188 17.584 17.6347 17.9233 17.9687C18.1762 18.2995 18.5155 18.2995 18.7684 18.0506C20.1289 16.9195 29.7454 8.91 30.2512 8.40902C30.3344 8.49094 39.0321 15.8041 41.734 18.0506C42.0701 18.2995 42.3262 18.2995 42.6623 17.9687C42.9152 17.6378 43.2546 17.3039 43.5074 16.9699C43.8436 16.554 43.8436 16.305 43.4242 15.8891C42.3262 14.9754 39.9605 12.8958 39.9605 12.732V6.25069C39.9605 5.83478 39.7908 5.66778 39.3683 5.66778H36.3271C35.8213 5.66778 35.6517 5.83478 35.6517 6.33261V9.48976H35.6549Z"
                            fill="#94004C" />
                    </svg>
                    <p>Add a home</p>
                </a>

                <a href="https://www.admiral.com/existing-customers/make-a-claim.php" class="policy claims">
                    <svg width="57" height="38" viewBox="0 0 57 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M30.2409 14.8983L29.9294 18.4998C29.8933 19.0638 29.79 19.4877 29.5818 19.7698C29.4441 20.0168 29.1653 20.1219 28.8883 20.1586C28.4374 20.1937 28.1259 19.9817 27.9521 19.6296C27.8488 19.3826 27.7439 18.9938 27.7094 18.4998L27.4668 14.9701C27.4324 14.2642 27.398 13.7684 27.398 13.4864C27.398 12.9924 27.5356 12.6036 27.8127 12.2865C28.0898 11.9695 28.4374 11.8276 28.8883 11.8276C29.5818 11.8276 29.8933 12.1814 30.0327 12.4634C30.2065 12.8155 30.2753 13.2745 30.2753 13.8753C30.3115 14.1924 30.2753 14.5462 30.2409 14.8983ZM29.6524 24.0772C29.4097 24.2173 29.1309 24.3242 28.8539 24.2874C28.4718 24.2874 28.1603 24.1473 27.8833 23.9003C27.6062 23.6533 27.4668 23.3695 27.4324 22.9824C27.398 22.5935 27.57 22.0645 27.8488 21.7825C28.1259 21.5004 28.4718 21.3586 28.8539 21.3586C29.2359 21.3586 29.5818 21.5004 29.8589 21.7825C30.1721 22.0645 30.3115 22.5234 30.2753 22.9473C30.2753 23.4413 30.0671 23.8302 29.6524 24.0772ZM40.4013 23.6533L30.8656 6.74414C29.9294 5.08529 27.57 5.08529 26.6339 6.74414L17.0982 23.6533C16.1259 25.3121 17.3047 27.5 19.2132 27.5H38.3207C40.1948 27.5 41.3736 25.3121 40.4013 23.6533Z"
                            fill="#922007" />
                    </svg>
                    <p>Claims</p>
                </a>

                <a href=" https://www.admiral.com/contact-us" class="policy contact">
                    <svg width="59" height="38" viewBox="0 0 59 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M32.1043 20.3831C33.5435 20.3831 36.3411 20.3831 36.3411 16.1042V9.65218C36.3411 7.35863 34.4998 5.5 32.2301 5.5H20.3611C18.0897 5.5 16.25 7.35863 16.25 9.65218V16.1042C16.25 18.0676 17.4113 19.9435 19.4311 20.3831L18.0633 24.3898L25.0823 20.3831H32.1043ZM38.1032 10.4313H38.8578C41.0204 10.4313 42.25 12.4182 42.25 14.5553V20.1703C42.25 22.0806 41.0918 23.6951 39.502 24.2114L40.4677 27.5L34.7203 24.3835H30.0969C28.5226 24.3835 27.1689 23.3447 26.5773 21.9507H33.7997C36.8007 21.9507 38.1032 20.1703 38.1032 17.1555V10.4313Z"
                            fill="#1A6035" />
                    </svg>
                    <p>Contact us</p>
                </a>
            </div>
        </div>
    </div>
</div>`);
});