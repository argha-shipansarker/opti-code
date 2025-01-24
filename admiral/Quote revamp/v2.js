const utils = optimizely.get('utils');

if (window.location.href.indexOf('/Admiral/quote') > -1) {
    window.setCarouselCopySlide = (slideNumber, will_auto_scroll, will_update_arrow_dot) => {

        window.currentSlide = slideNumber;

        if (window.currentSlide > window.carouselSlideCount) {
            window.currentSlide = 1;
        }

        if (will_auto_scroll) {
            const carousel = document.querySelector('.opti-quote-carousel ul.slider');
            const items = carousel.querySelectorAll('li');

            carousel.scrollTo({
                left: items[window.currentSlide - 1].offsetLeft,
                behavior: 'smooth'
            });
        }

        if (will_update_arrow_dot) {
            if (window.currentSlide === 1) {
                var prevArrow = document.querySelector('.opti-quote-carousel #previousCarouselArrow:not(.' + window.disabledArrowClass + ')');
                if (prevArrow) {
                    prevArrow.setAttribute('disabled', true);
                    prevArrow.classList.add(window.disabledArrowClass);
                }
            }
            else {
                var prevArrow = document.querySelector('.opti-quote-carousel #previousCarouselArrow.' + window.disabledArrowClass);
                if (prevArrow) {
                    prevArrow.classList.remove(window.disabledArrowClass);
                    prevArrow.removeAttribute('disabled');
                }
            }

            document.querySelectorAll('.opti-quote-carousel .arrow-dots-container .dot.' + window.disabledCircleClass).forEach(btn => {
                btn.classList.remove(window.disabledCircleClass);
                btn.removeAttribute('disabled');
            });

            var currentCircle = document.querySelector('.opti-quote-carousel .arrow-dots-container .dot:nth-child(' + (window.currentSlide + 1) + ')');
            if (currentCircle) {
                currentCircle.setAttribute('disabled', true);
                currentCircle.classList.add(window.disabledCircleClass);
            }

            if (window.currentSlide === window.carouselSlideCount) {
                var nextArrow = document.querySelector('.opti-quote-carousel #nextCarouselArrow:not(.' + window.disabledArrowClass + ')');
                if (nextArrow) {
                    nextArrow.setAttribute('disabled', true);
                    nextArrow.classList.add(window.disabledArrowClass);
                }
            }
            else {
                var nextArrow = document.querySelector('.opti-quote-carousel #nextCarouselArrow.' + window.disabledArrowClass);
                if (nextArrow) {
                    nextArrow.classList.remove(window.disabledArrowClass);
                    nextArrow.removeAttribute('disabled');
                }
            }
        }
    };

    utils.observeSelector('.adm-section:has(+#quote-summary)', function (home_car_van_section) {

        home_car_van_section.style.display = "none";

        window.disabledArrowClass = "arrow-disabled";
        window.disabledCircleClass = "dot-disabled";

        home_car_van_section.insertAdjacentHTML("beforebegin", `<div class="opti-text-carousel">
        <style>
            .opti-text-carousel .opti-text {
                display: flex;
                margin-bottom: 10px;
            }
    
            .opti-text-carousel .opti-text span {
                font-size: 16px;
                line-height: 24px;
                font-weight: 700;
                margin-left: 8px;
            }
    
            .opti-text-carousel .opti-quote-carousel {
                margin-bottom: 6px;
                -webkit-tap-highlight-color: transparent;
                -moz-tap-highlight-color: transparent;
            }

            .opti-text-carousel .opti-footer-text {
                margin-bottom: 32px;
                font-size: 16px;
                line-height: 24px;
                font-weight: 700;
                text-align: center;
                color: #25469B;
            }
    
            .opti-text-carousel .opti-quote-carousel .carousel-container {
                background-color: #FFFFFF;
            }
        </style>
        <div class="opti-text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.55032 15.0612C7.55032 13.412 8.82261 12.8865 8.82261 12.8865C8.82261 12.8865 9.46776 10.3156 9.78173 9.02735C10.0542 8.00266 10.3963 7.21438 12.5416 6.87495C12.6082 6.86697 12.6786 6.86058 12.7468 6.85339C11.2137 5.5364 9.89917 4.40709 9.89917 4.40709C9.89917 4.40709 5.24375 8.398 2.97633 10.3531C2.91604 10.405 2.86985 10.5121 2.86907 10.5943C2.86359 12.6053 2.86202 14.3632 2.86985 16.375C2.87063 16.5188 2.92779 16.6761 2.99904 16.8023C3.16032 17.0906 3.42809 17.1801 3.73736 17.1793C5.00652 17.1769 6.27646 17.1777 7.54562 17.1777C7.54719 16.4725 7.55032 15.7664 7.55032 15.0612ZM14.0371 6.74557C15.0063 6.68647 16.0508 6.6657 17.0679 6.68327C17.0679 6.62178 17.0671 6.51076 17.0679 6.41892C17.0749 5.76402 17.071 5.10911 17.071 4.45421C17.071 3.46547 17.071 1.61177 17.071 1.61177C17.071 1.61177 17.071 1 16.2207 1C15.9271 1 15.1113 1 14.8294 1C13.9901 1 13.9948 1.61177 13.9948 1.61177C13.9948 1.61177 13.9776 2.47113 13.9776 2.95752C13.9776 3.24983 13.9627 3.69069 13.9627 4.01974C13.9008 3.97262 13.7035 3.83285 13.6753 3.80809C12.7405 3.00065 11.8041 2.194 10.87 1.38495C10.2797 0.873811 9.48029 0.871415 8.88916 1.38176C8.25576 1.92884 7.62157 2.47353 6.9866 3.01902C4.73562 4.95657 2.48386 6.89332 0.233659 8.83008C-0.0560321 9.08006 -0.073257 9.26615 0.16476 9.56245C0.382419 9.8316 0.600079 10.0991 0.817739 10.3667C0.997818 10.5879 1.23035 10.6071 1.44801 10.4194C3.87907 8.32612 9.49517 3.49023 9.87411 3.16437C9.89839 3.18434 11.9168 4.92223 14.0371 6.74557ZM21.9519 21.9992C23.0128 21.9992 23.3408 21.8978 23.3408 20.3436C23.3416 20.0002 23.3408 19.6575 23.3408 19.3141V19.2071C23.3659 19.2007 23.997 19.0929 23.997 18.8756C23.997 17.7479 24.0056 16.6186 23.9938 15.4917C23.9938 14.0485 22.8766 13.4008 22.8766 13.4008C22.8766 13.4008 22.3183 10.9913 22.0325 9.78927C21.7922 8.77736 21.331 8.12805 19.6571 7.88606C17.7592 7.64566 14.9962 7.64566 13.0388 7.88845C11.1738 8.20233 10.8763 8.9315 10.6391 9.87792C10.3658 11.0679 9.80522 13.4439 9.80522 13.4439C9.80522 13.4439 8.69891 13.9295 8.69891 15.4542C8.69891 16.6018 8.68951 17.7503 8.69734 18.898C8.69891 19.0857 9.26733 19.2007 9.31274 19.2039C9.31274 19.6032 9.31039 20.6231 9.31352 21.0089C9.31979 21.9752 9.66507 22 10.7502 22C11.862 22 12.1509 21.8986 12.1509 20.9514C12.1509 20.5848 12.1509 19.7214 12.1509 19.3421C14.7409 19.6567 17.9823 19.6567 20.5019 19.3421V19.4786C20.5019 19.8141 20.5042 20.0129 20.5011 20.3484C20.5019 21.8986 20.7007 21.9992 21.9519 21.9992ZM21.5291 14.955C22.258 14.959 22.8554 15.5891 22.8546 16.3678C22.8538 17.1569 22.2619 17.7823 21.5252 17.7871C20.7086 17.7919 20.2192 17.0028 20.1965 16.4285C20.1683 15.7169 20.7368 14.9502 21.5291 14.955ZM12.3177 9.75812C12.6184 8.80132 20.2145 8.89397 20.3954 9.72777C20.8252 11.2652 21.1102 13.0909 21.1149 13.1157C18.3895 12.7659 14.2907 12.7938 11.6044 13.1157C11.6044 13.1157 11.873 11.1725 12.3177 9.75812ZM9.68229 16.4206C9.65646 15.7329 10.2202 14.943 11.0227 14.955C11.7485 14.9654 12.342 15.5939 12.3396 16.363C12.3373 17.1561 11.7493 17.7799 11.0149 17.7871C10.1771 17.795 9.70265 16.9684 9.68229 16.4206Z"
                    fill="#656560" />
            </svg>
            <span>Bundle your insurance to save more.</span>
        </div>
        <div class="opti-quote-carousel">
            <style>
                .opti-quote-carousel .carousel-container {
                    padding: 0;
                    margin: 0;
                }
    
                .opti-quote-carousel .carousel-container .carousel.carousel-slider {
                    position: relative;
                    margin: 0;
                    overflow: hidden;
                }
    
                .opti-quote-carousel .carousel-container .carousel.carousel-slider .slider-wrapper {
                    overflow: hidden;
                    margin: auto;
                    width: 100%;
                    transition: height .15s ease-in;
                }
    
                .opti-quote-carousel .carousel-container .carousel.carousel-slider .slider-wrapper .slider {
                    list-style: none;
                    margin: 0;
                    display: flex;
                    transition: all .35s ease-in-out;
                    padding: 0;
                    position: relative;
                    width: 100%;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                    scrollbar-width: none;
                    overflow-x: auto;
                    -ms-overflow-style: none;
                }

                .opti-quote-carousel .carousel-container .carousel.carousel-slider .slider-wrapper .slide {
                    scroll-snap-align: start;
                }
    
                .opti-quote-carousel .arrow-dots-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    margin-top: 16px;
                }
    
                .opti-quote-carousel .arrow-dots-container .dot {
                    width: 12px;
                    height: 12px;
                    padding: 0;
                    border-radius: 50%;
                    border: 6px solid #CED9E5;
                    cursor: pointer;
                }
    
                .opti-quote-carousel .arrow-dots-container .dot.dot-disabled {
                    border-color: #006DCC;
                    cursor: unset;
                }
    
                .opti-quote-carousel .arrow-dots-container .arrow {
                    border: 0;
                    line-height: 0;
                    cursor: pointer;
                }
    
                .opti-quote-carousel .arrow-dots-container .arrow.arrow-disabled {
                    cursor: unset;
                }
    
                .opti-quote-carousel .arrow-dots-container .arrow.arrow-disabled svg path {
                    fill: #CED9E5;
                }
            </style>
            <div class="carousel-container">
                <div class="carousel-root">
                    <div class="carousel carousel-slider" style="width: 100%;">
                        <div class="slider-wrapper">
                            <ul class="slider" style="transform: translate3d(0%, 0px, 0px); transition-duration: 500ms;">
                                <style>
                                    .opti-slide-data {
                                        padding: 16px;
                                    }
    
                                    .opti-slide-content {
                                        display: flex;
                                    }
    
                                    .opti-slide-content.van {
                                        align-items: center;
                                    }
    
                                    .opti-slide-content .description {
                                        flex-basis: 61%;
                                    }
    
                                    .opti-slide-content .description .heading {
                                        color: #25469B;
                                        margin-bottom: 4px;
                                        line-height: 24px;
                                        font-weight: 700;
                                    }
    
                                    .opti-slide-data.car .description .heading {
                                        margin-bottom: 16px;
                                    }
    
                                    .opti-slide-content.van .description .heading {
                                        font-size: 18px;
                                    }
    
                                    .opti-slide-content .description .heading span {
                                        font-size: 32px;
                                        line-height: 36px;
                                        display: block;
                                    }

                                    .opti-slide-data.desktop-view.home .description .heading span {
                                        display: unset;
                                    }
    
                                    .opti-slide-content.van .description .heading span,
                                    .opti-slide-data.car .description .heading span {
                                        font-size: 24px;
                                        line-height: 30px;
                                        display: block;
                                    }

                                    .opti-slide-content.van .description .heading span[data-test="add-car-van-banner-van-text"]{
                                        font-size: 18px;
                                        line-height: 24px;
                                    }
    
                                    .opti-slide-content img {
                                        flex-basis: 40%;
                                        width: 240px;
                                        height: 181.24px;
                                    }
    
                                    .opti-slide-content.van img {
                                        flex-basis: 70%;
                                        height: 112px;
                                    }
    
                                    .opti-slide-data .home-learn-more-cta,
                                    .opti-slide-data .car-learn-more-cta,
                                    .opti-slide-data .van-learn-more-cta {
                                        font-size: 14px;
                                        line-height: 21px;
                                        font-weight: 400;
                                        display: flex;
                                        align-items: center;
                                        cursor: pointer;
                                    }
    
                                    .opti-slide-data .van-learn-more-cta {
                                        margin-bottom: 8px;
                                    }
    
                                    .opti-slide-data .home-learn-more-cta span,
                                    .opti-slide-data .car-learn-more-cta span,
                                    .opti-slide-data .van-learn-more-cta span {
                                        color: #006DCC;
                                        margin-left: 9px;
                                    }
    
                                    .opti-slide-data .footer-info {
                                        font-size: 12px;
                                        line-height: 18px;
                                        font-weight: 400;
                                        max-width: 377px;
                                        margin-top: -19px;
                                        color: #656560;
    
                                    }

                                    .opti-slide-data.desktop-view.home .footer-info {
                                        max-width: 470px;
                                    }
    
                                    .opti-slide-data .footer-info.van {
                                        font-size: 12px;
                                        line-height: 18px;
                                        font-weight: 400;
                                        max-width: unset;
                                        margin-top: 0px;
                                        color: #656560;
                                    }
    
                                    .opti-green-button {
                                        transition: filter .2s ease-in-out;
                                        background: var(--btn--primary-background);
                                        border-color: var(--btn--primary-border-color);
                                        color: var(--btn--primary-color);
                                        width: 100%;
                                        max-width: 288px;
                                        height: 44px;
                                        padding: .5em 1em;
                                        text-align: center;
                                        font-family: var(--font-family);
                                        border-radius: 4px;
                                        margin-bottom: 4px;
                                        cursor: pointer;
                                        display: block;
                                    }
    
                                    .opti-green-button:hover,
                                    .opti-green-button:focus {
                                        filter: brightness(.9) saturate(1.025) contrast(1.5);
                                        outline: none;
                                    }
    
                                    .opti-blue-button {
                                        transition: filter .2s ease-in-out;
                                        background: var(--btn--secondary-background);
                                        border-color: var(--btn--secondary-border-color);
                                        color: var(--btn--secondary-color);
                                        width: 100%;
                                        max-width: 288px;
                                        height: 44px;
                                        padding: .5em 1em;
                                        text-align: center;
                                        font-family: var(--font-family);
                                        border-radius: 4px;
                                        margin-bottom: 4px;
                                        cursor: pointer;
                                        display: block;
                                    }
    
                                    .opti-blue-button:hover,
                                    .opti-blue-button:focus {
                                        filter: brightness(.9) saturate(1.025) contrast(1.5);
                                        outline: none;
                                    }
    
                                    .opti-slide-data.mobile-view .opti-slide-content {
                                        align-items: center;
                                        margin-bottom: 10px;
                                        justify-content: space-between;
                                    }
    
                                    .opti-slide-data.mobile-view .opti-slide-content .description {
                                        flex-basis: unset;
                                        padding-left: 10px;
                                    }
    
                                    .opti-slide-data.mobile-view .opti-slide-content .description .heading,
                                    .opti-slide-data.mobile-view .opti-slide-content .description .heading span[data-test="add-car-van-banner-van-text"] {
                                        font-weight: 400;
                                    }
    
                                    .opti-slide-data.mobile-view .opti-slide-content .description .heading span {
                                        display: unset;
                                        font-size: unset;
                                        font-weight: 700;
                                        line-height: 24px;
                                    }
    
                                    .opti-slide-data.mobile-view .opti-green-button,
                                    .opti-slide-data.mobile-view .opti-blue-button {
                                        max-width: unset;
                                    }
    
                                    .opti-slide-data.mobile-view .footer-info {
                                        margin-top: 10px;
                                    }
    
                                    .opti-slide-data.mobile-view.home .opti-slide-content img {
                                        width: 62px;
                                        height: 46px;
                                        flex-basis: unset;
                                    }
    
                                    .opti-slide-data.mobile-view.car .opti-slide-content img {
                                        width: 61px;
                                        height: 44px;
                                        flex-basis: unset;
                                    }
    
                                    .opti-slide-data.mobile-view.van .opti-slide-content img {
                                        width: 101px;
                                        height: 48px;
                                        flex-basis: unset;
                                    }
    
                                    .opti-slide-data.desktop-view {
                                        display: block;
                                    }
    
                                    .opti-slide-data.mobile-view {
                                        display: none;
                                    }
    
                                    @media (max-width: 600px) {
                                        .opti-slide-data.desktop-view {
                                            display: none;
                                        }
    
                                        .opti-slide-data.mobile-view {
                                            display: block;
                                        }
                                    }
                                </style>
                                <li class="slide" style="min-width: 100%;">
                                    <div class="opti-slide-data desktop-view home">
                                        <div class="opti-slide-content">
                                            <div class="description">
                                                <p class="heading">
                                                    Add your home from £123* and
                                                    <span>SAVE £78 </span>
                                                    on your Car Insurance.
                                                </p>
                                                <a class="opti-green-button"
                                                    href='https://quote.admiral.com/Admiral/multicover/homedetails' style="text-transform: uppercase;">
                                                    Add A Home
                                                </a>
                                                <div class="home-learn-more-cta" onclick="window.showHomeModal()">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                                                            fill="#41A5F5" />
                                                    </svg>
                                                    <span>
                                                        Learn more about our home insurance
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src="//cdn.optimizely.com/img/25237771658/cead212b236e427c93663b5d605cc178.png" />
                                        </div>
                                        <p class="footer-info">
                                            *Your home price, for our lowest level of cover, is based on assumptions. Price
                                            may
                                            change depending
                                            on your cover needs.
                                        </p>
                                    </div>
    
                                    <div class="opti-slide-data mobile-view home">
                                        <div class="opti-slide-content">
                                            <img
                                                src="//cdn.optimizely.com/img/25237771658/cead212b236e427c93663b5d605cc178.png" />
                                            <div class="description ">
                                                <p class="heading">
                                                    Add your home from £123* and
                                                    <span>SAVE £78 </span>
                                                    on your Car Insurance.
                                                </p>
    
                                            </div>
                                        </div>
                                        <a class="opti-green-button"
                                            href='https://quote.admiral.com/Admiral/multicover/homedetails' style="text-transform: uppercase;">
                                            Add A Home
                                        </a>
                                        <div class="home-learn-more-cta" onclick="window.showHomeModal()">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                                                    fill="#41A5F5" />
                                            </svg>
                                            <span>
                                                Learn more about our home insurance
                                            </span>
                                        </div>
                                        <p class="footer-info">
                                            *Your home price, for our lowest level of cover, is based on assumptions. Price
                                            may
                                            change depending
                                            on your cover needs.
                                        </p>
                                    </div>
                                </li>
                                <li class="slide" style="min-width: 100%;">
                                    <div class="opti-slide-data desktop-view car">
                                        <div class="opti-slide-content">
                                            <div class="description">
                                                <p class="heading">
                                                    Add another car from its renewal
                                                    <span>SAVE £233* on average</span>
                                                    Pay for it later
                                                </p>
                                                <a class="opti-green-button"
                                                    href="https://quote.admiral.com/Admiral/addcar/car" style="text-transform: uppercase;">
                                                    Add a Car
                                                </a>
                                            </div>
                                            <img
                                                src="//cdn.optimizely.com/img/25237771658/8677169b3c804d178b5f113f0d0de852.png" />
                                        </div>
                                        <p class="footer-info">
                                            *Average savings versus identical single policies. Date from Jan 24 -Jun 24.
                                        </p>
                                    </div>
    
                                    <div class="opti-slide-data mobile-view car">
                                        <div class="opti-slide-content">
                                            <img
                                                src="//cdn.optimizely.com/img/25237771658/8677169b3c804d178b5f113f0d0de852.png" />
                                            <div class="description">
                                                <p class="heading">
                                                    Add another car from its renewal
                                                    <span>SAVE £233* on average</span>
                                                    Pay for it later
                                                </p>
                                            </div>
                                        </div>
                                        <a class="opti-green-button" href="https://quote.admiral.com/Admiral/addcar/car" style="text-transform: uppercase;">
                                            Add a Car
                                        </a>
                                        <p class="footer-info">
                                            *Average savings versus identical single policies. Date from Jan 24 -Jun 24.
                                        </p>
                                    </div>
                                </li>
    
                                <li class="slide" style="min-width: 100%;">
                                    <div class="opti-slide-data desktop-view van">
                                        <div class="opti-slide-content van">
                                            <img src="//cdn.optimizely.com/img/25237771658/3b01d988e2dc45c1b09144b63da086ee.png
                                        " />
                                            <div class="description">
                                                <p class="heading">
                                                    <span> SAVE £105* on average</span>
                                                    Add a van now to get a discount
                                                </p>
                                                <a class="opti-blue-button"
                                                    href="https://quote.admiral.com/Admiral/addvan/van" style="text-transform: uppercase;">
                                                    Add a Van
                                                </a>
                                                <div class="van-learn-more-cta" onclick="window.showVanModal()">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                                                            fill="#41A5F5" />
                                                    </svg>
                                                    <span>
                                                        Learn more about our van insurance
                                                    </span>
                                                </div>
                                                <p class="footer-info van">
                                                    *Average savings versus identical single policies. Date from Jan 24
                                                    -Jun 24.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="opti-slide-data mobile-view van">
                                        <div class="opti-slide-content van">
                                            <img src="//cdn.optimizely.com/img/25237771658/3b01d988e2dc45c1b09144b63da086ee.png
                                        " />
                                            <div class="description">
                                                <p class="heading">
                                                    <span> SAVE £105* on average</span>
                                                    Add a van now to get a discount
                                                </p>
                                            </div>
                                        </div>
                                        <a class="opti-blue-button" href="https://quote.admiral.com/Admiral/addvan/van" style="text-transform: uppercase;">
                                            Add a Van
                                        </a>
                                        <div class="van-learn-more-cta" onclick="window.showVanModal()">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                                                    fill="#41A5F5" />
                                            </svg>
                                            <span>
                                                Learn more about our van insurance
                                            </span>
                                        </div>
                                        <p class="footer-info van">
                                            *Average savings versus identical single policies. Date from Jan 24 -Jun 24.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrow-dots-container">
                <button id="previousCarouselArrow" type="button" class="arrow arrow-disabled" disabled="true">
                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.547 14.12L4.44033 8L10.547 1.88L8.66699 0L0.666992 8L8.66699 16L10.547 14.12Z"
                            fill="#006DCC" />
                    </svg>
                </button>
                <button type="button" class="dot dot-disabled" disabled="">
                </button>
                <button type="button" class="dot"></button>
                <button type="button" class="dot"></button>
                <button id="nextCarouselArrow" type="button" class="arrow">
                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.453125 14.12L6.55979 8L0.453125 1.88L2.33312 0L10.3331 8L2.33312 16L0.453125 14.12Z"
                            fill="#006DCC" />
                    </svg>
                </button>
            </div>
        </div>
        <p class="opti-footer-text">More offers available</p>
    </div>`);

        // dynamic home heading and footer
        const existing_heading_home_desktop = document.querySelector('.opti-slide-data.desktop-view.home .description .heading');
        const existing_heading_home_mobile = document.querySelector('.opti-slide-data.mobile-view.home .description .heading');

        const dynamic_heading_home_desktop = document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-text"]').cloneNode(true);
        const dynamic_heading_home_mobile = document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-text"]').cloneNode(true);

        dynamic_heading_home_mobile.querySelectorAll('br').forEach(br => br.remove());

        dynamic_heading_home_desktop.classList.add('heading');
        dynamic_heading_home_mobile.classList.add('heading');

        existing_heading_home_desktop.parentNode.replaceChild(dynamic_heading_home_desktop, existing_heading_home_desktop);
        existing_heading_home_mobile.parentNode.replaceChild(dynamic_heading_home_mobile, existing_heading_home_mobile);

        const existing_footer_home_desktop = document.querySelector('.opti-slide-data.desktop-view.home .footer-info');
        const existing_footer_home_mobile = document.querySelector('.opti-slide-data.mobile-view.home .footer-info');

        const dynamic_footer_home_desktop = document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-footer"]').cloneNode(true);
        const dynamic_footer_home_mobile = document.querySelector('.adm-section:has(+#quote-summary) [data-test="multicover-promo-footer"]').cloneNode(true);

        dynamic_footer_home_desktop.classList.add('footer-info');
        dynamic_footer_home_mobile.classList.add('footer-info');

        existing_footer_home_desktop.parentNode.replaceChild(dynamic_footer_home_desktop, existing_footer_home_desktop);
        existing_footer_home_mobile.parentNode.replaceChild(dynamic_footer_home_mobile, existing_footer_home_mobile);

        // dynamic car heading and footer
        const existing_heading_car_desktop = document.querySelector('.opti-slide-data.desktop-view.car .description .heading');
        const existing_heading_car_mobile = document.querySelector('.opti-slide-data.mobile-view.car .description .heading');

        const dynamic_heading_car_desktop = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-car-header"] p.adm-text-helper').cloneNode(true);
        const dynamic_heading_car_mobile = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-car-header"] p.adm-text-helper').cloneNode(true);

        dynamic_heading_car_mobile.querySelectorAll('br').forEach(br => br.remove());
        dynamic_heading_car_desktop.querySelectorAll('br').forEach(br => br.remove());

        dynamic_heading_car_desktop.classList.add('heading');
        dynamic_heading_car_mobile.classList.add('heading');

        existing_heading_car_desktop.parentNode.replaceChild(dynamic_heading_car_desktop, existing_heading_car_desktop);
        existing_heading_car_mobile.parentNode.replaceChild(dynamic_heading_car_mobile, existing_heading_car_mobile);

        const existing_footer_car_desktop = document.querySelector('.opti-slide-data.desktop-view.car .footer-info');
        const existing_footer_car_mobile = document.querySelector('.opti-slide-data.mobile-view.car .footer-info');

        const dynamic_footer_car_desktop = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-car-footer"]').cloneNode(true);
        const dynamic_footer_car_mobile = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-car-footer"]').cloneNode(true);

        dynamic_footer_car_desktop.classList.add('footer-info');
        dynamic_footer_car_mobile.classList.add('footer-info');

        existing_footer_car_desktop.parentNode.replaceChild(dynamic_footer_car_desktop, existing_footer_car_desktop);
        existing_footer_car_mobile.parentNode.replaceChild(dynamic_footer_car_mobile, existing_footer_car_mobile);

        // dynamic van heading and footer
        const existing_heading_van_desktop = document.querySelector('.opti-slide-data.desktop-view.van .description .heading');
        const existing_heading_van_mobile = document.querySelector('.opti-slide-data.mobile-view.van .description .heading');

        const dynamic_heading_van_desktop = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-van-savings"]').cloneNode(true);
        const dynamic_heading_van_mobile = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-van-savings"]').cloneNode(true);

        dynamic_heading_van_mobile.querySelectorAll('br').forEach(br => br.remove());
        dynamic_heading_van_desktop.querySelectorAll('br').forEach(br => br.remove());

        dynamic_heading_van_desktop.classList.add('heading');
        dynamic_heading_van_mobile.classList.add('heading');

        existing_heading_van_desktop.parentNode.replaceChild(dynamic_heading_van_desktop, existing_heading_van_desktop);
        existing_heading_van_mobile.parentNode.replaceChild(dynamic_heading_van_mobile, existing_heading_van_mobile);

        const existing_footer_van_desktop = document.querySelector('.opti-slide-data.desktop-view.van .footer-info');
        const existing_footer_van_mobile = document.querySelector('.opti-slide-data.mobile-view.van .footer-info');

        const dynamic_footer_van_desktop = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-van-disclaimer"]').cloneNode(true);
        const dynamic_footer_van_mobile = document.querySelector('.adm-section:has(+#quote-summary) [data-test="add-car-van-banner-van-disclaimer"]').cloneNode(true);

        dynamic_footer_van_desktop.classList.add('footer-info', 'van');
        dynamic_footer_van_mobile.classList.add('footer-info', 'van');

        existing_footer_van_desktop.parentNode.replaceChild(dynamic_footer_van_desktop, existing_footer_van_desktop);
        existing_footer_van_mobile.parentNode.replaceChild(dynamic_footer_van_mobile, existing_footer_van_mobile);

        window.currentSlide = 1;
        let carouselInterval;

        var all_slides = document.querySelectorAll('.opti-quote-carousel .slider .slide');
        if (all_slides) {
            window.carouselSlideCount = all_slides.length;
        }

        var prevArrow = document.querySelector('.opti-quote-carousel #previousCarouselArrow');
        if (prevArrow) {
            prevArrow.addEventListener('click', () => {
                window.setCarouselCopySlide(window.currentSlide - 1, true, false);
            });
        }
        var nextArrow = document.querySelector('.opti-quote-carousel #nextCarouselArrow');
        if (nextArrow) {
            nextArrow.addEventListener('click', () => {
                window.setCarouselCopySlide(window.currentSlide + 1, true, false);
            });
        }

        document.querySelectorAll('.opti-quote-carousel .arrow-dots-container .dot').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                window.setCarouselCopySlide(index + 1, true, false);
            });
        });

        function startCarouselInterval() {
            clearInterval(carouselInterval);

            carouselInterval = setInterval(() => {
                window.setCarouselCopySlide(window.currentSlide + 1, true, false);
            }, 10000);
        }


        const items = document.querySelectorAll('.opti-quote-carousel .slide');
        let currentItemIndex = 0;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        currentItemIndex = Array.from(items).indexOf(entry.target);
                        window.setCarouselCopySlide(currentItemIndex + 1, false, true);
                        startCarouselInterval()
                    } else {
                    }
                });
            },
            {
                root: document.querySelector('.opti-quote-carousel .slider'),
                threshold: 0.5 // Adjust this threshold as needed
            }
        );

        items.forEach((item) => observer.observe(item));

    });

    window.showHomeModal = () => {
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

    window.showVanModal = () => {
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