const utils = optimizely.get('utils');

function handle_calculating_progress_bar_state(step_name) {
    if (step_name == "cover") {
        if (window.location.pathname.includes('/Admiral/cover/')) {
            return "selected";
        } else {
            return "completed";
        }
    } else if (step_name == 'upgrades') {
        if (window.location.pathname == "/Admiral/vehicleupgrades") {
            return "selected";
        } else {
            if (window.location.pathname == "/Admiral/quote" || window.location.pathname == "/Admiral/payment") {
                return "completed";
            } else {
                return "";
            }
        }
    } else if (step_name == 'discount') {
        if (window.location.pathname == "/Admiral/quote") {
            return "selected";
        } else {
            if (window.location.pathname == "/Admiral/payment") {
                return "completed";
            } else {
                return "";
            }
        }
    } else if (step_name == 'payment') {
        if (window.location.pathname == "/Admiral/payment") {
            return "selected";
        } else {
            return "";
        }
    }
}

function handle_showing_opti_progress_bar() {
    let personalDetails = dataLayer.find(obj => obj.event === 'yourDetails');
    if (personalDetails && personalDetails.product == "multiCar") {
        document.querySelector('.opti-multicar-progression').style.display = "block";
        if (document.querySelector('eui-progress-bar')) {
            document.querySelector('eui-progress-bar').style.display = "none";
        }
    } else {
        document.querySelector('.opti-multicar-progression').style.display = "none";
        if (document.querySelector('eui-progress-bar')) {
            document.querySelector('eui-progress-bar').style.display = "block";
        }
    }
}

utils.observeSelector('eui-navigation-bar', function (navigation_bar) {
    navigation_bar.insertAdjacentHTML("afterend", `<div class="opti-multicar-progression">
    <style>
        .opti-multicar-progression {
            padding: .5em 2.5%;
            background-color: #FFFFFF;
        }

        .opti-multicar-progression .progression-container {
            display: flex;
            margin: auto;
            max-width: 45em;
            gap: 4px;
        }

        .opti-multicar-progression .progression-container .steps {
            flex: 1;
        }

        .opti-multicar-progression .progression-container .steps .mobile {
            display: none;
            flex-direction: column;
            align-items: center;
        }

        .opti-multicar-progression .progression-container .steps.payment {
            flex: 0 0 auto;
        }

        .opti-multicar-progression .progression-container .steps .heading {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            color: #656560;
            margin-bottom: 4px;
            text-transform: uppercase;
        }

        .opti-multicar-progression .progression-container .steps .line {
            height: 4px;
            width: 100%;
            background-color: #CED9E5;
        }

        .opti-multicar-progression .progression-container .steps.selected .heading {
            color: #25469B;
            font-weight: 700;
        }

        .opti-multicar-progression .progression-container .steps.completed .heading {
            color: #25469B;
            font-weight: 400;
        }

        .opti-multicar-progression .progression-container .steps.selected .line {
            background-color: #41A5F5;
        }

        .opti-multicar-progression .progression-container .steps.completed .line {
            background-color: #00C535;
        }

        .opti-multicar-progression .progression-container .steps .desktop {
            display: flex;
            align-items: center;
        }

        .opti-multicar-progression .progression-container .steps .icon,
        .opti-multicar-progression .progression-container .steps .completed-icon {
            display: flex;
        }

        .opti-multicar-progression .progression-container .steps .icon svg {
            color: #656560;
        }

        .opti-multicar-progression .progression-container .steps.selected .icon svg {
            color: #41A5F5;
        }

        .opti-multicar-progression .progression-container .steps.completed .icon {
            display: none;
        }

        .opti-multicar-progression .progression-container .steps .completed-icon {
            display: none;
        }

        .opti-multicar-progression .progression-container .steps.completed .completed-icon {
            display: flex;
        }

        .opti-multicar-progression .progression-container .steps .desktop-line {
            height: 2px;
            border-top: 2px dashed #CED9E5;
            width: 100%;
            margin-left: 2px;
            border-radius: 4px;
        }

        .opti-multicar-progression .progression-container .steps.completed .desktop-line {
            border: 2px solid #00C535;
        }

        @media (max-width: 600px) {
            .opti-multicar-progression .progression-container {
                gap: 0;
            }

            .opti-multicar-progression .progression-container .steps .mobile {
                display: flex;
            }

            .opti-multicar-progression .progression-container .steps .desktop {
                display: none;
            }

            .opti-multicar-progression .progression-container .steps {
                flex: 0 0 25%;
            }

            .opti-multicar-progression .progression-container .steps.payment {
                flex: 0 0 25%;
            }
        }
    </style>
    <div class="progression-container">
        <div class="steps cover ${handle_calculating_progress_bar_state("cover")}">
            <div class="mobile">
                <p class="heading">Cover</p>
                <div class="line"></div>
            </div>
            <div class="desktop">
                <div class="icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5843 1L3.57178 5V11C3.57178 16.55 7.41712 21.74 12.5843 23C17.7515 21.74 21.5968 16.55 21.5968 11V5L12.5843 1ZM10.5815 17L6.57595 13L7.98791 11.59L10.5815 14.17L17.1807 7.58L18.5926 9L10.5815 17Z"
                            fill="currentColor" />
                    </svg>
                </div>
                <div class="completed-icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.5842 2C7.05654 2 2.57031 6.48 2.57031 12C2.57031 17.52 7.05654 22 12.5842 22C18.1119 22 22.5981 17.52 22.5981 12C22.5981 6.48 18.1119 2 12.5842 2ZM10.5814 16.42L6.57588 12.42L7.98784 11.01L10.5814 13.59L17.1806 7L18.5926 8.42L10.5814 16.42Z"
                            fill="#00C535" />
                    </svg>
                </div>
                <div class="desktop-line"></div>
            </div>
        </div>
        <div class="steps upgrades ${handle_calculating_progress_bar_state("upgrades")}">
            <div class="mobile">
                <p class="heading">Upgrades</p>
                <div class="line"></div>
            </div>
            <div class="desktop">
                <div class="icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.8291 5L12.8291 1L21.8291 5V11C21.8291 16.55 17.9891 21.74 12.8291 23C7.6691 21.74 3.8291 16.55 3.8291 11V5ZM17.8291 13H13.8291V17H11.8291V13H7.8291V11H11.8291V7H13.8291V11H17.8291V13Z"
                            fill="currentColor" />
                    </svg>
                </div>
                <div class="completed-icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.5842 2C7.05654 2 2.57031 6.48 2.57031 12C2.57031 17.52 7.05654 22 12.5842 22C18.1119 22 22.5981 17.52 22.5981 12C22.5981 6.48 18.1119 2 12.5842 2ZM10.5814 16.42L6.57588 12.42L7.98784 11.01L10.5814 13.59L17.1806 7L18.5926 8.42L10.5814 16.42Z"
                            fill="#00C535" />
                    </svg>
                </div>
                <div class="desktop-line"></div>
            </div>
        </div>
        <div class="steps discount ${handle_calculating_progress_bar_state("discount")}">
            <div class="mobile">
                <p class="heading">Discount</p>
                <div class="line"></div>
            </div>
            <div class="desktop">
                <div class="icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.10059 4H23.1006V16H5.10059V4ZM14.1006 7C14.8962 7 15.6593 7.31607 16.2219 7.87868C16.7845 8.44129 17.1006 9.20435 17.1006 10C17.1006 10.7956 16.7845 11.5587 16.2219 12.1213C15.6593 12.6839 14.8962 13 14.1006 13C13.3049 13 12.5419 12.6839 11.9793 12.1213C11.4167 11.5587 11.1006 10.7956 11.1006 10C11.1006 9.20435 11.4167 8.44129 11.9793 7.87868C12.5419 7.31607 13.3049 7 14.1006 7ZM9.10059 6C9.10059 6.53043 8.88987 7.03914 8.5148 7.41421C8.13973 7.78929 7.63102 8 7.10059 8V12C7.63102 12 8.13973 12.2107 8.5148 12.5858C8.88987 12.9609 9.10059 13.4696 9.10059 14H19.1006C19.1006 13.4696 19.3113 12.9609 19.6864 12.5858C20.0614 12.2107 20.5702 12 21.1006 12V8C20.5702 8 20.0614 7.78929 19.6864 7.41421C19.3113 7.03914 19.1006 6.53043 19.1006 6H9.10059ZM1.10059 8H3.10059V18H19.1006V20H1.10059V8Z"
                            fill="currentColor" />
                    </svg>
                </div>
                <div class="completed-icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.5842 2C7.05654 2 2.57031 6.48 2.57031 12C2.57031 17.52 7.05654 22 12.5842 22C18.1119 22 22.5981 17.52 22.5981 12C22.5981 6.48 18.1119 2 12.5842 2ZM10.5814 16.42L6.57588 12.42L7.98784 11.01L10.5814 13.59L17.1806 7L18.5926 8.42L10.5814 16.42Z"
                            fill="#00C535" />
                    </svg>
                </div>
                <div class="desktop-line"></div>
            </div>
        </div>
        <div class="steps payment ${handle_calculating_progress_bar_state("payment")}">
            <div class="mobile">
                <p class="heading">Payment</p>
                <div class="line"></div>
            </div>
            <div class="desktop">
                <div class="icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.1006 3H4.10059C3.00059 3 2.10059 3.9 2.10059 5V19C2.10059 20.1 3.00059 21 4.10059 21H20.1006C21.2006 21 22.1006 20.1 22.1006 19V5C22.1006 3.9 21.2006 3 20.1006 3ZM10.1006 17H5.10059V15H10.1006V17ZM10.1006 13H5.10059V11H10.1006V13ZM10.1006 9H5.10059V7H10.1006V9ZM14.9206 15L12.1006 12.16L13.5106 10.75L14.9206 12.17L18.0906 9L19.5106 10.42L14.9206 15Z"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>`);
});

utils.observeSelector('eui-tier', function (cover_page) {
    if (document.querySelector('.opti-multicar-progression')) {

        const multi_car_table = document.querySelector('eui-tier eui-multi-motor-tier-page-content');
        if (multi_car_table) {
            document.querySelector('.opti-multicar-progression').style.display = "block";
            if (document.querySelector('eui-progress-bar')) {
                document.querySelector('eui-progress-bar').style.display = "none";
            }
        } else {
            document.querySelector('.opti-multicar-progression').style.display = "none";
            if (document.querySelector('eui-progress-bar')) {
                document.querySelector('eui-progress-bar').style.display = "block";
            }
        }

        const cover_step = document.querySelector(".opti-multicar-progression .steps.cover");
        const upgrade_step = document.querySelector(".opti-multicar-progression .steps.upgrades");
        const discount_step = document.querySelector(".opti-multicar-progression .steps.discount");

        cover_step.classList.add('selected');
        cover_step.classList.remove('completed');

        upgrade_step.classList.remove("completed");
        upgrade_step.classList.remove("selected");

        discount_step.classList.remove("selected");
    }
});

utils.observeSelector('eui-vehicle-upgrades', function (upgrade_page) {
    if (document.querySelector('.opti-multicar-progression')) {

        handle_showing_opti_progress_bar();

        const cover_step = document.querySelector(".opti-multicar-progression .steps.cover");
        const upgrade_step = document.querySelector(".opti-multicar-progression .steps.upgrades");
        const discount_step = document.querySelector(".opti-multicar-progression .steps.discount");

        cover_step.classList.add('completed');
        cover_step.classList.remove('selected');

        upgrade_step.classList.add("selected");
        upgrade_step.classList.remove("completed");

        discount_step.classList.remove("selected");
    }
});

utils.observeSelector('eui-quote eui-quote-summary', function (quote_page) {
    if (document.querySelector('.opti-multicar-progression')) {

        handle_showing_opti_progress_bar();

        const upgrade_step = document.querySelector(".opti-multicar-progression .steps.upgrades");
        const discount_step = document.querySelector(".opti-multicar-progression .steps.discount");
        const payment_step = document.querySelector(".opti-multicar-progression .steps.payment");

        upgrade_step.classList.add("completed");
        upgrade_step.classList.remove("selected");

        discount_step.classList.add("selected");
        discount_step.classList.remove("completed");

        payment_step.classList.remove("selected");

    }
});

utils.observeSelector('eui-final-checks', function (checks_page) {
    if (document.querySelector('.opti-multicar-progression')) {

        handle_showing_opti_progress_bar();

        const discount_step = document.querySelector(".opti-multicar-progression .steps.discount");
        const payment_step = document.querySelector(".opti-multicar-progression .steps.payment");

        discount_step.classList.remove("selected");
        discount_step.classList.remove("completed");

        discount_step.classList.add("selected");

        payment_step.classList.remove("selected");
    }
});

utils.observeSelector('eui-gateway-s-payment', function (payment_page) {
    if (document.querySelector('.opti-multicar-progression')) {

        handle_showing_opti_progress_bar();

        const discount_step = document.querySelector(".opti-multicar-progression .steps.discount");
        const payment_step = document.querySelector(".opti-multicar-progression .steps.payment");

        discount_step.classList.add("completed");
        discount_step.classList.remove("selected");

        payment_step.classList.add("selected");
    }
});

utils.observeSelector('eui-motor-legal', function (motor_legal_page) {
    if (document.querySelector('.opti-multicar-progression')) {
        document.querySelector('.opti-multicar-progression').style.display = "none";
        if (document.querySelector('eui-progress-bar')) {
            document.querySelector('eui-progress-bar').style.display = "block";
        }
    }
});

utils.observeSelector('eui-breakdown', function (breakdown_page) {
    if (document.querySelector('.opti-multicar-progression')) {
        document.querySelector('.opti-multicar-progression').style.display = "none";
        if (document.querySelector('eui-progress-bar')) {
            document.querySelector('eui-progress-bar').style.display = "block";
        }
    }
});

utils.observeSelector('eui-personal-injury', function (personal_injury_page) {
    if (document.querySelector('.opti-multicar-progression')) {
        document.querySelector('.opti-multicar-progression').style.display = "none";
        if (document.querySelector('eui-progress-bar')) {
            document.querySelector('eui-progress-bar').style.display = "block";
        }
    }
});

utils.observeSelector('eui-hire-car', function (hire_car_page) {
    if (document.querySelector('.opti-multicar-progression')) {
        document.querySelector('.opti-multicar-progression').style.display = "none";
        if (document.querySelector('eui-progress-bar')) {
            document.querySelector('eui-progress-bar').style.display = "block";
        }
    }
});

utils.observeSelector('eui-quote .adm-section:has(+#quote-summary)', function (home_car_van_section_for_single_car) {
    if (document.querySelector('.opti-multicar-progression')) {
        document.querySelector('.opti-multicar-progression').style.display = "none";
        if (document.querySelector('eui-progress-bar')) {
            document.querySelector('eui-progress-bar').style.display = "block";
        }
    }
});