const utils = optimizely.get('utils');

function handleUpdateSessionStorage_Cover_Page(cover_element) {

    let session_storage_variable = {}

    if (sessionStorage.getItem('opti-cover-info')) {
        session_storage_variable = { ...JSON.parse(sessionStorage.getItem('opti-cover-info')) }
    }

    let cover_name = cover_element.querySelector('h3[data-test="tier-heading"]');
    session_storage_variable.cover_name = cover_name.innerText;
    let cover_image = cover_element.querySelector('.adm-cover-level-footer__logo img');
    session_storage_variable.cover_image = cover_image.getAttribute('src');
    let cover_price = cover_element.querySelector('adm-cover-level-footer-price');
    session_storage_variable.cover_price = cover_price.innerText;

    let cover_benefit_list = {}

    const cover_benefits = cover_element.querySelectorAll('adm-card-section-content adm-details-item span[data-test="benefit-description"]');

    cover_benefits.forEach(el => {
        const text = el.innerText.trim().toLowerCase();
        if (text === 'motor legal protection' || text === 'roadside assistance breakdown cover') {
            if (text == "motor legal protection") {
                cover_benefit_list.motorlegal = text;
            } else {
                cover_benefit_list.breakdown = text;
            }
        }
    });

    const selected_cover_benefits = cover_element.querySelectorAll('adm-card-section-footer adm-details adm-details-item adm-flex-grid-item span');

    selected_cover_benefits.forEach(el => {
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

    let motorTier = [...dataLayer].reverse().find(obj => obj.event === 'motorTier');
    if (motorTier) {
        session_storage_variable.vehicle_reg_number = motorTier.vehicleRegistration
    }

    let personalDetails = [...dataLayer].reverse().find(obj => obj.event === 'yourDetails');
    if (personalDetails) {
        session_storage_variable.level_of_cover = personalDetails.levelOfCover;
        session_storage_variable.number_of_driver = personalDetails.noOfDrivers;
        session_storage_variable.driver_name = personalDetails.driver1name;
    }

    sessionStorage.setItem('opti-cover-info', JSON.stringify(session_storage_variable));
}

utils.observeSelector('.adm-navbar__wrap .adm-navbar__nav', function (right_nav) {
    right_nav.insertAdjacentHTML("beforeend", `<div class="opti-quote-basket-dd-container">
    <style>
        .opti-quote-basket-dd-container {
            position: relative;
            margin-left: 16px;
        }

        .opti-quote-basket-dd-container .dd-label {
            display: flex;
            align-items: center;
            padding: 10px;
            border: 1px solid #CED9E5;
            border-radius: 3px;
            cursor: pointer;
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
    </style>
    <div class="dd-label panel-close">
        <svg class="car-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.6938 6.86802C13.6938 6.86802 13.1938 4.8126 12.9718 3.78469C12.7497 2.92344 12.3605 2.36802 10.9163 2.14594C9.24967 1.95135 6.86092 1.95135 5.13842 2.14594C3.52717 2.42385 3.24967 3.03469 3.05509 3.84052C2.80509 4.86844 2.33301 6.89594 2.33301 6.89594C2.33301 6.89594 1.33301 7.34052 1.33301 8.64594C1.33301 9.61802 1.33301 10.618 1.33301 11.5905C1.33301 11.7572 1.83301 11.8405 1.86092 11.8405C1.86092 12.1739 1.86092 13.0626 1.86092 13.3959C1.88884 14.2014 2.16634 14.2293 3.11092 14.2293C4.08301 14.2293 4.33301 14.1459 4.33301 13.3405C4.33301 13.0351 4.33301 12.2851 4.33301 11.9518C6.58301 12.2297 9.41634 12.2297 11.6109 11.9518V12.063C11.6109 12.3409 11.6109 12.5076 11.6109 12.813C11.6109 14.1464 11.7776 14.2297 12.8609 14.2297C13.7776 14.2297 14.083 14.1464 14.083 12.813C14.083 12.5076 14.083 12.2297 14.083 11.9243V11.8409C14.1109 11.8409 14.6663 11.7297 14.6663 11.563C14.6663 10.5909 14.6663 9.64636 14.6663 8.67427C14.6663 7.42427 13.6943 6.86885 13.6943 6.86885L13.6938 6.86802ZM3.36051 10.618C2.63842 10.618 2.22176 9.92344 2.19384 9.45136C2.16592 8.86802 2.66592 8.20136 3.36051 8.20136C3.99926 8.20136 4.49926 8.75677 4.49926 9.39594C4.49926 10.0905 3.99926 10.618 3.36051 10.618ZM3.86051 6.64594C3.86051 6.64594 4.08259 4.97927 4.47176 3.78469C4.72176 2.97927 11.3605 3.03469 11.4997 3.75677C11.8884 5.06219 12.1384 6.61802 12.1663 6.64552C9.77759 6.34011 6.19426 6.36761 3.86092 6.64552L3.86051 6.64594ZM12.4993 10.618C11.7772 10.618 11.3605 9.95136 11.3326 9.45136C11.3047 8.84011 11.8047 8.20136 12.4993 8.20136C13.138 8.20136 13.6659 8.75677 13.6659 9.39594C13.6659 10.0905 13.138 10.618 12.4993 10.618Z"
                fill="#41A5F5" />
        </svg>
        <p class="lable">Your Quote</p>
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
        argha
    </div>
</div>`)

    const basket_container_label = document.querySelector('.opti-quote-basket-dd-container .dd-label');
    if (basket_container_label) {
        basket_container_label.addEventListener('click', function () {
            const basket_container_panel = document.querySelector('.opti-quote-basket-dd-container .dd-panel');
            const basket_container_Label = document.querySelector('.opti-quote-basket-dd-container .dd-label');

            if (window.location.pathname == '/Admiral/cover') {
                const selected_cover = document.querySelector('eui-motor-tier-select > adm-wrap');
                if (selected_cover) {
                    handleUpdateSessionStorage_Cover_Page(selected_cover)
                }
            } else if (window.location.pathname == '/Admiral/ancillary/motorlegal') {
                let session_storage_variable = { ...JSON.parse(sessionStorage.getItem('opti-cover-info')) }
                const motor_legal_added_text = document.querySelector('eui-motor-legal span[data-test="cover-added-info"]');
                if (motor_legal_added_text) {

                }
            }


            if (basket_container_panel.classList.contains("panel-close")) {
                basket_container_panel.classList.remove("panel-close");
                basket_container_panel.classList.add("panel-open");

                basket_container_Label.classList.remove("panel-close");
                basket_container_Label.classList.add("panel-open");
            } else {
                basket_container_panel.classList.remove("panel-open");
                basket_container_panel.classList.add("panel-close");

                basket_container_Label.classList.remove("panel-open");
                basket_container_Label.classList.add("panel-close");
            }
        })
    }
});

utils.observeSelector('#continue-button', function (continue_btn) {
    continue_btn.addEventListener('click', function () {
        if (window.location.pathname == '/Admiral/cover') {
            const new_selected_cover = document.querySelector('.adm-cover-levels__level--selected');
            if (new_selected_cover) {
                handleUpdateSessionStorage_Cover_Page(new_selected_cover)
            }
        }
    })
});

utils.observeSelector('eui-motor-tier-select > adm-wrap', function (selected_cover) {
    if (window.location.pathname == '/Admiral/cover') {
        handleUpdateSessionStorage_Cover_Page(selected_cover)
    }
})