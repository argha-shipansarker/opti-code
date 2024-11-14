const utils = optimizely.get('utils');

utils.observeSelector('[class*="CheckoutPageSummary_container"]', function (checkout_summary) {

    checkout_summary.insertAdjacentHTML("afterbegin", `<style>
        .opti-cost-summary-accordion {
            width: 100%;
            margin-bottom: 10px;
        }

        .opti-cost-summary-accordion label {
            padding: 1rem 4px;
        }

        .opti-accordion-item {
            overflow: hidden;
            transition: max-height 0.5s;
        }

        .opti-accordion-button-booking {
            width: 100%;
            position: relative;
            cursor: pointer;
        }

        .opti-accordion-button-booking.collapsed::after {
            content: url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%2011V5H13V11H19V13H13V19H11V13H5V11H11Z%22%20fill%3D%22%232F343B%22%2F%3E%3C%2Fsvg%3E');
            position: absolute;
            right: 8px;
        }

        .opti-accordion-button-booking.not-collapsed::after {
            content: url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19%2011H5V13H19V11Z%22%20fill%3D%22%232F343B%22%2F%3E%3C%2Fsvg%3E');
            position: absolute;
            right: 8px;
        }
    </style>`);

    const booking_summary_section = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"]');
    const booking_summary_section_inner_part = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div');

    const booking_summary_heading = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div > p');

    const cost_summary_accordion = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div div:nth-of-type(2)');

    const booking_summary_accordion = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div div:nth-of-type(1)');

    const booking_summary_accordion_breakdown = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div div:nth-of-type(1) [class*="AccordionContainer_contents"] div');

    const required_field_text_message = checkout_summary.querySelector('[class*="CheckoutForm_two-step-form-disclaimer"]');

    const IHG_banner = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div [class*="IHGMemberPrompt_container"]');

    const first_hr = checkout_summary.querySelector('[class*="CheckoutPageSummary_booking-summary"] > div > div hr:nth-of-type(1)');

    const form_container_section = checkout_summary.querySelector('#confirmation-column');

    const step_info_section = checkout_summary.querySelector('#confirmation-column #form-checkout div:nth-of-type(1) div:nth-of-type(1)');

    const preferred_contact = checkout_summary.querySelector('[class*="GuestInformationFormFields_preferred-contact-method-dropdown"]');

    if (booking_summary_section &&
        booking_summary_section_inner_part &&
        booking_summary_heading &&
        cost_summary_accordion &&
        booking_summary_accordion &&
        booking_summary_accordion_breakdown &&
        required_field_text_message &&
        IHG_banner &&
        first_hr &&
        form_container_section &&
        step_info_section &&
        preferred_contact
    ) {

        booking_summary_heading.classList.add('opti-accordion-button-booking', 'collapsed');
        booking_summary_section_inner_part.classList.add('opti-accordion-item');
        booking_summary_section_inner_part.before(booking_summary_heading);
        booking_summary_section_inner_part.style.maxHeight = 0;

        booking_summary_accordion.style.display = 'none';
        booking_summary_accordion_breakdown.classList.add('opti-booking-summary-accordion-breakdown');

        const check_in = booking_summary_accordion_breakdown.querySelector('p:nth-of-type(2)');
        const check_out = booking_summary_accordion_breakdown.querySelector('p:nth-of-type(4)');
        const guest = booking_summary_accordion_breakdown.querySelector('p:nth-of-type(6)');

        check_in ? check_in.style.display = 'none' : "";
        check_out ? check_out.style.display = 'none' : "";
        guest ? guest.style.display = 'none' : "";

        first_hr.after(booking_summary_accordion_breakdown);

        booking_summary_section.after(IHG_banner);

        cost_summary_accordion.classList.add('opti-cost-summary-accordion');
        const cloned_required_field_text_message = required_field_text_message.cloneNode(true);

        preferred_contact.after(cloned_required_field_text_message, cost_summary_accordion);

        required_field_text_message.style.display = 'none';

        form_container_section.style.marginTop = '16px';

        const mutationCallback = (mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    // Check if the text content is "Step 1"
                    if (step_info_section.textContent.trim() === 'Step 1 of 2') {

                        const preferred_contact = checkout_summary.querySelector('[class*="GuestInformationFormFields_preferred-contact-method-dropdown"]');

                        if (preferred_contact) {
                            preferred_contact.after(cloned_required_field_text_message, cost_summary_accordion);
                        }

                        required_field_text_message.style.display = 'none';

                        form_container_section.style.marginTop = '16px';

                    } else if (step_info_section.textContent.trim() === 'Step 2 of 2') {
                        IHG_banner.before(cost_summary_accordion);
                        required_field_text_message.style.display = 'block';
                        form_container_section.style.marginTop = '40px';
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

    }

});