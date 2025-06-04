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
            if (window.location.pathname == "/Admiral/quote" || window.location.pathname == "/Admiral/checks" || window.location.pathname == "/Admiral/payment") {
                return "completed";
            } else {
                return "";
            }
        }
    } else if (step_name == 'discount') {
        if (window.location.pathname == "/Admiral/quote") {
            return "selected";
        } else {
            if (window.location.pathname == "/Admiral/checks" || window.location.pathname == "/Admiral/payment") {
                return "completed";
            } else {
                return "";
            }
        }
    } else if (step_name == 'checks') {
        if (window.location.pathname == "/Admiral/checks") {
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
            max-width: 75em;
            gap: 4px;
        }

        .opti-multicar-progression .progression-container .steps {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-basis: 20%;
        }

        .opti-multicar-progression .progression-container .steps .heading {
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            color: #656560;
            margin-bottom: 4px;
        }

        .opti-multicar-progression .progression-container .steps .line {
            height: 4px;
            width: 100%;
            background-color: #CED9E5;
            border-radius: 4px;
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
    </style>
    <div class="progression-container">
        <div class="steps cover ${handle_calculating_progress_bar_state("cover")}">
            <p class="heading">Cover</p>
            <div class="line"></div>
        </div>
        <div class="steps upgrades ${handle_calculating_progress_bar_state("upgrades")}">
            <p class="heading">Upgrades</p>
            <div class="line"></div>
        </div>
        <div class="steps discount ${handle_calculating_progress_bar_state("discount")}">
            <p class="heading">Discount</p>
            <div class="line"></div>
        </div>
        <div class="steps checks ${handle_calculating_progress_bar_state("checks")}">
            <p class="heading">Checks</p>
            <div class="line"></div>
        </div>
        <div class="steps payment ${handle_calculating_progress_bar_state("payment")}">
            <p class="heading">Payment</p>
            <div class="line"></div>
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
        const checks_step = document.querySelector(".opti-multicar-progression .steps.checks");

        upgrade_step.classList.add("completed");
        upgrade_step.classList.remove("selected");

        discount_step.classList.add("selected");
        discount_step.classList.remove("completed");

        checks_step.classList.remove("selected");
    }
});

utils.observeSelector('eui-final-checks', function (checks_page) {
    if (document.querySelector('.opti-multicar-progression')) {

        handle_showing_opti_progress_bar();

        const discount_step = document.querySelector(".opti-multicar-progression .steps.discount");
        const checks_step = document.querySelector(".opti-multicar-progression .steps.checks");
        const payment_step = document.querySelector(".opti-multicar-progression .steps.payment");

        discount_step.classList.add("completed");
        discount_step.classList.remove("selected");

        checks_step.classList.add("selected");
        checks_step.classList.remove("completed");

        payment_step.classList.remove("selected");
    }
});

utils.observeSelector('eui-gateway-s-payment', function (payment_page) {
    if (document.querySelector('.opti-multicar-progression')) {

        handle_showing_opti_progress_bar();

        const checks_step = document.querySelector(".opti-multicar-progression .steps.checks");
        const payment_step = document.querySelector(".opti-multicar-progression .steps.payment");

        checks_step.classList.add("completed");
        checks_step.classList.remove("selected");

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