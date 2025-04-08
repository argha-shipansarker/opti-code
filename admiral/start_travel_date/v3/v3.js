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

            utils.observeSelector('.info-box', function (info_box) {
                info_box.style.display = "none";
                if (!document.querySelector('.opti-info-box-container')) {
                    info_box.insertAdjacentHTML("afterend", `
<div class="opti-info-box-container">
    <style>
        .opti-info-box-container {
            padding: 0px 15px 15px;
        }

        .opti-info-box {
            background-color: #E0F2FF;
            border-left: 2px solid #41A5F5;
            padding: 16px;
            display: flex;
        }

        .opti-info-box svg {
            flex-basis: 3.8%;
        }

        .opti-info-box p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: #25469B;
            margin-left: 6px;
            margin-bottom: 0;
        }
    </style>
    <div class="opti-info-box">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.50004 1.8335C4.82004 1.8335 1.83337 4.82016 1.83337 8.50016C1.83337 12.1802 4.82004 15.1668 8.50004 15.1668C12.18 15.1668 15.1667 12.1802 15.1667 8.50016C15.1667 4.82016 12.18 1.8335 8.50004 1.8335ZM9.16671 11.8335H7.83337V7.8335H9.16671V11.8335ZM9.16671 6.50016H7.83337V5.16683H9.16671V6.50016Z"
                fill="#41A5F5" />
        </svg>
        <p>If you would like to be covered for cancellations from today, you can set your policy to start from today.</p>
    </div>
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

            if (document.querySelector('.opti-info-box-container')) {
                document.querySelector('.opti-info-box-container').remove();
            }
        });
    });
}