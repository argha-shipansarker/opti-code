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
            background: #1E372F;
            padding: 11px 0;
            position: absolute;
            bottom: 0px;
            z-index: 99;
            display: none;
            justify-content: center;
            align-items: center;
            color: #FFFFFF;
            font-size: 12px;
            line-height: 100%;
            font-weight: 400;
            width: 100%;
            text-decoration: none;
        }

        .opti-plus-sign:hover {
            background: #4F5F59;
        }

        .product-item__img:hover .opti-plus-sign {
            display: flex;
        }

        @media (max-width: 600px) {
            .opti-plus-sign {
                font-size: 10px;
                display: flex;
                padding: 8.5px 0;
                position: relative;
            }

            .opti-plus-sign svg {
                height: 12px;
                width: 12px;
            }
        }
    </style>
    QUICK VIEW
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