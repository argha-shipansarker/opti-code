const utils = optimizely.get('utils');

utils.observeSelector('[class*="CheckoutPageSummary_container"]', function (checkout_summary) {

    checkout_summary.insertAdjacentHTML("afterbegin", `<style>
        .opti-cost-summary-accordion {
            width: 100%;
            margin-bottom: 10px;
            margin-right: 1%;
            margin-left: 1%;
        }

        .opti-cost-summary-accordion label {
            padding-left: 4px;
            padding-right: 22px;
        }

        .opti-accordion-item {
            overflow: hidden;
            transition: max-height 0.5s;
        }

        .opti-accordion-button-booking {
            width: 100%;
            position: relative;
            cursor: pointer;
            margin-right: 1%;
            margin-left: 1%;
        }

        .opti-accordion-button-booking.collapsed::after {
            content: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%206V0H8V6H14V8H8V14H6V8H0V6H6Z%22%20fill%3D%22%232F343B%22%2F%3E%3C%2Fsvg%3E');
            position: absolute;
            right: 20px;
        }

        .opti-accordion-button-booking.not-collapsed::after {
            content: url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19%2011H5V13H19V11Z%22%20fill%3D%22%232F343B%22%2F%3E%3C%2Fsvg%3E');
            position: absolute;
            right: 20px;
        }

        .opti-guest-information-form {
            width: 100%;
        }

        .opti-booking-summary-new-design {
            display: flex;
            margin-bottom: 16px;
        }

        .opti-booking-summary-new-design img {
            flex-basis: 30%;
            width: 30%;
            min-height: 106px;
        }

        .opti-booking-summary-new-design .opti-booking-address {
            flex-basis: 70%;
            margin-left: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .opti-guest-information-form {
            margin-top: 24px;
        }

        @media (min-width: 400px) {
            .opti-accordion-button-booking {
                margin-right: 1.25%;
                margin-left: 1.25%;
            }

            .opti-cost-summary-accordion {
                margin-right: 1.25%;
                margin-left: 1.25%;
            }
        }
    </style>`);

    const booking_summary_section = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"]');

    const booking_summary_section_inner_part = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div');

    const booking_summary_heading = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div > p');

    const first_hr = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div hr:nth-of-type(1)');

    const cost_summary_accordion = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div div:nth-of-type(2)');

    const booking_summary_accordion = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div div:nth-of-type(1)');

    const booking_summary_accordion_breakdown = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div div:nth-of-type(1) [class*="AccordionContainer_contents"] div');

    const IHG_banner = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div [class*="IHGMemberPrompt_container"]');

    const form_container_section = checkout_summary.querySelector('#confirmation-column');

    const required_field_text_message = checkout_summary.querySelector('[class*="CheckoutForm_two-step-form-disclaimer"]');

    const step_info_section = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(1)');

    const guest_info_section = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(1)');

    const primary_guest_heading = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) [class*="GuestInformationFormFields_primary-guest-subheading"]');

    const first_name_last_name = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(2)');

    const email_address = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(3)');

    const phone_number_and_type = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(4)');

    const contact_method = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(5)');

    if (
        booking_summary_section &&
        booking_summary_section_inner_part &&
        booking_summary_heading &&
        first_hr &&
        cost_summary_accordion &&
        booking_summary_accordion &&
        booking_summary_accordion_breakdown &&
        IHG_banner &&
        form_container_section &&
        required_field_text_message &&
        step_info_section &&
        guest_info_section &&
        primary_guest_heading &&
        first_name_last_name &&
        email_address &&
        phone_number_and_type &&
        contact_method
    ) {
        booking_summary_heading.classList.add('opti-accordion-button-booking', 'collapsed');
        booking_summary_section_inner_part.classList.add('opti-accordion-item');

        cost_summary_accordion.classList.add('opti-cost-summary-accordion');

        booking_summary_section_inner_part.before(booking_summary_heading);

        booking_summary_heading.before(cost_summary_accordion);

        booking_summary_accordion.style.display = 'none';
        booking_summary_accordion_breakdown.classList.add('opti-booking-summary-accordion-breakdown');

        const check_in = booking_summary_accordion_breakdown.querySelector('p:nth-of-type(2)');
        const check_out = booking_summary_accordion_breakdown.querySelector('p:nth-of-type(4)');
        const guest = booking_summary_accordion_breakdown.querySelector('p:nth-of-type(6)');

        check_in ? check_in.style.display = 'none' : "";
        check_out ? check_out.style.display = 'none' : "";
        guest ? guest.style.display = 'none' : "";

        first_hr.after(booking_summary_accordion_breakdown);
        first_hr.style.display = 'none';

        const booking_image = booking_summary_section_inner_part.querySelector('img');
        const booking_heading = booking_summary_section_inner_part.querySelector('[data-uitest="subheading"]');
        const booking_resort_address = booking_summary_section_inner_part.querySelector('[data-uitest="resort-address"]');
        const booking_resort_state = booking_summary_section_inner_part.querySelector('[data-uitest="resort-state"]');

        booking_summary_section_inner_part.insertAdjacentHTML("afterbegin", `<div class="opti-booking-summary-new-design"></div>`)

        const booking_new_design = booking_summary_section_inner_part.querySelector('.opti-booking-summary-new-design');

        if (
            booking_image &&
            booking_heading &&
            booking_resort_address &&
            booking_resort_state
        ) {
            booking_new_design.append(booking_image)

            booking_new_design.insertAdjacentHTML("beforeend", `<div class="opti-booking-address"></div>`)

            const booking_address = booking_summary_section_inner_part.querySelector('.opti-booking-address');

            booking_heading.style.marginTop = 0;

            booking_address.append(booking_heading, booking_resort_address, booking_resort_state)
        }

        form_container_section.style.marginTop = '0px'

        booking_summary_section_inner_part.style.maxHeight = 0;

        booking_summary_heading.addEventListener('click', () => {
            if (booking_summary_heading.classList.contains('collapsed')) {

                booking_summary_heading.classList.remove('collapsed');
                booking_summary_heading.classList.add('not-collapsed');

                booking_summary_section_inner_part.style.maxHeight = booking_summary_section_inner_part.scrollHeight + 'px';

            } else if (booking_summary_heading.classList.contains('not-collapsed')) {

                booking_summary_heading.classList.remove('not-collapsed');
                booking_summary_heading.classList.add('collapsed');

                booking_summary_section_inner_part.style.maxHeight = 0;

            }
        });

        const cloned_required_field_text_message = required_field_text_message.cloneNode(true);

        required_field_text_message.style.display = 'none';

        const cloned_step_info_section = step_info_section.cloneNode(true);

        step_info_section.style.display = 'none';

        const cloned_guest_info_section = guest_info_section.cloneNode(true);

        guest_info_section.style.display = 'none';

        const cloned_primary_guest_heading = primary_guest_heading.cloneNode(true);

        primary_guest_heading.style.display = 'none';

        form_container_section.insertAdjacentHTML("afterbegin", `<div class="opti-guest-information-form"></div>`);

        const opti_guest_info_form = document.querySelector('.opti-guest-information-form');

        contact_method.querySelector('div').style.marginBottom = "8px";

        opti_guest_info_form.append(cloned_step_info_section, cloned_guest_info_section, cloned_primary_guest_heading, first_name_last_name, email_address, phone_number_and_type, contact_method, cloned_required_field_text_message);

        booking_summary_section.after(IHG_banner);

        IHG_banner.before(opti_guest_info_form);

        IHG_banner.after(booking_summary_section);


        // Define the Mutation Observer callback
        const mutationCallback = (mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    // Check if the text content is "Step 1"
                    if (step_info_section.textContent.trim() === 'Step 1 of 2') {

                        const required_field_text_message = checkout_summary.querySelector('[class*="CheckoutForm_two-step-form-disclaimer"]');

                        const step_info_section = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(1)');

                        const guest_info_section = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(1)');

                        const primary_guest_heading = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) [class*="GuestInformationFormFields_primary-guest-subheading"]');

                        const first_name_last_name = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(2)');

                        const email_address = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(3)');

                        const phone_number_and_type = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(4)');

                        const contact_method = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1) div:nth-of-type(5)');

                        form_container_section.insertAdjacentHTML("afterbegin", `<div class="opti-guest-information-form"></div>`);

                        const opti_guest_info_form = document.querySelector('.opti-guest-information-form');

                        if (
                            required_field_text_message &&
                            step_info_section &&
                            guest_info_section &&
                            primary_guest_heading &&
                            first_name_last_name &&
                            email_address &&
                            phone_number_and_type &&
                            contact_method
                        ) {
                            const cloned_required_field_text_message = required_field_text_message.cloneNode(true);

                            required_field_text_message.style.display = 'none';

                            const cloned_step_info_section = step_info_section.cloneNode(true);

                            step_info_section.style.display = 'none';

                            const cloned_guest_info_section = guest_info_section.cloneNode(true);

                            guest_info_section.style.display = 'none';

                            const cloned_primary_guest_heading = primary_guest_heading.cloneNode(true);

                            primary_guest_heading.style.display = 'none';

                            contact_method.querySelector('div').style.marginBottom = "8px";

                            opti_guest_info_form.append(cloned_step_info_section, cloned_guest_info_section, cloned_primary_guest_heading, first_name_last_name, email_address, phone_number_and_type, contact_method, cloned_required_field_text_message);
                        }

                        IHG_banner.before(opti_guest_info_form);

                        IHG_banner.after(booking_summary_section);

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });

                        booking_summary_heading.before(cost_summary_accordion);

                        form_container_section.style.marginTop = '0px'


                    } else if (step_info_section.textContent.trim() === 'Step 2 of 2') {

                        document.querySelector('.opti-guest-information-form').remove();

                        step_info_section.style.display = 'block';
                        guest_info_section.style.display = 'block';
                        primary_guest_heading.style.display = 'block';
                        required_field_text_message.style.display = 'block';

                        IHG_banner.before(booking_summary_section);

                        booking_summary_section_inner_part.after(cost_summary_accordion);

                        form_container_section.style.marginTop = '40px'
                    }
                }
            }
        };

        // Create a Mutation Observer instance
        const observer = new MutationObserver(mutationCallback);

        // Define what to observe (only childList for text changes)
        const config = {
            childList: true,       // Observe additions/removals of child nodes
            subtree: true,         // Observe all descendants
            characterData: true,   // Observe text content changes
            characterDataOldValue: true // Optional: Get old data if needed
        };

        // Start observing the target element
        observer.observe(step_info_section, config);
    }


});