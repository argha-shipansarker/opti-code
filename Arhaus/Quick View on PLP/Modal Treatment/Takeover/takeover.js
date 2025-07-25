const utils = optimizely.get('utils');

window.ulObserver = null;
window.debounceTimer = null;

function handle_initiallizing_ulObserver_debounceTimer() {
    if (window.ulObserver) {
        window.ulObserver.disconnect();
        window.ulObserver = null;
    }

    if (window.debounceTimer) {
        window.debounceTimer = null;
    }
}

function getImageCode(url) {
    const filename = url.split('/').pop();       // "1003934G2NS_BF230616.jpg?preset=plp"
    const code = filename.split('.jpg')[0];      // "1003934G2NS_BF230616"
    return code;
}

utils.observeSelector('.opti-quick-view-modal .quick-view-product .product-image-zoom-block', function (product_zoom_image) {

    if (window.product_url) {

        const plp_image_of_the_product = document.querySelector(`a.product-item__img[href*="${window.product_url}"]`);
        if (plp_image_of_the_product) {

            const cloned_plp_image = plp_image_of_the_product.cloneNode(true);
            product_zoom_image.appendChild(cloned_plp_image);

            document.querySelector('.opti-quick-view-modal').style.display = "flex";
            setTimeout(() => {
                document.querySelector('.opti-quick-view-modal .quick-view-product').scrollTop = 0;
            }, 50);

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
                document.querySelector('.opti-quick-view-modal .quick-view-product #product_add_cart .shopify-product-form__button').insertAdjacentHTML("afterend", `<a class="see-full-desc-link" href="${cloned_plp_image.href}">
                <style>
                    .see-full-desc-link {
                        line-height: 12.1px;
                        font-weight: 700;
                        display: flex;
                        padding: 11px 0;
                        justify-content: center;
                        text-decoration: none;
                        border: 2px solid #272122;
                        color: #3B3130;
                        font-size: 11px;
                        letter-spacing: 1.65px;
                        margin-bottom: 14px;
                    }
                </style>
                SEE FULL DESCRIPTION
            </a>`);
            } else {
                document.querySelector('.opti-quick-view-modal .quick-view-product #product_add_cart .shopify-product-form__button').insertAdjacentHTML("afterend", `<a class="see-full-desc-link" href="${cloned_plp_image.href}">
                    <style>
                        .see-full-desc-link {
                            line-height: 12.1px;
                            font-weight: 700;
                            display: flex;
                            padding: 11px 0;
                            justify-content: center;
                            text-decoration: none;
                            border: 2px solid #272122;
                            color: #3B3130;
                            font-size: 11px;
                            letter-spacing: 1.65px;
                            margin-bottom: 14px;
                        }
                    </style>
                    SEE FULL DESCRIPTION
                </a>`);
            }

            const close_icon = document.querySelector('.opti-quick-view-modal .opti-close-icon');
            if (close_icon) {
                close_icon.addEventListener('click', function () {
                    document.querySelector('.opti-quick-view-modal').style.display = "none";
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "click__quick_view_close_cta_",
                    });
                    handle_initiallizing_ulObserver_debounceTimer();
                })
            }

            const see_full_desc_link = document.querySelector('.opti-quick-view-modal .see-full-desc-link');
            if (see_full_desc_link) {
                see_full_desc_link.addEventListener('click', function () {
                    document.querySelector('.opti-quick-view-modal').style.display = "none";
                    handle_initiallizing_ulObserver_debounceTimer();
                })
            }

            const image_section = document.querySelector('.opti-quick-view-modal .product-item__img');
            if (image_section) {
                image_section.addEventListener('click', function () {
                    document.querySelector('.opti-quick-view-modal').style.display = "none";
                    handle_initiallizing_ulObserver_debounceTimer();
                })
            }

            document.addEventListener('click', function (event) {
                const modal = document.querySelector('.opti-quick-view-modal .quick-view-product');

                if (modal && document.querySelector('.opti-quick-view-modal').style.display !== 'none' && !modal.contains(event.target)) {
                    document.querySelector('.opti-quick-view-modal').style.display = 'none';
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "click__quick_view_close_cta_",
                    });
                    handle_initiallizing_ulObserver_debounceTimer();
                }
            });

            utils.observeSelector('#cart-popup .cart-popup__header', function (cart_popup) {
                document.querySelector('.opti-quick-view-modal').style.display = "none";
                handle_initiallizing_ulObserver_debounceTimer();
            });

            utils.observeSelector('#shopify-section-wishlist .wishlist-save-popup__header', function (wishlist_popup) {
                document.querySelector('.opti-quick-view-modal').style.display = "none";
                handle_initiallizing_ulObserver_debounceTimer();
            });

            utils.observeSelector('.opti-quick-view-modal .product-gallery-splide ul:not(.splide__pagination)', function (slide_container) {

                if (window.ulObserver) {
                    window.ulObserver.disconnect();
                }

                window.ulObserver = new MutationObserver(function (mutationsList) {
                    if (window.debounceTimer) {
                        clearTimeout(window.debounceTimer);
                    } // clear any previous pending execution

                    window.debounceTimer = setTimeout(() => {
                        const slide_variant_img = slide_container.querySelector('.splide__slide:nth-of-type(1) picture img');
                        const slide_variant_picture = slide_container.querySelector('.splide__slide:nth-of-type(1) picture');
                        const existing_picture = document.querySelector('.opti-quick-view-modal .product-item__img picture');
                        const existing_picture_alt = document.querySelector('.opti-quick-view-modal .product-item__img .product-item__img--alt');
                        if (slide_variant_img && existing_picture && existing_picture_alt, existing_picture_alt) {

                            const existing_picture_code = getImageCode(existing_picture.querySelector('img').src);
                            const variant_picture_code = getImageCode(slide_variant_img.src);

                            if (existing_picture_code == variant_picture_code) {
                                existing_picture.style.display = "block";
                                existing_picture_alt.style.display = "block";
                                if (document.querySelector('.opti-slide-variant-picture')) {
                                    document.querySelector('.opti-slide-variant-picture').remove();
                                }
                            } else {
                                existing_picture.style.display = "none";
                                existing_picture_alt.style.display = "none";

                                const cloned_slide_variant_picture = slide_variant_picture.cloneNode(true);
                                cloned_slide_variant_picture.classList.add('opti-slide-variant-picture');

                                const modal_image_link = document.querySelector('.opti-quick-view-modal .product-item__img');
                                if (document.querySelector('.opti-slide-variant-picture')) {
                                    document.querySelector('.opti-slide-variant-picture').remove();
                                }
                                modal_image_link.appendChild(cloned_slide_variant_picture);
                            }


                        }
                    }, 100); // adjust delay if needed (100ms is usually enough)
                });

                window.ulObserver.observe(slide_container, {
                    childList: true,
                    subtree: true,
                    attributes: true,         // Watch for attribute changes
                    attributeFilter: ['src'],
                });
            });
        }
    }
});
