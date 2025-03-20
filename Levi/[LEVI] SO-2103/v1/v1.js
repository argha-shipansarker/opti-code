const utils = optimizely.get('utils');

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

utils.observeSelector('section[section_label="LINEN+ DENIM "]', function (hero_video_section) {

    hero_video_section.style.display = "none";

    window.disabledArrowClass = "arrow-disabled";
    window.disabledCircleClass = "dot-disabled";

    hero_video_section.insertAdjacentHTML("afterend", `<div class="opti-quote-carousel">
    <style>
        .opti-quote-carousel {
            position: relative;
            margin-top: 15px;
        }

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
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 20px;
            padding: 10px 14.87px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 20px;
        }

        .opti-quote-carousel .arrow-dots-container .dot {
            width: 8px;
            height: 8px;
            padding: 0;
            border-radius: 50%;
            border: 1px solid #B3B3B3;
            background-color: #FFFFFF;
            cursor: pointer;
            margin-right: 16px;
        }

        .opti-quote-carousel .arrow-dots-container .dot.dot-disabled {
            background-color: #403E3F;
            cursor: unset;
        }

        .opti-quote-carousel .arrow-dots-container .arrow {
            border: 0;
            line-height: 0;
            cursor: pointer;
            background: transparent;
            padding: 0;
        }

        .opti-quote-carousel .arrow-dots-container #previousCarouselArrow {
            margin-right: 23px;
        }

        .opti-quote-carousel .arrow-dots-container #nextCarouselArrow {
            margin-left: 7px;
        }

        .opti-quote-carousel .arrow-dots-container .arrow.arrow-disabled {
            cursor: unset;
        }
    </style>
    <div class="carousel-container">
        <div class="carousel-root">
            <div class="carousel carousel-slider" style="width: 100%;">
                <div class="slider-wrapper">
                    <ul class="slider" style="transform: translate3d(0%, 0px, 0px); transition-duration: 500ms;">
                        <style>
                            .opti-quote-carousel .opti-slide-data {
                                position: relative;
                            }

                            .opti-quote-carousel .opti-slide-data .description {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                color: #FFFFFF;
                                width: 925px;
                            }

                            .opti-quote-carousel .opti-slide-data .description .eye {
                                font-size: 15.56px;
                                font-weight: 700;
                                line-height: 150%;
                                letter-spacing: 2px;
                                margin-bottom: 23.33px;
                            }

                            .opti-quote-carousel .opti-slide-data .description .head {
                                font-size: 54.44px;
                                font-weight: 700;
                                line-height: 120%;
                                letter-spacing: 4px;
                                font-family: InterstateWGL-Black, Helvetica, Arial, sans-serif;
                                margin-bottom: 15.56px;
                            }

                            .opti-quote-carousel .opti-slide-data .description .sub {
                                font-size: 15.56px;
                                line-height: 150%;
                                letter-spacing: 2px;
                                font-weight: 400;
                                margin: 0 auto 23.33px;
                                max-width: 615px;
                            }

                            .opti-quote-carousel .opti-slide-data .description .all-cta {
                                display: flex;
                                justify-content: center;
                                gap: 15.56px;
                            }

                            .opti-quote-carousel .opti-slide-data .description .all-cta a {
                                font-weight: 700;
                                line-height: 150%;
                                letter-spacing: 2px;
                                font-size: 15.56px;
                                padding: 11.67px 31.11px;
                                background-color: #FFFFFF;
                                border-radius: 1.94px;
                                color: #000000;
                            }

                            .opti-quote-carousel .opti-slide-data .description .all-cta a:hover {
                                color: #000000;
                            }

                            .opti-quote-carousel .opti-slide-data.linen-denim img {
                                width: 100%;
                            }

                            .opti-quote-carousel .opti-slide-data.spring-new-arrivals img {
                                width: 100%;
                            }

                            .opti-quote-carousel .opti-slide-data.find-your-perfect-fit img {
                                width: 100%;
                            }

                            .opti-quote-carousel .opti-slide-data img.mobile {
                                display: none;
                            }

                            .opti-quote-carousel .opti-slide-data img.desktop {
                                display: block;
                            }

                            @media (max-width: 1024px) {
                                .opti-quote-carousel .opti-slide-data img.mobile {
                                    display: block;
                                }

                                .opti-quote-carousel .opti-slide-data img.desktop {
                                    display: none;
                                }

                                .opti-quote-carousel .opti-slide-data .description {
                                    width: 84%;
                                }

                                .opti-quote-carousel .opti-slide-data .description .eye {
                                    font-size: 14px;
                                    font-weight: 700;
                                    line-height: 20px;
                                    letter-spacing: 0px;
                                    margin-bottom: 24px;
                                }

                                .opti-quote-carousel .opti-slide-data .description .head {
                                    font-size: 32px;
                                    font-weight: 700;
                                    line-height: 32px;
                                    letter-spacing: 2px;
                                    margin-bottom: 16px;
                                }

                                .opti-quote-carousel .opti-slide-data .description .sub {
                                    font-size: 16px;
                                    line-height: 24px;
                                    letter-spacing: 0px;
                                    font-weight: 400;
                                    margin: 0 0 24px;
                                }

                                .opti-quote-carousel .opti-slide-data .description .all-cta {
                                    flex-direction: column;
                                    gap: 16px;
                                }
                            }
                        </style>
                        <li class="slide" style="min-width: 100%;">

                            <div class="opti-slide-data linen-denim">
                                <img class="desktop"
                                    src="https://cdn.optimizely.com/img/21017440049/429fa762fb3e4a0c85b637ffe1fe5730.jpg"
                                    alt="">

                                <img class="mobile"
                                    src="https://cdn.optimizely.com/img/21017440049/a89806f4357d468d855822711071653a.jpg"
                                    alt="">

                                <div class="description">
                                    <p class="eye">Introducing</p>
                                    <p class="head">LINEN+ DENIM</p>
                                    <p class="sub">Your favourite fits are ready for spring—thanks to lightweight
                                        fabrics and our newest fabric innovation Linen+ Denim.</p>
                                    <div class="all-cta">
                                        <a href="/c/levi_men_collections_linen_denim">Shop Men</a>
                                        <a href="/c/levi_women_collections_linen_denim">Shop Women</a>
                                        <a href="/features/linen-denim">Learn More</a>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li class="slide" style="min-width: 100%;">

                            <div class="opti-slide-data spring-new-arrivals">
                                <img class="desktop"
                                    src="https://cdn.optimizely.com/img/21017440049/76b06169f73c4a02bd06ccbce9c9391a.jpg"
                                    alt="">

                                <img class="mobile"
                                    src="https://cdn.optimizely.com/img/21017440049/30b77ca3466e4bc2a991c4ed4c542c6f.jpg"
                                    alt="">

                                <div class="description">
                                    <p class="head">SPRING NEW ARRIVALS</p>
                                    <p class="sub">Fresh styles, new icons and best-selling fits to get you ready for a
                                        new season.</p>
                                    <div class="all-cta">
                                        <a href="/c/levi_clothing_men_new_arrivals">Shop Men</a>
                                        <a href="/c/levi_clothing_women_new_arrivals">Shop Women</a>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li class="slide" style="min-width: 100%;">

                            <div class="opti-slide-data find-your-perfect-fit">
                                <img class="desktop"
                                    src="https://cdn.optimizely.com/img/21017440049/493a42322aaa41c1a9999e5bd0e01a62.jpg"
                                    alt="">

                                <img class="mobile"
                                    src="https://cdn.optimizely.com/img/21017440049/d4dcb51300f94678b896cffaa6a14459.jpg"
                                    alt="">

                                <div class="description">
                                    <p class="eye">Find your perfect fit </p>
                                    <p class="head">JEANS FIT GUIDE</p>
                                    <p class="sub">Here, we breakdown exactly what makes each fit unique.</p>
                                    <div class="all-cta">
                                        <a href="/features/men-jeans">Fit Guide Men</a>
                                        <a href="/features/women-jeans">Fit Guide Women</a>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="arrow-dots-container">
        <button id="previousCarouselArrow" type="button" class="arrow arrow-disabled" disabled="true">
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.7747 0.225302C10.4743 -0.0751008 9.98724 -0.0751008 9.68684 0.225302L1.54393 8.36821C0.642718 9.26942 0.642718 10.7306 1.54393 11.6318L9.68684 19.7747C9.98724 20.0751 10.4743 20.0751 10.7747 19.7747C11.0751 19.4743 11.0751 18.9872 10.7747 18.6868L2.63179 10.5439C2.33138 10.2435 2.33138 9.75648 2.63179 9.45607L10.7747 1.31316C11.0751 1.01276 11.0751 0.525706 10.7747 0.225302Z"
                    fill="black" />
            </svg>
        </button>
        <button type="button" class="dot dot-disabled" disabled="">
        </button>
        <button type="button" class="dot"></button>
        <button type="button" class="dot"></button>
        <button id="nextCarouselArrow" type="button" class="arrow">
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.225302 0.225302C0.525706 -0.0751008 1.01276 -0.0751008 1.31316 0.225302L9.45607 8.36821C10.3573 9.26942 10.3573 10.7306 9.45607 11.6318L1.31316 19.7747C1.01276 20.0751 0.525706 20.0751 0.225302 19.7747C-0.0751008 19.4743 -0.0751008 18.9872 0.225302 18.6868L8.36821 10.5439C8.66862 10.2435 8.66862 9.75648 8.36821 9.45607L0.225302 1.31316C-0.0751008 1.01276 -0.0751008 0.525706 0.225302 0.225302Z"
                    fill="black" />
            </svg>
        </button>
    </div>
</div>`);

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
            // window.setCarouselCopySlide(window.currentSlide + 1, true, false);
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
                    startCarouselInterval();
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