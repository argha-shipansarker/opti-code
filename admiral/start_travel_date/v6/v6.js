const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('.trip-type-container .annual', function (annual_trip_btn) {
        annual_trip_btn.addEventListener('click', function () {

            utils.observeSelector('.section:has(.start-date)', function (start_date_section) {

                if (!document.querySelector('.opti-start-date-info')) {
                    start_date_section.insertAdjacentHTML("beforeend", `<div class="opti-start-date-info">
                        <style>
                            .opti-start-date-info .different-day {
                                background-color: #E0F2FF;
                                border-left: 2px solid #41A5F5;
                                display: flex;
                                align-items: center;
                                padding: 16px;
                            }
                    
                            .opti-start-date-info .today {
                                background-color: #D2F9DA;
                                border-left: 2px solid #00C535;
                                display: none;
                                align-items: center;
                                padding: 16px;
                            }
                    
                            .opti-start-date-info .different-day .icon,
                            .opti-start-date-info .today .icon {
                                height: 16px;
                                width: 16px;
                            }
                    
                            .opti-start-date-info .different-day p,
                            .opti-start-date-info .today p {
                                font-size: 14px;
                                line-height: 21px;
                                font-weight: 400;
                                margin-bottom: 0;
                                margin-left: 6px;
                            }
                    
                            .opti-start-date-info .different-day .p {
                                color: #25469B;
                            }
                    
                            .opti-start-date-info .today p {
                                color: #0F7632;
                            }
                        </style>
                        <div class="different-day">
                            <div class="icon">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.00016 1.59717C4.32016 1.59717 1.3335 4.58383 1.3335 8.26383C1.3335 11.9438 4.32016 14.9305 8.00016 14.9305C11.6802 14.9305 14.6668 11.9438 14.6668 8.26383C14.6668 4.58383 11.6802 1.59717 8.00016 1.59717ZM8.66683 11.5972H7.3335V7.59717H8.66683V11.5972ZM8.66683 6.26383H7.3335V4.9305H8.66683V6.26383Z"
                                        fill="#41A5F5" />
                                </svg>
                            </div>
                            <p>You will be covered for trip cancellation as soon as your policy starts</p>
                        </div>
                        <div class="today">
                            <div class="icon">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.99967 2.09717C4.31967 2.09717 1.33301 5.08383 1.33301 8.76383C1.33301 12.4438 4.31967 15.4305 7.99967 15.4305C11.6797 15.4305 14.6663 12.4438 14.6663 8.76383C14.6663 5.08383 11.6797 2.09717 7.99967 2.09717ZM6.66634 11.7105L3.99967 9.04383L4.93967 8.10383L6.66634 9.82383L11.0597 5.4305L11.9997 6.37717L6.66634 11.7105Z"
                                        fill="#0A8A19" />
                                </svg>
                            </div>
                            <p>You will immediately be covered for trip cancellation</p>
                        </div>
                    </div>`);
                }

                let date_input_field = start_date_section.querySelector(".date-picker");

                if (date_input_field) {
                    if (!document.querySelector(".opti-today-date-checkbox")) {
                        date_input_field.insertAdjacentHTML("afterend", `<div class="opti-today-date-checkbox">
    <style>
        .opti-today-date-checkbox {
            width: 45.9%;
            margin-left: auto;
            margin-right: 10.2%;
            margin-top: 44px;
        }

        .opti-today-date-checkbox .checkbox-label {
            border: 1px solid #CED9E5;
            padding: 12px;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 16px;
            line-height: 20px;
            color: #444444;
            border-radius: 3px;
        }

        .opti-today-date-checkbox .checkbox-label input {
            display: none;
        }

        .opti-today-date-checkbox .checkbox-custom {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            border: 2px solid #006DCC;
            border-radius: 4px;
            margin-right: 10px;
            transition: background 0.2s, border-color 0.2s;
        }

        .opti-today-date-checkbox .checkbox-custom svg {
            display: none;
        }

        .opti-today-date-checkbox .checkbox-label input:checked~.checkbox-custom {
            background-color: #0A8A19;
            border-color: #0F7632;
        }

        .opti-today-date-checkbox .checkbox-label input:checked~.checkbox-custom svg {
            display: block;
        }

        .opti-today-date-checkbox:has(input:checked) .checkbox-label {
            border-color: #00C535;
        }
    </style>

    <label class="checkbox-label">
        <input type="checkbox" name="opti-today-date" value="yes">
        <span class="checkbox-custom">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 11.1637L0 6.16367L1.4 4.76367L5 8.36367L12.6 0.763672L14 2.16367L5 11.1637Z" fill="white" />
            </svg>
        </span>
        Start cover today
    </label>
</div>`);
                    }

                    const check_box = document.querySelector('.opti-today-date-checkbox input[name="opti-today-date"]');

                    if (check_box) {

                        check_box.addEventListener('change', function () {
                            if (this.checked) {

                                let today_message = document.querySelector('.opti-start-date-info .today');
                                let different_day_message = document.querySelector('.opti-start-date-info .different-day');
                                if (today_message && different_day_message) {
                                    today_message.style.display = "flex";
                                    different_day_message.style.display = "none";
                                }

                                const date_picker_icon = document.querySelector('.section:has(.start-date) .react-datepicker-wrapper img');

                                if (date_picker_icon) {
                                    date_picker_icon.click();

                                    const date_popover = document.querySelector('.react-datepicker-popper');

                                    if (date_popover) {
                                        date_popover.classList.add("opti-popover");
                                        let interval = setInterval(() => {

                                            const today_date_icon = document.querySelector(".react-datepicker-popper .react-datepicker__day--today");
                                            const date_picker_prev_icon = document.querySelector(".react-datepicker-popper .react-datepicker__navigation--previous");


                                            if (today_date_icon) {
                                                today_date_icon.click();
                                                date_popover.classList.remove("opti-popover");
                                                clearInterval(interval);
                                            } else {
                                                if (date_picker_prev_icon) {
                                                    date_picker_prev_icon.click();
                                                }
                                            }

                                        }, 20);
                                    }

                                }
                            } else {
                                let today_message = document.querySelector('.opti-start-date-info .today');
                                let different_day_message = document.querySelector('.opti-start-date-info .different-day');
                                if (today_message && different_day_message) {
                                    today_message.style.display = "none";
                                    different_day_message.style.display = "flex";
                                }
                                console.log("Checkbox is unchecked.");
                            }
                        });

                        const start_date_input_field = document.querySelector('input[name="startDate"]');

                        let today = new Date();
                        let day = String(today.getDate()).padStart(2, '0'); // Ensure 2-digit day
                        let month = String(today.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
                        let year = today.getFullYear(); // Get full year (4 digits)

                        const present_day = `${day}/${month}/${year}`;

                        let today_message = document.querySelector('.opti-start-date-info .today');
                        let different_day_message = document.querySelector('.opti-start-date-info .different-day');

                        if (start_date_input_field) {
                            const observer = new MutationObserver(() => {
                                console.log("Value attribute changed:", start_date_input_field.getAttribute("value"));
                                if (start_date_input_field.getAttribute("value") == present_day) {
                                    if (!check_box.checked) {
                                        check_box.checked = true;
                                        if (today_message && different_day_message) {
                                            today_message.style.display = "flex";
                                            different_day_message.style.display = "none";
                                        }
                                    }
                                } else {
                                    if (check_box.checked) {
                                        check_box.checked = false;
                                        if (today_message && different_day_message) {
                                            today_message.style.display = "none";
                                            different_day_message.style.display = "flex";
                                        }
                                    }
                                }
                            });

                            // Start observing the 'value' attribute
                            observer.observe(start_date_input_field, { attributes: true, attributeFilter: ["value"] });
                        }

                        if (start_date_input_field && start_date_input_field.value) {

                            if (start_date_input_field.value == present_day) {
                                if (!check_box.checked) {
                                    check_box.checked = true;
                                    if (today_message && different_day_message) {
                                        today_message.style.display = "flex";
                                        different_day_message.style.display = "none";
                                    }
                                }
                            } else {

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

            if (document.querySelector(".opti-today-date-checkbox")) {
                document.querySelector(".opti-today-date-checkbox").remove();
            }

            if (document.querySelector(".opti-start-date-info")) {
                document.querySelector(".opti-start-date-info").remove();
            }
        });
    });
}