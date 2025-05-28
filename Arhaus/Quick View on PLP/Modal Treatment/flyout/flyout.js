const utils = optimizely.get('utils');

utils.observeSelector('.opti-quick-view-modal .quick-view-product .product-image-zoom-block', function (product_zoom_image) {

    if (window.product_url) {

        const plp_image_of_the_product = document.querySelector(`a.product-item__img[href*="${window.product_url}"]`);
        if (plp_image_of_the_product) {

            const cloned_plp_image = plp_image_of_the_product.cloneNode(true);
            product_zoom_image.appendChild(cloned_plp_image);

            document.querySelector('.opti-quick-view-modal').style.display = "flex";
            if (!document.querySelector('.opti-quick-view-modal .quick-view-product .opti-close-icon')) {
                document.querySelector('.opti-quick-view-modal .quick-view-product').insertAdjacentHTML("beforeend", `<div class="opti-close-icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_221_379)">
            <path d="M14.2886 1.35352L0.853516 14.7886" stroke="black" />
            <path d="M0.924805 1.2832L14.3598 14.7183" stroke="black" />
        </g>
        <defs>
            <clipPath id="clip0_221_379">
                <rect width="15" height="16" fill="white" transform="translate(0.5)" />
            </clipPath>
        </defs>
    </svg>
</div>`);
            }

            if (document.querySelector('.opti-quick-view-modal .quick-view-product #product_add_cart .see-full-desc-link')) {
                document.querySelector('.opti-quick-view-modal .quick-view-product #product_add_cart .see-full-desc-link').remove();
                document.querySelector('.opti-quick-view-modal .quick-view-product #product_add_cart').insertAdjacentHTML("beforeend", `<a class="see-full-desc-link" href="${cloned_plp_image.href}">
                <style>
                    .see-full-desc-link {
                        font-size: 12px;
                        line-height: 16px;
                        font-weight: 700;
                        text-decoration: underline;
                        color: #000000;
                    }
                </style>
                See Full Description
            </a>`);
            } else {
                document.querySelector('.opti-quick-view-modal .quick-view-product #product_add_cart').insertAdjacentHTML("beforeend", `<a class="see-full-desc-link" href="${cloned_plp_image.href}">
                    <style>
                        .see-full-desc-link {
                            font-size: 12px;
                            line-height: 16px;
                            font-weight: 700;
                            text-decoration: underline;
                            color: #000000;
                        }
                    </style>
                    See Full Description
                </a>`);
            }

            const close_icon = document.querySelector('.opti-quick-view-modal .opti-close-icon');
            if (close_icon) {
                close_icon.addEventListener('click', function () {
                    document.querySelector('.opti-quick-view-modal').style.display = "none";
                })
            }

        }

        utils.observeSelector('.opti-quick-view-modal .quick-view-product .product__row .material-wrapper', function (material_wrapper) {
            const rect = material_wrapper.getBoundingClientRect();
            const offsetFromTop = rect.top;

            utils.observeSelector('.opti-quick-view-modal .quick-view-product .product__row .material-wrapper .swatch-overlay__slide', function (swatch_overlay__slide) {
                swatch_overlay__slide.style.top = `${offsetFromTop}px`;
            });
        });

    }
});
