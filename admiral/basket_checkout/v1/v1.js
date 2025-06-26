const utils = optimizely.get('utils');

function handleUpdateSessionStorage_Cover_Page() {

    let selected_cover_column = null;

    let session_storage_variable = {};

    if (sessionStorage.getItem('opti-cover-info')) {
        session_storage_variable = JSON.parse(sessionStorage.getItem('opti-cover-info'));
    }

    let selected_node = document.querySelector('eui-tier eui-motor-tiers-table table[data-test="eui-motor-tier-select"] thead tr th.selected');

    if (selected_node.id.includes("ESSENTIAL")) {
        selected_cover_column = 2;
        session_storage_variable.cover_name = "essential";
    } else if (selected_node.id.includes("ADMIRAL")) {
        selected_cover_column = 3;
        session_storage_variable.cover_name = "admiral";
    } else if (selected_node.id.includes("GOLD")) {
        selected_cover_column = 4;
        session_storage_variable.cover_name = "gold";
    } else if (selected_node.id.includes("PLATINUM")) {
        selected_cover_column = 5;
        session_storage_variable.cover_name = "platinum";
    }

    session_storage_variable.cover_image = document.querySelector(`eui-tier eui-motor-tiers-table table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(${selected_cover_column}) img`).getAttribute('src');

    session_storage_variable.cover_price = document.querySelector(`eui-tier eui-motor-tiers-table table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(${selected_cover_column - 1}) adm-control-radio-title strong`).innerText;

    session_storage_variable.price_type = document.querySelector(`eui-tier eui-motor-tiers-table table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(${selected_cover_column - 1}) small`).innerText == "total" ? "annual" : "monthly";

    const cover_table_headings = document.querySelectorAll(`eui-tier eui-motor-tiers-table table[data-test="eui-motor-tier-select"] tbody tr th:nth-of-type(1)`);

    const motor_legal_protection_text = cover_table_headings[7].querySelector('.adm-control-table__row-header-content').innerText.toLowerCase();
    const breakdown_node_text = cover_table_headings[8].querySelector('.adm-control-table__row-header-content').innerText.toLowerCase();
    const personal_injury_text = cover_table_headings[9].querySelector('.adm-control-table__row-header-content').innerText.toLowerCase();
    const hire_vehicle_text = cover_table_headings[10].querySelector('.adm-control-table__row-header-content').innerText.toLowerCase();

    let cover_benefit_list = {};

    const selected_cover_benefits = document.querySelectorAll(`eui-tier eui-motor-tiers-table table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(${selected_cover_column - 1})`);

    selected_cover_benefits.forEach((element, index) => {
        if (index == 7) {
            if (selected_cover_column == 4 || selected_cover_column == 5) {
                cover_benefit_list.motorlegal = motor_legal_protection_text;
            } else {
                if (element.querySelector('span').innerText.toLowerCase() !== "optional") {
                    cover_benefit_list.motorlegal = motor_legal_protection_text;
                }
            }
        } else if (index == 8) {
            if (element.querySelector('span').innerText.toLowerCase() !== "optional") {
                if (element.querySelector('span').innerText.toLowerCase() == "roadside assistance") {
                    cover_benefit_list.breakdown = 'roadside assistance breakdown cover';
                } else {
                    cover_benefit_list.breakdown = breakdown_node_text;
                }
            }
        } else if (index == 9) {
            if (element.querySelector('span').innerText.toLowerCase() !== "optional") {
                cover_benefit_list.personalinjury = personal_injury_text;
            }
        } else if (index == 10) {
            if (element.querySelector('span').innerText.toLowerCase() !== "optional") {
                cover_benefit_list.hirecar = hire_vehicle_text;
            }
        }
    });

    session_storage_variable.cover_benefit_list = cover_benefit_list;

    let motorTier = dataLayer.reverse().find(obj => obj.event === 'motorTier');
    if (motorTier) {
        session_storage_variable.vehicle_reg_number = motorTier.vehicleRegistration;
    }

    let personalDetails = dataLayer.reverse().find(obj => obj.event === 'yourDetails');
    if (personalDetails) {
        session_storage_variable.level_of_cover = personalDetails.levelOfCover;
        session_storage_variable.number_of_driver = personalDetails.noOfDrivers;
        if (!session_storage_variable.driver_name) {
            const first_driver_info = JSON.parse(JSON.stringify(personalDetails.driver1name));
            session_storage_variable.driver_name = [{ name: `${first_driver_info.title} ${first_driver_info.firstName} ${first_driver_info.lastName}` }];

            if (personalDetails.noOfDrivers == 2) {
                const second_driver_info = JSON.parse(JSON.stringify(personalDetails.driver2name));
                session_storage_variable.driver_name = [{ name: `${first_driver_info.title} ${first_driver_info.firstName} ${first_driver_info.lastName}` }, { name: `${second_driver_info.title} ${second_driver_info.firstName} ${second_driver_info.lastName}` }];
            }
        }
    }

    sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
}

function handleUpdateSessionStorage_Quote_Page() {

    const cover_image_mapping = {
        admiral: "/eui-cq-assets/helm/images/brands/admiral/cover-levels/admiral-level.svg",
        essential: "/eui-cq-assets/helm/images/brands/admiral/cover-levels/essential-level.svg",
        gold: "/eui-cq-assets/helm/images/brands/admiral/cover-levels/gold-level.svg",
        platinum: "/eui-cq-assets/helm/images/brands/admiral/cover-levels/platinum-level.svg"
    };

    let session_storage_variable = {};

    if (sessionStorage.getItem('opti-cover-info')) {
        session_storage_variable = JSON.parse(sessionStorage.getItem('opti-cover-info'));
    }

    if (document.querySelector('eui-quote adm-quote-hero-price-total')) {
        let cover_price = document.querySelector('eui-quote adm-quote-hero-price-total');
        session_storage_variable.cover_price = cover_price.innerText;
        session_storage_variable.price_type = document.querySelector('eui-quote adm-quote-hero-price-frequency').innerText.trim() == "year" ? "annual" : "monthly";
    } else {
        if (document.querySelector('eui-quote adm-quote-hero-price-terms strong')) {
            //if cover price is in months
            let cover_price = document.querySelector('eui-quote adm-quote-hero-price-terms strong');
            session_storage_variable.cover_price = cover_price.innerText;
        }
    }

    if (!session_storage_variable.cover_name) {
        const cove_name_node = document.querySelector('eui-quote adm-card[data-test="cover-summary"] .adm-details__title-text');
        if (cove_name_node) {
            session_storage_variable.cover_name = cove_name_node.innerText.trim().toLowerCase();
            session_storage_variable.cover_image = cover_image_mapping[session_storage_variable.cover_name];
        }
    }

    let cover_benefit_list = {};

    const upgrades_included_with_cover = document.querySelectorAll('eui-quote eui-motor-cover-benefits-card #cover-benefits adm-details-item strong[data-test="cover-benefits-label"]');

    upgrades_included_with_cover.forEach(el => {
        const text = el.innerText.trim().toLowerCase();
        if (text === 'motor legal protection' || text === 'roadside assistance breakdown cover') {
            if (text == "motor legal protection") {
                cover_benefit_list.motorlegal = text;
            } else {
                cover_benefit_list.breakdown = text;
            }
        }
    });


    const all_added_upgrades = document.querySelectorAll('eui-quote eui-motor-optional-upgrades-section adm-card[data-test="optional-upgrades-card"] adm-card-section[data-test="added-ancillary"] adm-details-title[data-test="added-ancillary-name"] span');

    all_added_upgrades.forEach(function (el) {
        const text = el.innerText.trim().toLowerCase();
        if (text == "motor legal protection") {
            cover_benefit_list.motorlegal = text;
        } else if (text == "roadside assistance breakdown cover" || text == "national breakdown cover" || text == "european breakdown cover") {
            cover_benefit_list.breakdown = text;
        } else if (text == "personal injury cover" || text == "personal injury plus cover") {
            cover_benefit_list.personalinjury = text;
        } else if (text == "hire vehicle cover") {
            cover_benefit_list.hirecar = text;
        }
    });

    session_storage_variable.cover_benefit_list = cover_benefit_list;

    let motorTier = dataLayer.reverse().find(obj => obj.event === 'motorTier');
    if (motorTier) {
        session_storage_variable.vehicle_reg_number = motorTier.vehicleRegistration;
    }

    let personalDetails = dataLayer.reverse().find(obj => obj.event === 'yourDetails');
    if (personalDetails) {
        session_storage_variable.level_of_cover = personalDetails.levelOfCover;
        session_storage_variable.number_of_driver = personalDetails.noOfDrivers;
        const first_driver_info = JSON.parse(JSON.stringify(personalDetails.driver1name));
        session_storage_variable.driver_name = [{ name: `${first_driver_info.title} ${first_driver_info.firstName} ${first_driver_info.lastName}` }];

        if (personalDetails.noOfDrivers == 2) {
            const second_driver_info = JSON.parse(JSON.stringify(personalDetails.driver2name));
            session_storage_variable.driver_name = [{ name: `${first_driver_info.title} ${first_driver_info.firstName} ${first_driver_info.lastName}` }, { name: `${second_driver_info.title} ${second_driver_info.firstName} ${second_driver_info.lastName}` }];
        }
    }

    if (session_storage_variable.driver_name && document.querySelector('eui-quote .adm-driver-ncb__content-name') && document.querySelector('eui-quote .adm-driver-ncb__content-years')) {
        session_storage_variable.driver_name.forEach(driver => {
            if (driver.name.toLowerCase() === document.querySelector('eui-quote .adm-driver-ncb__content-name').innerText.trim().toLowerCase()) {
                driver.ncb_year = document.querySelector('eui-quote .adm-driver-ncb__content-years').innerText;
            } else {
                driver.ncb_year = null;
            }
        });
    }

    if (session_storage_variable.driver_name && document.querySelector('eui-quote .adm-driver-ncb__content-name') && (document.querySelector('eui-quote #pncbAddButton adm-icon') || (document.querySelector('#add-ncb-multicar') && document.querySelector('#add-ncb-multicar').innerText == 'ADDED'))) {
        session_storage_variable.driver_name.forEach(driver => {
            if (driver.name.toLowerCase() === document.querySelector('eui-quote .adm-driver-ncb__content-name').innerText.trim().toLowerCase()) {
                driver.is_protected = true;
            } else {
                driver.is_protected = false;
            }
        });
    }

    sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));

}

function handleUpdatingValueOf_Basket() {

    const svg_mapping = {
        motorlegal: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M29.331 27.559c0.043-0.998-0.461-1.729-1.1-2.421-3.303-3.58-6.593-7.173-9.887-10.762-0.102-0.112-0.2-0.227-0.267-0.303 0.541-0.832 1.069-1.642 1.592-2.454 0.274-0.426 0.21-0.769-0.143-1.164-1.521-1.704-3.019-3.43-4.497-5.173-0.31-0.365-0.626-0.469-1.013-0.275-0.848 0.424-1.743 0.793-2.505 1.346-1.691 1.228-3.237 2.622-4.21 4.552-0.24 0.475-0.217 0.808 0.155 1.224 1.509 1.686 2.991 3.397 4.451 5.126 0.323 0.382 0.647 0.486 1.060 0.295 0.861-0.397 1.709-0.823 2.644-1.276 0.931 1.138 1.936 2.36 2.935 3.586 2.201 2.701 4.399 5.403 6.6 8.104 0.137 0.169 0.282 0.332 0.432 0.488 1.137 1.179 2.6 1.016 3.483-0.384 0.057-0.091 0.129-0.171 0.194-0.256 0.025-0.084 0.050-0.168 0.074-0.253zM15.693 5.174l4.147 4.362c0.592 0.623 1.614 0.68 2.282 0.128s0.729-1.505 0.137-2.128l-4.146-4.362c-0.592-0.623-1.614-0.68-2.282-0.128s-0.73 1.505-0.137 2.128zM3.816 14.812l4.164 4.382c0.595 0.626 1.621 0.683 2.291 0.128s0.732-1.512 0.138-2.138l-4.164-4.382c-0.595-0.626-1.621-0.683-2.291-0.128s-0.732 1.512-0.138 2.138zM9.697 29.336h-5.339c-1.216 0-1.854-0.662-1.656-1.75 0.046-0.254 0.154-0.515 0.304-0.734 0.252-0.368 0.674-0.478 1.139-0.477 1.671 0.002 3.343 0.001 5.014 0 1.96-0.001 3.919-0.003 5.879-0.003 1.23 0 1.871 0.687 1.672 1.786-0.101 0.556-0.374 0.993-1.030 1.14-0.158 0.035-0.329 0.037-0.493 0.037-1.829 0.002-3.659 0.002-5.489 0.002zM9.317 24.889c-1.373 0-2.745 0.001-4.118-0-0.604-0-0.917-0.232-1.015-0.774-0.061-0.337-0.055-0.675 0.11-0.996 0.145-0.284 0.389-0.433 0.73-0.449 0.121-0.006 0.242-0.002 0.364-0.002 2.685-0.001 5.369-0.001 8.055-0.001 0.684 0 1.026 0.276 1.074 0.897 0.017 0.218 0.005 0.445-0.045 0.657-0.106 0.454-0.411 0.666-0.923 0.667-1.411 0.003-2.821 0.001-4.232 0z"></path>
                    </svg>`,
        breakdown: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M10.493 10.973c-1.008 0.551-2.015 1.102-3.023 1.653-0.183 0.092-0.366 0.092-0.55 0-1.282-0.826-2.565-1.561-3.847-2.295-0.275-0.184-0.641-0.367-0.916-0.459-0.458-0.275-0.824 0-0.824 0.459 0 0.367 0.092 0.734 0.183 1.102 0.733 3.213 3.481 5.784 6.686 6.335 4.488 0.735 8.793-2.295 9.526-6.794 0.824-4.774-2.565-8.447-6.228-9.365-0.641-0.184-1.282-0.184-1.924-0.275-1.282 0-2.565 0.367-3.664 0.826-0.275 0.184-0.458 0.275-0.641 0.459-0.275 0.275-0.275 0.643 0 0.918 0.092 0.092 0.183 0.092 0.275 0.184 1.649 0.918 3.206 1.836 4.855 2.754 0.183 0.092 0.275 0.275 0.275 0.459 0 1.194 0 2.295 0 3.489 0.092 0.275 0 0.459-0.183 0.551zM19.469 14.37c-0.092-0.092-0.092-0.092-0.183-0.184-1.008 2.387-2.656 4.040-5.129 5.141 0.092 0.092 0.275 0.092 0.366 0.184 3.847 3.948 6.595 6.61 10.442 10.466 0.916 0.918 2.29 0.918 3.206 0 0.55-0.643 1.191-1.194 1.74-1.836 1.007-1.010 1.007-2.295 0-3.305-3.939-3.856-6.595-6.518-10.442-10.466zM26.064 27.958c-1.008 0-1.832-0.826-1.832-1.836s0.824-1.836 1.74-1.836c1.008 0 1.832 0.826 1.923 1.744 0 1.010-0.824 1.928-1.832 1.928z"></path>
                    </svg>`,
        personalinjury: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M20.023 12.308c1.595-1.078 2.644-2.904 2.644-4.974 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.78 0.775 3.378 2.006 4.477 0.040 2.004 0.394 11.204 3.57 15.195 0 0-3.558 0.365-7.307-0.908-0.005-0.079-0.013-0.181-0.023-0.305-0.157-2.085-0.773-10.243 1.004-12.539 0 0-4.584 2.109-4.584 8.526 0 6.325 7.334 7.059 7.334 7.059s6.784 0.458 9.076-6.234c0 0 0.847 1.395 0 4.217-0.17 0.565-0.409 0.973-0.605 1.308-0.44 0.751-0.663 1.132 0.605 2.084 1.833 1.375 3.392-0.642 4.584-2.567 1.007-2.314 1.75-8.049-0.993-11.647-1.727-2.265-3.922-3.263-5.311-3.692z"></path>
                    </svg>`,
        hirecar: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M13.333 9.333c0 0.719 0.081 1.418 0.235 2.090-3.134-0.020-6.356 0.306-6.585 1.023-0.7 2.084-1.099 4.99-1.099 4.99 3.234-0.373 7.803-0.488 11.696-0.277 1.463 0.953 3.211 1.507 5.087 1.507 0.589 0 1.166-0.055 1.725-0.159 0.458 0.512 0.941 1.323 0.941 2.468v5.039c0 0.291-1 0.485-1.050 0.485v1.696c0 2.326-0.55 2.471-2.2 2.471-1.95 0-2.25-0.145-2.25-2.471v-1.502c-3.95 0.485-9.050 0.485-13.1 0v2.423c0 1.405-0.45 1.55-2.2 1.55-1.7 0-2.2-0.049-2.25-1.454v-2.713c-0.050 0-0.95-0.145-0.95-0.436v-5.137c0-2.277 1.8-3.053 1.8-3.053s0.85-3.537 1.3-5.33c0.35-1.406 0.85-2.471 3.75-2.956 1.526-0.167 3.342-0.252 5.15-0.255zM2.883 22.331c0.050 0.824 0.8 2.035 2.1 2.035 1.15 0 2.050-0.92 2.050-2.132 0-1.115-0.9-2.084-2.050-2.084-1.25 0-2.15 1.163-2.1 2.18zM19.333 22.331c0.050 0.872 0.8 2.035 2.1 2.035 1.15 0 2.1-0.92 2.1-2.132 0-1.115-0.95-2.084-2.1-2.084-1.25 0-2.15 1.114-2.1 2.18zM22.667 17.333c-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8s-3.582 8-8 8zM23.333 10h4v-1.333h-4v-4h-1.333v4h-4v1.333h4v4h1.333v-4z"></path>
                    </svg>`
    };

    let session_storage_variable = {};

    if (sessionStorage.getItem('opti-cover-info')) {
        session_storage_variable = JSON.parse(sessionStorage.getItem('opti-cover-info'));
    }

    const car_reg_number = document.querySelector('.opti-quote-basket-dd-container .dd-panel .car-info-section .reg-number-section .reg-number');
    const level_of_cover = document.querySelector('.opti-quote-basket-dd-container .dd-panel .car-info-section .level-of-cover-section .level-of-cover-name');

    const upgrade_section = document.querySelector('.opti-quote-basket-dd-container .dd-panel .added-upgrade-section');
    const upgrade_number_section = document.querySelector('.opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-number-section .upgrade-number');
    const upgrade_info_section = document.querySelector('.opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-info');

    const driver_section = document.querySelector('.opti-quote-basket-dd-container .dd-panel .driver-info-section');

    const driver_number_section = document.querySelector('.opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-number-section .driver-number');

    const driver_name_section = document.querySelector('.opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section');

    const cover_image = document.querySelector('.opti-quote-basket-dd-container .dd-panel .price-section .cover-image');
    const cover_price = document.querySelector('.opti-quote-basket-dd-container .dd-panel .price-section .price');

    car_reg_number.innerText = session_storage_variable.vehicle_reg_number;
    level_of_cover.innerText = session_storage_variable.level_of_cover;
    cover_image.setAttribute('src', session_storage_variable.cover_image);

    if (window.location.pathname == '/Admiral/ancillary/motorlegal' || window.location.pathname == '/Admiral/ancillary/breakdown' || window.location.pathname == '/Admiral/ancillary/personalinjury' || window.location.pathname == '/Admiral/ancillary/hirecar' || window.location.pathname == '/Admiral/upgrade') {
        cover_price.innerText = `£${Number(session_storage_variable.cover_price).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${session_storage_variable.price_type == "annual" ? "total" : "per month"}`;
    } else {
        cover_price.innerText = `${session_storage_variable.cover_price} ${session_storage_variable.price_type == "annual" ? "total" : "per month"}`;
    }

    if (session_storage_variable.driver_name.length) {

        driver_section.style.display = "block";

        driver_number_section.innerText = `${session_storage_variable.driver_name.length} ${session_storage_variable.driver_name.length == 1 ? "Driver" : "Drivers"}`;

        driver_name_section.innerHTML = session_storage_variable.driver_name.map(
            (driver) => `
                <div class="individual-driver-section">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.00033 3.93341C8.77366 3.93341 9.40033 4.56008 9.40033 5.33341C9.40033 6.10675 8.77366 6.73341 8.00033 6.73341C7.22699 6.73341 6.60033 6.10675 6.60033 5.33341C6.60033 4.56008 7.22699 3.93341 8.00033 3.93341ZM8.00033 9.93341C9.98033 9.93341 12.067 10.9067 12.067 11.3334V12.0667H3.93366V11.3334C3.93366 10.9067 6.02033 9.93341 8.00033 9.93341ZM8.00033 2.66675C6.52699 2.66675 5.33366 3.86008 5.33366 5.33341C5.33366 6.80675 6.52699 8.00008 8.00033 8.00008C9.47366 8.00008 10.667 6.80675 10.667 5.33341C10.667 3.86008 9.47366 2.66675 8.00033 2.66675ZM8.00033 8.66675C6.22033 8.66675 2.66699 9.56008 2.66699 11.3334V13.3334H13.3337V11.3334C13.3337 9.56008 9.78032 8.66675 8.00033 8.66675Z"
                            fill="#CED9E5" />
                    </svg>
                    <div class="individual-driver-info">
                        <p class="name">${driver.name}</p>
                        <p class="ncb-info">${driver.ncb_year ? `Policyholder with ${driver.ncb_year}` : ""}</p>
                        <p class="protect-info">${driver.is_protected ? `Protected` : ""}</p>
                    </div>
                </div>
            `
        ).join('');

    } else {
        driver_section.style.display = "none";
    }

    if (Object.entries(session_storage_variable.cover_benefit_list).length) {

        upgrade_section.style.display = "block";

        upgrade_number_section.innerText = `${Object.entries(session_storage_variable.cover_benefit_list).length} ${Object.entries(session_storage_variable.cover_benefit_list).length == 1 ? "Upgrade" : "Upgrades"} Added`;

        upgrade_info_section.innerHTML = Object.entries(session_storage_variable.cover_benefit_list).map(
            ([key, label]) => `
              <div class="individual-upgrade">
                  ${svg_mapping[key] || ''}
                  <p class="upgrade-name">${label}</p>
              </div>
            `
        ).join('');
    } else {
        upgrade_section.style.display = "none";
    }
}

utils.observeSelector('eui-tier eui-motor-tiers-table table[data-test="eui-motor-tier-select"] thead tr th.selected', function (selected_cover) {
    if (window.location.pathname == '/Admiral/cover') {
        handleUpdateSessionStorage_Cover_Page();
    }
});

utils.observeSelector('eui-quote eui-motor-quote-wrapper', function (quote_page_content) {
    if (window.location.pathname == '/Admiral/quote') {
        handleUpdateSessionStorage_Quote_Page();
    }
});

utils.observeSelector('eui-final-checks eui-your-quote', function (final_check_page_content) {
    if (window.location.pathname == '/Admiral/checks') {
        const price_title = document.querySelector('eui-final-checks #priceTitle');
        const price = document.querySelector('eui-final-checks .adm-payment-frequency__item-price');
        if (price_title && price) {
            let session_storage_variable = JSON.parse(JSON.stringify(JSON.parse(sessionStorage.getItem('opti-cover-info'))));
            if (price_title.innerText.trim().toLowerCase().includes('total')) {
                session_storage_variable.price_type = "annual";
            } else {
                session_storage_variable.price_type = "monthly";
            }
            session_storage_variable.cover_price = price.innerText.trim();
            sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
        }
    }
});

function handle_increasing_width_of_dd_label() {
    const admiral_logo = document.querySelector(".adm-navbar__wrap adm-navbar-logo");
    const admiral_nav_section = document.querySelector(".adm-navbar__wrap adm-navbar-nav");
    const admiral_contact_us = document.querySelector('.adm-navbar__wrap .adm-navbar__nav adm-navbar-item:nth-of-type(2)');
    const opti_basket = document.querySelector(".opti-quote-basket-dd-container");

    if (admiral_logo && admiral_nav_section && admiral_contact_us && opti_basket) {
        admiral_logo.style.display = "none";
        admiral_nav_section.style.width = "100%";
        admiral_contact_us.style.display = "none";
        opti_basket.style.width = "100%";
        opti_basket.style.marginLeft = "0";
    }
}

function handle_decreasing_width_of_dd_label() {
    const admiral_logo = document.querySelector(".adm-navbar__wrap adm-navbar-logo");
    const admiral_nav_section = document.querySelector(".adm-navbar__wrap adm-navbar-nav");
    const admiral_contact_us = document.querySelector('.adm-navbar__wrap .adm-navbar__nav adm-navbar-item:nth-of-type(2)');
    const opti_basket = document.querySelector(".opti-quote-basket-dd-container");

    if (admiral_logo && admiral_nav_section && admiral_contact_us && opti_basket) {
        admiral_logo.style.display = "unset";
        admiral_nav_section.style.width = "unset";
        admiral_contact_us.style.display = "unset";
        opti_basket.style.width = "unset";
        opti_basket.style.marginLeft = "16px";
    }
}

utils.observeSelector('eui-tier', function () {
    let personalDetails = dataLayer.find(obj => obj.event === 'yourDetails');
    if (personalDetails && personalDetails.product != "singleCar" && document.querySelector('.opti-quote-basket-dd-container')) {
        document.querySelector('.opti-quote-basket-dd-container').style.display = "none";
    }
});

utils.observeSelector('eui-vehicle-upgrades', function () {
    let personalDetails = dataLayer.find(obj => obj.event === 'yourDetails');
    if (personalDetails && personalDetails.product != "singleCar" && document.querySelector('.opti-quote-basket-dd-container')) {
        document.querySelector('.opti-quote-basket-dd-container').style.display = "none";
    }
});

utils.observeSelector('.adm-navbar__wrap .adm-navbar__nav', function (right_nav) {

    if (window.innerWidth < 500) {
        const logout_node = document.querySelector('.adm-navbar__wrap .adm-navbar__nav adm-navbar-item:nth-of-type(1)');
        if (logout_node) {
            logout_node.style.display = "none";
        }

        const contact_us_node_text = document.querySelector('.adm-navbar__wrap .adm-navbar__nav adm-navbar-item:nth-of-type(2) .adm-btn-call__text');
        if (contact_us_node_text) {
            contact_us_node_text.innerText = "Call us";
            contact_us_node_text.style.marginLeft = "4px";
        }
    }


    if (!document.querySelector('.opti-quote-basket-dd-container')) {
        right_nav.insertAdjacentHTML("beforeend", `<div class="opti-quote-basket-dd-container">
    <style>
        .opti-quote-basket-dd-container {
            position: relative;
            margin-left: 16px;
        }

        .opti-quote-basket-dd-container .dd-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            border: 1px solid #CED9E5;
            border-radius: 3px;
            cursor: pointer;
        }

        .opti-quote-basket-dd-container .dd-label .icon-text {
            display: flex;
            align-items: center;
        }

        .opti-quote-basket-dd-container .dd-label .car-icon {
            margin-right: 8px;
        }

        .opti-quote-basket-dd-container .dd-label .lable {
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: #25469B;
            margin-bottom: 0;
        }

        .opti-quote-basket-dd-container .dd-label.panel-close .arrow-down {
            display: block;
        }

        .opti-quote-basket-dd-container .dd-label.panel-open .arrow-down {
            display: none;
        }

        .opti-quote-basket-dd-container .dd-label.panel-close .arrow-up {
            display: none;
        }

        .opti-quote-basket-dd-container .dd-label.panel-open .arrow-up {
            display: block;
        }

        .opti-quote-basket-dd-container .dd-panel {
            position: absolute;
            width: 320px;
            right: 0;
            z-index: 9;
            background: white;
            padding: 12px;
            border: 1px solid #CED9E5;
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
            min-height: 200px;
        }

        .opti-quote-basket-dd-container .dd-panel.panel-close {
            display: none;
        }

        .opti-quote-basket-dd-container .dd-panel.panel-open {
            display: block;
        }

        .opti-quote-basket-dd-container .dd-panel .car-info-section {
            padding-bottom: 12px;
            border-bottom: 1px solid #CED9E5;
        }

        .opti-quote-basket-dd-container .dd-panel .car-info-section .reg-number-section {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
        }

        .opti-quote-basket-dd-container .dd-panel .car-info-section .reg-number-section .reg-number {
            padding: 4px 8px;
            background-color: #EED667;
            color: #444444;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            margin-left: 8px;
            border-radius: 2px;
            line-height: 100%;
        }

        .opti-quote-basket-dd-container .dd-panel .car-info-section .level-of-cover-section {
            display: flex;
            align-items: center;
        }

        .opti-quote-basket-dd-container .dd-panel .car-info-section .level-of-cover-section .level-of-cover-name {
            margin-left: 4px;
            font-weight: 400;
            font-size: 12px;
            line-height: 21px;
            color: #444444;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section {
            margin-top: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid #CED9E5;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-number-section {
            display: flex;
            align-items: center;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-number-section .driver-number {
            font-size: 14px;
            font-weight: 700;
            line-height: 24px;
            text-transform: capitalize;
            margin-left: 8px;
            color: #444444;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section {
            margin-left: 24px;
            margin-top: 4px;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section .individual-driver-section {
            display: flex;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section .individual-driver-section .individual-driver-info {
            margin-left: 8px;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section .individual-driver-section .individual-driver-info .name {
            font-size: 12px;
            font-weight: 700;
            line-height: 18px;
            color: #444444;
            text-transform: capitalize;
            margin-bottom: 0;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section .individual-driver-section .individual-driver-info .ncb-info,
        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section .individual-driver-section .individual-driver-info .protect-info {
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: #444444;
            margin-bottom: 0;
        }

        .opti-quote-basket-dd-container .dd-panel .driver-info-section .driver-name-section .individual-driver-section .individual-driver-info .protect-info {
            color: #0F7632;
        }

        .opti-quote-basket-dd-container .dd-panel .added-upgrade-section {
            margin-top: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid #CED9E5;
        }

        .opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-number-section {
            display: flex;
            align-items: center;
        }

        .opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-number-section .upgrade-number {
            font-size: 14px;
            font-weight: 700;
            line-height: 21px;
            text-transform: capitalize;
            color: #444444;
            margin-left: 8px;
        }

        .opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-info {
            margin-left: 24px;
            margin-top: 4px;
        }

        .opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-info .individual-upgrade {
            display: flex;
            align-items: center;
        }

        .opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-info .individual-upgrade svg {
            height: 16px;
            width: 16px;
            fill: #CED9E5;
        }

        .opti-quote-basket-dd-container .dd-panel .added-upgrade-section .upgrade-info .individual-upgrade .upgrade-name {
            margin-left: 8px;
            font-size: 12px;
            line-height: 21px;
            text-transform: capitalize;
            color: #444444;
        }

        .opti-quote-basket-dd-container .dd-panel .price-section {
            margin-top: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .opti-quote-basket-dd-container .dd-panel .price-section .cover-image {
            width: 81px;
            height: 41px;
        }

        .opti-quote-basket-dd-container .dd-panel .price-section .price {
            font-size: 14px;
            line-height: 21px;
            font-weight: 700;
            color: #444444;
        }

        @media (max-width: 500px) {
            .opti-quote-basket-dd-container .dd-panel {
                width: 100%;
            }
        }
    </style>
    <div class="dd-label panel-close">
        <div class="icon-text">
            <svg class="car-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.6938 6.86802C13.6938 6.86802 13.1938 4.8126 12.9718 3.78469C12.7497 2.92344 12.3605 2.36802 10.9163 2.14594C9.24967 1.95135 6.86092 1.95135 5.13842 2.14594C3.52717 2.42385 3.24967 3.03469 3.05509 3.84052C2.80509 4.86844 2.33301 6.89594 2.33301 6.89594C2.33301 6.89594 1.33301 7.34052 1.33301 8.64594C1.33301 9.61802 1.33301 10.618 1.33301 11.5905C1.33301 11.7572 1.83301 11.8405 1.86092 11.8405C1.86092 12.1739 1.86092 13.0626 1.86092 13.3959C1.88884 14.2014 2.16634 14.2293 3.11092 14.2293C4.08301 14.2293 4.33301 14.1459 4.33301 13.3405C4.33301 13.0351 4.33301 12.2851 4.33301 11.9518C6.58301 12.2297 9.41634 12.2297 11.6109 11.9518V12.063C11.6109 12.3409 11.6109 12.5076 11.6109 12.813C11.6109 14.1464 11.7776 14.2297 12.8609 14.2297C13.7776 14.2297 14.083 14.1464 14.083 12.813C14.083 12.5076 14.083 12.2297 14.083 11.9243V11.8409C14.1109 11.8409 14.6663 11.7297 14.6663 11.563C14.6663 10.5909 14.6663 9.64636 14.6663 8.67427C14.6663 7.42427 13.6943 6.86885 13.6943 6.86885L13.6938 6.86802ZM3.36051 10.618C2.63842 10.618 2.22176 9.92344 2.19384 9.45136C2.16592 8.86802 2.66592 8.20136 3.36051 8.20136C3.99926 8.20136 4.49926 8.75677 4.49926 9.39594C4.49926 10.0905 3.99926 10.618 3.36051 10.618ZM3.86051 6.64594C3.86051 6.64594 4.08259 4.97927 4.47176 3.78469C4.72176 2.97927 11.3605 3.03469 11.4997 3.75677C11.8884 5.06219 12.1384 6.61802 12.1663 6.64552C9.77759 6.34011 6.19426 6.36761 3.86092 6.64552L3.86051 6.64594ZM12.4993 10.618C11.7772 10.618 11.3605 9.95136 11.3326 9.45136C11.3047 8.84011 11.8047 8.20136 12.4993 8.20136C13.138 8.20136 13.6659 8.75677 13.6659 9.39594C13.6659 10.0905 13.138 10.618 12.4993 10.618Z"
                    fill="#41A5F5" />
            </svg>
            <p class="lable">Your Quote</p>
        </div>
        <svg class="arrow-down" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4.94 5.72668L8 8.78002L11.06 5.72668L12 6.66668L8 10.6667L4 6.66668L4.94 5.72668Z"
                fill="#CED9E5" />
        </svg>
        <svg class="arrow-up" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.94 10.2734L8 7.22004L11.06 10.2734L12 9.33337L8 5.33337L4 9.33337L4.94 10.2734Z"
                fill="#CED9E5" />
        </svg>

    </div>
    <div class="dd-panel panel-close">

        <div class="car-info-section">

            <div class="reg-number-section">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2 3.33341L8 0.666748L14 3.33341V7.33341C14 11.0334 11.44 14.4934 8 15.3334C4.56 14.4934 2 11.0334 2 7.33341V3.33341ZM10.9833 5.07024C11.1165 5.68661 11.4165 6.91911 11.4165 6.91911C11.4165 6.91911 12 7.25266 12 8.0022V9.73439C12 9.83433 11.6667 9.90104 11.65 9.90104V10.4839C11.65 11.2834 11.4668 11.3334 10.9167 11.3334C10.2668 11.3334 10.1667 11.2834 10.1667 10.4839V9.9675C8.85 10.1341 7.15 10.1341 5.8 9.9675V10.8002C5.8 11.2832 5.65 11.3332 5.06675 11.3332C4.5 11.3332 4.3335 11.3164 4.31675 10.8335V9.90079C4.3 9.90079 4 9.85082 4 9.75088V7.98521C4 7.20244 4.6 6.93585 4.6 6.93585C4.6 6.93585 4.88325 5.72009 5.03325 5.10372C5.15 4.62051 5.3165 4.25424 6.28325 4.08759C7.31675 3.97091 8.75 3.97091 9.75 4.08759C10.6165 4.22076 10.85 4.55381 10.9833 5.07024ZM4.5165 8.46816C4.53325 8.75124 4.78325 9.16774 5.2165 9.16774C5.59975 9.16774 5.89975 8.85143 5.89975 8.43493C5.89975 8.05167 5.59975 7.71862 5.2165 7.71862C4.79975 7.71862 4.49975 8.11838 4.5165 8.46816ZM5.88325 5.07024C5.64975 5.78655 5.5165 6.78594 5.5165 6.78594C6.9165 6.61929 9.06675 6.60255 10.5 6.78569C10.4951 6.78088 10.4789 6.69819 10.4526 6.56403C10.3887 6.238 10.2653 5.60807 10.1 5.0535C10.0165 4.62051 6.03325 4.58728 5.88325 5.07024ZM9.99975 8.46816C10.0165 8.76798 10.2665 9.16774 10.6998 9.16774C11.083 9.16774 11.3998 8.85143 11.3998 8.43493C11.3998 8.05167 11.083 7.71862 10.6998 7.71862C10.283 7.71862 9.983 8.10164 9.99975 8.46816Z"
                        fill="#41A5F5" />
                </svg>
                <p class="reg-number">LY04 hFk</p>
            </div>

            <div class="level-of-cover-section">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0.666748L2 3.33341V7.33341C2 11.0334 4.56 14.4934 8 15.3334C11.44 14.4934 14 11.0334 14 7.33341V3.33341L8 0.666748ZM6.66667 11.3334L4 8.66675L4.94 7.72675L6.66667 9.44675L11.06 5.05341L12 6.00008L6.66667 11.3334Z"
                        fill="#CED9E5" />
                </svg>
                <p class="level-of-cover-name">Comprehensive</p>
            </div>
        </div>

        <div class="driver-info-section">

            <div class="driver-number-section">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.66699 5.33341C8.66699 6.80617 7.47309 8.00008 6.00033 8.00008C4.52757 8.00008 3.33366 6.80617 3.33366 5.33341C3.33366 3.86066 4.52757 2.66675 6.00033 2.66675C7.47309 2.66675 8.66699 3.86066 8.66699 5.33341ZM12.667 11.3334C12.667 10.2134 12.027 9.37342 11.1137 8.75342C12.9537 9.02009 15.3337 9.88008 15.3337 11.3334V13.3334H12.667V11.3334ZM10.0003 8.00008C11.4737 8.00008 12.667 6.80675 12.667 5.33341C12.667 3.86008 11.4737 2.66675 10.0003 2.66675C9.687 2.66675 9.39367 2.73341 9.11367 2.82675C9.667 3.51341 10.0003 4.38675 10.0003 5.33341C10.0003 6.28008 9.667 7.15341 9.11367 7.84008C9.39367 7.93341 9.687 8.00008 10.0003 8.00008ZM0.666992 11.3334C0.666992 9.56008 4.22033 8.66675 6.00033 8.66675C7.78033 8.66675 11.3337 9.56008 11.3337 11.3334V13.3334H0.666992V11.3334Z"
                        fill="#CED9E5" />
                </svg>
                <p class="driver-number">1 Driver</p>
            </div>

            <div class="driver-name-section">
                <div class="individual-driver-section">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.00033 3.93341C8.77366 3.93341 9.40033 4.56008 9.40033 5.33341C9.40033 6.10675 8.77366 6.73341 8.00033 6.73341C7.22699 6.73341 6.60033 6.10675 6.60033 5.33341C6.60033 4.56008 7.22699 3.93341 8.00033 3.93341ZM8.00033 9.93341C9.98033 9.93341 12.067 10.9067 12.067 11.3334V12.0667H3.93366V11.3334C3.93366 10.9067 6.02033 9.93341 8.00033 9.93341ZM8.00033 2.66675C6.52699 2.66675 5.33366 3.86008 5.33366 5.33341C5.33366 6.80675 6.52699 8.00008 8.00033 8.00008C9.47366 8.00008 10.667 6.80675 10.667 5.33341C10.667 3.86008 9.47366 2.66675 8.00033 2.66675ZM8.00033 8.66675C6.22033 8.66675 2.66699 9.56008 2.66699 11.3334V13.3334H13.3337V11.3334C13.3337 9.56008 9.78032 8.66675 8.00033 8.66675Z"
                            fill="#CED9E5" />
                    </svg>
                    <div class="individual-driver-info">
                        <p class="name">Mrs Sue Jones</p>
                        <p class="ncb-info"></p>
                        <p class="protect-info"></p>
                    </div>
                </div>
            </div>

        </div>

        <div class="added-upgrade-section">

            <div class="upgrade-number-section">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2 3.33341L8 0.666748L14 3.33341V7.33341C14 11.0334 11.44 14.4934 8 15.3334C4.56 14.4934 2 11.0334 2 7.33341V3.33341ZM11.3333 8.66675H8.66667V11.3334H7.33333V8.66675H4.66667V7.33341H7.33333V4.66675H8.66667V7.33341H11.3333V8.66675Z"
                        fill="#CED9E5" />
                </svg>
                <p class="upgrade-number">3 Upgrades Added</p>
            </div>

            <div class="upgrade-info">
                <div class="individual-upgrade">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_23168_3303)">
                            <path
                                d="M15.133 12.6666L9.0663 6.59993C9.6663 5.06659 9.33297 3.26659 8.0663 1.99993C6.73297 0.666593 4.73297 0.399927 3.13297 1.13326L5.99963 3.99993L3.99963 5.99993L1.0663 3.13326C0.266301 4.73326 0.599634 6.73326 1.93297 8.06659C3.19963 9.33326 4.99963 9.66659 6.53297 9.06659L12.5996 15.1333C12.8663 15.3999 13.2663 15.3999 13.533 15.1333L15.0663 13.5999C15.3996 13.3333 15.3996 12.8666 15.133 12.6666Z"
                                fill="#CED9E5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_23168_3303">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="upgrade-name">Breakdown Cover</p>
                </div>
            </div>

        </div>

        <div class="price-section">
            <img class="cover-image" src="/eui-cq-assets/helm/images/brands/admiral/cover-levels/admiral-level.svg"
                alt="">
            <p class="price">£123.45 total</p>
        </div>

    </div>
</div>`);

        const basket_container_label = document.querySelector('.opti-quote-basket-dd-container .dd-label');
        if (basket_container_label) {
            basket_container_label.addEventListener('click', function () {
                const basket_container_panel = document.querySelector('.opti-quote-basket-dd-container .dd-panel');

                if (window.location.pathname == '/Admiral/cover') {
                    handleUpdateSessionStorage_Cover_Page();

                } else if (window.location.pathname == '/Admiral/ancillary/motorlegal' || window.location.pathname == '/Admiral/ancillary/breakdown' || window.location.pathname == '/Admiral/ancillary/personalinjury' || window.location.pathname == '/Admiral/ancillary/hirecar' || window.location.pathname == '/Admiral/upgrade') {
                    let session_storage_variable = JSON.parse(sessionStorage.getItem('opti-cover-info'));
                    let ancils = dataLayer.reverse().find(obj => obj.event === 'ancils');
                    if (ancils) {
                        session_storage_variable.cover_price = ancils.totalPolicyPriceMonthlyAncil;
                        sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
                    } else {
                        let gotPrice = dataLayer.reverse().find(obj => obj.event === 'gotPrice');
                        if (gotPrice) {
                            session_storage_variable.cover_price = session_storage_variable.price_type == "annual" ? gotPrice.totalPriceAnnual : gotPrice.totalPolicyPriceMonthly;
                            sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
                        }
                    }
                } else if (window.location.pathname == '/Admiral/quote') {
                    handleUpdateSessionStorage_Quote_Page();
                }


                if (basket_container_panel.classList.contains("panel-close")) {

                    handleUpdatingValueOf_Basket();

                    if (window.innerWidth < 500) {
                        handle_increasing_width_of_dd_label();
                    }

                    basket_container_panel.classList.remove("panel-close");
                    basket_container_panel.classList.add("panel-open");

                    basket_container_label.classList.remove("panel-close");
                    basket_container_label.classList.add("panel-open");
                } else {
                    if (window.innerWidth < 500) {
                        handle_decreasing_width_of_dd_label();
                    }
                    basket_container_panel.classList.remove("panel-open");
                    basket_container_panel.classList.add("panel-close");

                    basket_container_label.classList.remove("panel-open");
                    basket_container_label.classList.add("panel-close");
                }
            });

            document.addEventListener('click', function (e) {
                const isLabel = e.target.closest('.opti-quote-basket-dd-container .dd-label');
                const isPanel = e.target.closest('.opti-quote-basket-dd-container .dd-panel');
                const basket_container_panel = document.querySelector('.opti-quote-basket-dd-container .dd-panel');

                if (!isLabel && !isPanel) {
                    if (window.innerWidth < 500) {
                        handle_decreasing_width_of_dd_label();
                    }
                    basket_container_panel.classList.remove("panel-open");
                    basket_container_panel.classList.add("panel-close");

                    basket_container_label.classList.remove("panel-open");
                    basket_container_label.classList.add("panel-close");
                }
            });
        }
    }
});

function handle_continue_back_button_click() {
    if (window.location.pathname == '/Admiral/cover') {
        handleUpdateSessionStorage_Cover_Page();

    } else if (window.location.pathname == '/Admiral/ancillary/motorlegal') {
        let session_storage_variable = JSON.parse(JSON.stringify(JSON.parse(sessionStorage.getItem('opti-cover-info'))));
        const motor_legal_added_text = document.querySelector('eui-motor-legal span[data-test="cover-added-info"]');
        if (motor_legal_added_text) {
            session_storage_variable.cover_benefit_list.motorlegal = "motor legal protection";
        } else {
            if ('motorlegal' in session_storage_variable.cover_benefit_list) {
                delete session_storage_variable.cover_benefit_list.motorlegal;
            }
        }

        sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
    } else if (window.location.pathname == '/Admiral/ancillary/breakdown') {
        let session_storage_variable = JSON.parse(JSON.stringify(JSON.parse(sessionStorage.getItem('opti-cover-info'))));
        const roadside_breakdown_always_added_text = document.querySelector('eui-breakdown adm-alert[data-test="roadside-still-included"]');
        const roadside_breakdown_included_test = document.querySelector('eui-breakdown #included-with-platinum');

        if (roadside_breakdown_always_added_text || roadside_breakdown_included_test) {
            session_storage_variable.cover_benefit_list.breakdown = 'roadside assistance breakdown cover';
        } else {
            const breakdown_added_text = document.querySelector('eui-breakdown span[data-test="cover-added-info"]');
            if (breakdown_added_text) {

                let added_breakdown_node = document.querySelector('eui-breakdown #including-ancillary .adm-card__header-title');
                if (added_breakdown_node) {
                    let added_breakdown_name = added_breakdown_node.innerText.toLowerCase().trim();
                    if (added_breakdown_name.includes('roadside assistance')) {
                        session_storage_variable.cover_benefit_list.breakdown = 'roadside assistance breakdown cover';
                    } else if (added_breakdown_name.includes('national')) {
                        session_storage_variable.cover_benefit_list.breakdown = 'national breakdown cover';
                    } else if (added_breakdown_name.includes('european')) {
                        session_storage_variable.cover_benefit_list.breakdown = 'european breakdown cover';
                    }
                }
            } else {

                const breakdown_added_node_when_2nd_car_removed = document.querySelector('eui-breakdown .adm-confirm__result-text');

                if (breakdown_added_node_when_2nd_car_removed && window.getComputedStyle(breakdown_added_node_when_2nd_car_removed).color == 'rgb(15, 118, 50)') {

                    let added_breakdown_name = breakdown_added_node_when_2nd_car_removed.innerText.toLowerCase().trim();
                    if (added_breakdown_name.includes('roadside assistance')) {
                        session_storage_variable.cover_benefit_list.breakdown = 'roadside assistance breakdown cover';
                    } else if (added_breakdown_name.includes('national')) {
                        session_storage_variable.cover_benefit_list.breakdown = 'national breakdown cover';
                    } else if (added_breakdown_name.includes('european')) {
                        session_storage_variable.cover_benefit_list.breakdown = 'european breakdown cover';
                    }

                } else {
                    if ('breakdown' in session_storage_variable.cover_benefit_list) {
                        delete session_storage_variable.cover_benefit_list.breakdown;
                    }
                }
            }
        }

        sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
    } else if (window.location.pathname == '/Admiral/ancillary/personalinjury') {
        let session_storage_variable = JSON.parse(JSON.stringify(JSON.parse(sessionStorage.getItem('opti-cover-info'))));
        const personalinjury_added_text = document.querySelector('eui-personal-injury span[data-test="cover-added-info"]');
        if (personalinjury_added_text) {

            let added_personalinjury_node = document.querySelector('eui-personal-injury #including-ancillary .adm-card__header-title');
            if (added_personalinjury_node) {
                let added_personalinjury_name = added_personalinjury_node.innerText.toLowerCase().trim();
                if (added_personalinjury_name.includes('personal injury plus')) {
                    session_storage_variable.cover_benefit_list.personalinjury = 'personal injury plus cover';
                } else if (added_personalinjury_name.includes('personal injury')) {
                    session_storage_variable.cover_benefit_list.personalinjury = 'personal injury cover';
                }
            }
        } else {
            if ('personalinjury' in session_storage_variable.cover_benefit_list) {
                delete session_storage_variable.cover_benefit_list.personalinjury;
            }
        }

        sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
    } else if (window.location.pathname == '/Admiral/ancillary/hirecar') {
        let session_storage_variable = JSON.parse(JSON.stringify(JSON.parse(sessionStorage.getItem('opti-cover-info'))));
        const hirecar_added_text = document.querySelector('eui-hire-car span[data-test="cover-added-info"]');
        if (hirecar_added_text) {
            session_storage_variable.cover_benefit_list.hirecar = 'hire vehicle cover';
        } else {
            if ('hirecar' in session_storage_variable.cover_benefit_list) {
                delete session_storage_variable.cover_benefit_list.hirecar;
            }
        }

        sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
    } else if (window.location.pathname == '/Admiral/upgrade') {
        let session_storage_variable = JSON.parse(JSON.stringify(JSON.parse(sessionStorage.getItem('opti-cover-info'))));
        const selected_cover = document.querySelector('.adm-card--selected');
        if (selected_cover) {
            session_storage_variable.cover_name = selected_cover.querySelector('h3[data-test="tier-header"]').innerText;
            session_storage_variable.cover_image = selected_cover.querySelector('.adm-flex-grid__item img').getAttribute('src');
        }
        sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
    } else if (window.location.pathname == '/Admiral/quote') {
        handleUpdateSessionStorage_Quote_Page();
    }
}

utils.observeSelector('#continue-button', function (continue_btn) {
    continue_btn.addEventListener('mousedown', function () {
        handle_continue_back_button_click();
    });
});

utils.observeSelector('#back-button', function (back_btn) {
    back_btn.addEventListener('mousedown', function () {
        handle_continue_back_button_click();
    });
});

utils.observeSelector('.adm-section:has(+#quote-summary)', function (home_car_van_section) {
    if (document.querySelector('.opti-quote-basket-dd-container')) {
        document.querySelector('.opti-quote-basket-dd-container').style.display = 'block';
    }
});