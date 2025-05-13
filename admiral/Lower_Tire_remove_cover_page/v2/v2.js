const utils = optimizely.get('utils');

if (window.location.pathname == '/Admiral/cover' && sessionStorage.getItem('opti-landing-tier')) {
    const opti_landing_tier = JSON.parse(sessionStorage.getItem('opti-landing-tier'));

    utils.observeSelector('eui-tier eui-motor-tiers-table adm-hero .adm-hero__title', function (hero_title) {
        hero_title.innerText = "Do you need to upgrade your cover";

        if (!document.querySelector('.opti-sub-heading')) {
            hero_title.insertAdjacentHTML("afterend", `<div class="opti-sub-heading">
    <style>
        .opti-sub-heading {
            display: flex;
            align-items: start;
            justify-content: center;
            margin-top: 10px;
        }

        .opti-sub-heading div {
            height: 20px;
            width: 20px;
        }

        .opti-sub-heading p {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            margin-bottom: 0;
            margin-left: 9px;
            text-align: start;
        }
    </style>
    <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.99999 1.66675C5.39999 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.39999 18.3334 9.99999 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 9.99999 1.66675ZM10.8333 14.1667H9.16666V9.16675H10.8333V14.1667ZM10.8333 7.50008H9.16666V5.83342H10.8333V7.50008Z"
                fill="#41A5F5" />
        </svg>
    </div>
    <p>Consider existing insurance policies, to ensure that you aren’t duplicating your cover.</p>
</div>`);
        }
    });

    utils.observeSelector('eui-tier eui-motor-tiers-table adm-wrap:nth-of-type(3)', function (cove_selected_div) {
        cove_selected_div.style.display = "none";
    });

    if (opti_landing_tier == "essential") {
        utils.observeSelector('eui-tier eui-motor-tiers-table adm-wrap:nth-of-type(2) .adm-wrap__content', function (table_div) {

            table_div.style.display = "none";

            const yourDetails_event = dataLayer.find(obj => obj.event === 'yourDetails');

            if (!document.querySelector('.opti-cover-design')) {
                table_div.insertAdjacentHTML("afterend", `<div class="opti-cover-design">
    <style>
        .opti-cover-design .essential-cover,
        .opti-cover-design .admiral-cover {
            max-width: 640px;
            border: 1px solid #CED9E5;
        }

        .opti-cover-design .admiral-cover {
            margin-top: 27px;
            margin-bottom: 70px;
        }

        .opti-cover-design .cover-head {
            padding: 17px 16px 18px;
            color: #FFFFFF;
            display: flex;
            align-items: start;
        }

        .opti-cover-design .essential-cover .cover-head {
            background-color: #C20060;
            align-items: center;
        }

        .opti-cover-design .admiral-cover .cover-head {
            background-color: #25469B;
        }

        .opti-cover-design .cover-head p {
            font-size: 24px;
            line-height: 30px;
            font-weight: 700;
            margin-left: 6px;
            margin-bottom: 0;
        }

        .opti-cover-design .cover-head p span {
            font-weight: 400;
        }


        .opti-cover-design .cover-body {
            padding: 20px;
            background-color: #FFFFFF;
        }

        .opti-cover-design .cover-body .heading-message {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            margin-bottom: 11px;
        }

        .opti-cover-design .cover-body .cover-benefits {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }

        .opti-cover-design .cover-body .cover-benefits.last-benefit {
            align-items: flex-start;
            margin-bottom: 0;
        }

        .opti-cover-design .cover-body .cover-benefits p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #444444;
            margin-left: 9px;
        }

        .opti-cover-design .cover-body .cover-benefits div {
            height: 20px;
            width: 20px;
        }

        .opti-cover-design .cover-footer {
            background-color: #FFFFFF;
            padding: 0 25px 9px 17px;
        }

        .opti-cover-design .cover-footer .price-selection-section {
            display: flex;
            gap: 29.5px;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-insurance-section {
            display: flex;
            flex-direction: column;
            flex-basis: 47%;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section p {
            font-size: 24px;
            line-height: 30px;
            font-weight: 700;
            margin-bottom: 0;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section p span {
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section img {
            height: 44px;
            width: 87.5px;
        }

        .opti-cover-design .cover-footer .price-selection-section .insurance-section {
            display: flex;
            align-items: center;
            margin-top: 4px;
        }

        .opti-cover-design .cover-footer .price-selection-section .insurance-section a {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            margin-left: 10px;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section {
            flex-basis: 50%;
        }


        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"] {
            display: none;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section label {
            padding: 12px;
            border: 1px solid #CED9E5;
            border-radius: 3px;
            margin-bottom: 0;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label .radio-text {
            font-size: 16px;
            line-height: 20px;
            font-weight: 700;
            color: #006DCC;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label .radio-icon {
            width: 20px;
            height: 20px;
            border: 2px solid #006DCC;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            transition: border-color 0.3s ease;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label .radio-icon::after {
            content: "";
            width: 10px;
            height: 10px;
            background-color: transparent;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section label:has(input[type="radio"]:checked) {
            border-color: #0A8A19;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"]:checked+.radio-label .radio-icon {
            border-color: #0A8A19;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"]:checked+.radio-label .radio-text {
            color: #0A8A19;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"]:checked+.radio-label .radio-icon::after {
            background-color: #0A8A19;
        }

        @media (max-width: 650px) {
            .opti-cover-design {
                padding: 0 20px;
            }

            .opti-cover-design .admiral-cover {
                margin-top: 20px;
                margin-bottom: 22.66px;
            }

            .opti-cover-design .cover-head {
                padding: 13px 14px 11px 16px;
            }

            .opti-cover-design .cover-head p {
                font-size: 16px;
                line-height: 24px;
                margin-left: 9px;
            }

            .opti-cover-design .cover-head div,
            .opti-cover-design .cover-head div svg {
                height: 20px;
                width: 20px;
            }

            .opti-cover-design .cover-body {
                padding: 16px;
            }

            .opti-cover-design .cover-footer {
                padding: 0 16px 16px;
            }

            .opti-cover-design .cover-footer .price-selection-section {
                flex-direction: column;
                gap: 5px;
            }
        }
    </style>

    <div class="essential-cover">
        <div class="cover-head">
            <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18 1.5L4.5 7.5V16.5C4.5 24.825 10.26 32.61 18 34.5C25.74 32.61 31.5 24.825 31.5 16.5V7.5L18 1.5ZM15 25.5L9 19.5L11.115 17.385L15 21.255L24.885 11.37L27 13.5L15 25.5Z"
                        fill="white" />
                </svg>
            </div>
            <p>You’ve selected Essential cover</p>
        </div>

        <div class="cover-body">
            <p class="heading-message">Cover includes:</p>
            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Courtesy Car</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Personal Injury Cover up to £5,000</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Uninsured driver promise</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Up to £300 towards the cost of replacing the locks</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.8333 5.34175L14.6583 4.16675L9.99999 8.82508L5.34166 4.16675L4.16666 5.34175L8.82499 10.0001L4.16666 14.6584L5.34166 15.8334L9.99999 11.1751L14.6583 15.8334L15.8333 14.6584L11.175 10.0001L15.8333 5.34175Z"
                            fill="#CC0033" />
                    </svg>
                </div>
                <p>No Windscreen cover</p>
            </div>

            <div class="cover-benefits last-benefit">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.8333 5.34175L14.6583 4.16675L9.99999 8.82508L5.34166 4.16675L4.16666 5.34175L8.82499 10.0001L4.16666 14.6584L5.34166 15.8334L9.99999 11.1751L14.6583 15.8334L15.8333 14.6584L11.175 10.0001L15.8333 5.34175Z"
                            fill="#CC0033" />
                    </svg>
                </div>
                <p>No cover whilst driving other cars
                    <span style="font-size: 14px; line-height: 21px; font-weight: 400; display: block;">
                        ${yourDetails_event.driver1name.firstName} ${yourDetails_event.driver1name.lastName} will
                        not be covered by this policy when driving
                        other
                        cars.
                    </span>
                </p>
            </div>
        </div>

        <div class="cover-footer">
            <div class="price-selection-section">
                <div class="price-insurance-section">
                    <div class="price-section">
                        <p>${document.querySelector('#ESSENTIAL-col-footer .adm-control-radio__title strong').innerText} <span>${document.querySelector('#ESSENTIAL-col-footer small').innerText == "total" ? "total" : "month"}</span></p>
                        <img src="/eui-cq-assets/helm/images/brands/admiral/logos/tiers/essential.svg"
                            alt="essential-image">
                    </div>
                    <div class="insurance-section">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.5 1.5C3.675 1.5 3.0075 2.175 3.0075 3L3 15C3 15.825 3.6675 16.5 4.4925 16.5H13.5C14.325 16.5 15 15.825 15 15V6L10.5 1.5H4.5ZM9.75 6.75V2.625L13.875 6.75H9.75Z"
                                fill="#41A5F5" />
                        </svg>
                        <a
                            href="https://mktgblobpubaccess0.blob.core.windows.net/eui-pdf-assets/admiral/IP-MO-2-005.pdf" target="_blank">Insurance
                            Product Information Document</a>
                    </div>
                </div>
                <div class="selection-section">
                    <label>
                        <input type="radio" name="cover-choice" id="essential-cover" value="essential">
                        <span class="radio-label">
                            <span class="radio-icon"></span>
                            <span class="radio-text">Selected level of cover</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </div>

    <div class="admiral-cover">
        <div class="cover-head">
            <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.5 7.5L18 1.5L31.5 7.5V16.5C31.5 24.825 25.74 32.61 18 34.5C10.26 32.61 4.5 24.825 4.5 16.5V7.5ZM25.5 19.5H19.5V25.5H16.5V19.5H10.5V16.5H16.5V10.5H19.5V16.5H25.5V19.5Z"
                        fill="white" />
                </svg>
            </div>
            <p>Upgrade to Admiral cover <span>for an extra</span> £4.56 <span>month</span></p>
        </div>

        <div class="cover-body">
            <p class="heading-message">Cover includes all the benefits of Essential cover, plus:</p>
            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Windscreen Cover</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>European Cover</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>New vehicle replacement (subject to criteria)</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Personal Belongings cover up to £200</p>
            </div>

            <div class="cover-benefits last-benefit">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Cover whilst driving other cars
                    <span style="font-size: 14px; line-height: 21px; font-weight: 400; display: block;">
                        Third Party only cover for ${yourDetails_event.driver1name.firstName} ${yourDetails_event.driver1name.lastName} whilst driving privately insured cars – with the owner’s
                        permission (provided the owner is not ${yourDetails_event.driver1name.firstName} ${yourDetails_event.driver1name.lastName} or their spouse/partner)
                    </span>
                </p>
            </div>
        </div>

        <div class="cover-footer">
            <div class="price-selection-section">
                <div class="price-insurance-section">
                    <div class="price-section">
                        <p>${document.querySelector('#ADMIRAL-col-footer .adm-control-radio__title strong').innerText} <span>${document.querySelector('#ADMIRAL-col-footer small').innerText == "total" ? "total" : "month"}</span></p>
                        <img src="/eui-cq-assets/helm/images/brands/admiral/logos/tiers/admiral.svg"
                            alt="admiral-image">
                    </div>
                    <div class="insurance-section">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.5 1.5C3.675 1.5 3.0075 2.175 3.0075 3L3 15C3 15.825 3.6675 16.5 4.4925 16.5H13.5C14.325 16.5 15 15.825 15 15V6L10.5 1.5H4.5ZM9.75 6.75V2.625L13.875 6.75H9.75Z"
                                fill="#41A5F5" />
                        </svg>
                        <a
                            href="https://mktgblobpubaccess0.blob.core.windows.net/eui-pdf-assets/admiral/IP-MO-2-005.pdf" target="_blank">Insurance
                            Product Information Document</a>
                    </div>
                </div>
                <div class="selection-section">
                    <label>
                        <input type="radio" name="cover-choice" id="admiral-cover" value="admiral">
                        <span class="radio-label">
                            <span class="radio-icon"></span>
                            <span class="radio-text">Upgrade to this level of cover</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>`);
            }

            if (document.querySelector('#essential-cover') && document.querySelector('#admiral-cover')) {
                if (document.querySelector('.adm-control-table__col-header--admiral.selected')) {
                    document.querySelector('#admiral-cover').checked = true;
                } else if (document.querySelector('.adm-control-table__col-header--essential.selected')) {
                    document.querySelector('#essential-cover').checked = true;
                }

                document.querySelector('#essential-cover').addEventListener('click', function () {
                    document.querySelector('.adm-control-table__col-header--essential').click();
                });

                document.querySelector('#admiral-cover').addEventListener('click', function () {
                    document.querySelector('.adm-control-table__col-header--admiral').click();
                });
            }
        });
    }

    if (opti_landing_tier == "admiral") {
        utils.observeSelector('eui-tier eui-motor-tiers-table adm-wrap:nth-of-type(2) .adm-wrap__content', function (table_div) {

            table_div.style.display = "none";

            const yourDetails_event = dataLayer.find(obj => obj.event === 'yourDetails');

            if (!document.querySelector('.opti-cover-design')) {
                table_div.insertAdjacentHTML("afterend", `<div class="opti-cover-design">
    <style>
        .opti-cover-design .admiral-cover,
        .opti-cover-design .gold-cover {
            max-width: 640px;
            border: 1px solid #CED9E5;
        }

        .opti-cover-design .gold-cover {
            margin-top: 27px;
            margin-bottom: 70px;
        }

        .opti-cover-design .cover-head {
            padding: 17px 16px 18px;
            color: #FFFFFF;
            display: flex;
            align-items: start;
        }

        .opti-cover-design .admiral-cover .cover-head {
            background-color: #25469B;
            align-items: center;
        }

        .opti-cover-design .gold-cover .cover-head {
            background-color: #FCB700;
        }

        .opti-cover-design .cover-head p {
            font-size: 24px;
            line-height: 30px;
            font-weight: 700;
            margin-left: 6px;
            margin-bottom: 0;
        }

        .opti-cover-design .gold-cover .cover-head p {
            color: #444444;
        }

        .opti-cover-design .cover-head p span {
            font-weight: 400;
        }


        .opti-cover-design .cover-body {
            padding: 20px;
            background-color: #FFFFFF;
        }

        .opti-cover-design .cover-body .heading-message {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            margin-bottom: 11px;
        }

        .opti-cover-design .cover-body .cover-benefits {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }

        .opti-cover-design .cover-body .cover-benefits.last-benefit {
            align-items: flex-start;
            margin-bottom: 0;
        }

        .opti-cover-design .cover-body .cover-benefits p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: #444444;
            margin-left: 9px;
        }

        .opti-cover-design .cover-body .cover-benefits div {
            height: 20px;
            width: 20px;
        }

        .opti-cover-design .cover-footer {
            background-color: #FFFFFF;
            padding: 0 25px 9px 17px;
        }

        .opti-cover-design .cover-footer .price-selection-section {
            display: flex;
            gap: 29.5px;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-insurance-section {
            display: flex;
            flex-direction: column;
            flex-basis: 47%;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section p {
            font-size: 24px;
            line-height: 30px;
            font-weight: 700;
            margin-bottom: 0;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section p span {
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
        }

        .opti-cover-design .cover-footer .price-selection-section .price-section img {
            height: 44px;
            width: 87.5px;
        }

        .opti-cover-design .cover-footer .price-selection-section .insurance-section {
            display: flex;
            align-items: center;
            margin-top: 4px;
        }

        .opti-cover-design .cover-footer .price-selection-section .insurance-section a {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            margin-left: 10px;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section {
            flex-basis: 50%;
        }


        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"] {
            display: none;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section label {
            padding: 12px;
            border: 1px solid #CED9E5;
            border-radius: 3px;
            margin-bottom: 0;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label .radio-text {
            font-size: 16px;
            line-height: 20px;
            font-weight: 700;
            color: #006DCC;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label .radio-icon {
            width: 20px;
            height: 20px;
            border: 2px solid #006DCC;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            transition: border-color 0.3s ease;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section .radio-label .radio-icon::after {
            content: "";
            width: 10px;
            height: 10px;
            background-color: transparent;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section label:has(input[type="radio"]:checked) {
            border-color: #0A8A19;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"]:checked+.radio-label .radio-icon {
            border-color: #0A8A19;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"]:checked+.radio-label .radio-text {
            color: #0A8A19;
        }

        .opti-cover-design .cover-footer .price-selection-section .selection-section input[type="radio"]:checked+.radio-label .radio-icon::after {
            background-color: #0A8A19;
        }

        @media (max-width: 650px) {
            .opti-cover-design {
                padding: 0 20px;
            }

            .opti-cover-design .gold-cover {
                margin-top: 20px;
                margin-bottom: 22.66px;
            }

            .opti-cover-design .cover-head {
                padding: 13px 14px 11px 16px;
            }

            .opti-cover-design .cover-head p {
                font-size: 16px;
                line-height: 24px;
                margin-left: 9px;
            }

            .opti-cover-design .cover-head div,
            .opti-cover-design .cover-head div svg {
                height: 20px;
                width: 20px;
            }

            .opti-cover-design .cover-body {
                padding: 16px;
            }

            .opti-cover-design .cover-footer {
                padding: 0 16px 16px;
            }

            .opti-cover-design .cover-footer .price-selection-section {
                flex-direction: column;
                gap: 5px;
            }
        }
    </style>

    <div class="admiral-cover">
        <div class="cover-head">
            <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18 1.5L4.5 7.5V16.5C4.5 24.825 10.26 32.61 18 34.5C25.74 32.61 31.5 24.825 31.5 16.5V7.5L18 1.5ZM15 25.5L9 19.5L11.115 17.385L15 21.255L24.885 11.37L27 13.5L15 25.5Z"
                        fill="white" />
                </svg>
            </div>
            <p>You’ve selected Admiral cover</p>
        </div>

        <div class="cover-body">
            <p class="heading-message">Cover includes:</p>
            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Courtesy Car</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Personal Injury Cover up to £5,000</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Windscreen Cover</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Uninsured driver promise</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>New vehicle replacement (subject to criteria)</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Personal Belongings cover up to £200</p>
            </div>

            <div class="cover-benefits last-benefit">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Cover whilst driving other cars
                    <span style="font-size: 14px; line-height: 21px; font-weight: 400; display: block;">
                        Third Party only cover for ${yourDetails_event.driver1name.firstName}
                        ${yourDetails_event.driver1name.lastName} whilst driving privately insured cars – with the
                        owner’s permission (provided the owner is not ${yourDetails_event.driver1name.firstName}
                        ${yourDetails_event.driver1name.lastName} or their spouse/partner)
                    </span>
                </p>
            </div>
        </div>

        <div class="cover-footer">
            <div class="price-selection-section">
                <div class="price-insurance-section">
                    <div class="price-section">
                        <p>${document.querySelector('#ADMIRAL-col-footer .adm-control-radio__title strong').innerText}
                            <span>${document.querySelector('#ADMIRAL-col-footer small').innerText == "total" ? "total"
                        : "month"}</span>
                        </p>
                        <img src="/eui-cq-assets/helm/images/brands/admiral/logos/tiers/admiral.svg"
                            alt="admiral-image">
                    </div>
                    <div class="insurance-section">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.5 1.5C3.675 1.5 3.0075 2.175 3.0075 3L3 15C3 15.825 3.6675 16.5 4.4925 16.5H13.5C14.325 16.5 15 15.825 15 15V6L10.5 1.5H4.5ZM9.75 6.75V2.625L13.875 6.75H9.75Z"
                                fill="#41A5F5" />
                        </svg>
                        <a href="https://mktgblobpubaccess0.blob.core.windows.net/eui-pdf-assets/admiral/IP-MO-2-005.pdf"
                            target="_blank">Insurance
                            Product Information Document</a>
                    </div>
                </div>
                <div class="selection-section">
                    <label>
                        <input type="radio" name="cover-choice" id="admiral-cover" value="admiral">
                        <span class="radio-label">
                            <span class="radio-icon"></span>
                            <span class="radio-text">Selected level of cover</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </div>

    <div class="gold-cover">
        <div class="cover-head">
            <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.5 7.5L18 1.5L31.5 7.5V16.5C31.5 24.825 25.74 32.61 18 34.5C10.26 32.61 4.5 24.825 4.5 16.5V7.5ZM25.5 19.5H19.5V25.5H16.5V19.5H10.5V16.5H16.5V10.5H19.5V16.5H25.5V19.5Z"
                        fill="#444444" />
                </svg>
            </div>
            <p>Upgrade to Gold cover <span>for an extra</span> £4.56 <span>month</span></p>
        </div>

        <div class="cover-body">
            <p class="heading-message">Cover includes all the benefits of Admiral cover, plus:</p>
            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Personal Belongings cover up to £300</p>
            </div>

            <div class="cover-benefits">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_24074_2991)">
                            <path
                                d="M9.78924 2.55731L12.6401 5.55597C13.0473 5.98415 13.7498 6.02364 14.209 5.64384C14.6681 5.26403 14.7104 4.60889 14.3032 4.18072L11.4526 1.18206C11.0454 0.753884 10.3429 0.714386 9.88374 1.09419C9.4243 1.47371 9.38195 2.12885 9.78924 2.55731Z"
                                fill="#41A5F5" />
                            <path
                                d="M19.165 17.9467C19.1948 17.2603 18.848 16.758 18.4087 16.2822C16.7296 14.4623 15.0557 12.6376 13.3818 10.8128C12.7917 10.1695 12.2016 9.5263 11.6113 8.88326C11.5608 8.82807 11.5118 8.77146 11.4713 8.72462C11.4555 8.70629 11.4409 8.68946 11.4281 8.6748L11.736 8.20114C12.0014 7.79321 12.263 7.39096 12.5229 6.98743C12.7113 6.69479 12.6672 6.45858 12.4249 6.18722C11.3791 5.01574 10.3494 3.82884 9.33341 2.63053C9.1206 2.37952 8.90318 2.30829 8.63678 2.4412C8.49889 2.51008 8.35922 2.57688 8.21938 2.64376C7.76769 2.85977 7.31437 3.07658 6.9145 3.36691C5.75174 4.2109 4.68921 5.1693 4.02029 6.4962C3.85561 6.82276 3.87113 7.05157 4.12685 7.33742C5.16417 8.49626 6.18288 9.67295 7.18699 10.8617C7.40894 11.1245 7.63177 11.1957 7.91586 11.0646C8.32828 10.8745 8.73641 10.6747 9.16344 10.4657C9.34904 10.3748 9.53882 10.282 9.73347 10.1876C9.94875 10.4507 10.1697 10.7203 10.3943 10.9943C10.8377 11.5353 11.2953 12.0936 11.7514 12.653C12.5079 13.5812 13.2638 14.5098 14.0198 15.4384L14.0233 15.4427C14.7782 16.3701 15.5332 17.2975 16.2887 18.2246C16.3831 18.3405 16.4824 18.4528 16.5859 18.5603C17.3678 19.3708 18.3734 19.2588 18.9804 18.2964C19.0072 18.254 19.0387 18.2149 19.0702 18.1758C19.085 18.1574 19.0998 18.139 19.1141 18.1203C19.1314 18.0624 19.1482 18.0047 19.165 17.9467Z"
                                fill="#41A5F5" />
                            <path
                                d="M4.48653 12.1952L1.62393 9.18294C1.21499 8.75252 1.25721 8.0944 1.71854 7.71315C2.17956 7.33162 2.88496 7.37129 3.29391 7.80142L6.1565 10.8137C6.56545 11.2439 6.52292 11.9019 6.06189 12.2835C5.60087 12.665 4.89547 12.6253 4.48653 12.1952Z"
                                fill="#41A5F5" />
                            <path
                                d="M1.99626 19.1685C1.16037 19.1685 0.721434 18.7133 0.857979 17.9653C0.889699 17.7908 0.963711 17.6111 1.06669 17.4605C1.23979 17.2074 1.53013 17.1321 1.85005 17.1324C2.99917 17.1335 4.14833 17.1332 5.29748 17.1327L6.8129 17.1318C7.65494 17.1313 8.49706 17.1308 9.33916 17.1308C10.1847 17.1308 10.6258 17.6032 10.4883 18.3584C10.4186 18.741 10.2315 19.0409 9.77991 19.142C9.67119 19.1663 9.55398 19.1672 9.44069 19.1674C8.43461 19.1687 7.42812 19.1686 6.42159 19.1686L1.99626 19.1685Z"
                                fill="#41A5F5" />
                            <path
                                d="M4.59135 16.1113C4.8627 16.1112 5.13405 16.1112 5.4054 16.1112C5.62934 16.1113 5.85329 16.1114 6.07724 16.1115C6.82308 16.1119 7.56894 16.1122 8.31476 16.1109C8.66638 16.11 8.87637 15.9644 8.94923 15.6524C8.98328 15.5063 8.99123 15.3502 8.97978 15.2006C8.94701 14.7737 8.71188 14.5837 8.24161 14.5837C6.39556 14.5837 4.5498 14.584 2.70409 14.5843C2.67985 14.5843 2.6556 14.5841 2.63136 14.5839C2.57223 14.5834 2.51311 14.5828 2.45401 14.5855C2.21951 14.5962 2.05183 14.6986 1.95193 14.894C1.83897 15.1148 1.83484 15.3473 1.87652 15.5788C1.94365 15.9517 2.15935 16.1106 2.57428 16.1109C3.24663 16.1115 3.91899 16.1114 4.59135 16.1113Z"
                                fill="#41A5F5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_24074_2991">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p>Motor Legal Protection</p>
            </div>

            <div class="cover-benefits last-benefit">
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                            fill="#41A5F5" />
                    </svg>
                </div>
                <p>Cover whilst driving other cars
                    <span style="font-size: 14px; line-height: 21px; font-weight: 400; display: block;">
                        Third Party only cover for ${yourDetails_event.driver1name.firstName}
                        ${yourDetails_event.driver1name.lastName} whilst driving privately insured cars – with the
                        owner’s permission (provided the owner is not ${yourDetails_event.driver1name.firstName}
                        ${yourDetails_event.driver1name.lastName} or their spouse/partner)
                    </span>
                </p>
            </div>
        </div>

        <div class="cover-footer">
            <div class="price-selection-section">
                <div class="price-insurance-section">
                    <div class="price-section">
                        <p>${document.querySelector('#GOLD-col-footer .adm-control-radio__title strong').innerText}
                            <span>${document.querySelector('#GOLD-col-footer small').innerText == "total" ? "total" :
                        "month"}</span>
                        </p>
                        <img src="/eui-cq-assets/helm/images/brands/admiral/logos/tiers/gold.svg" alt="gold-image">
                    </div>
                    <div class="insurance-section">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.5 1.5C3.675 1.5 3.0075 2.175 3.0075 3L3 15C3 15.825 3.6675 16.5 4.4925 16.5H13.5C14.325 16.5 15 15.825 15 15V6L10.5 1.5H4.5ZM9.75 6.75V2.625L13.875 6.75H9.75Z"
                                fill="#41A5F5" />
                        </svg>
                        <a href="https://mktgblobpubaccess0.blob.core.windows.net/eui-pdf-assets/admiral/IP-MO-2-005.pdf"
                            target="_blank">Insurance
                            Product Information Document</a>
                    </div>
                </div>
                <div class="selection-section">
                    <label>
                        <input type="radio" name="cover-choice" id="gold-cover" value="gold">
                        <span class="radio-label">
                            <span class="radio-icon"></span>
                            <span class="radio-text">Upgrade to this level of cover</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>`);
            }

            if (document.querySelector('#gold-cover') && document.querySelector('#admiral-cover')) {
                if (document.querySelector('.adm-control-table__col-header--admiral.selected')) {
                    document.querySelector('#admiral-cover').checked = true;
                } else if (document.querySelector('.adm-control-table__col-header--gold.selected')) {
                    document.querySelector('#gold-cover').checked = true;
                }

                document.querySelector('#gold-cover').addEventListener('click', function () {
                    document.querySelector('.adm-control-table__col-header--gold').click();
                });

                document.querySelector('#admiral-cover').addEventListener('click', function () {
                    document.querySelector('.adm-control-table__col-header--admiral').click();
                });
            }
        });
    }


}