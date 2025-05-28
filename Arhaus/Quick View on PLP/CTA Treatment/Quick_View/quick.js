const utils = optimizely.get('utils');

utils.observeSelector('.ss-item-container', function (product_container) {
    if (!product_container.querySelector('.opti-quick-view-modal .quick-view-product')) {
        product_container.insertAdjacentHTML("afterbegin", `<div class="opti-quick-view-modal"><div class="quick-view-product"></div></div>`)
    }
    setTimeout(() => {
        document.dispatchEvent(new CustomEvent('quickview-buttons-added'));
    }, 200);

});

window.product_url = null

utils.observeSelector('.ss-item-container .product-item__img', function (product_image) {
    if (!product_image.querySelector('.opti-plus-sign')) {
        product_image.insertAdjacentHTML("beforeend", `<a data-fetch-product data-handle="${product_image.href.split('/').pop()}" data-target=".quick-view-product"
    class="opti-plus-sign">
    <style>
        .opti-plus-sign {
            background: #1D1D1D;
            padding: 3px 10px;
            position: absolute;
            bottom: 16px;
            left: 16px;
            z-index: 99;
            display: none;
            color: #FFFFFF;
            font-size: 11px;
            line-height: 100%;
            font-weight: 400;
            text-decoration: none;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            border-top-left-radius: 25px;
            border-bottom-left-radius: 25px;
        }

        .opti-plus-sign:hover {
            background: #FFFFFF;
            color: #1D1D1D;
        }

        .product-item__img:hover .opti-plus-sign {
            display: flex;
        }

        @media (max-width: 600px) {
            .opti-plus-sign {
                padding: 6px 10px;
                bottom: 8px;
                left: 8px;
                display: flex;
                font-size: 10px;
            }

        }
    </style>
    Quick view
</a>`)
    }

    if (document.querySelectorAll('.opti-plus-sign')) {
        document.querySelectorAll('.opti-plus-sign').forEach(function (el) {
            el.addEventListener('click', function (event) {
                event.preventDefault();
                if (document.querySelector('.opti-quick-view-modal')) {
                    window.product_url = el.getAttribute("data-handle");
                }
            });
        });
    }
});