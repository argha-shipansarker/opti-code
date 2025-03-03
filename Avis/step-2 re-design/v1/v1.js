function cleanup(selector) {
    document.querySelectorAll(selector).forEach(el => el.remove());
}

const utils = optimizely.get('utils');

function handleGenerateFooter(car_container) {
    if (car_container.querySelector("#res-vehicles-pay-later-memberRate")) {
        return `
            <div class="starting-from-btn" style="display: flex; justify-content: space-between;">
                <div class="price-section" style="display: flex; flex-direction: column; flex-basis: 49%;">
                    <p>${car_container.querySelector(".member-rate-price-container .member-rate-starts-from").innerText}</p>
                    <p class="member-rate-price">${car_container.querySelector(".member-rate-price-container .totalPay.member-rate-price").innerHTML}</p>
                </div>
                <button class="select-btn" style="flex-basis: 49%;">
                    Select
                </button>
            </div>
        `;
    } else if (car_container.querySelector("#res-vehicles-select")) {
        return `
            <div class="only-select-btn" style="display: flex; flex-direction: column;">
                <div class="price-section payamntr" style="display: flex; flex-direction: column; flex-basis: 100%; font-weight: bold;">
                    ${car_container.querySelector(".paynow .payamntr").innerHTML}
                </div>
                <button class="select-btn" style="flex-basis: 100%; width: 100%;">
                    Select
                </button>
            </div>
        `;
    }
}

if (window.location.pathname == '/en/reservation') {
    utils.observeSelector(`.vehicle-availability div[ng-class="{'three-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step2PageName, 'two-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step3PageName}"]`, function (car_list_container) {

        console.warn("car_list_container", car_list_container);

        car_list_container.style.display = "grid";
        car_list_container.style.gridTemplateColumns = "repeat(3, minmax(0px, 1fr))";
        car_list_container.style.gap = "30px";
        car_list_container.style.padding = "0 6%";

        let car_count = 0;

        utils.observeSelector(`.vehicle-availability div[ng-class="{'three-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step2PageName, 'two-grid-layout': vm.isStepTwoRedesign && vm.pageName == carRentalConstant.step3PageName}"] div[ng-class="{'grid-border': vm.isStepTwoRedesign}"]`, function (car) {

            console.warn("car", car);

            const promotion_banner = car.querySelector(`div[ng-if="($index == vm.response.showPromotion.index) && (vm.response.showPromotion.section == 'additional')"]`);
            if (promotion_banner) {
                promotion_banner.style.display = "none";
            }

            const promotion_banner_2 = car.querySelector(`div[ng-if="($index == vm.response.showPromotion.index) && (vm.response.showPromotion.section == 'filtered')"]`);
            if (promotion_banner_2) {
                promotion_banner_2.style.display = "none";
            }

            const promotion_banner_3 = car.querySelector(`div[ng-if="!vm.isStepTwoRedesign && vm.pageControl.displayedVehicleType!='all' || vm.pageControl.specialFeatureFiltered"]`);
            if (promotion_banner_3) {
                promotion_banner_3.style.display = "none";
            }

            const car_container = car.querySelector(`div[ng-include=" 'carTemplate.html' "]`);
            if (car_container) {
                car_container.style.display = "none";

                if (!car.querySelector('.opti-car-new-design')) {
                    car.insertAdjacentHTML("afterbegin", `<div class="opti-car-new-design car-number-${car_count}">
                        <style>
                            .opti-car-new-design {
                                border: 1px solid rgb(204, 204, 204);
                                display: flex;
                                flex-direction: column;
                                padding: 0 6%;
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
    
                            .opti-car-new-design .only-select-btn .price-section span {
                                color: rgb(0, 0, 0);
                                font-size: 27px;
                                font-weight: bold;
                                margin: 0px;
                                padding: 0px;
                            }
                        </style>
    
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
                                <img src='${car_container.querySelector(' img.img-responsive').getAttribute('lazy-load')}' />
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
    
                        <div class="car-footer-section">
                            ${handleGenerateFooter(car_container)}
                        </div>
                    </div>`);

                    if (document.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .starting-from-btn button`)) {
                        document.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .starting-from-btn button`).addEventListener('click', () => {
                            if (car_container.querySelector('#res-vehicles-pay-later-memberRate')) {
                                car_container.querySelector('#res-vehicles-pay-later-memberRate').click();
                            }
                        });
                    }

                    if (document.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .only-select-btn button`)) {
                        document.querySelector(`.opti-car-new-design.car-number-${car_count} .car-footer-section .only-select-btn button`).addEventListener('click', () => {
                            if (car_container.querySelector('#res-vehicles-select')) {
                                car_container.querySelector('#res-vehicles-select').click();
                            }
                        });
                    }

                    car_count++;
                }

            }
        });
    });


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
}