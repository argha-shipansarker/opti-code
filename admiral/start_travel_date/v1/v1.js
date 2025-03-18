const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('.trip-type-container .annual', function (annual_trip_btn) {
        annual_trip_btn.addEventListener('click', function () {

            utils.observeSelector('.section:has(.start-date) .control-label', function (label) {
                const label_text = label.firstChild;
                label.classList.add('opti-start-date');
                setTimeout(() => {
                    if (label_text && label_text.nodeType == 3) {
                        label_text.nodeValue = "What date would you like your policy to start?";
                    }
                }, 20);

            });

            utils.observeSelector('.section:has(.start-date)', function (start_date_section) {

                if (!document.querySelector('.opti-new-date-input') && !document.querySelector(".opti-info-message-section")) {

                    start_date_section.insertAdjacentHTML("beforeend", `<div class="opti-info-message-section">
                        <style>
                            .opti-info-message-section .always-shown-message {
                                display: flex;
                                align-items: center;
                                background-color: #E0F2FF;
                                border-left: 2px solid #41A5F5;
                                padding: 16px;
                            }
                    
                            .opti-info-message-section .trip-policy-start-date-same {
                                background-color: #E0F2FF;
                                border-left: 2px solid #41A5F5;
                                padding: 16px;
                                display: none;
                            }
                    
                            .opti-info-message-section .always-shown-message .icon,
                            .opti-info-message-section .trip-policy-start-date-same .heading-section .icon {
                                height: 16px;
                                width: 16px;
                            }
                    
                            .opti-info-message-section .always-shown-message p {
                                font-size: 16px;
                                line-height: 24px;
                                font-weight: 400;
                                color: #25469B;
                                margin-left: 6px;
                                margin-bottom: 0;
                            }
                    
                            .opti-info-message-section .trip-policy-start-date-same .heading-section {
                                display: flex;
                                align-items: center;
                            }
                    
                            .opti-info-message-section .trip-policy-start-date-same .heading-section p {
                                font-size: 16px;
                                line-height: 24px;
                                font-weight: 700;
                                color: #25469B;
                                margin-left: 6px;
                                margin-bottom: 0;
                            }
                    
                            .opti-info-message-section .trip-policy-start-date-same ul {
                                font-size: 16px;
                                line-height: 24px;
                                font-weight: 400;
                                margin-left: 50px;
                                color: #25469B;
                                margin-bottom: 0;
                                padding: 0;
                            }
                    
                            .opti-info-message-section .trip-policy-start-date-same ul li {
                                margin: 5px 0;
                            }
                    
                            .opti-info-message-section .trip-policy-start-date-same ul li:nth-of-type(2) {
                                margin-bottom: 0;
                            }
                        </style>
                    
                        <div class="always-shown-message">
                            <div class="icon">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.24998 1.3335C4.56998 1.3335 1.58331 4.32016 1.58331 8.00016C1.58331 11.6802 4.56998 14.6668 8.24998 14.6668C11.93 14.6668 14.9166 11.6802 14.9166 8.00016C14.9166 4.32016 11.93 1.3335 8.24998 1.3335ZM8.91665 11.3335H7.58331V7.3335H8.91665V11.3335ZM8.91665 6.00016H7.58331V4.66683H8.91665V6.00016Z"
                                        fill="#41A5F5" />
                                </svg>
                            </div>
                            <p>You will be covered for trip cancellation as soon as your policy starts.</p>
                        </div>
                    
                        <div class="trip-policy-start-date-same">
                            <div class="heading-section">
                                <div class="icon">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.24998 1.3335C4.56998 1.3335 1.58331 4.32016 1.58331 8.00016C1.58331 11.6802 4.56998 14.6668 8.24998 14.6668C11.93 14.6668 14.9166 11.6802 14.9166 8.00016C14.9166 4.32016 11.93 1.3335 8.24998 1.3335ZM8.91665 11.3335H7.58331V7.3335H8.91665V11.3335ZM8.91665 6.00016H7.58331V4.66683H8.91665V6.00016Z"
                                            fill="#41A5F5" />
                                    </svg>
                                </div>
                                <p>You will not be covered for holiday cancellation until your policy starts</p>
                            </div>
                            <ul>
                                <li>This means if your holiday is cancelled for any reason prior to the start date of the policy, you will
                                    not be covered. </li>
                                <li>Choose today's date if you want cover as soon as possible.</li>
                            </ul>
                        </div>
                    </div>`);

                    start_date_section.insertAdjacentHTML("afterbegin", `<div class="opti-new-date-input">
                        <style>
                            .opti-new-date-input {
                                margin-bottom: 25px;
                            }
                    
                            .opti-new-date-input .heading {
                                font-size: 16px;
                                line-height: 24px;
                                color: #444444;
                                margin-bottom: 20px;
                                font-weight: 400;
                            }
                    
                            .opti-new-date-input .date-input-section {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                            }
                    
                            .opti-new-date-input .date-input-section .label-name {
                                font-size: 16px;
                                line-height: 24px;
                                color: #444444;
                                margin-bottom: 0px;
                                font-weight: 400;
                                flex-basis: 41.666667%;
                            }
                    
                            .opti-new-date-input .date-input-section .input-section {
                                flex-basis: calc(100% - 41.666667%);
                                padding-left: 13px;
                                display: flex;
                                justify-content: space-between;
                                position: relative;
                            }
                    
                            .opti-new-date-input .date-input-section .input-section input[type="date"],
                            .opti-new-date-input .date-input-section .input-section input[type="text"] {
                                height: 34px;
                                border: 1px solid #41A5F5;
                                border-radius: 3px 0 0 3px !important;
                                width: 85%;
                                padding: 6px 12px;
                                visibility: hidden;
                            }
                    
                            .opti-new-date-input .date-input-section .input-section input[type="text"] {
                                position: absolute;
                                width: 82%;
                                visibility: visible;
                                font-size: 16px;
                            }
                    
                            .opti-new-date-input .date-input-section .input-section input[type="text"]::placeholder {
                                color: #999999;
                            }
                    
                            .opti-new-date-input .date-input-section .input-section input[type="date"]:focus,
                            .opti-new-date-input .date-input-section .input-section input[type="text"]:focus {
                                border-color: #66afe9;
                                outline: 0;
                                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
                            }
                    
                            .opti-new-date-input .date-input-section .input-section input[type="date"]::-webkit-calendar-picker-indicator {
                                display: none;
                                -webkit-appearance: none;
                                appearance: none;
                            }
                    
                            .opti-new-date-input .date-input-section .input-section .icon {
                                background: #0045A0;
                                border-radius: 0 3px 3px 0;
                                width: 34px;
                                height: 34px;
                                padding: 0;
                                cursor: pointer;
                                margin-right: 1px;
                            }
                    
                            .opti-new-date-input .date-input-section .input-section .icon img {
                                height: 34px;
                                width: 34px;
                            }
                        </style>
                        <p class="heading">When do you need your cover to start?</p>
                        <div class="date-input-section">
                            <p class="label-name">Start date of your first trip</p>
                            <div class="input-section">
                                <input type="date" placeholder="dd/mm/yyyy" name="opti-date-input">
                                <input type="text" placeholder="dd/mm/yyyy" name="opti-date-text-input" readonly>
                                <div class="icon">
                                    <img src="https://travelinsurance.admiral.com/public/fonts/6f45b3a8e301bbf1320e908a45d4bf85.svg"
                                        alt="icon">
                                </div>
                            </div>
                        </div>
                    </div>`);

                    const trip_date_input = document.querySelector('.opti-new-date-input input[name="opti-date-input"]');
                    const trip_date_text_input = document.querySelector('.opti-new-date-input input[name="opti-date-text-input"]');
                    const calender_icon = document.querySelector('.opti-new-date-input .input-section .icon');
                    const policy_date = start_date_section.querySelector('img[name="startDate"]');

                    const always_show_message = document.querySelector('.opti-info-message-section .always-shown-message');
                    const trip_policy_start_date_same_message = document.querySelector('.opti-info-message-section .trip-policy-start-date-same');

                    if (trip_date_input && calender_icon && trip_date_text_input && policy_date && always_show_message && trip_policy_start_date_same_message) {

                        const today = new Date().toISOString().split("T")[0];
                        trip_date_input.setAttribute("min", today);

                        calender_icon.addEventListener('click', function () {
                            trip_date_input.showPicker();
                        });

                        trip_date_input.addEventListener("change", function () {
                            const trip_date = this.value; // yyyy-mm-dd
                            if (trip_date) {
                                sessionStorage.setItem("opti-start-date", trip_date);
                                const [year, month, day] = trip_date.split("-");
                                trip_date_text_input.value = `${day}/${month}/${year}`;

                                if (policy_date.getAttribute("value")) {

                                    let policy_date_parts = policy_date.getAttribute("value").split("/");

                                    let policyDate = new Date(`${policy_date_parts[2]}-${policy_date_parts[1]}-${policy_date_parts[0]}`);
                                    let tripDate = new Date(trip_date);

                                    if (!isNaN(policyDate) && !isNaN(tripDate)) {
                                        if (tripDate.getTime() === policyDate.getTime() || tripDate < policyDate) {
                                            always_show_message.style.display = "none";
                                            trip_policy_start_date_same_message.style.display = "block";
                                        } else {
                                            always_show_message.style.display = "flex";
                                            trip_policy_start_date_same_message.style.display = "none";
                                        }
                                    }
                                }

                            }
                        });


                        const observer = new MutationObserver(() => {
                            console.log("Value attribute changed:", policy_date.getAttribute("value"));
                            if (policy_date.getAttribute("value")) {

                                let policy_date_parts = policy_date.getAttribute("value").split("/");

                                let policyDate = new Date(`${policy_date_parts[2]}-${policy_date_parts[1]}-${policy_date_parts[0]}`);
                                let tripDate = new Date(trip_date_input.value);

                                if (!isNaN(policyDate) && !isNaN(tripDate)) {
                                    if (tripDate.getTime() === policyDate.getTime() || tripDate < policyDate) {
                                        always_show_message.style.display = "none";
                                        trip_policy_start_date_same_message.style.display = "block";
                                    } else {
                                        always_show_message.style.display = "flex";
                                        trip_policy_start_date_same_message.style.display = "none";
                                    }
                                }
                            }
                        });

                        // Start observing the 'value' attribute
                        observer.observe(policy_date, { attributes: true, attributeFilter: ["value"] });

                        const session_storage_start_date = sessionStorage.getItem("opti-start-date");

                        if (session_storage_start_date) {
                            console.warn("session_storage_start_date", session_storage_start_date);

                            trip_date_input.value = session_storage_start_date;

                            const [year, month, day] = session_storage_start_date.split("-");
                            trip_date_text_input.value = `${day}/${month}/${year}`;


                            if (policy_date.getAttribute("value")) {

                                let policy_date_parts = policy_date.getAttribute("value").split("/");

                                let policyDate = new Date(`${policy_date_parts[2]}-${policy_date_parts[1]}-${policy_date_parts[0]}`);
                                let tripDate = new Date(session_storage_start_date);

                                if (!isNaN(policyDate) && !isNaN(tripDate)) {
                                    if (tripDate.getTime() === policyDate.getTime() || tripDate < policyDate) {
                                        always_show_message.style.display = "none";
                                        trip_policy_start_date_same_message.style.display = "block";
                                    } else {
                                        always_show_message.style.display = "flex";
                                        trip_policy_start_date_same_message.style.display = "none";
                                    }
                                }
                            }
                        }
                    }
                }
            });

            utils.observeSelector('.info-box', function (info_box) {
                info_box.style.display = "none";
            });

        });
    });

    utils.observeSelector('.trip-type-container .single', function (single_trip_btn) {
        single_trip_btn.addEventListener('click', function () {

            utils.observeSelector('.section:has(.start-date) .control-label', function (label) {
                label.classList.remove('opti-start-date');
            });

            if (document.querySelector(".opti-new-date-input")) {
                document.querySelector(".opti-new-date-input").remove();
            }

            if (document.querySelector(".opti-info-message-section")) {
                document.querySelector(".opti-info-message-section").remove();
            }

        });
    });

}