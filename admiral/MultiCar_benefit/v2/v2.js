const utils = optimizely.get('utils');

utils.observeSelector('#quote-summary .adm-card-deck__cards button[data-test="remove-button"]', function (remove_button) {
    remove_button.addEventListener('click', function () {

        utils.observeSelector('.adm-modal-container__inner', function (car_remove_modal) {

            const modal_heading = car_remove_modal.querySelector('.adm-important-message__content .adm-important-message__message');
            const modal_body_message = car_remove_modal.querySelector('.adm-important-message__content p:not(.opti-price-message)');
            const confirm_button = car_remove_modal.querySelector('button[btntype="secondary"]');

            if (modal_heading && modal_body_message && confirm_button) {

                confirm_button.innerText = 'Remove Car';

                modal_heading.innerText = `You'll lose your discount`;

                const price_message = car_remove_modal.querySelector('.opti-price-message');
                if (price_message) {
                    price_message.remove();
                    modal_heading.insertAdjacentHTML("afterend", `<p class="opti-price-message">Remember, you only pay today for the car with the earliest start date</p>`);
                } else {
                    modal_heading.insertAdjacentHTML("afterend", `<p class="opti-price-message">Remember, you only pay today for the car with the earliest start date</p>`);
                }

                modal_body_message.innerHTML = `<p>We've saved your car details <span style="font-weight: bold;">for later</span> incase you want to re-add this before you buy.</p>`;
            }
        });

    });
});