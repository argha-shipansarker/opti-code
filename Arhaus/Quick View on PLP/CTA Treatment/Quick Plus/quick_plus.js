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
            padding: 4px 8px;
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
            justify-content: center;
            align-items: center;
        }

        .opti-plus-sign:hover {
            background: #FFFFFF;
            color: #1D1D1D;
        }

        .product-item__img:hover .opti-plus-sign {
            display: flex;
        }

        .opti-plus-sign svg {
            color: #FFFFFF;
            margin-right: 4px;
        }

        .opti-plus-sign:hover svg {
            color: #1D1D1D;
        }

        @media (max-width: 600px) {
            .opti-plus-sign {
                bottom: 8px;
                left: 8px;
                display: flex;
            }

        }
    </style>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_287_107)">
            <path d="M8 2.59961V13.3996" stroke="currentColor" />
            <path d="M2 8H14" stroke="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_287_107">
                <rect width="12" height="12" fill="white" transform="translate(2 2)" />
            </clipPath>
        </defs>
    </svg>
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