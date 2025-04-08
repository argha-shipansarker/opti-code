const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('.section:has(.start-date) input[name="startDate"]', function (start_date_input) {

        if (start_date_input && !start_date_input.dataset.observerInitialized) {
            const observer = new MutationObserver(() => {

                if (start_date_input.getAttribute("value") && start_date_input.getAttribute("value").length == 10 && document.getElementById('annual-btn') && document.getElementById('annual-btn').checked && !start_date_input.parentElement.classList.contains('has-error')) {
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "cover_start_date_complete",
                    });
                }
            });

            observer.observe(start_date_input, { attributes: true, attributeFilter: ["value"] });

            start_date_input.dataset.observerInitialized = "true";
        }

    });

    utils.observeSelector('.trip-type-container .annual', function (annual_trip_btn) {
        annual_trip_btn.addEventListener('click', function () {

            utils.observeSelector('.section:has(.start-date) .control-label', function (label) {
                const label_text = label.firstChild;
                label.classList.add('opti-start-date');
                setTimeout(() => {
                    if (label_text && label_text.nodeType == 3) {
                        label_text.nodeValue = "Cover start date ";
                    }
                }, 20);

            });

            utils.observeSelector('.section:has(.start-date)', function (start_date_section) {

                setTimeout(() => {
                    start_date_section.style.display = "none";

                    if (!document.querySelector(".opti-new-date-selection")) {
                        start_date_section.insertAdjacentHTML("beforebegin", `
                            <div class="opti-new-date-selection">
                    <style>
                        .opti-new-date-selection {
                            padding: 20px 0;
                            border-top: 1px solid #CED9E5;
                        }
                
                        .opti-new-date-selection .selection-box {
                            padding: 0 20px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                
                        .opti-new-date-selection .selection-box .info-message {
                            flex-basis: 48%;
                            margin-bottom: 30px;
                        }
                
                        .opti-new-date-selection .selection-box .info-message p {
                            margin: 0;
                            color: #444444;
                            font-weight: 400;
                        }
                
                        .opti-new-date-selection .selection-box .info-message .heading {
                            font-size: 16px;
                            line-height: 24px;
                        }
                
                        .opti-new-date-selection .selection-box .info-message .sub-heading {
                            font-size: 12px;
                            line-height: 21px;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields {
                            flex-basis: 48%;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields input[type="radio"] {
                            display: none;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields .radio-label {
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            font-size: 16px;
                            line-height: 24px;
                            font-weight: 400;
                            gap: 10px;
                            border: 1px solid #CED9E5;
                            padding: 12px 13px;
                            margin-bottom: 10px;
                            border-radius: 2px;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields .radio-label:nth-of-type(2) {
                            margin-bottom: 0;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields .radio-custom {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            border: 2px solid #0A8A19;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: all 0.3s ease;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields .radio-custom::after {
                            content: "";
                            width: 10px;
                            height: 10px;
                            background: #0A8A19;
                            border-radius: 50%;
                            transform: scale(0);
                            transition: transform 0.2s ease-in-out;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields input[type="radio"]:checked+.radio-custom::after {
                            transform: scale(1);
                            border: 1px solid #0A8A19;
                        }
                
                        .opti-new-date-selection .selection-box .radio-fields .radio-label:has(input[type="radio"]:checked) {
                            border: 1px solid #00C535;
                        }
                    </style>
                    <div class="selection-box">
                        <div class="info-message">
                            <p class="heading">When do you need cover to start?</p>
                            <p class="sub-heading">If you start cover today you will immediately be covered for any trip cancellations.
                            </p>
                        </div>
                
                        <div class="radio-fields">
                
                            <label class="radio-label">
                                <input type="radio" name="opti-start-date" value="today">
                                <span class="radio-custom"></span>
                                Start cover today
                            </label>
                
                            <label class="radio-label">
                                <input type="radio" name="opti-start-date" value="different_day">
                                <span class="radio-custom"></span>
                                Choose a start date...
                            </label>
                
                        </div>
                
                    </div>
                </div>
                        `);
                    }

                    let radio_fields = document.querySelector(".opti-new-date-selection .selection-box .radio-fields");

                    if (radio_fields) {

                        radio_fields.addEventListener("change", function (event) {

                            if (event.target.type === 'radio') {

                                if (event.target.value == "today") {

                                    start_date_section.style.display = "none";

                                    const date_picker_icon = document.querySelector('.section:has(.start-date) .react-datepicker-wrapper img');
                                    if (date_picker_icon) {
                                        date_picker_icon.click();

                                        let interval = setInterval(() => {

                                            const today_date_icon = document.querySelector(".react-datepicker-popper .react-datepicker__day--today");
                                            const date_picker_prev_icon = document.querySelector(".react-datepicker-popper .react-datepicker__navigation--previous");


                                            if (today_date_icon) {
                                                today_date_icon.click();
                                                clearInterval(interval);
                                            } else {
                                                if (date_picker_prev_icon) {
                                                    date_picker_prev_icon.click();
                                                }
                                            }

                                        }, 20);

                                    }
                                }

                                if (event.target.value == "different_day") {
                                    start_date_section.style.display = "block";
                                }
                                console.log("Selected Value:", event.target.value);
                            }
                        });

                        const start_date_input_field = document.querySelector('input[name="startDate"]');

                        if (start_date_input_field && start_date_input_field.value) {

                            let today = new Date();
                            let day = String(today.getDate()).padStart(2, '0'); // Ensure 2-digit day
                            let month = String(today.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
                            let year = today.getFullYear(); // Get full year (4 digits)

                            const present_day = `${day}/${month}/${year}`;

                            if (start_date_input_field.value == present_day) {
                                document.querySelector('.opti-new-date-selection input[value="today"]').click();
                            } else {
                                document.querySelector('.opti-new-date-selection input[value="different_day"]').click();
                                start_date_section.style.display = "block";
                            }

                        }
                    }
                }, 20);

            });

            utils.observeSelector('.info-box', function (info_box) {
                info_box.style.display = "none";
            });

            utils.observeSelector('.section:has(.start-date) .date-picker', function (date_picker_input) {
                date_picker_input.style.display = "flex";
                date_picker_input.style.flexDirection = "column";

                if (!document.querySelector('.opti-start-date-message')) {
                    date_picker_input.insertAdjacentHTML("beforeend", `
                        <div class="opti-start-date-message">
        <style>
            .opti-start-date-message {
                display: flex;
                margin-top: 7px;
            }
    
            .opti-start-date-message .icon {
                height: 18px;
                width: 18px;
            }
    
            .opti-start-date-message p {
                font-size: 14px;
                font-weight: 400;
                line-height: 21px;
                margin-bottom: 0;
                margin-left: 10px;
                color: #444444;
            }
        </style>
        <div class="icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9.75 12.75H8.25V8.25H9.75V12.75ZM9.75 6.75H8.25V5.25H9.75V6.75Z"
                    fill="#41A5F5" />
            </svg>
        </div>
        <p>
            You will be covered for trip cancellation as soon as your cover starts.
        </p>
    
    </div>
                    `);
                }
            });
        });
    });

    utils.observeSelector('.trip-type-container .single', function (single_trip_btn) {
        single_trip_btn.addEventListener('click', function () {

            utils.observeSelector('.section:has(.start-date) .control-label', function (label) {
                label.classList.remove('opti-start-date');
            });

            utils.observeSelector('.section:has(.start-date)', function (start_date_section) {
                start_date_section.style.display = "block";
            });

            if (document.querySelector(".opti-new-date-selection")) {
                document.querySelector(".opti-new-date-selection").remove();
            }

            if (document.querySelector('.opti-start-date-message')) {
                document.querySelector('.opti-start-date-message').remove();
            }
        });
    });
}