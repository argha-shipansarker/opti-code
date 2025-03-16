const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {

    utils.observeSelector('.trip-type-container .annual', function (annual_trip_btn) {
        annual_trip_btn.addEventListener('click', function () {
            utils.observeSelector('.section:has(.start-date) .control-label', function (label) {
                label.innerText = "Cover start date";
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
        <p>Cancellation cover will start from the date selected. Choose today if you want cancellation cover to start
            immediately.</p>
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
                label.innerHTML = `
                Departure date 
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" data-d="travel_dates" class="info-btn" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
            `.trim();
            });

            if (document.querySelector('.opti-info-box-container')) {
                document.querySelector('.opti-info-box-container').remove();
            }
        });
    });
}