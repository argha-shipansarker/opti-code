const utils = optimizely.get('utils');

utils.observeSelector('.opti-quick-view-modal .quick-view-product .product-image-zoom-block', function (product_zoom_image) {
    console.warn("window.product_url", window.product_url);

    if (window.product_url) {
        const plp_image_of_the_product = document.querySelector(`a.product-item__img[href*="${window.product_url}"]`);
        console.warn("plp_image_of_the_product", plp_image_of_the_product)
        if (plp_image_of_the_product) {

            const cloned_plp_image = plp_image_of_the_product.cloneNode(true);
            product_zoom_image.appendChild(cloned_plp_image);

            document.querySelector('.opti-quick-view-modal').style.display = "flex";
            document.querySelector('.opti-quick-view-modal').insertAdjacentElement('"beforeend"', `<div class="opti-close-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_221_379)">
            <path d="M14.2886 1.35352L0.853516 14.7886" stroke="black"/>
            <path d="M0.924805 1.2832L14.3598 14.7183" stroke="black"/>
            </g>
            <defs>
            <clipPath id="clip0_221_379">
            <rect width="15" height="16" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
            </svg></div>`);

            const close_icon = document.querySelector('.opti-quick-view-modal .opti-close-icon');
            if (close_icon) {
                close_icon.addEventListener('click', function () {
                    document.querySelector('.opti-quick-view-modal').style.display = "none";
                })
            }

        }
    }


});