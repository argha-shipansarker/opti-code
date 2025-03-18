function cleanup(selector) {
    document.querySelectorAll(selector).forEach(el => el.remove());
}

const utils = optimizely.get('utils');

function handleGenerateTag(car_container) {
    let tagsHTML = "";

    const selectors = [
        { className: "coupnelg", selector: ".coupnelg:not(.mpg-seats-feat):not(.four-seats-feat)" },
        { className: "upgrade-coupon", selector: `p[ng-if="car.upgradeApplicable && !vm.isStepTwoRedesign"]` },
        { className: "coupon-eligible-sub No-coupon-img-text", selector: ".coupon-eligible-sub.No-coupon-img-text" },
        { className: "pp-prices", selector: ".member-rate" }
    ];

    selectors.forEach(({ className, selector }) => {
        const elements = car_container.querySelectorAll(selector); // Select **all** matching elements

        elements.forEach(element => {
            tagsHTML += `
                <div class="car-tag ${className}">
                    ${element.innerHTML}
                </div>
            `;
        });
    });

    return tagsHTML ? `<div class="car-all-tags">${tagsHTML}</div>` : `<div class="car-all-tags"></div>`;
}


function handleGenerateFooter(car_container) {
    if (car_container.querySelector("#res-vehicles-pay-later-memberRate")) {
        return `
            <div class="starting-from-btn price-btn-section" style="display: flex; justify-content: space-between;">
                <div class="price-section" style="display: flex; flex-direction: column; flex-basis: 49%;">
                    <p style="font-size: 16px; color: rgb(102, 102, 102); font-weight: normal;">${car_container.querySelector(".member-rate-price-container .member-rate-starts-from").innerText}</p>
                    <p class="member-rate-price">${car_container.querySelector(".member-rate-price-container .totalPay.member-rate-price").innerHTML}</p>
                </div>
                <button class="select-btn" style="flex-basis: 49%;">
                    Select
                </button>
            </div>
        `;
    } else if (car_container.querySelector("#res-vehicles-select")) {
        return `
            <div class="only-select-btn price-btn-section" style="display: flex; flex-direction: column;">

                <div class="prices">
                    ${car_container.querySelector(".paynow .payamntr.striked-text") ? `<div class="price-section payamntr striked-text">
                        ${car_container.querySelector(".paynow .payamntr.striked-text").innerHTML}
                    </div>` : ""}

                    <div class="price-section payamntr" style="display: flex; flex-direction: column; flex-basis: 100%; font-weight: bold;">
                        ${car_container.querySelector(".paynow .payamntr:not(.striked-text)").innerHTML}
                    </div>
                </div>

                <button class="select-btn" style="flex-basis: 100%; width: 100%;">
                    Select
                </button>
            </div>
        `;
    } else if (car_container.querySelector(".paybtndtl .payatcntr #res-vehicles-pay-later") && car_container.querySelector(".paybtndtl .paynow #res-vehicles-pay-now")) {
        return `
            <div class="pay-now-pay-later-btn-section price-btn-section" style="display: flex; justify-content: space-between; ${car_container.querySelector(".amazon-row-content") ? `position: relative; padding: 90px 20px 30px; background-color: rgb(250, 249, 249);` : ""}">

                ${car_container.querySelector(".amazon-row-content") ? `
                    <div class="amazon-section">
                        <img src="${car_container.querySelector(".amazon-row-content .amazon-row-img img").getAttribute("ng-src")}"/>
                        <div class="info">
                            <p>${car_container.querySelector(".amazon-row-content p").innerHTML}</p>
                            <div class="pop-over-container">
                                <div class="pop-over-message">${car_container.querySelector(".amazon-row-content p a").getAttribute('data-content')}</div>
                            </div>
                        </div>
                    </div>
                ` : ""}

                <div class="pay-later-section price-section" style="flex-basis: 48%;">
                    <div class="prices">
                        ${car_container.querySelector(".paybtndtl .payatcntr .striked-text") ? `${car_container.querySelector(".paybtndtl .payatcntr .striked-text").outerHTML}` : ""}
                        ${car_container.querySelector(".paybtndtl .payatcntr .payamntp").outerHTML}
                    </div>
                    <button class="pay-later-btn">
                        Pay Later
                    </button>
                </div>
                <div class="pay-now-section price-section" style="flex-basis: 48%;">
                    <div class="prices">
                        ${car_container.querySelector(".paybtndtl .paynow .striked-text.payamntp") ? `${car_container.querySelector(".paybtndtl .paynow .striked-text.payamntp").outerHTML}` : ""}
                        ${car_container.querySelector(".paybtndtl .paynow .payamntr:not(.striked-text)").outerHTML}
                    </div>
                    <button class="pay-now-btn">
                        Pay Now
                    </button>
                    ${car_container.querySelector(".savedata.res-inputFldFst.selected-car-save") ? `
                        <div class="pop-over-container">
                            <p class="pop-over-text">${car_container.querySelector(".savedata.res-inputFldFst.selected-car-save").innerText} <span class="pop-over-icon"></span></p>
                            <div class="pop-over-message">${car_container.querySelector(".savedata.res-inputFldFst.selected-car-save a").getAttribute('data-content')}</div>  
                        </div>  
                    `: ""}
                </div>
            </div>
        `
    } else {
        return ""
    }
}

function handle_creating_new_car_design(car, car_count) {
    const car_container = car.querySelector(`div[ng-include=" 'carTemplate.html' "]`);

    car.insertAdjacentHTML("afterbegin", `<div class="opti-car-new-design car-number-${car_count}">
        <div class="car-header-section">
            <div class="car-info avilcardtl">
                ${car_container.querySelector('h3[ng-bind="car.carGroup"]') ? `<h3>
                    ${car_container.querySelector('h3[ng-bind="car.carGroup"]').innerText}</h3>` : ""}

                ${car_container.querySelector('p.featurecartxt.similar-car') ? `<p class="featurecartxt">
                    ${car_container.querySelector('p.featurecartxt.similar-car').innerText}</p>` : ""}

                ${car_container.querySelectorAll('.tableDiv.vehicle-features > span').length ? `
                <div class="tableDiv vehicle-features">
                    ${[...car_container.querySelectorAll('.tableDiv.vehicle-features > span')].map(span =>
        `<span class="${span.className}">${span.innerHTML}</span>`
    ).join("")}
                    ${car_container.querySelector('p[ng-bind="car.automaticCaption"]') &&
                car_container.querySelector('p[ng-bind="car.automaticCaption"]').innerText == "Automatic Transmission" ?
                `<span class="four-automatic-feat">
                        <span></span>
                        Automatic
                    </span>`: ""}
                    <span class="feature-display-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M12 9C12 8.60218 12.158 8.22064 12.4393 7.93934C12.7206 7.65804 13.1022 7.5 13.5 7.5C13.8978 7.5 14.2794 7.65804 14.5607 7.93934C14.842 8.22064 15 8.60218 15 9C15 9.39782 14.842 9.77936 14.5607 10.0607C14.2794 10.342 13.8978 10.5 13.5 10.5C13.1022 10.5 12.7206 10.342 12.4393 10.0607C12.158 9.77936 12 9.39782 12 9ZM7.5 9C7.5 8.60218 7.65804 8.22064 7.93934 7.93934C8.22064 7.65804 8.60217 7.5 9 7.5C9.39782 7.5 9.77935 7.65804 10.0607 7.93934C10.342 8.22064 10.5 8.60218 10.5 9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77935 10.342 9.39782 10.5 9 10.5C8.60217 10.5 8.22064 10.342 7.93934 10.0607C7.65804 9.77936 7.5 9.39782 7.5 9ZM3 9C3 8.60218 3.15804 8.22064 3.43934 7.93934C3.72064 7.65804 4.10218 7.5 4.5 7.5C4.89782 7.5 5.27936 7.65804 5.56066 7.93934C5.84196 8.22064 6 8.60218 6 9C6 9.39782 5.84196 9.77936 5.56066 10.0607C5.27936 10.342 4.89782 10.5 4.5 10.5C4.10218 10.5 3.72064 10.342 3.43934 10.0607C3.15804 9.77936 3 9.39782 3 9Z"
                                fill="#D4002A" />
                        </svg>
                    </span>
                </div>
                ` : ""}

            </div>
            <div class="car-image">
                <img class="img-responsive" style="margin: ${car_container.querySelector('.upgrade-car-image img.img-responsive') ? "unset" : "auto"}" src='${car_container.querySelector('img.img-responsive').getAttribute('lazy-load')}' />
                ${car_container.querySelector('.upgrade-car-image img.img-responsive') ? `<img class="upgrade-car-image img-responsive" src='${car_container.querySelector('.upgrade-car-image img.img-responsive').getAttribute('lazy-load')}'/>` : ""}
            </div>
        </div>

        <div class="car-feature-section">
            <div class="available-car-fac">
                ${car_container.querySelector('.available-car-facilities .available-car-fac').innerHTML}
            </div>
            <div class="close-blue">
                <span></span>
            </div>
        </div>

        <div class="car-footer-section avilcardtl">
            ${handleGenerateTag(car_container)}
            ${handleGenerateFooter(car_container)}
        </div>
    </div>`);

    car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-header-section .vehicle-features .feature-display-icon`).addEventListener("click", function () {
        car.querySelector(`.opti-car-new-design .car-feature-section`).style.height = `${car.querySelector(`.opti-car-new-design .car-header-section`).offsetHeight}px`
        car.querySelector(`.opti-car-new-design .car-header-section`).style.display = "none";
        car.querySelector(`.opti-car-new-design .car-feature-section`).style.display = "block";
    })

    car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-feature-section .close-blue`).addEventListener("click", function () {
        car.querySelector(`.opti-car-new-design .car-header-section`).style.display = "block";
        car.querySelector(`.opti-car-new-design .car-feature-section`).style.display = "none";
    })

    //for starting-from-btn
    if (car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .starting-from-btn button`)) {
        car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .starting-from-btn button`).addEventListener('click', () => {
            if (car_container.querySelector('#res-vehicles-pay-later-memberRate')) {
                car_container.querySelector('#res-vehicles-pay-later-memberRate').click();
            }
        });
    }

    //for only select btn
    if (car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .only-select-btn button`)) {
        car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .only-select-btn button`).addEventListener('click', () => {
            if (car_container.querySelector('#res-vehicles-select')) {
                car_container.querySelector('#res-vehicles-select').click();
            }
        });
    }

    //for pay-now-pay-later-btn
    if (car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section`)) {

        if (car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-later-section .pay-later-btn`)) {
            car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-later-section .pay-later-btn`).addEventListener('click', function () {
                if (car_container.querySelector('#res-vehicles-pay-later')) {
                    car_container.querySelector('#res-vehicles-pay-later').click()
                }
            })
        }

        if (car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pay-now-btn`)) {

            car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pay-now-btn`).addEventListener('click', function () {
                if (car_container.querySelector('#res-vehicles-pay-now')) {
                    car_container.querySelector('#res-vehicles-pay-now').click()
                }
            })

            if (car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container`)) {

                car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-icon`).addEventListener('mouseenter', function () {
                    car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.visibility = "visible";
                    car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.opacity = "1";
                })

                car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-icon`).addEventListener('mouseleave', function () {
                    car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.visibility = "hidden";
                    car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.opacity = "0";
                })
            }
        }

        //amazon section
        if (car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .amazon-section .res-helpIcon`)) {
            car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .amazon-section .res-helpIcon`).addEventListener('mouseenter', function () {
                car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.visibility = "visible";
                car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.opacity = "1";
            });

            car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .amazon-section .res-helpIcon`).addEventListener('mouseleave', function () {
                car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.visibility = "hidden";
                car.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.opacity = "0";
            });
        }
    }

    //setting the car-tags height.

    const all_car_tags = document.querySelectorAll('.opti-car-new-design .car-all-tags');
    let maxHeight_tag = 0;
    all_car_tags.forEach(tag => {
        const tagHeight = tag.offsetHeight;
        if (tagHeight > maxHeight_tag) {
            maxHeight_tag = tagHeight;
        }
    });

    all_car_tags.forEach(tag => {
        tag.style.height = `${maxHeight_tag}px`;
    });


    const all_car_price_btn_section = document.querySelectorAll('.opti-car-new-design .price-btn-section .prices');
    let maxHeight_price_btn_section = 0;
    all_car_price_btn_section.forEach(tag => {
        const tagHeight = tag.offsetHeight;
        if (tagHeight > maxHeight_price_btn_section) {
            maxHeight_price_btn_section = tagHeight;
        }
    });

    all_car_price_btn_section.forEach(tag => {
        tag.style.height = `${maxHeight_price_btn_section}px`;
    });
}

if (window.location.pathname == '/en/reservation') {
    utils.observeSelector(`.vehicle-availability div[ng-class="{'three-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step2PageName, 'two-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step3PageName}"]`, function (car_list_container) {

        car_list_container.insertAdjacentHTML("afterbegin", `
            <style>
            .opti-car-new-design {
                border: 1px solid rgb(204, 204, 204);
                display: flex;
                flex-direction: column;
                padding: 15px 6% 0;
                position: relative;
            }

            .opti-car-new-design .vertical-line-feat{
                display: none;
            }

            .opti-car-new-design .car-header-section .vehicle-features .feature-display-icon { 
                cursor: pointer;
            }

            .opti-car-new-design .car-header-section .car-image {
                position: relative;
            }

            .opti-car-new-design .car-header-section .car-image .upgrade-car-image {
                position: absolute;
                top: 20px;
                left: 22%;
                width: 85%;
            }

            .opti-car-new-design .car-feature-section {
                position: relative;
                display: none;
            }

            .opti-car-new-design .car-feature-section .available-car-fac {
                padding: 30px 0px 0px;
                margin: 0;
            }

            .opti-car-new-design .car-feature-section .close-blue{
                position: absolute;
                top: 3px;
                right: 0;
                cursor: pointer;
            }

            .opti-car-new-design .select-btn {
                width: 160px;
                min-width: 160px;
                font-size: 15px;
                margin: 10px 0px;
                padding: 0px 10px;
                height: 40px;
                line-height: 40px;
                font-family: Custom-Regular, Arial, sans-serif;
                background: rgb(247, 139, 0);
                border: 0;
                color: white;
            }

            .opti-car-new-design .pay-later-btn {
                width: 100%;
                background: transparent;
                border: 2px solid rgb(247, 139, 0);
                color: rgb(247, 139, 0);
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Custom-Regular, Arial, sans-serif;
                font-size: 15px;
                height: 40px;
                color: black;
            }

            .opti-car-new-design .pay-now-btn {
                width: 100%;
                background: rgb(0, 40, 95);
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Custom-Regular, Arial, sans-serif;
                font-size: 15px;
                height: 40px;
                color: white;
                border: 2px solid rgb(0, 40, 95);
            }

            .opti-car-new-design .price-section,
            .opti-car-new-design .price-section p {
                color: rgb(0, 0, 0);
                font-size: 21px;
                font-weight: bold;
                margin: 0px;
                padding: 0px;
            }

            .opti-car-new-design .price-section sup {
                top: 0;
            }

            .opti-car-new-design .price-section .striked-text,
            .opti-car-new-design .price-section p.striked-text {
                font-size: 16px;
            }

            .opti-car-new-design .price-section.striked-text {
                font-size: 16px;
            }

            .opti-car-new-design .pop-over-container .pop-over-text{
                background: rgb(240, 238, 236);
                padding: 0;
                text-align: center;
                color: rgb(0, 0, 0) !important;
                font-size: 10px;
                position: relative;
                margin-top: 12px;
            }

            .opti-car-new-design .pop-over-container {
                position: relative;
            }

            .opti-car-new-design .pop-over-container .pop-over-text::after,
            .opti-car-new-design .pop-over-container .pop-over-message::after {
                content: " ";
                position: absolute;
                right: 45%;
                top: -10px;
                border-width: 0px 15px 12px;
                border-top-style: initial;
                border-top-color: initial;
                border-right-style: solid;
                border-right-color: transparent;
                border-left-style: solid;
                border-left-color: transparent;
                border-bottom-style: solid;
                border-bottom-color: rgb(240, 238, 236);
            }

            .opti-car-new-design .pop-over-container .pop-over-message::after {
                top: -12px;
            }

            .opti-car-new-design .pop-over-container .pop-over-text .pop-over-icon{
                background-position: -437px -1px;
                width: 16px;
                height: 19px;
                vertical-align: middle;
                background-image: url(https://www.budget.com/etc/designs/budget/common/clientlib/images/global_sprite.png);
                background-repeat: no-repeat;
                display: inline-block;
                background-size: 550px 550px;
                cursor: pointer;
            }

            .opti-car-new-design .pop-over-container .pop-over-message {
                position: absolute;
                visibility: hidden;
                opacity: 0;
                background: white;
                padding: 20px;
                z-index: 99999;
                border: 1px solid rgb(240, 238, 236);
                margin-top: 12px;
            }

            .opti-car-new-design .pop-over-container .pop-over-message p {
                font-size: 14px;
                font-weight: normal;
            }

            .opti-car-new-design .pop-over-container .pop-over-message .closePopover {
                display: none;
            }

            .opti-car-new-design .car-footer-section .car-tag.pp-prices {
                text-align: start;
            }

            .opti-car-new-design .car-footer-section .car-all-tags {
                margin-bottom: 6px;
            }

            .opti-user-seleted-car .selected-car-badge {
                position: absolute;
                top: 0;
                background: black;
                color: white;
                padding: 6px 6px 6px 12px;
                left: 20px;
            }

            .opti-user-seleted-car .selected-car-badge::after {
                content: "";
                height: 33px;
                width: 15px;
                display: inline-block;
                position: absolute;
                top: 0px;
                right: -15px;
                background-image: none !important;
                border-right: 15px solid transparent !important;
                border-top: 33px solid rgb(0, 0, 0) !important;
                border-left: transparent !important;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section {
                position: absolute;
                display: flex;
                top: 20px;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section p {
                font-size: 1.4rem;
                margin-left: 13px;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section p .amazon-row-bold {
                font-weight: bold;
                font-size: 1.65rem;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section img {
                width: 76px;
                height: 56px;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .info p .popover {
                display: none !important;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message {
                margin-top: 0;
                left: 60px;
                right: -60px;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message span {
                front-size: 12px;
            }

            .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message::after {
                display: none;
            }
        </style>    
        `)

        console.warn("car_list_container", car_list_container);

        car_list_container.style.display = "grid";
        car_list_container.style.gridTemplateColumns = "repeat(3, minmax(0px, 1fr))";
        car_list_container.style.gap = "30px";
        car_list_container.style.padding = "0 6%";

        let car_count = 0;

        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach(mutation => {
                if (mutation.type === 'childList') {
                    console.log('Child elements changed!', mutation, document.querySelector('.featuredcar.featured-car-box'));

                    [...document.querySelectorAll(`.vehicle-availability div[ng-class="{'three-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step2PageName, 'two-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step3PageName}"] div[ng-class="{'grid-border': vm.isStepTwoRedesign}"]`)].forEach((car, car_count) => {
                        const car_container = car.querySelector(`div[ng-include=" 'carTemplate.html' "]`);
                        if (car_container) {
                            car_container.style.display = "none";
                            if (car.querySelector('.opti-car-new-design')) {
                                car.querySelector('.opti-car-new-design').remove();
                                handle_creating_new_car_design(car, car_count)
                            }
                        }
                    })

                    if (document.querySelector(`div[ng-if="vm.response.featuredVehicles.length <= 1 || vm.deviceType == 'handheld'"] .featuredcar.featured-car-box`)) {

                        if (!car_list_container.querySelector('.opti-user-seleted-car')) {
                            handle_generate_new_selected_car_design(car_list_container, document.querySelector(`div[ng-if="vm.response.featuredVehicles.length <= 1 || vm.deviceType == 'handheld'"]`))
                        }
                    } else {
                        if (car_list_container.querySelector('.opti-user-seleted-car')) {
                            car_list_container.querySelector('.opti-user-seleted-car').remove()
                        }
                    }
                }
            });
        });

        observer.observe(car_list_container, { childList: true, subtree: false });


        utils.observeSelector(`.vehicle-availability div[ng-class="{'three-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step2PageName, 'two-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step3PageName}"] div[ng-class="{'grid-border': vm.isStepTwoRedesign}"]`, function (car) {

            console.warn("car", car);

            const promo_banner_1 = car.querySelector(`div[ng-if="($index == vm.response.showPromotion.index) && (vm.response.showPromotion.section == 'additional')"]`);
            if (promo_banner_1) {
                promo_banner_1.remove();
            }

            const promo_banner_2 = car.querySelector(`section[ng-if="$first"]`);
            if (promo_banner_2) {
                promo_banner_2.remove();
            }

            const car_container = car.querySelector(`div[ng-include=" 'carTemplate.html' "]`);
            if (car_container) {
                car_container.style.display = "none";

                if (!car.querySelector('.opti-car-new-design')) {
                    console.warn('going once===================')
                    handle_creating_new_car_design(car, car_count);

                    car_count++;
                }

            }
        });

        utils.observeSelector(`div[ng-if="vm.response.featuredVehicles.length <= 1 || vm.deviceType == 'handheld'"]`, function (selected_car) {
            selected_car.style.display = "none";

            if (selected_car.querySelector('.featuredcar.featured-car-box')) {
                if (car_list_container.querySelector('.opti-user-seleted-car')) {
                    car_list_container.querySelector('.opti-user-seleted-car').remove();

                    handle_generate_new_selected_car_design(car_list_container, selected_car)
                } else {
                    handle_generate_new_selected_car_design(car_list_container, selected_car)
                }
            }
        })
    });

    function handleGenerateFooter_For_Selected_Car(car_container) {
        if (car_container.querySelector("#res-vehicles-pay-later-memberRate")) {
            return `
                <div class="starting-from-btn price-btn-section" style="display: flex; justify-content: space-between;">
                    <div class="price-section" style="display: flex; flex-direction: column; flex-basis: 49%;">
                        <p style="font-size: 16px; color: rgb(102, 102, 102); font-weight: normal;">${car_container.querySelector(".member-rate-price-container .member-rate-starts-from").innerText}</p>
                        <p class="member-rate-price">${car_container.querySelector(".member-rate-price-container .totalPay.member-rate-price").innerHTML}</p>
                    </div>
                    <button class="select-btn" style="flex-basis: 49%;">
                        Select
                    </button>
                </div>
            `;
        } else if (car_container.querySelector("#res-vehicle-select") && car_container.querySelector("#res-vehicles-pay-now")) {
            return `
                <div class="pay-now-pay-later-btn-section price-btn-section" style="display: flex; justify-content: space-between; ${car_container.querySelector(".amazon-row-content") ? `position: relative; padding: 90px 20px 30px; background-color: rgb(250, 249, 249);` : ""}">

                    ${car_container.querySelector(".amazon-row-content") ? `
                        <div class="amazon-section">
                            <img src="${car_container.querySelector(".amazon-row-content .amazon-row-img img").getAttribute("ng-src")}"/>
                            <div class="info">
                                <p>${car_container.querySelector(".amazon-row-content p").innerHTML}</p>
                                <div class="pop-over-container">
                                    <div class="pop-over-message">${car_container.querySelector(".amazon-row-content p a").getAttribute('data-content')}</div>
                                </div>
                            </div>
                        </div>
                    ` : ""}

                    <div class="pay-later-section price-section" style="flex-basis: 48%;">
                        <div class="prices">
                            ${car_container.querySelector(".paybtndtl .payatcntr .striked-text") ? `${car_container.querySelector(".paybtndtl .payatcntr .striked-text").outerHTML}` : ""}
                            ${car_container.querySelector(".paybtndtl .payatcntr .payamntp").outerHTML}
                        </div>
                        <button class="pay-later-btn">
                            Pay Later
                        </button>
                    </div>
                    <div class="pay-now-section price-section" style="flex-basis: 48%;">
                        <div class="prices">
                            ${car_container.querySelector(".paybtndtl .paynow .striked-text.payamntp") ? `${car_container.querySelector(".paybtndtl .paynow .striked-text.payamntp").outerHTML}` : ""}
                            ${car_container.querySelector(".paybtndtl .paynow .payamntr:not(.striked-text)").outerHTML}
                        </div>

                        <button class="pay-now-btn">
                            Pay Now
                        </button>

                        ${car_container.querySelector(".savedata.res-inputFldFst") ? `
                        <div class="pop-over-container">
                            <p class="pop-over-text">${car_container.querySelector(".savedata.res-inputFldFst").innerText} <span class="pop-over-icon"></span></p>
                            <div class="pop-over-message">${car_container.querySelector(".savedata.res-inputFldFst a").getAttribute('data-content')}</div>  
                        </div>  
                        `: ""}
                    </div>
                </div>
            `
        } else if (car_container.querySelector("#res-vehicle-select")) {
            return `
                <div class="only-select-btn price-btn-section" style="display: flex; flex-direction: column;">
    
                    <div class="prices">
                        ${car_container.querySelector(".paynow .payamntr.striked-text") ? `<div class="price-section payamntr striked-text">
                            ${car_container.querySelector(".paynow .payamntr.striked-text").innerHTML}
                        </div>` : ""}
    
                        <div class="price-section payamntr" style="display: flex; flex-direction: column; flex-basis: 100%; font-weight: bold;">
                            ${car_container.querySelector(".paynow .payamntr:not(.striked-text)").innerHTML}
                        </div>
                    </div>
    
                    <button class="select-btn" style="flex-basis: 100%; width: 100%;">
                        Select
                    </button>
                </div>
            `;
        } else {
            return ""
        }
    }

    function handle_generate_new_selected_car_design(car_list_container, selected_car) {
        car_list_container.insertAdjacentHTML("afterbegin", `<div class="opti-user-seleted-car">
            <div class="opti-car-new-design">
            <div class='selected-car-badge'>
                Your Original Selection
            </div>
            <div class="car-header-section">
                <div class="car-info avilcardtl">
                    ${selected_car.querySelector(`h3[ng-if="vm.response.bundleFlow !== 'GUIDED_RES'"]`) ? `<h3>
                        ${selected_car.querySelector(`h3[ng-if="vm.response.bundleFlow !== 'GUIDED_RES'"]`).innerText}</h3>` : ""}
    
                    ${selected_car.querySelector('p.featurecartxt') ? `<p class="featurecartxt">
                        ${selected_car.querySelector('p.featurecartxt').innerText}</p>` : ""}
    
                    ${selected_car.querySelectorAll('.tableDiv.vehicle-features-step2 > span').length ? `
                    <div class="tableDiv vehicle-features">
                        ${[...selected_car.querySelectorAll('.tableDiv.vehicle-features-step2 > span')].map(span =>
            `<span class="${span.className}">${span.innerHTML}</span>`
        ).join("")}
                        ${selected_car.querySelector('p[ng-bind="car.automaticCaption"]') &&
                    selected_car.querySelector('p[ng-bind="car.automaticCaption"]').innerText == "Automatic Transmission" ?
                    `<span class="four-automatic-feat">
                            <span></span>
                            Automatic
                        </span>`: ""}
                        <span class="feature-display-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M12 9C12 8.60218 12.158 8.22064 12.4393 7.93934C12.7206 7.65804 13.1022 7.5 13.5 7.5C13.8978 7.5 14.2794 7.65804 14.5607 7.93934C14.842 8.22064 15 8.60218 15 9C15 9.39782 14.842 9.77936 14.5607 10.0607C14.2794 10.342 13.8978 10.5 13.5 10.5C13.1022 10.5 12.7206 10.342 12.4393 10.0607C12.158 9.77936 12 9.39782 12 9ZM7.5 9C7.5 8.60218 7.65804 8.22064 7.93934 7.93934C8.22064 7.65804 8.60217 7.5 9 7.5C9.39782 7.5 9.77935 7.65804 10.0607 7.93934C10.342 8.22064 10.5 8.60218 10.5 9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77935 10.342 9.39782 10.5 9 10.5C8.60217 10.5 8.22064 10.342 7.93934 10.0607C7.65804 9.77936 7.5 9.39782 7.5 9ZM3 9C3 8.60218 3.15804 8.22064 3.43934 7.93934C3.72064 7.65804 4.10218 7.5 4.5 7.5C4.89782 7.5 5.27936 7.65804 5.56066 7.93934C5.84196 8.22064 6 8.60218 6 9C6 9.39782 5.84196 9.77936 5.56066 10.0607C5.27936 10.342 4.89782 10.5 4.5 10.5C4.10218 10.5 3.72064 10.342 3.43934 10.0607C3.15804 9.77936 3 9.39782 3 9Z"
                                    fill="#D4002A" />
                            </svg>
                        </span>
                    </div>
                    ` : ""}
    
                </div>
                <div class="car-image">
                    <img class="img-responsive" style="margin: ${selected_car.querySelector('.upgrade-car-image img.img-responsive') ? "unset" : "auto"}" src='${selected_car.querySelector('img.img-responsive').getAttribute('lazy-load')}' />
                    ${selected_car.querySelector('.upgrade-car-image img.img-responsive') ? `<img class="upgrade-car-image img-responsive" src='${selected_car.querySelector('.upgrade-car-image img.img-responsive').getAttribute('lazy-load')}'/>` : ""}
                </div>
            </div>
    
            <div class="car-feature-section">
                <div class="available-car-fac">
                    ${selected_car.querySelector('.feature-car-facilities .featured-car-fac').innerHTML}
                </div>
                <div class="close-blue">
                    <span></span>
                </div>
            </div>
    
            <div class="car-footer-section avilcardtl">
                ${handleGenerateTag(selected_car)}
                ${handleGenerateFooter_For_Selected_Car(selected_car)}
            </div>
        </div>    
        </div>`);

        car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-header-section .vehicle-features .feature-display-icon`).addEventListener("click", function () {
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-feature-section`).style.height = `${car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-header-section`).offsetHeight}px`
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-header-section`).style.display = "none";
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .selected-car-badge`).style.display = "none";
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-feature-section`).style.display = "block";
        })

        car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-feature-section .close-blue`).addEventListener("click", function () {
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-header-section`).style.display = "block";
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .selected-car-badge`).style.display = "block";
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-feature-section`).style.display = "none";
        })

        //for starting-from-btn
        if (car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .starting-from-btn button`)) {
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .starting-from-btn button`).addEventListener('click', () => {
                if (selected_car.querySelector('#res-vehicles-pay-later-memberRate')) {
                    selected_car.querySelector('#res-vehicles-pay-later-memberRate').click();
                }
            });
        }

        //for only select btn
        if (car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .only-select-btn button`)) {
            car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .only-select-btn button`).addEventListener('click', () => {
                if (selected_car.querySelector('#res-vehicle-select')) {
                    selected_car.querySelector('#res-vehicle-select').click();
                }
            });
        }

        //for pay-now-pay-later-btn
        if (car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section`)) {

            if (car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-later-section .pay-later-btn`)) {
                car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-later-section .pay-later-btn`).addEventListener('click', function () {
                    if (selected_car.querySelector('#res-vehicle-select')) {
                        selected_car.querySelector('#res-vehicle-select').click()
                    }
                })
            }

            if (car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pay-now-btn`)) {

                car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pay-now-btn`).addEventListener('click', function () {
                    if (selected_car.querySelector('#res-vehicles-pay-now')) {
                        selected_car.querySelector('#res-vehicles-pay-now').click()
                    }
                })

                if (car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container`)) {

                    car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-icon`).addEventListener('mouseenter', function () {
                        car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.visibility = "visible";
                        car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.opacity = "1";
                    })

                    car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-icon`).addEventListener('mouseleave', function () {
                        car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.visibility = "hidden";
                        car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .pay-now-section .pop-over-container .pop-over-message`).style.opacity = "0";
                    })
                }
            }


            //amazon section
            if (car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .res-helpIcon`)) {
                car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .res-helpIcon`).addEventListener('mouseenter', function () {
                    car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.visibility = "visible";
                    car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.opacity = "1";
                });

                car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .res-helpIcon`).addEventListener('mouseleave', function () {
                    car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.visibility = "hidden";
                    car_list_container.querySelector(`.opti-user-seleted-car .opti-car-new-design .car-footer-section .pay-now-pay-later-btn-section .amazon-section .pop-over-container .pop-over-message`).style.opacity = "0";
                });
            }
        }

        //setting the car-tags height.

        const all_car_tags = document.querySelectorAll('.opti-car-new-design .car-all-tags');
        let maxHeight_tag = 0;
        all_car_tags.forEach(tag => {
            const tagHeight = tag.offsetHeight;
            if (tagHeight > maxHeight_tag) {
                maxHeight_tag = tagHeight;
            }
        });

        if (document.querySelector('.opti-user-seleted-car .opti-car-new-design .car-all-tags')) {
            document.querySelector('.opti-user-seleted-car .opti-car-new-design .car-all-tags').style.height = `${maxHeight_tag}px`;
        }

        const all_car_price_btn_section = document.querySelectorAll('.opti-car-new-design .price-btn-section .prices');
        let maxHeight_price_btn_section = 0;
        all_car_price_btn_section.forEach(tag => {
            const tagHeight = tag.offsetHeight;
            if (tagHeight > maxHeight_price_btn_section) {
                maxHeight_price_btn_section = tagHeight;
            }
        });

        if (document.querySelector('.opti-user-seleted-car .opti-car-new-design .price-btn-section .prices')) {
            document.querySelector('.opti-user-seleted-car .opti-car-new-design .price-btn-section .prices').style.height = `${maxHeight_price_btn_section}px`;
        }

    }

    utils.observeSelector(`.vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv)`, function (filter_container) {
        filter_container.style.display = "flex";
    });


    //vehicle filter work
    utils.observeSelector(`.vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv) > div:nth-of-type(1)`, function (vehicle_filter) {

        vehicle_filter.insertAdjacentHTML("afterbegin", `<style>
            .opti-new-vehicle-filter #res-vehicles-filter-by-vehicle-type::after {
                display: none !important;
            }

            .opti-new-vehicle-filter #res-vehicles-filter-by-vehicle-type {
                width: unset;
                padding-right: 0;
                color: black;
            }

            .opti-new-vehicle-filter {
                display: flex;
                width: unset;
                border: 1px solid rgb(204, 204, 204);
                border-bottom-width: 1px !important;
                border-radius: 25px;
            }

            .opti-new-vehicle-filter span {
                padding: 0 !important;
                height: 20px;
            }

            .opti-new-vehicle-filter span .white{
                display: none;
            }

            .opti-new-vehicle-filter:hover {
                background-color: #d9d9d9;
                border-color: rgb(204, 204, 204);
            }

            .opti-new-vehicle-filter.sampleClass {
                padding-bottom: 10px !important; 
                border-bottom: 1px solid !important;
                background-color: black !important;
            }

            .opti-new-vehicle-filter.sampleClass #res-vehicles-filter-by-vehicle-type{
                color: white;
            }

            
            .opti-new-vehicle-filter.sampleClass span .white{
                display: block;
            }

            .opti-new-vehicle-filter.sampleClass span .black{
                display: none;
            }
        </style>`)

        vehicle_filter.classList.add('opti-new-vehicle-filter');

        const first_span = vehicle_filter.querySelector('span');
        if (first_span) {
            first_span.innerText = "";
            first_span.innerHTML = `<svg class="black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 13.6001H10" stroke="black" stroke-width="2"/>
            <path d="M14.7998 13.6001L17.9998 13.6001" stroke="black" stroke-width="2"/>
            <path d="M2 6.40039L6 6.40039" stroke="black" stroke-width="2"/>
            <path d="M10 6.40039L18 6.40039" stroke="black" stroke-width="2"/>
            <path d="M9.7999 6.4002C9.7999 7.61522 8.81493 8.6002 7.5999 8.6002C6.38488 8.6002 5.3999 7.61522 5.3999 6.4002C5.3999 5.18517 6.38488 4.2002 7.5999 4.2002C8.81493 4.2002 9.7999 5.18517 9.7999 6.4002Z" stroke="black" stroke-width="2"/>
            <path d="M14.6002 13.6004C14.6002 14.8154 13.6152 15.8004 12.4002 15.8004C11.1852 15.8004 10.2002 14.8154 10.2002 13.6004C10.2002 12.3854 11.1852 11.4004 12.4002 11.4004C13.6152 11.4004 14.6002 12.3854 14.6002 13.6004Z" stroke="black" stroke-width="2"/>
            </svg>
            <svg class="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 13.6001H10" stroke="white" stroke-width="2"/>
            <path d="M14.7998 13.6001L17.9998 13.6001" stroke="white" stroke-width="2"/>
            <path d="M2 6.40039L6 6.40039" stroke="white" stroke-width="2"/>
            <path d="M10 6.40039L18 6.40039" stroke="white" stroke-width="2"/>
            <path d="M9.7999 6.4002C9.7999 7.61522 8.81493 8.6002 7.5999 8.6002C6.38488 8.6002 5.3999 7.61522 5.3999 6.4002C5.3999 5.18517 6.38488 4.2002 7.5999 4.2002C8.81493 4.2002 9.7999 5.18517 9.7999 6.4002Z" stroke="white" stroke-width="2"/>
            <path d="M14.6002 13.6004C14.6002 14.8154 13.6152 15.8004 12.4002 15.8004C11.1852 15.8004 10.2002 14.8154 10.2002 13.6004C10.2002 12.3854 11.1852 11.4004 12.4002 11.4004C13.6152 11.4004 14.6002 12.3854 14.6002 13.6004Z" stroke="white" stroke-width="2"/>
            </svg>
            `
        }
    });
    //vehicle filter dd
    utils.observeSelector(`#myDiv`, function (vehicle_filter_cars_section) {
        vehicle_filter_cars_section.classList.add('opti-new-vehicle-filter-cars-section');
        vehicle_filter_cars_section.insertAdjacentHTML("afterbegin", `<style>
    .opti-new-vehicle-filter-cars-section {
        border: 0 !important;
    }

    .opti-new-vehicle-filter-cars-section ul {
    display: flex !important;
    }

    .opti-new-vehicle-filter-cars-section ul li div {
        display: flex;
        flex-direction: column;
        border-bottom: 0;
        border: 2px solid rgb(238, 238, 238);
        border-bottom: 2px solid rgb(238, 238, 238) !important;
        border-radius: 15px;
        height: 100%;
        align-items: center;
        padding: 0;
        padding: 15px 15px 100px 8px !important;
    }
</style>`)
    });


    //price filter work
    utils.observeSelector(`.vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv) > div:nth-of-type(2)`, function (vehicle_sort_section) {
        vehicle_sort_section.style.display = "none"

        if (!document.querySelector('.vehiclePushDownBox .opti-new-sort-design')) {
            vehicle_sort_section.insertAdjacentHTML("afterend", `<div class="opti-new-sort-design">
                <style>
                    .opti-new-sort-design {
                        display: flex;
                        align-items: center;
                        width: 50%;
                    }
                
                    .opti-new-sort-design p {
                        margin-bottom: 0;
                    }
                
                    .opti-new-sort-design .opti-sort-options {
                        display: flex;
                        align-items: center;
                    }
                
                    .opti-new-sort-design .opti-sort-options li {
                        list-style: none;
                        margin-left: 10px;
                    }
                
                    .opti-new-sort-design .opti-sort-options a {
                        width: 100% !important;
                        padding: 10px 20px;
                        border: 1px solid rgb(238, 238, 238);
                        border-radius: 10px;
                        color: black;
                    }
                
                    .opti-new-sort-design .opti-sort-options a:hover {
                        background-color: rgb(217, 217, 217);
                    }
                
                    .opti-new-sort-design .opti-sort-options li.selected a {
                        background-color: black;
                        color: white;
                    }
                
                    .opti-new-sort-design .opti-sort-options a span {
                        display: none;
                    }
                </style>
                            <p>Sort by:</p>
                            <div class="opti-sort-options">
                            </div>
                        </div>`);

            const opti_sort_section = document.querySelector('.opti-sort-options');
            const actual_sort_options = vehicle_sort_section.querySelector('.dropdown-menu');
            if (opti_sort_section && actual_sort_options) {
                const listItems = actual_sort_options.querySelectorAll('li');
                listItems.forEach(li => {
                    const sort_name = li.querySelector('a').innerText.trim();
                    if (sort_name == 'Price (Low to High)') {
                        li.querySelector('a').innerText = "Price";
                    } else if (sort_name == 'Mileage (High to Low)') {
                        li.querySelector('a').innerText = "Mileage";
                    } else if (sort_name == 'Number of Seats (High to Low)') {
                        li.querySelector('a').innerText = "Seats";
                    }
                    opti_sort_section.appendChild(li); // Move each <li> into .opti-sort-options
                });
            }
        }


        if (document.querySelectorAll(`.vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv) > .opti-new-sort-design .opti-sort-options li`).length) {
            [...document.querySelectorAll(`.vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv) > .opti-new-sort-design .opti-sort-options li`)].forEach(sort_option => {
                sort_option.addEventListener("click", function () {

                    let checkInterval = setInterval(() => {
                        if (sort_option.classList.contains("selected")) {
                            [...document.querySelectorAll(`.vehicle-availability div[ng-class="{'three-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step2PageName, 'two-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step3PageName}"] div[ng-class="{'grid-border': vm.isStepTwoRedesign}"]`)].forEach((car, car_count) => {
                                const car_container = car.querySelector(`div[ng-include=" 'carTemplate.html' "]`);
                                if (car_container) {
                                    car_container.style.display = "none";
                                    if (car.querySelector('.opti-car-new-design')) {
                                        car.querySelector('.opti-car-new-design').remove();
                                        handle_creating_new_car_design(car, car_count)
                                    }
                                }
                            })

                            let car_list_container = document.querySelector(`.vehicle-availability div[ng-class="{'three-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step2PageName, 'two-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step3PageName}"]`)

                            if (document.querySelector(`div[ng-if="vm.response.featuredVehicles.length <= 1 || vm.deviceType == 'handheld'"] .featuredcar.featured-car-box`)) {

                                if (car_list_container.querySelector('.opti-user-seleted-car')) {
                                    car_list_container.querySelector('.opti-user-seleted-car').remove();
                                    handle_generate_new_selected_car_design(car_list_container, document.querySelector(`div[ng-if="vm.response.featuredVehicles.length <= 1 || vm.deviceType == 'handheld'"]`))
                                } else {
                                    handle_generate_new_selected_car_design(car_list_container, document.querySelector(`div[ng-if="vm.response.featuredVehicles.length <= 1 || vm.deviceType == 'handheld'"]`))
                                }
                            } else {
                                if (car_list_container.querySelector('.opti-user-seleted-car')) {
                                    car_list_container.querySelector('.opti-user-seleted-car').remove()
                                }
                            }
                            clearInterval(checkInterval); // Stop checking once found
                        }
                    }, 50); // Check every 50ms

                })
            })
        }



    });

    //discount filter work
    utils.observeSelector(`.vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv) > .vehicleDiscount`, function (vehicle_discount_section) {

        const close_btn = vehicle_discount_section.querySelector('.close')
        if (close_btn) {
            close_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.60764 3.56538C9.76352 3.40949 10.0163 3.40949 10.1721 3.56538L13.7246 7.11782C13.7994 7.19268 13.8415 7.29421 13.8415 7.40008L13.8415 15.001C13.8415 15.4419 13.484 15.7993 13.0431 15.7993L6.73666 15.7993C6.29575 15.7993 5.93832 15.4419 5.93832 15.001L5.93832 7.40008C5.93832 7.29421 5.98038 7.19268 6.05523 7.11782L9.60764 3.56538ZM9.32538 5.65323C9.01361 5.96501 9.01361 6.47049 9.32538 6.78227C9.63715 7.09404 10.1426 7.09404 10.4544 6.78227C10.7662 6.47049 10.7662 5.96501 10.4544 5.65323C10.1426 5.34146 9.63715 5.34146 9.32538 5.65323Z" fill="#3C3A37"/>
</svg>`
        }

        vehicle_discount_section.insertAdjacentHTML("afterbegin", `
            <style>
    .vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv)>.vehicleDiscount {
        order: 2;
        padding-bottom: 10px;
        display: flex;
        width: auto;
        border: 1px solid rgb(204, 204, 204);
        border-bottom-width: 1px !important;
        border-radius: 25px;
    }

    .vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv)>.vehicleDiscount .close {
        padding: 0;
        opacity: 1;
    }

    .vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv)>.vehicleDiscount .discount-dropdown .discount-dropdown.s-dropdown {
        display: unset;
    }

    .vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv)>.vehicleDiscount .discount-dropdown .discount-dropdown.s-dropdown span {
        width: unset;
        padding-right: 0;
        color: black;
    }

        .vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv)>.vehicleDiscount .discount-dropdown .discount-dropdown.s-dropdown::after {
        display: none;
    }
</style>
        `)

    });
    //discount filter modal
    utils.observeSelector(`.vehiclePushDownBox .res-discount`, function (vehicle_discount_dd) {
        vehicle_discount_dd.insertAdjacentHTML("afterbegin", `
<style>
    .vehiclePushDownBox .res-discount {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99999;
        height: 100vh;
        padding: 0;
        width: 30%;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv {
        height: 100%;
        padding: 8%;
        border: 0 !important;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .closerd {
        right: 5.9% !important;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .coupon-msg-filterandsort a {
        display: none;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .coupon-msg-filterandsort label span:not(.res-helpIcon) {
        font-size: 20px;
        font-weight: 700;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .centerSixty {
        display: flex;
        flex-direction: column;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .centerSixty .res-dropWizInputDiv {
        display: flex;
        flex-direction: column;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .centerSixty .res-dropWizInputDiv div {
        width: 96%;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .centerSixty .inp-width-box-g {
        width: 96%;
    }

    .vehiclePushDownBox .res-discount .res-dropWizDiv .centerSixty .refineandsortupdate {
        width: 100%;
    }
</style>
        `)

        let offer_message = vehicle_discount_dd.querySelector('.res-dropWizDiv .coupon-msg-filterandsort label span:not(.res-helpIcon)');
        if (offer_message) {
            offer_message.innerText = "Enter a Discount Code";
        }
    });

    //currency work

    utils.observeSelector(`.vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv) > .currencyBoxdrop`, function (currency_text) {
        currency_text.insertAdjacentHTML("afterbegin", `
            <style>
    .vehiclePushDownBox .veh-Hide-Div-In-Mob:not(#myDiv)>.currencyBoxdrop {
        width: unset;
        border: 0;
        margin-left: auto;
    }
</style>
        `)
    });
}