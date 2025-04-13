const utils = optimizely.get('utils');

if (window.location.pathname == '/Admiral/cover') {

    utils.observeSelector('.adm-navbar__wrap .adm-navbar__nav', function (right_nav) {
        right_nav.insertAdjacentHTML("beforeend", `<div class="opti-quote-basket-dd-container">
    <style>
        .opti-quote-basket-dd-container {
            position: relative;
        }

        .opti-quote-basket-dd-container .dd-panel {
            position: absolute;
            min-height: 200px;
            background: white;
        }

        .opti-quote-basket-dd-container .dd-panel.hide {
            display: none;
        }

        .opti-quote-basket-dd-container .dd-panel.show {
            display: block;
        }
    </style>
    <div class="dd-label">
        <p class="lable">Your Quote</p>
    </div>
    <div class="dd-panel hide">
            argha
    </div>
</div>`)

        const basket_container_label = document.querySelector('.opti-quote-basket-dd-container .dd-label');
        if (basket_container_label) {
            basket_container_label.addEventListener('click', function () {
                const basket_container_panel = document.querySelector('.opti-quote-basket-dd-container .dd-panel');

                if (window.location.pathname == '/Admiral/cover') {
                    const selected_cover = document.querySelector('eui-motor-tier-select > adm-wrap');
                    if (selected_cover) {
                        let cover_name = selected_cover.querySelector('h3[data-test="tier-heading"]');
                        console.warn("cover_name", cover_name);
                        let cover_image = selected_cover.querySelector('.adm-cover-level-footer__logo img');
                        console.warn("cover_image", cover_image);
                        let cover_price = selected_cover.querySelector('adm-cover-level-footer-price');
                        console.warn("cover_price", cover_price);

                        const cover_benefits = selected_cover.querySelectorAll('adm-card-section-content adm-details-item span[data-test="benefit-description"]');
                        // console.warn("cover_benefits", cover_benefits)

                        cover_benefits.forEach(el => {
                            const text = el.innerText.trim().toLowerCase();
                            // console.warn("text", text)
                            if (text === 'motor legal protection' || text === 'roadside assistance breakdown cover') {
                                console.warn("cover_benefits", text);
                            }
                        });
                    }
                }


                if (basket_container_panel.classList.contains("hide")) {
                    basket_container_panel.classList.remove("hide");
                    basket_container_panel.classList.add("show");
                } else {
                    basket_container_panel.classList.remove("show");
                    basket_container_panel.classList.add("hide");
                }
            })
        }
    });

    utils.observeSelector('eui-motor-tier-select > adm-wrap', function (selected_cover) {
        let cover_name = selected_cover.querySelector('h3[data-test="tier-heading"]');
        console.warn("cover_name", cover_name);
        let cover_image = selected_cover.querySelector('.adm-cover-level-footer__logo img');
        console.warn("cover_image", cover_image);
        let motorTier = [...dataLayer].reverse().find(obj => obj.event === 'motorTier');
        console.warn("motorTier", motorTier);
    })
}