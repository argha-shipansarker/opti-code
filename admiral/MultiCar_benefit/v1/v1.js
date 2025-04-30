const utils = optimizely.get('utils');

utils.observeSelector('#quote-summary .adm-card-deck__cards button[data-test="remove-button"]', function (remove_button) {
    remove_button.addEventListener('click', function () {
        const car_card = remove_button.closest('.adm-card-deck__cards');
        if (car_card) {
            const multiSavingsAmount = car_card.querySelector('adm-text-helper[data-test="multi-savings-amount"]');
            if (multiSavingsAmount) {
                console.warn('Found element:', multiSavingsAmount);

                utils.observeSelector('.adm-modal-container__inner', function (car_remove_modal) {
                    const added_car_number = document.querySelectorAll('#quote-summary .adm-card-deck__cards');

                    const modal_heading = car_remove_modal.querySelector('.adm-important-message__content .adm-important-message__message');
                    const modal_body_message = car_remove_modal.querySelector('.adm-important-message__content p:not(.opti-price-message)');
                    const confirm_button = car_remove_modal.querySelector('button[btntype="secondary"]');

                    if (modal_heading && modal_body_message && confirm_button && added_car_number && added_car_number.length >= 2) {

                        confirm_button.innerText = 'Remove Car';

                        if (added_car_number.length >= 3) {

                            const saving_amount = multiSavingsAmount.innerText.split(' ')[1];
                            modal_heading.innerText = 'Your discount will reduce';

                            const price_message = car_remove_modal.querySelector('.opti-price-message');
                            if (price_message) {
                                price_message.remove();
                                modal_heading.insertAdjacentHTML("afterend", `<p class="opti-price-message">When you remove this car you will lose your Multi discount of <span style="font-weight: bold;">${saving_amount}</span> and your price for other cars on this quote may be affected.</p>`);
                            } else {
                                modal_heading.insertAdjacentHTML("afterend", `<p class="opti-price-message">When you remove this car you will lose your Multi discount of <span style="font-weight: bold;">${saving_amount}</span> and your price for other cars on this quote may be affected.</p>`);
                            }

                            modal_body_message.innerHTML = `<p>We've saved your car details <span style="font-weight: bold;">for later</span> incase you want to re-add this before you buy.</p>`;

                        } else {

                            const saving_amount = document.querySelector('.adm-hero__inner adm-text-helper').innerText.split(' ')[2];
                            modal_heading.innerText = `You'll lose your discount`;

                            const price_message = car_remove_modal.querySelector('.opti-price-message');
                            if (price_message) {
                                price_message.remove();
                                modal_heading.insertAdjacentHTML("afterend", `<p class="opti-price-message">When you remove this car you will lose your Multi discount of <span style="font-weight: bold;">${saving_amount}</span>.</p>`);
                            } else {
                                modal_heading.insertAdjacentHTML("afterend", `<p class="opti-price-message">When you remove this car you will lose your Multi discount of <span style="font-weight: bold;">${saving_amount}</span>.</p>`);
                            }

                            modal_body_message.innerHTML = `<p>We've saved your car details <span style="font-weight: bold;">for later</span> incase you want to re-add this before you buy.</p>`;
                        }
                    }
                });
            }
        }
    });
});