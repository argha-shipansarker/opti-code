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

        .opti-plus-sign svg {
            margin-right: 8px;
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
            }

            .opti-plus-sign svg {
                margin-right: 4px;
            }
        }
    </style>
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_362_279)">
            <path d="M8.5 2.59961V13.3996" stroke="white" />
            <path d="M2.5 8H14.5" stroke="white" />
        </g>
        <defs>
            <clipPath id="clip0_362_279">
                <rect width="12" height="12" fill="white" transform="translate(2.5 2)" />
            </clipPath>
        </defs>
    </svg>
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