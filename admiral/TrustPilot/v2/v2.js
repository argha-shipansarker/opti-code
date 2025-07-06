const utils = optimizely.get('utils');

const black_logo_trust_pilot = `<div class="opti-trustpilot-widget">
    <style>
        adm-page-actions>div {
            align-items: center;
        }

        adm-page-actions adm-page-actions-primary {
            margin-left: unset !important;
        }

        .opti-trustpilot-widget {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 9px;
            flex-wrap: wrap;
            margin-right: 20px;
        }

        .opti-trustpilot-widget .excellent-message {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #444444;
            margin: 0;
        }

        .opti-trustpilot-widget .rating-image {
            width: 107.14px;
            height: 20px;
        }

        .opti-trustpilot-widget .break {
            display: none;
            flex-basis: 100%;
            height: 0;
        }

        .opti-trustpilot-widget .review-number {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            margin: 0;
            color: #444444;
        }

        .opti-trustpilot-widget .review-number span {
            text-decoration: underline;
        }

        .opti-trustpilot-widget .logo-image {
            width: 80.69px;
            height: 20px;
        }

        @media (max-width: 500px) {
            .opti-trustpilot-widget {
                margin: auto;
                order: 99;
                margin-top: 16px;
                margin-right: 0;
                margin-bottom: 30px;
            }

            .opti-trustpilot-widget .break {
                display: block;
            }
        }
    </style>
    <p class="excellent-message">Excellent</p>
    <img class="rating-image" src="https://cdn.optimizely.com/img/24400620820/9c75db0fb97b4933b7ee75f712c9bfdb.png"
        alt="trustpilot-rating">
    <div class="break"></div>
    <p class="review-number"><span>107,906 reviews</span> on</p>
    <img class="logo-image" src="https://cdn.optimizely.com/img/24400620820/dc4622a7b2c64d3bac21437cfac5a436.png"
        alt="trustpilot-logo">
</div>`;

const white_logo_trust_pilot = `<div class="opti-trustpilot-widget">
    <style>
        .opti-trustpilot-widget {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 9px;
            flex-wrap: wrap;
            margin: 48px auto 0;
        }

        .opti-trustpilot-widget .excellent-message {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #FFFFFF;
            margin: 0;
        }

        .opti-trustpilot-widget .rating-image {
            width: 107.14px;
            height: 20px;
        }

        .opti-trustpilot-widget .break {
            display: none;
            flex-basis: 100%;
            height: 0;
        }

        .opti-trustpilot-widget .review-number {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            margin: 0;
            color: #FFFFFF;
        }

        .opti-trustpilot-widget .review-number span {
            text-decoration: underline;
        }

        .opti-trustpilot-widget .logo-image {
            width: 80.69px;
            height: 20px;
        }

        @media (max-width: 500px) {
            .opti-trustpilot-widget {
                margin: 37px auto 25px;
            }

            .opti-trustpilot-widget .break {
                display: block;
            }
        }
    </style>
    <p class="excellent-message">Excellent</p>
    <img class="rating-image" src="https://cdn.optimizely.com/img/24400620820/9c75db0fb97b4933b7ee75f712c9bfdb.png"
        alt="trustpilot-rating">
    <div class="break"></div>
    <p class="review-number"><span>107,906 reviews</span> on</p>
    <svg width="82" height="20" viewBox="0 0 82 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24859_4916)">
            <path
                d="M21.7543 7.08838H30.0001V8.62684H26.7579V17.2753H24.975V8.62684H21.7471V7.08838H21.7543ZM29.6479 9.89931H31.1719V11.3227H31.2007C31.251 11.1214 31.3445 10.9273 31.4811 10.7404C31.6177 10.5535 31.783 10.3738 31.9771 10.2228C32.1712 10.0647 32.3869 9.94244 32.6241 9.84179C32.8614 9.74834 33.1058 9.69801 33.3502 9.69801C33.5371 9.69801 33.6737 9.7052 33.7456 9.71239C33.8175 9.71958 33.8894 9.73396 33.9685 9.74115V11.3084C33.8535 11.2868 33.7384 11.2724 33.6162 11.258C33.494 11.2437 33.379 11.2365 33.264 11.2365C32.9908 11.2365 32.732 11.294 32.4875 11.4018C32.2431 11.5097 32.0346 11.675 31.8549 11.8835C31.6752 12.0992 31.5314 12.358 31.4236 12.6743C31.3157 12.9906 31.2654 13.3501 31.2654 13.7598V17.2681H29.6407V9.89931H29.6479ZM41.4379 17.2753H39.842V16.2473H39.8132C39.6119 16.6211 39.3172 16.9158 38.9218 17.1387C38.5264 17.3616 38.1238 17.4766 37.714 17.4766C36.7435 17.4766 36.0389 17.2393 35.6076 16.7577C35.1763 16.276 34.9606 15.5499 34.9606 14.5794V9.89931H36.5853V14.4212C36.5853 15.0683 36.7075 15.5283 36.9591 15.7943C37.2036 16.0603 37.5558 16.1969 38.0016 16.1969C38.3466 16.1969 38.627 16.1466 38.8571 16.0388C39.0871 15.9309 39.274 15.7943 39.4106 15.6146C39.5544 15.4421 39.655 15.2264 39.7197 14.982C39.7844 14.7376 39.8132 14.4716 39.8132 14.184V9.9065H41.4379V17.2753ZM44.2057 14.9101C44.2561 15.3846 44.4358 15.7153 44.7449 15.9094C45.0612 16.0963 45.4351 16.1969 45.8736 16.1969C46.0246 16.1969 46.1971 16.1826 46.3912 16.161C46.5853 16.1394 46.7722 16.0891 46.9376 16.0244C47.1101 15.9597 47.2467 15.859 47.3617 15.7296C47.4696 15.6002 47.5199 15.4349 47.5127 15.2264C47.5055 15.0179 47.4264 14.8454 47.2827 14.716C47.1389 14.5794 46.9591 14.4787 46.7363 14.3925C46.5134 14.3134 46.2618 14.2415 45.9742 14.184C45.6867 14.1265 45.3991 14.0618 45.1044 13.9971C44.8024 13.9324 44.5077 13.8461 44.2273 13.7526C43.9469 13.6592 43.6953 13.5298 43.4724 13.3644C43.2496 13.2063 43.0699 12.9978 42.9405 12.7462C42.8039 12.4946 42.7392 12.1854 42.7392 11.8116C42.7392 11.409 42.8398 11.0783 43.0339 10.8051C43.228 10.5319 43.4796 10.3163 43.7744 10.1509C44.0763 9.98558 44.407 9.87055 44.7737 9.79866C45.1403 9.73396 45.4926 9.69801 45.8233 9.69801C46.2043 9.69801 46.5709 9.74115 46.916 9.82023C47.2611 9.89931 47.5774 10.0287 47.8578 10.2156C48.1382 10.3954 48.3682 10.6326 48.5551 10.9202C48.742 11.2077 48.8571 11.56 48.9074 11.9698H47.2108C47.1317 11.5815 46.9591 11.3156 46.6788 11.1862C46.3984 11.0496 46.0749 10.9849 45.7154 10.9849C45.6004 10.9849 45.4638 10.992 45.3057 11.0136C45.1475 11.0352 45.0037 11.0711 44.8599 11.1214C44.7233 11.1718 44.6083 11.2509 44.5077 11.3515C44.4142 11.4521 44.3639 11.5815 44.3639 11.7469C44.3639 11.9482 44.4358 12.1064 44.5724 12.2286C44.709 12.3508 44.8887 12.4514 45.1116 12.5377C45.3344 12.6168 45.586 12.6887 45.8736 12.7462C46.1612 12.8037 46.4559 12.8684 46.7579 12.9331C47.0526 12.9978 47.3402 13.0841 47.6277 13.1775C47.9153 13.271 48.1669 13.4004 48.3898 13.5657C48.6126 13.7311 48.7924 13.9324 48.929 14.1768C49.0655 14.4212 49.1374 14.7304 49.1374 15.0898C49.1374 15.5283 49.0368 15.895 48.8355 16.2041C48.6342 16.5061 48.3754 16.7577 48.0591 16.9446C47.7428 17.1315 47.3833 17.2753 46.9951 17.3616C46.6069 17.4478 46.2187 17.491 45.8377 17.491C45.3704 17.491 44.939 17.4406 44.5436 17.3328C44.1482 17.225 43.8031 17.0668 43.5156 16.8583C43.228 16.6427 42.998 16.3767 42.8326 16.0603C42.6673 15.744 42.581 15.363 42.5666 14.9245H44.2057V14.9101ZM49.5688 9.89931H50.7981V7.68507H52.4228V9.89931H53.8894V11.1143H52.4228V15.0539C52.4228 15.2264 52.43 15.3702 52.4444 15.4996C52.4588 15.6218 52.4947 15.7296 52.5451 15.8159C52.5954 15.9022 52.6745 15.9669 52.7823 16.01C52.8901 16.0532 53.0267 16.0747 53.2136 16.0747C53.3287 16.0747 53.4437 16.0747 53.5587 16.0675C53.6737 16.0603 53.7888 16.046 53.9038 16.0172V17.2753C53.7241 17.2969 53.5443 17.3112 53.379 17.3328C53.2064 17.3544 53.0339 17.3616 52.8542 17.3616C52.4228 17.3616 52.0778 17.3184 51.819 17.2394C51.5602 17.1603 51.3517 17.0381 51.2079 16.8799C51.0569 16.7217 50.9635 16.5276 50.9059 16.2904C50.8556 16.0532 50.8197 15.78 50.8125 15.478V11.1286H49.5832V9.89931H49.5688ZM55.0397 9.89931H56.5781V10.8986H56.6069C56.8369 10.4672 57.1532 10.1653 57.563 9.97839C57.9728 9.79147 58.4113 9.69801 58.893 9.69801C59.4753 9.69801 59.9786 9.79866 60.4099 10.0071C60.8412 10.2084 61.2007 10.4888 61.4883 10.8483C61.7758 11.2077 61.9843 11.6247 62.1281 12.0992C62.2719 12.5736 62.3438 13.0841 62.3438 13.6232C62.3438 14.1193 62.2791 14.601 62.1497 15.0611C62.0203 15.5283 61.8261 15.9381 61.5673 16.2976C61.3085 16.657 60.9778 16.9374 60.5752 17.1531C60.1727 17.3688 59.7054 17.4766 59.159 17.4766C58.9218 17.4766 58.6845 17.455 58.4473 17.4119C58.21 17.3688 57.98 17.2969 57.7643 17.2034C57.5486 17.1099 57.3402 16.9877 57.1604 16.8368C56.9735 16.6858 56.8226 16.5133 56.6931 16.3191H56.6644V20H55.0397V9.89931ZM60.719 13.5945C60.719 13.2638 60.6759 12.9403 60.5896 12.624C60.5034 12.3076 60.374 12.0345 60.2014 11.79C60.0289 11.5456 59.8132 11.3515 59.5616 11.2077C59.3028 11.0639 59.008 10.9849 58.6773 10.9849C57.9944 10.9849 57.4768 11.2221 57.1317 11.6966C56.7866 12.1711 56.6141 12.8037 56.6141 13.5945C56.6141 13.9683 56.6572 14.3134 56.7507 14.6297C56.8441 14.946 56.9735 15.2192 57.1604 15.4493C57.3402 15.6793 57.5558 15.859 57.8075 15.9885C58.0591 16.125 58.3538 16.1897 58.6845 16.1897C59.0584 16.1897 59.3675 16.1107 59.6263 15.9597C59.8851 15.8087 60.0936 15.6074 60.2589 15.3702C60.4243 15.1258 60.5465 14.8526 60.6184 14.5434C60.6831 14.2343 60.719 13.918 60.719 13.5945ZM63.5875 7.08838H65.2122V8.62684H63.5875V7.08838ZM63.5875 9.89931H65.2122V17.2753H63.5875V9.89931ZM66.6644 7.08838H68.2891V17.2753H66.6644V7.08838ZM73.2711 17.4766C72.6816 17.4766 72.1568 17.3759 71.6967 17.1818C71.2366 16.9877 70.8484 16.7145 70.5249 16.3767C70.2086 16.0316 69.9642 15.6218 69.7988 15.1473C69.6335 14.6729 69.5472 14.148 69.5472 13.5801C69.5472 13.0194 69.6335 12.5018 69.7988 12.0273C69.9642 11.5528 70.2086 11.143 70.5249 10.7979C70.8412 10.4529 71.2366 10.1869 71.6967 9.99276C72.1568 9.79866 72.6816 9.69801 73.2711 9.69801C73.8606 9.69801 74.3855 9.79866 74.8456 9.99276C75.3057 10.1869 75.6939 10.4601 76.0174 10.7979C76.3337 11.143 76.5781 11.5528 76.7435 12.0273C76.9088 12.5018 76.9951 13.0194 76.9951 13.5801C76.9951 14.148 76.9088 14.6729 76.7435 15.1473C76.5781 15.6218 76.3337 16.0316 76.0174 16.3767C75.7011 16.7217 75.3057 16.9877 74.8456 17.1818C74.3855 17.3759 73.8606 17.4766 73.2711 17.4766ZM73.2711 16.1897C73.6306 16.1897 73.9469 16.1107 74.2129 15.9597C74.4789 15.8087 74.6946 15.6074 74.8671 15.363C75.0397 15.1186 75.1619 14.8382 75.2481 14.5291C75.3272 14.2199 75.3704 13.9036 75.3704 13.5801C75.3704 13.2638 75.3272 12.9547 75.2481 12.6383C75.1691 12.322 75.0397 12.0488 74.8671 11.8044C74.6946 11.56 74.4789 11.3659 74.2129 11.2149C73.9469 11.0639 73.6306 10.9849 73.2711 10.9849C72.9117 10.9849 72.5954 11.0639 72.3294 11.2149C72.0634 11.3659 71.8477 11.5672 71.6752 11.8044C71.5026 12.0488 71.3804 12.322 71.2942 12.6383C71.2151 12.9547 71.1719 13.2638 71.1719 13.5801C71.1719 13.9036 71.2151 14.2199 71.2942 14.5291C71.3732 14.8382 71.5026 15.1186 71.6752 15.363C71.8477 15.6074 72.0634 15.8087 72.3294 15.9597C72.5954 16.1179 72.9117 16.1897 73.2711 16.1897ZM77.4696 9.89931H78.6989V7.68507H80.3236V9.89931H81.7902V11.1143H80.3236V15.0539C80.3236 15.2264 80.3308 15.3702 80.3452 15.4996C80.3596 15.6218 80.3955 15.7296 80.4458 15.8159C80.4962 15.9022 80.5752 15.9669 80.6831 16.01C80.7909 16.0532 80.9275 16.0747 81.1144 16.0747C81.2295 16.0747 81.3445 16.0747 81.4595 16.0675C81.5745 16.0603 81.6896 16.046 81.8046 16.0172V17.2753C81.6249 17.2969 81.4451 17.3112 81.2798 17.3328C81.1072 17.3544 80.9347 17.3616 80.755 17.3616C80.3236 17.3616 79.9786 17.3184 79.7197 17.2394C79.4609 17.1603 79.2525 17.0381 79.1087 16.8799C78.9577 16.7217 78.8643 16.5276 78.8067 16.2904C78.7564 16.0532 78.7205 15.78 78.7133 15.478V11.1286H77.4839V9.89931H77.4696Z"
                fill="white" />
            <path
                d="M19.8565 7.08842H12.4086L10.1081 0L7.80042 7.08842L0.352539 7.08124L6.38417 11.4666L4.07648 18.5478L10.1081 14.1697L16.1326 18.5478L13.832 11.4666L19.8565 7.08842Z"
                fill="#00B67A" />
            <path d="M14.35 13.0697L13.8323 11.4666L10.1084 14.1696L14.35 13.0697Z" fill="#005128" />
        </g>
        <defs>
            <clipPath id="clip0_24859_4916">
                <rect width="81.4378" height="20" fill="white" transform="translate(0.352539)" />
            </clipPath>
        </defs>
    </svg>
</div>`;

utils.observeSelector('eui-registration-lookup adm-wrap', function (lookup_section) {
    if (window.location.pathname == '/Admiral/direct/search' && !document.querySelector('.opti-trust-pilot-design')) {
        lookup_section.insertAdjacentHTML("beforeend", `<div class="opti-trust-pilot-design">
    <style>
        .opti-trust-pilot-design .benefit-section {
            display: flex;
            padding: 0 16px 16px;
            gap: 16px;
        }

        .opti-trust-pilot-design .benefit-section .benefit {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .opti-trust-pilot-design .benefit-section .benefit .desktop {
            display: block;
        }

        .opti-trust-pilot-design .benefit-section .benefit .mobile {
            display: none;
        }

        .opti-trust-pilot-design .benefit-section .benefit p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #25469B;
            margin: 16px 0 0;
        }

        .opti-trust-pilot-design .star-message {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            color: #444444;
            text-align: center;
            margin-bottom: 19.19px;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 9px;
            flex-wrap: wrap;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .excellent-message {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #444444;
            margin: 0;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .rating-image {
            width: 107.14px;
            height: 20px;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .break {
            display: none;
            flex-basis: 100%;
            height: 0;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .review-number {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            margin: 0;
            color: #444444;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .review-number span {
            text-decoration: underline;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .logo-image {
            width: 80.69px;
            height: 20px;
        }

        @media (max-width: 500px) {
            .opti-trust-pilot-design .benefit-section {
                flex-direction: column;
                gap: 12px;
                padding: 12px 0;
                border-top: 1px solid #CED9E5;
            }

            .opti-trust-pilot-design .benefit-section .benefit {
                flex-direction: row;
            }

            .opti-trust-pilot-design .benefit-section .benefit p {
                margin: 0 0 0 16px;
            }

            .opti-trust-pilot-design .benefit-section .benefit .desktop {
                display: none;
            }

            .opti-trust-pilot-design .benefit-section .benefit .mobile {
                display: block;
            }

            .opti-trust-pilot-design .star-message {
                padding-bottom: 12px;
                border-bottom: 1px solid #CED9E5;
                margin-bottom: 20px;
            }

            .opti-trust-pilot-design .opti-trustpilot-widget .break {
                display: block;
            }
        }
    </style>
    <div class="benefit-section">
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 11.6121C31.36 11.6121 37.333 17.5851 37.333 24.9451C37.333 32.3051 31.36 38.2781 24 38.2781C16.64 38.2781 10.667 32.3051 10.667 24.9451C10.667 17.5851 16.64 11.6121 24 11.6121ZM21.333 27.0652L17.8799 23.6248L16 25.5046L21.333 30.8386L32 20.1716L30.1201 18.2781L21.333 27.0652Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 5.33301C15.68 5.33301 18.667 8.32 18.667 12C18.667 15.68 15.68 18.667 12 18.667C8.32 18.667 5.33301 15.68 5.33301 12C5.33301 8.32 8.32 5.33301 12 5.33301ZM10.667 13.0596L8.94043 11.3398L8 12.2803L10.667 14.9463L16 9.61328L15.0596 8.66699L10.667 13.0596Z"
                    fill="white" />
            </svg>
            <p>99% of claims accepted*</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 32.3046L32.24 37.2786L30.054 27.9046L37.334 21.5986L27.746 20.7846L24 11.9446L20.254 20.7846L10.666 21.5986L17.946 27.9046L15.76 37.2786L24 32.3046Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 15.513L16.12 18L15.027 13.313L18.667 10.16L13.873 9.75301L12 5.33301L10.127 9.75301L5.33301 10.16L8.97301 13.313L7.88001 18L12 15.513Z"
                    fill="white" />
            </svg>
            <p>5-star rated car insurance</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M20 26.2781C23.56 26.2781 30.667 28.0654 30.667 31.6121V35.6121H9.33301V31.6121C9.33301 28.0654 16.44 26.2781 20 26.2781ZM30.2266 26.4519C33.9066 26.9852 38.667 28.7054 38.667 31.6121V35.6121H33.333V31.6121C33.333 29.3721 32.0532 27.6919 30.2266 26.4519ZM20 14.2781C22.9455 14.2781 25.333 16.6665 25.333 19.6121C25.3328 22.5574 22.9454 24.9451 20 24.9451C17.0546 24.9451 14.6672 22.5574 14.667 19.6121C14.667 16.6665 17.0545 14.2781 20 14.2781ZM28 14.2781C30.9467 14.2781 33.333 16.6654 33.333 19.6121C33.3328 22.5586 30.9466 24.9451 28 24.9451C27.3733 24.9451 26.7866 24.8114 26.2266 24.6248C27.3331 23.2515 27.9999 21.5052 28 19.6121C28 17.7187 27.3332 15.9717 26.2266 14.5984C26.7866 14.4117 27.3733 14.2781 28 14.2781Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M10 12.667C11.7799 12.667 15.3326 13.5599 15.333 15.333V17.333H4.66699V15.333C4.66743 13.5599 8.22011 12.667 10 12.667ZM15.1133 12.7529C16.9531 13.0196 19.3326 13.8799 19.333 15.333V17.333H16.667V15.333C16.6669 14.2132 16.0265 13.3729 15.1133 12.7529ZM10 6.66699C11.4727 6.66699 12.6668 7.8604 12.667 9.33301C12.667 10.8058 11.4728 12 10 12C8.52724 12 7.33301 10.8058 7.33301 9.33301C7.33318 7.8604 8.52735 6.66699 10 6.66699ZM14 6.66699C15.4732 6.66699 16.6668 7.85982 16.667 9.33301C16.667 10.8063 15.4733 12 14 12C13.6867 12 13.3933 11.9332 13.1133 11.8398C13.6666 11.1532 14 10.2796 14 9.33301C13.9999 8.38659 13.6664 7.5137 13.1133 6.82715C13.3933 6.73382 13.6867 6.66699 14 6.66699Z"
                    fill="white" />
            </svg>
            <p>Join over 5 million drivers</p>
        </div>
    </div>
    <p class="star-message">*Based on claims made during 2024 with Admiral, Gold, Platinum and Telematics covers.</p>
    <div class="opti-trustpilot-widget">
        <p class="excellent-message">Excellent</p>
        <img class="rating-image" src="https://cdn.optimizely.com/img/24400620820/9c75db0fb97b4933b7ee75f712c9bfdb.png"
            alt="trustpilot-rating">
        <div class="break"></div>
        <p class="review-number"><span>107,906 reviews</span> on</p>
        <img class="logo-image" src="https://cdn.optimizely.com/img/24400620820/dc4622a7b2c64d3bac21437cfac5a436.png"
            alt="trustpilot-logo">
    </div>
</div>`);
    }
});

//applicable for /Admiral/direct/list, /Admiral/direct/summary, /Admiral/direct/aboutyou
utils.observeSelector('adm-page-actions > div', function (page_action_section) {
    if ((window.location.pathname == '/Admiral/direct/list' || window.location.pathname == '/Admiral/direct/summary') && !document.querySelector('.opti-trustpilot')) {
        page_action_section.insertAdjacentHTML("afterbegin", `${black_logo_trust_pilot}`);
    }
});


//applicable for /Admiral/direct/cardetails
utils.observeSelector('eui-vehicle-details .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/cardetails') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `${white_logo_trust_pilot}`);
    }

});

utils.observeSelector('eui-direct-cover-details .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/coverdetails') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `${white_logo_trust_pilot}`);
    }

});

utils.observeSelector('eui-cover-details-mileage-and-excess .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/coverdetailsdirect') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `${white_logo_trust_pilot}`);
    }

});

utils.observeSelector('eui-direct-driver-details .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/driverdetails') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `${white_logo_trust_pilot}`);
    }

});

utils.observeSelector('eui-direct-ncb .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/noclaimsbonus') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `${white_logo_trust_pilot}`);
    }

});

utils.observeSelector('eui-main-driver-reg-keeper .adm-footer-actions__actions', function (page_footer_section) {
    if ((window.location.pathname == '/Admiral/direct/maindriver') && !document.querySelector('.opti-trustpilot')) {
        page_footer_section.insertAdjacentHTML("beforeend", `${white_logo_trust_pilot}`);
    }

});

utils.observeSelector('eui-coverable-summary > adm-wrap .adm-wrap__content', function (summary_section) {
    if (window.location.pathname == '/Admiral/direct/quotesummary' && !document.querySelector('.opti-trust-pilot-design')) {
        summary_section.insertAdjacentHTML("beforeend", `<div class="opti-trust-pilot-design">
    <style>
        .opti-trust-pilot-design {
            background: white;
            padding: 16px;
        }

        .opti-trust-pilot-design .benefit-section {
            display: flex;
            margin-bottom: 16px;
            gap: 16px;
        }

        .opti-trust-pilot-design .benefit-section .benefit {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .opti-trust-pilot-design .benefit-section .benefit .desktop {
            display: block;
        }

        .opti-trust-pilot-design .benefit-section .benefit .mobile {
            display: none;
        }

        .opti-trust-pilot-design .benefit-section .benefit p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #25469B;
            margin: 16px 0 0;
            text-align: center;
        }

        .opti-trust-pilot-design .star-message {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            color: #444444;
            text-align: center;
            margin-bottom: 19.19px;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 9px;
            flex-wrap: wrap;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .excellent-message {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #444444;
            margin: 0;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .rating-image {
            width: 107.14px;
            height: 20px;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .break {
            display: none;
            flex-basis: 100%;
            height: 0;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .review-number {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            margin: 0;
            color: #444444;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .review-number span {
            text-decoration: underline;
        }

        .opti-trust-pilot-design .opti-trustpilot-widget .logo-image {
            width: 80.69px;
            height: 20px;
        }

        @media (max-width: 500px) {
            .opti-trust-pilot-design .benefit-section {
                flex-direction: column;
                gap: 12px;
            }

            .opti-trust-pilot-design .benefit-section .benefit {
                flex-direction: row;
            }

            .opti-trust-pilot-design .benefit-section .benefit p {
                margin: 0 0 0 16px;
            }

            .opti-trust-pilot-design .benefit-section .benefit .desktop {
                display: none;
            }

            .opti-trust-pilot-design .benefit-section .benefit .mobile {
                display: block;
            }

            .opti-trust-pilot-design .star-message {
                padding-bottom: 12px;
                border-bottom: 1px solid #CED9E5;
                margin-bottom: 20px;
            }

            .opti-trust-pilot-design .opti-trustpilot-widget .break {
                display: block;
            }
        }
    </style>
    <div class="benefit-section">
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 11.6121C31.36 11.6121 37.333 17.5851 37.333 24.9451C37.333 32.3051 31.36 38.2781 24 38.2781C16.64 38.2781 10.667 32.3051 10.667 24.9451C10.667 17.5851 16.64 11.6121 24 11.6121ZM21.333 27.0652L17.8799 23.6248L16 25.5046L21.333 30.8386L32 20.1716L30.1201 18.2781L21.333 27.0652Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 5.33301C15.68 5.33301 18.667 8.32 18.667 12C18.667 15.68 15.68 18.667 12 18.667C8.32 18.667 5.33301 15.68 5.33301 12C5.33301 8.32 8.32 5.33301 12 5.33301ZM10.667 13.0596L8.94043 11.3398L8 12.2803L10.667 14.9463L16 9.61328L15.0596 8.66699L10.667 13.0596Z"
                    fill="white" />
            </svg>
            <p>99% of claims accepted*</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M24 32.3046L32.24 37.2786L30.054 27.9046L37.334 21.5986L27.746 20.7846L24 11.9446L20.254 20.7846L10.666 21.5986L17.946 27.9046L15.76 37.2786L24 32.3046Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M12 15.513L16.12 18L15.027 13.313L18.667 10.16L13.873 9.75301L12 5.33301L10.127 9.75301L5.33301 10.16L8.97301 13.313L7.88001 18L12 15.513Z"
                    fill="white" />
            </svg>
            <p>5-star rated car insurance</p>
        </div>
        <div class="benefit">
            <svg class="desktop" width="48" height="49" viewBox="0 0 48 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24.9451" r="24" fill="#41A5F5" />
                <path
                    d="M20 26.2781C23.56 26.2781 30.667 28.0654 30.667 31.6121V35.6121H9.33301V31.6121C9.33301 28.0654 16.44 26.2781 20 26.2781ZM30.2266 26.4519C33.9066 26.9852 38.667 28.7054 38.667 31.6121V35.6121H33.333V31.6121C33.333 29.3721 32.0532 27.6919 30.2266 26.4519ZM20 14.2781C22.9455 14.2781 25.333 16.6665 25.333 19.6121C25.3328 22.5574 22.9454 24.9451 20 24.9451C17.0546 24.9451 14.6672 22.5574 14.667 19.6121C14.667 16.6665 17.0545 14.2781 20 14.2781ZM28 14.2781C30.9467 14.2781 33.333 16.6654 33.333 19.6121C33.3328 22.5586 30.9466 24.9451 28 24.9451C27.3733 24.9451 26.7866 24.8114 26.2266 24.6248C27.3331 23.2515 27.9999 21.5052 28 19.6121C28 17.7187 27.3332 15.9717 26.2266 14.5984C26.7866 14.4117 27.3733 14.2781 28 14.2781Z"
                    fill="white" />
            </svg>
            <svg class="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#41A5F5" />
                <path
                    d="M10 12.667C11.7799 12.667 15.3326 13.5599 15.333 15.333V17.333H4.66699V15.333C4.66743 13.5599 8.22011 12.667 10 12.667ZM15.1133 12.7529C16.9531 13.0196 19.3326 13.8799 19.333 15.333V17.333H16.667V15.333C16.6669 14.2132 16.0265 13.3729 15.1133 12.7529ZM10 6.66699C11.4727 6.66699 12.6668 7.8604 12.667 9.33301C12.667 10.8058 11.4728 12 10 12C8.52724 12 7.33301 10.8058 7.33301 9.33301C7.33318 7.8604 8.52735 6.66699 10 6.66699ZM14 6.66699C15.4732 6.66699 16.6668 7.85982 16.667 9.33301C16.667 10.8063 15.4733 12 14 12C13.6867 12 13.3933 11.9332 13.1133 11.8398C13.6666 11.1532 14 10.2796 14 9.33301C13.9999 8.38659 13.6664 7.5137 13.1133 6.82715C13.3933 6.73382 13.6867 6.66699 14 6.66699Z"
                    fill="white" />
            </svg>
            <p>Join over 5 million drivers</p>
        </div>
    </div>
    <p class="star-message">*Based on claims made during 2024 with Admiral, Gold, Platinum and Telematics covers.</p>
    <div class="opti-trustpilot-widget">
        <p class="excellent-message">Excellent</p>
        <img class="rating-image" src="https://cdn.optimizely.com/img/24400620820/9c75db0fb97b4933b7ee75f712c9bfdb.png"
            alt="trustpilot-rating">
        <div class="break"></div>
        <p class="review-number"><span>107,906 reviews</span> on</p>
        <img class="logo-image" src="https://cdn.optimizely.com/img/24400620820/dc4622a7b2c64d3bac21437cfac5a436.png"
            alt="trustpilot-logo">
    </div>
</div>`);
    }
});