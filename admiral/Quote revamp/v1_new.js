const utils = optimizely.get('utils');

if (window.location.href.indexOf('/Admiral/quote') > -1) {
    utils.observeSelector('.adm-section:has(+#quote-summary)', function (home_car_van_section) {
        home_car_van_section.style.display = "none";

        if (!JSON.parse(sessionStorage.getItem("is_car_removed"))) {
            home_car_van_section.insertAdjacentHTML("beforebegin", `<div class="opti-home-car-van-section">
    
                <!-- Details Modal Style -->
                <style>
                    .opt-variation-close {
                        position: absolute;
                        right: 25px;
                        top: 23px;
                        cursor: pointer;
                    }
            
                    .opt-variation-modal {
                        max-width: 424px;
                        background-color: white;
                        margin: auto;
                        padding: 30px 30px 26px;
                        display: flex;
                        position: relative;
                    }
            
                    .opt-variation-modal .opt-variation-body .heading-section {
                        display: flex;
                        margin-bottom: 16px;
                    }
            
                    .opt-variation-modal .opt-variation-body .heading-section svg {
                        height: 48px;
                        width: 48px;
                    }
            
                    .opt-variation-modal .opt-variation-body .heading-section p {
                        font-size: 16px;
                        line-height: 24px;
                        font-weight: 700;
                        color: #25469B;
                        flex: 1;
                        margin-left: 18px;
                    }
            
                    .opt-variation-modal.van .opt-variation-body .heading-section p {
                        flex: 0.9;
                    }
            
                    .opt-variation-modal .opt-variation-body .heading-section p span {
                        font-size: 24px;
                        line-height: 30px;
                        font-weight: 700;
                    }
        
                    .opt-variation-modal .opt-variation-body .heading-section p.opti-van-heading span[data-test="add-car-van-banner-van-text"] {
                        font-size: 16px;
                        line-height: 24px;
                    }
            
                    .opt-variation-modal .opt-variation-body .sub-heading-section {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 21px;
                        color: #444444;
                        margin-bottom: 16px;
                    }
            
                    .opt-variation-modal .opt-variation-body .save-today-section .heading {
                        font-size: 16px;
                        line-height: 24px;
                        font-weight: 700;
                        color: #25469B;
                        margin-bottom: 8px;
                    }
            
                    .opt-variation-modal .opt-variation-body .save-today-section .listing {
                        display: flex;
                        margin-bottom: 8px;
                    }
            
                    .opt-variation-modal .opt-variation-body .save-today-section .listing p {
                        font-size: 14px;
                        line-height: 21px;
                        font-weight: 400;
                        color: #444444;
                        margin-left: 9px;
                    }
            
                    .opt-variation-modal .opt-variation-body .save-today-section .learn-more-cta {
                        font-size: 14px;
                        line-height: 21px;
                        font-weight: 400;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        margin-bottom: 16px;
                    }
            
                    .opt-variation-modal .opt-variation-body .save-today-section .learn-more-cta span {
                        color: #006DCC;
                        margin-left: 9px;
                    }
            
                    .opt-variation-modal .opt-variation-body .footer-info {
                        font-size: 12px;
                        line-height: 21px;
                        font-weight: 400;
                        color: #656560;
                        margin-bottom: 20px;
                    }
            
                    .opt-variation-modal .opt-variation-body .footer-cta {
                        display: flex;
                        height: 44px;
                        justify-content: space-between;
                    }
            
                    .opt-variation-modal .opt-variation-body .footer-cta button {
                        flex-basis: 48%;
                        border: 1px solid #006DCC;
                        text-align: center;
                        font-size: 16px;
                        font-weight: 400;
                        color: #006DCC;
                        border-radius: 4px;
                        cursor: pointer;
                    }
            
                    .opt-variation-modal .opt-variation-body .footer-cta a {
                        flex-basis: 48%;
                        font-size: 16px;
                        line-height: 24px;
                        font-weight: 400;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #0A8A19;
                        color: white;
                        border-radius: 4px;
                    }
            
                    @media (max-width: 435px) {
                        .opt-variation-modal .opt-variation-body .heading-section p {
                            flex: 1 !important;
                        }
            
                        .opt-variation-close {
                            display: none;
                        }
            
                        .opt-variation-modal {
                            border-top-right-radius: 8px;
                            border-top-left-radius: 8px;
                        }
                    }
                </style>
            
                <style>
                    .opti-home-car-van-section {
                        margin-bottom: 63px;
                        -webkit-tap-highlight-color: transparent;
                    }
            
                    .opti-home-car-van-section .section-heading {
                        font-size: 24px;
                        line-height: 30px;
                        font-weight: 700;
                        text-align: center;
                        color: #25469B;
                    }
            
                    .opti-home-car-van-section .section-sub-heading {
                        font-size: 20px;
                        line-height: 25px;
                        font-weight: 400;
                        text-align: center;
                        color: #444444;
                    }
            
                    @media (max-width: 435px) {
                        .opti-home-car-van-section .section-heading {
                            font-size: 20px;
                        }
            
                        .opti-home-car-van-section .section-sub-heading {
                            display: none;
                        }
            
                        .opti-home-car-van-section {
                            margin-bottom: 39px;
                        }
                    }
                </style>
                <h3 class="section-heading">Bundle your insurance to save more.</h3>
                <p class="section-sub-heading">You can add more vehicles or homes to your policy whenever you want, and set them to
                    join when their renewal is due.</p>
            
                <div class="insurance-type-section">
                    <style>
                        .opti-home-car-van-section .insurance-type-section {
                            display: flex;
                            overflow-x: auto;
                            scroll-snap-type: x mandatory;
                            scroll-behavior: smooth;
                            width: 100%;
                            gap: 18px;
                            scrollbar-width: none;
                            -ms-overflow-style: none;
                        }
            
                        .opti-home-car-van-section .insurance-type-section::-webkit-scrollbar {
                            display: none;
                        }
            
                        .opti-home-car-van-section .insurance-type-section .card {
                            padding: 16px;
                            flex-basis: 33%;
                            background: white;
                            display: flex;
                            flex-direction: column;
                            min-width: 200px;
                            scroll-snap-align: center;
                            cursor: pointer;
                        }
            
                        .opti-home-car-van-section .insurance-type-section .card img {
                            height: 80px;
                        }
            
                        .opti-home-car-van-section .insurance-type-section .card.home img,
                        .opti-home-car-van-section .insurance-type-section .card.car img {
                            width: 110px;
                            margin: 0 auto;
                        }
            
                        .opti-home-car-van-section .insurance-type-section .card p {
                            line-height: 24px;
                            font-weight: 700;
                            color: #25469B;
                            text-align: center;
                            margin-top: 10px;
                        }
                    </style>
                    <div class="card home" onclick="window.showHomeDetailsModal()">
                        <img src="//cdn.optimizely.com/img/25237771658/a3ee4a0b6944436f9db17d0441ab3613.png" />
                        <p>Get a discount when you add a home</p>
                    </div>
                    <div class="card car" onclick="window.showCarDetailsModal()">
                        <img src="//cdn.optimizely.com/img/25237771658/27b8e8245fa34dc9b61edfab4779e07e.png" />
                        <p>Add multiple cars to increase your discount</p>
                    </div>
                    <div class="card van" onclick="window.showVanDetailsModal()">
                        <img src="//cdn.optimizely.com/img/25237771658/71ccf92e01774d968c37bf6e4131efe4.png" />
                        <p>Add a van to get an instant discount</p>
                    </div>
                </div>
                <div class="insurance-type-pagination">
                    <style>
                        .opti-home-car-van-section .insurance-type-pagination {
                            display: flex;
                            justify-content: center;
                            margin-top: 12px;
                        }
            
                        .dot {
                            height: 8px;
                            width: 44px;
                            margin: 0 4px;
                            background: #FFFFFF;
                            border-radius: 4px;
                            display: inline-block;
                            border: 1px solid #CED9E5;
                        }
            
                        .dot.active {
                            background: #41A5F5;
                        }
            
                        @media (min-width: 435px) {
                            .opti-home-car-van-section .insurance-type-pagination {
                                display: none;
                            }
                        }
                    </style>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>`);


            const scrollContainer = document.querySelector('.opti-home-car-van-section .insurance-type-section');
            const boxes = document.querySelectorAll('.opti-home-car-van-section .insurance-type-section .card');
            const dots = document.querySelectorAll('.opti-home-car-van-section .insurance-type-pagination .dot');

            // Function to find the index of the box closest to the center
            function updateActiveDot() {
                const containerRect = scrollContainer.getBoundingClientRect();
                const containerCenter = containerRect.left + containerRect.width / 2;

                let closestBoxIndex = 0;
                let closestDistance = Infinity;

                boxes.forEach((box, index) => {
                    const boxRect = box.getBoundingClientRect();
                    const boxCenter = boxRect.left + boxRect.width / 2;
                    const distanceToCenter = Math.abs(boxCenter - containerCenter);

                    if (distanceToCenter < closestDistance) {
                        closestDistance = distanceToCenter;
                        closestBoxIndex = index;
                    }
                });

                // Update the active dot
                dots.forEach((dot, idx) => {
                    dot.classList.toggle('active', idx === closestBoxIndex);
                });
            }

            // Listen to the scroll event to update the active dot
            scrollContainer.addEventListener('scroll', () => {
                updateActiveDot();
            });

            // Scroll to the respective box when a dot is clicked
            // dots.forEach((dot, index) => {
            //     dot.addEventListener('click', () => {
            //         const boxOffsetLeft = boxes[index].offsetLeft;
            //         scrollContainer.scrollTo({
            //             left: boxOffsetLeft - scrollContainer.offsetWidth / 2 + boxes[index].offsetWidth / 2,
            //             behavior: 'smooth'
            //         });
            //     });
            // });

            // Initialize the active dot on page load
            updateActiveDot();
        }
    });

    utils.observeSelector('.adm-important-message .adm-important-message__action[data-test="confirm-remove"]', function (car_remove_confirm_btn) {
        car_remove_confirm_btn.addEventListener("click", function () {
            sessionStorage.setItem("is_car_removed", JSON.stringify(true));
        })
    });


    window.showHomeDetailsModal = () => {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opt-home-details-container"
        style="display: flex; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px;">
        <div class="opt-variation-modal">
            <div class="opt-variation-close" onclick="document.querySelector('.opt-home-details-container').remove()">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5" />
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#CED9E5" />
                </svg>
    
            </div>
            <div class="opt-variation-body">
                <div class="heading-section">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#41A5F5" />
                        <rect width="32" height="32" transform="translate(8 8)" fill="#41A5F5" />
                        <path
                            d="M18.0671 28.0813C18.0671 25.8823 19.7635 25.1816 19.7635 25.1816C19.7635 25.1816 20.6237 21.7538 21.0423 20.0361C21.4056 18.6699 21.8618 17.6189 24.7222 17.1663C24.8109 17.1556 24.9049 17.1471 24.9957 17.1375C22.9517 15.3815 21.1989 13.8758 21.1989 13.8758C21.1989 13.8758 14.9917 19.197 11.9684 21.8038C11.8881 21.8731 11.8265 22.0158 11.8254 22.1254C11.8181 24.8068 11.816 27.1506 11.8265 29.833C11.8275 30.0247 11.9037 30.2345 11.9987 30.4028C12.2138 30.7872 12.5708 30.9064 12.9831 30.9054C14.6754 30.9022 16.3686 30.9033 18.0608 30.9033C18.0629 29.963 18.0671 29.0216 18.0671 28.0813ZM26.7161 16.9938C28.0085 16.915 29.4011 16.8873 30.7571 16.9107C30.7571 16.8287 30.7561 16.6807 30.7571 16.5582C30.7665 15.685 30.7613 14.8118 30.7613 13.9386C30.7613 12.6203 30.7613 10.1487 30.7613 10.1487C30.7613 10.1487 30.7613 9.33301 29.6276 9.33301C29.2361 9.33301 28.1484 9.33301 27.7725 9.33301C26.6534 9.33301 26.6597 10.1487 26.6597 10.1487C26.6597 10.1487 26.6367 11.2945 26.6367 11.943C26.6367 12.3328 26.6169 12.9206 26.6169 13.3593C26.5344 13.2965 26.2714 13.1101 26.2338 13.0771C24.9873 12.0005 23.7388 10.925 22.4934 9.84628C21.7062 9.16476 20.6404 9.16156 19.8522 9.84202C19.0077 10.5715 18.1621 11.2977 17.3155 12.025C14.3142 14.6084 11.3118 17.1908 8.31155 19.7731C7.92529 20.1064 7.90232 20.3545 8.21968 20.7496C8.50989 21.1085 8.80011 21.4652 9.09032 21.8219C9.33042 22.1169 9.64047 22.1425 9.93068 21.8922C13.1721 19.1012 20.6602 12.6533 21.1655 12.2188C21.1978 12.2455 23.8891 14.5626 26.7161 16.9938ZM37.2692 37.3319C38.6837 37.3319 39.1211 37.1967 39.1211 35.1244C39.1222 34.6665 39.1211 34.2097 39.1211 33.7518V33.6091C39.1545 33.6006 39.9959 33.4568 39.9959 33.1672C39.9959 31.6636 40.0074 30.1578 39.9918 28.6553C39.9918 26.731 38.5021 25.8674 38.5021 25.8674C38.5021 25.8674 37.7577 22.6547 37.3767 21.052C37.0562 19.7028 36.4414 18.8371 34.2094 18.5144C31.6789 18.1939 27.9949 18.1939 25.3851 18.5176C22.8984 18.9361 22.5017 19.9083 22.1854 21.1702C21.8211 22.7569 21.0736 25.9249 21.0736 25.9249C21.0736 25.9249 19.5985 26.5724 19.5985 28.6052C19.5985 30.1355 19.586 31.6668 19.5965 33.197C19.5985 33.4473 20.3564 33.6006 20.417 33.6049C20.417 34.1373 20.4139 35.4972 20.418 36.0115C20.4264 37.3 20.8868 37.333 22.3336 37.333C23.816 37.333 24.2012 37.1978 24.2012 35.9348C24.2012 35.446 24.2012 34.2949 24.2012 33.7891C27.6546 34.2086 31.9764 34.2086 35.3358 33.7891V33.9712C35.3358 34.4184 35.339 34.6836 35.3348 35.1308C35.3358 37.1978 35.601 37.3319 37.2692 37.3319ZM36.7055 27.9397C37.6774 27.945 38.4739 28.7852 38.4728 29.8235C38.4718 30.8756 37.6826 31.7094 36.7002 31.7158C35.6114 31.7221 34.959 30.67 34.9287 29.9044C34.8911 28.9556 35.649 27.9333 36.7055 27.9397ZM24.4236 21.0105C24.8245 19.7348 34.9527 19.8583 35.1939 20.97C35.767 23.0199 36.147 25.4543 36.1532 25.4873C32.5193 25.0208 27.0543 25.0581 23.4726 25.4873C23.4726 25.4873 23.8306 22.8964 24.4236 21.0105ZM20.9097 29.8937C20.8753 28.9769 21.6269 27.9237 22.6969 27.9397C23.6647 27.9535 24.456 28.7916 24.4528 29.8171C24.4497 30.8745 23.6657 31.7062 22.6865 31.7158C21.5695 31.7264 20.9369 30.6243 20.9097 29.8937Z"
                            fill="white" />
                    </svg>
                    <p class='opti-home-heading'></p>
                </div>
                <p class="sub-heading-section">
                    Your original car quote will be saved for you to return to at any point.
                </p>
                <div class="save-today-section">
                    <p class="heading">Save today, pay later.</p>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>Get your MultiCover discount immediately</p>
                    </div>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>You choose the start date for your home cover</p>
                    </div>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>You only pay for your home when its cover starts</p>
                    </div>
                    <div class="learn-more-cta" onclick="window.showHomeLearnMoreModal()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                                fill="#41A5F5" />
                        </svg>
                        <span>
                            Learn more about our home insurance
                        </span>
                    </div>
                </div>
                <p class="footer-info"></p>
                <div class="footer-cta">
                    <button onclick="document.querySelector('.opt-home-details-container').remove()" style="text-transform: uppercase;" class="opti-home-tile-cancel">
                        Cancel
                    </button>
                    <a href="https://quote.admiral.com/Admiral/multicover/homedetails" style="text-transform: uppercase;" class="opti-home-tile-continue">Continue</a>
                </div>
            </div>
        </div>
    </div>`);

        const existing_heading = document.querySelector('.opt-home-details-container .opti-home-heading');

        if (document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-text"]')) {

            const dynamic_heading = document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-text"]').cloneNode(true);
            dynamic_heading.classList.add('opti-home-heading');
            existing_heading.parentNode.replaceChild(dynamic_heading, existing_heading);

        } else if (document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-alternate-text"]')) {

            const dynamic_heading = document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-alternate-text"]').cloneNode(true);
            dynamic_heading.classList.add('opti-home-heading');
            existing_heading.parentNode.replaceChild(dynamic_heading, existing_heading);
        }

        const existing_footer = document.querySelector('.opt-home-details-container .footer-info');
        if (document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-footer"]')) {
            const dynamic_footer = document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-footer"]').cloneNode(true);
            dynamic_footer.classList.add('footer-info');
            existing_footer.parentNode.replaceChild(dynamic_footer, existing_footer);
        }

    };

    window.showHomeLearnMoreModal = () => {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opt-home-container"
        style="display: flex; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px;">
        <style>
            .opt-home-close {
                position: absolute;
                right: 10px;
                top: 10px;
                cursor: pointer;
            }
    
            .opt-home-modal {
                max-width: 351px;
                background-color: white;
                margin: auto;
                padding: 16px;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }
    
            .opt-home-modal-body {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
    
            .opt-home-modal-body svg {
                margin-bottom: 10px;
            }
    
            .opt-home-modal-header {
                color: #0045a0;
                font-weight: bold;
                font-size: 18px;
            }
    
            .opt-home-modal-sub-header {
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                color: #656560;
                margin: 6px 0px 20px;
            }
    
            .opt-home-modal-sub-header p:first-child {
                font-weight: 600;
                font-size: 15px;
            }
    
            .opti-blue-button {
                transition: filter .2s ease-in-out;
                background: var(--btn--secondary-background);
                border-color: var(--btn--secondary-border-color);
                color: var(--btn--secondary-color);
                width: 100%;
                padding: .5em 1em;
                text-align: center;
                font-family: var(--font-family);
                border-radius: 4px;
                margin-bottom: 4px;
                cursor: pointer;
            }
    
            .opti-blue-button:hover,
            .opti-blue-button:focus {
                filter: brightness(.9) saturate(1.025) contrast(1.5);
                outline: none;
            }
        </style>
        <div class="opt-home-modal">
            <div style="" class="opt-home-close" onclick="document.querySelector('.opt-home-container').remove()">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5"></rect>
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#41A5F5"></path>
                </svg>
            </div>
            <div class="opt-home-modal-body">
                <svg width="30" height="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.99984 0.166626C4.39984 0.166626 0.666504 3.89996 0.666504 8.49996C0.666504 13.1 4.39984 16.8333 8.99984 16.8333C13.5998 16.8333 17.3332 13.1 17.3332 8.49996C17.3332 3.89996 13.5998 0.166626 8.99984 0.166626ZM9.83317 12.6666H8.1665V7.66663H9.83317V12.6666ZM9.83317 5.99996H8.1665V4.33329H9.83317V5.99996Z"
                        fill="#41A5F5"></path>
                </svg>
                <div class="opt-home-modal-header">
                    You'll need to return to this page​
                </div>
                <div class="opt-home-modal-sub-header">
                    <p>To add a home to your existing quote and receive a MultiCover discount, you’ll need to return to this
                        page after visiting our main site.​</p>
                    <p>Continue to our main site to learn more about our home insurance cover.</p>
                </div>
                <a class="opti-blue-button" style="text-transform: uppercase;" href="https://www.admiral.com/home-insurance" target="_blank">About Home insurance</a>
            </div>
        </div>
    </div>`);
    };


    window.showCarDetailsModal = () => {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opt-car-details-container"
        style="display: flex; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px;">
        <div class="opt-variation-modal">
            <div class="opt-variation-close" onclick="document.querySelector('.opt-car-details-container').remove()">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5" />
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#CED9E5" />
                </svg>
    
            </div>
            <div class="opt-variation-body">
                <div class="heading-section">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#41A5F5" />
                        <rect width="32" height="32" transform="translate(8 8)" fill="#41A5F5" />
                        <path
                            d="M20.3001 21.6821C19.5414 21.6821 18.7837 21.6821 18.0836 21.8571C17.7336 21.8571 17.325 21.8571 16.975 21.8571C16.975 21.8571 17.325 19.9907 17.7336 18.4734C17.7336 18.4734 17.9086 18.2984 18.0836 18.2397C18.6087 18.0647 20.3001 17.8897 21.8174 17.8897C22.401 17.8897 22.751 17.8897 23.3338 18.0647C25.0252 17.7147 26.3089 17.7147 27.4176 17.7147C27.4176 17.5397 27.2426 17.3647 27.0676 17.3647C26.7175 17.1897 26.1339 17.0147 25.5511 17.0147C24.4425 16.8397 23.3347 16.8397 21.9924 16.8397C20.8837 16.8397 19.5423 16.8397 18.6087 17.0147C16.7422 17.1897 16.3922 17.9483 16.1586 18.8811C15.8086 20.0475 15.2249 22.2649 15.2249 22.2649C15.2249 22.2649 14.1163 22.6149 14.1163 24.1313C14.1163 25.2977 14.1163 26.4064 14.1163 27.515C14.1163 27.69 14.6413 27.865 14.6413 27.865C14.6413 28.215 14.6413 29.2064 14.6413 29.5565C14.6413 30.4901 14.6413 30.4901 15.7499 30.4901C16.8586 30.4901 16.8586 30.4901 16.8586 29.5565V27.9814C17.4423 27.9814 17.7923 27.9814 18.2 27.9814V26.8727C18.2 25.3563 19.1337 24.4227 19.7164 24.0727C19.7751 23.5476 20.1251 22.5562 20.3001 21.6812V21.6821ZM17.5 25.2408C17.5 25.9995 16.9164 26.5822 16.1586 26.5822C15.4008 26.5822 14.8172 25.8236 14.8172 25.2408C14.8172 24.4822 15.5758 23.7244 16.3336 23.7244C17.15 23.7244 17.9086 24.2494 17.5 25.2408ZM12.5421 18.9984C12.3671 18.9984 12.0171 18.9984 11.7835 18.9984C11.7835 18.9984 11.9585 17.3647 12.5421 16.1983C12.5421 16.0233 12.7171 16.0233 12.7171 16.0233C13.4758 15.6733 15.6922 15.6733 17.3836 15.6733C17.5586 15.6733 17.9086 15.4983 18.3173 15.4983C18.8423 15.3233 19.8337 15.3233 20.5337 15.3233C20.3587 15.1483 20.1837 14.9733 20.0087 14.9733C19.6001 14.9733 19.2501 14.7982 18.9 14.7982C17.2086 14.6232 14.8163 14.6232 13.1249 14.7982C11.4334 15.1483 11.2584 15.7319 11.0834 16.4897C10.9084 17.6561 10.3248 19.5234 10.3248 19.5234C10.3248 19.5234 9.33337 19.757 9.33337 21.0984C9.33337 22.0321 9.33337 22.9649 9.33337 23.8985C9.33337 24.0735 9.85839 24.0735 9.85839 24.0735C9.85839 24.4235 9.85839 25.2399 9.85839 25.59C9.85839 26.3486 10.0334 26.3486 10.792 26.3486C11.5507 26.3486 11.5507 26.3486 11.5507 25.59C11.5507 25.415 11.5507 24.2485 11.5507 24.2485H12.6594V23.8985C12.6594 22.5571 13.418 21.6235 14.0008 21.2148C14.2344 20.6898 14.5844 19.6984 14.5844 18.9984C13.8258 18.9984 13.068 18.9984 12.543 18.9984H12.5421ZM12.4835 22.6157C12.3085 22.9658 11.9585 23.1408 11.5498 23.1408C10.7912 23.1408 10.4412 22.3821 10.4412 21.9743C10.4412 21.3907 10.8498 20.8079 11.5498 20.8079C11.8998 20.8079 12.3085 20.9829 12.4835 21.3329V22.6166V22.6157ZM35.9928 24.6572C35.9928 24.6572 35.4678 22.0321 35.0592 20.6907C34.7092 19.5243 34.1255 18.8242 32.2591 18.6492C31.3254 18.4742 30.0426 18.4742 28.7004 18.4742C27.1839 18.4742 25.6666 18.4742 24.5588 18.7079C22.3424 19.0579 21.9338 19.8165 21.7588 20.9829C21.4088 22.3244 20.8251 24.7167 20.8251 24.7167C20.8251 24.7167 19.4837 25.2417 19.4837 26.9918C19.4837 27.3418 19.4837 27.5168 19.4837 27.7504C19.4837 28.6841 19.4837 29.8505 19.4837 30.7841C19.4837 30.9591 20.2423 31.1341 20.2423 31.1341C20.2423 31.3091 20.2423 31.6591 20.2423 31.8928C20.2423 32.4764 20.2423 33.0592 20.2423 33.2342C20.2423 34.4006 20.5924 34.4006 21.9338 34.4006C23.2752 34.4006 23.6252 34.167 23.6252 33.2342C23.6252 33.0006 23.6252 32.4755 23.6252 32.0678C23.6252 31.8928 23.6252 31.7178 23.6252 31.5428C25.1416 31.7178 26.8339 31.7178 28.7004 31.7178C30.334 31.7178 31.8505 31.7178 33.3669 31.5428V31.7178C33.3669 32.0678 33.3669 32.2428 33.3669 32.6514C33.3669 34.3429 33.5419 34.5179 35.0583 34.5179C36.167 34.5179 36.5747 34.3429 36.5747 32.6514C36.5747 32.2428 36.5747 31.8928 36.5747 31.31C36.7497 31.31 37.3334 31.135 37.3334 31.135C37.3334 29.7936 37.3334 28.6849 37.3334 27.4013C37.3334 25.5926 35.992 24.6598 35.992 24.6598L35.9928 24.6572ZM22.4002 29.7323C21.4665 29.7323 20.8837 28.7987 20.8837 28.2159C20.8837 28.0409 20.8837 28.0409 20.8837 27.8659C21.1174 27.2823 21.4674 26.9323 21.9924 26.6995C21.9924 26.6995 22.1674 26.6995 22.3424 26.6995C23.1011 26.6995 23.8011 27.4581 23.8588 28.2159C23.9166 28.9737 23.3338 29.7323 22.4002 29.7323ZM23.1588 24.6572C23.1588 24.6572 23.3338 22.3821 23.9175 20.9234C24.0925 20.3984 26.5425 20.1648 28.759 20.1648C30.9754 20.1648 33.2505 20.5148 33.2505 20.9234C33.7755 22.6149 34.0091 24.6572 34.2419 24.6572C32.7255 24.4822 30.8582 24.4822 28.9917 24.4822C26.8917 24.4822 24.8502 24.4822 23.1579 24.6572H23.1588ZM34.5342 29.9073C33.6005 29.9073 33.0177 28.9737 33.0177 28.3909C32.8427 27.4573 33.6014 26.6995 34.5342 26.6995C35.4669 26.6995 35.9928 27.2245 36.0506 28.3909C36.0506 29.1496 35.4669 29.9073 34.5342 29.9073Z"
                            fill="white" />
                    </svg>
                    <p class="opti-car-heading">
                        On average our customers
                        <span style="display: block;">
                            SAVE £233*
                        </span> by switching to MultiCar
                    </p>
                </div>
                <p class="sub-heading-section">
                    Your original car quote will be saved for you to return to at any point.
                </p>
                <div class="save-today-section">
                    <p class="heading">Save today, pay later.</p>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>Get your MultiCar discount immediately</p>
                    </div>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>You choose the start date for your second car cover</p>
                    </div>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>You only pay for each car’s cover when it starts</p>
                    </div>
                </div>
                <p class="footer-info">*Average savings versus identical single policies. Date from Jan 24 -Jun 24.</p>
                <div class="footer-cta">
                    <button onclick="document.querySelector('.opt-car-details-container').remove()" style="text-transform: uppercase;" class="opti-car-tile-cancel">
                        Cancel
                    </button>
                    <a href="https://quote.admiral.com/Admiral/addcar/car" style="text-transform: uppercase;" class="opti-car-tile-continue">Continue</a>
                </div>
            </div>
        </div>
    </div>`);

        const existing_heading = document.querySelector('.opt-car-details-container .opti-car-heading');
        const dynamic_heading = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-car-header"] p.adm-text-helper').cloneNode(true);
        dynamic_heading.classList.add('opti-car-heading');
        existing_heading.parentNode.replaceChild(dynamic_heading, existing_heading);

        const existing_footer = document.querySelector('.opt-car-details-container .footer-info');
        const dynamic_footer = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-car-footer"]').cloneNode(true);
        dynamic_footer.classList.add('footer-info');
        existing_footer.parentNode.replaceChild(dynamic_footer, existing_footer);

    };

    window.showVanDetailsModal = () => {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opt-van-details-container"
        style="display: flex; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px;">
        <div class="opt-variation-modal van">
            <div class="opt-variation-close" onclick="document.querySelector('.opt-van-details-container').remove()">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5" />
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#CED9E5" />
                </svg>
    
            </div>
            <div class="opt-variation-body">
                <div class="heading-section">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#41A5F5" />
                        <rect width="32" height="32" transform="translate(8 8)" fill="#41A5F5" />
                        <path
                            d="M25.915 31.645C25.915 32.0227 25.915 33.0049 25.915 33.3826C25.915 34.4408 25.5323 34.6667 24.2303 34.6667C22.9283 34.6667 22.5466 34.5158 22.5466 33.4576C22.5466 33.0039 22.5466 31.9467 22.5466 31.4931C22.4697 31.4931 21.7812 31.3422 21.7812 31.1154C21.7812 29.8314 21.7812 28.6223 21.7812 27.3373C21.7043 26.431 22.2409 25.5237 23.0822 25.146C23.0822 25.146 23.7717 22.502 24.0774 21.217C24.3832 20.1588 24.69 19.3284 26.9862 19.0256C29.5891 18.7239 32.268 18.7239 34.871 19.0256C36.8615 19.3274 37.397 20.0079 37.7038 21.141C38.0865 22.501 38.699 25.146 38.699 25.146C39.5414 25.5996 40 26.5059 40 27.4882C40 28.7722 40 29.9813 40 31.2663C40 31.4931 39.2346 31.644 39.2346 31.644C39.2346 31.644 39.2346 31.7199 39.2346 31.7949C39.2346 32.1726 39.2346 32.5503 39.2346 32.928C39.2346 34.6657 38.9288 34.6657 37.6269 34.6657C36.0961 34.6657 35.8662 34.5897 35.8662 32.928C35.8662 32.5503 35.8662 32.3235 35.8662 31.9458V31.644C32.5748 32.0217 29.2824 32.0217 25.914 31.644L25.915 31.645ZM25.3025 24.7692C29.0536 24.3915 32.8816 24.3915 36.7086 24.7692C36.4788 23.4852 36.173 22.2002 35.8662 20.9911C35.5605 20.0848 26.4496 20.0089 26.1438 21.0671C25.7611 22.2761 25.4544 23.4852 25.3015 24.7692H25.3025ZM38.699 28.3965C38.699 27.5651 38.0096 26.8097 37.0913 26.8097C36.2489 26.8097 35.4835 27.4901 35.4835 28.3965C35.4835 29.3028 36.173 29.9832 37.0913 29.9832C37.9336 29.9073 38.699 29.2278 38.699 28.3965ZM26.5275 28.3965C26.5275 27.5651 25.8381 26.8097 24.9198 26.8097C24.0015 26.8097 23.312 27.5651 23.312 28.3965C23.389 29.2278 24.0774 29.9073 24.9198 29.9073C25.7621 29.9832 26.5275 29.2268 26.5275 28.3965ZM14.2781 26.2051C12.8232 26.2051 11.7521 27.3383 11.7521 28.6982C11.7521 29.3787 12.0578 30.0582 12.5175 30.5118C12.9771 30.9655 13.5896 31.2673 14.355 31.2673C15.733 31.2673 16.8811 30.1341 16.8811 28.7742C16.8811 27.3383 15.733 26.2051 14.2781 26.2051ZM32.9575 12H18.8715C17.1109 12 15.656 13.36 15.656 15.1736H13.9713C13.5117 15.1736 12.5165 15.5513 11.9809 16.2318L8.68946 21.2939C8.61252 21.4448 8 22.503 8 23.6361V27.1114C8 27.2623 8.07694 27.4132 8.07694 27.5651C8.22982 28.0187 8.68946 28.3205 9.30198 28.3205H10.527C10.7568 26.0542 12.7473 24.6943 14.6608 24.9201C16.5743 25.071 18.0292 26.5828 18.182 28.3955H20.4783V26.8087C20.4783 25.6755 21.0138 24.6174 21.9331 23.9379C22.1629 23.1824 22.5456 21.3688 22.8514 20.3866C23.1572 19.1775 23.7697 17.8935 26.5255 17.4398C27.9035 17.289 29.2814 17.213 30.6593 17.213C32.0372 17.213 34.7931 17.4398 34.7931 17.4398V13.8136C34.7931 12.8314 34.0277 12 32.9555 12H32.9575ZM11.0636 21.2939L13.5896 17.289C13.6666 17.1381 13.8954 16.9872 14.0493 16.9872H15.657V22.1252H11.5232C11.2934 22.1252 11.1405 21.9744 11.0636 21.9744C10.9107 21.8235 10.9107 21.5966 11.0636 21.2939Z"
                            fill="white" />
                    </svg>
    
                    <p class="opti-van-heading">
                        <span style="display: block;">
                            SAVE £105* on average
                        </span> Add a van now to get a discount
                    </p>
                </div>
                <p class="sub-heading-section">
                    Your original car quote will be saved for you to return to at any point.
                </p>
                <div class="save-today-section">
                    <p class="heading">Save today, pay later.</p>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>Get your MultiCover discount immediately</p>
                    </div>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>You choose the start date for your van cover</p>
                    </div>
                    <div class="listing">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49989 13.4749L4.02489 9.99987L2.84155 11.1749L7.49989 15.8332L17.4999 5.8332L16.3249 4.6582L7.49989 13.4749Z"
                                fill="#41A5F5" />
                        </svg>
                        <p>You only pay for your van when its cover starts</p>
                    </div>
                    <div class="learn-more-cta" onclick="window.showVanLearnMoreModal()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                                fill="#41A5F5" />
                        </svg>
                        <span>
                            Learn more about our van insurance
                        </span>
                    </div>
                </div>
                <p class="footer-info">*Average savings versus identical single policies. Date from Jan 24 -Jun 24.​</p>
                <div class="footer-cta">
                    <button onclick="document.querySelector('.opt-van-details-container').remove()" style="text-transform: uppercase;" class="opti-van-tile-cancel">
                        Cancel
                    </button>
                    <a href="https://quote.admiral.com/Admiral/addvan/van" style="text-transform: uppercase;" class="opti-van-tile-continue">Continue</a>
                </div>
            </div>
        </div>
    </div>`);

        const existing_heading = document.querySelector('.opt-van-details-container .opti-van-heading');
        const dynamic_heading = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-van-savings"]').cloneNode(true);
        dynamic_heading.classList.add('opti-van-heading');
        existing_heading.parentNode.replaceChild(dynamic_heading, existing_heading);

        const existing_footer = document.querySelector('.opt-van-details-container .footer-info');
        const dynamic_footer = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-van-disclaimer"]').cloneNode(true);
        dynamic_footer.classList.add('footer-info');
        existing_footer.parentNode.replaceChild(dynamic_footer, existing_footer);
    };

    window.showVanLearnMoreModal = () => {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opt-van-container"
        style="display: flex; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px;">
        <style>
            .opt-van-close {
                position: absolute;
                right: 10px;
                top: 10px;
                cursor: pointer;
            }
    
            .opt-van-modal {
                max-width: 351px;
                background-color: white;
                margin: auto;
                padding: 16px;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }
    
            .opt-van-modal-body {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
    
            .opt-van-modal-body svg {
                margin-bottom: 10px;
            }
    
            .opt-van-modal-header {
                color: #0045a0;
                font-weight: bold;
                font-size: 18px;
            }
    
            .opt-van-modal-sub-header {
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                color: #656560;
                margin: 6px 0px 20px;
            }
    
            .opt-van-modal-sub-header p:first-child {
                font-weight: 600;
                font-size: 15px;
            }
    
            .opti-blue-button {
                transition: filter .2s ease-in-out;
                background: var(--btn--secondary-background);
                border-color: var(--btn--secondary-border-color);
                color: var(--btn--secondary-color);
                width: 100%;
                padding: .5em 1em;
                text-align: center;
                font-family: var(--font-family);
                border-radius: 4px;
                margin-bottom: 4px;
                cursor: pointer;
            }
    
            .opti-blue-button:hover,
            .opti-blue-button:focus {
                filter: brightness(.9) saturate(1.025) contrast(1.5);
                outline: none;
            }
        </style>
        <div class="opt-van-modal">
            <div style="" class="opt-van-close" onclick="document.querySelector('.opt-van-container').remove()">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5"></rect>
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#41A5F5"></path>
                </svg>
            </div>
            <div class="opt-van-modal-body">
                <svg width="30" height="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.99984 0.166626C4.39984 0.166626 0.666504 3.89996 0.666504 8.49996C0.666504 13.1 4.39984 16.8333 8.99984 16.8333C13.5998 16.8333 17.3332 13.1 17.3332 8.49996C17.3332 3.89996 13.5998 0.166626 8.99984 0.166626ZM9.83317 12.6666H8.1665V7.66663H9.83317V12.6666ZM9.83317 5.99996H8.1665V4.33329H9.83317V5.99996Z"
                        fill="#41A5F5"></path>
                </svg>
                <div class="opt-van-modal-header">
                    You'll need to return to this page​
                </div>
                <div class="opt-van-modal-sub-header">
                    <p>To add a van to your existing quote and receive a MultiCover discount, you’ll need to return to this
                        page after visiting our main site.​</p>
                    <p>Continue to our main site to learn more about our van insurance cover.</p>
                </div>
                <a class="opti-blue-button" style="text-transform: uppercase;" href="https://www.admiral.com/van-insurance" target="_blank">Continue to Van Insurance</a>
            </div>
        </div>
    </div>`);
    };
}
