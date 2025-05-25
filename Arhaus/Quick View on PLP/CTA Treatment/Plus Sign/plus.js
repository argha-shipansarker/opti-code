const utils = optimizely.get('utils');

utils.observeSelector('.ss-item-container', function (product_container) {
    if (!product_container.querySelector('.test')) {
        product_container.insertAdjacentHTML("afterbegin", `<div class="opt-home-container"
        style="display: none; z-index: 9999999999; position: fixed; height: 100%; width: 100%; top: 0; left: 0; background: rgba(0,0,0,.5); padding: 10px; "><div class="test">            <div style="" class="opt-home-close">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" stroke="#CED9E5"></rect>
                    <path
                        d="M25 12.41L23.59 11L18 16.59L12.41 11L11 12.41L16.59 18L11 23.59L12.41 25L18 19.41L23.59 25L25 23.59L19.41 18L25 12.41Z"
                        fill="#41A5F5"></path>
                </svg>
            </div></div></div>`)

        if (document.querySelector('.opt-home-close')) {
            document.querySelector('.opt-home-close').addEventListener('click', function () {
                if (document.querySelector('.opt-home-container')) {
                    document.querySelector('.opt-home-container').style.display = "none";
                }
            })
        }
    }
    console.warn("hello from product_container....")
    setTimeout(() => {
        console.warn("hello from product_container.... setTimeout")
        document.dispatchEvent(new CustomEvent('quickview-buttons-added'));
    }, 500);

});

utils.observeSelector('.ss-item-container .product-item__img', function (product_image) {
    if (!product_image.querySelector('.opti-plus-sign')) {
        product_image.insertAdjacentHTML("beforeend", `<div class="opti-quick-view-modal">
    <style>
        .opti-quick-view-modal .opti-plus-sign {
            border-radius: 100%;
            background: #1D1D1D;
            padding: 10px;
            position: absolute;
            bottom: 16px;
            left: 16px;
            z-index: 99;
            display: flex;
        }
    </style>
    <a data-fetch-product data-handle="${product_image.href.split('/').pop()}" data-target=".test" class="opti-plus-sign">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_287_107)">
                <path d="M8 2.59961V13.3996" stroke="white" />
                <path d="M2 8H14" stroke="white" />
            </g>
            <defs>
                <clipPath id="clip0_287_107">
                    <rect width="12" height="12" fill="white" transform="translate(2 2)" />
                </clipPath>
            </defs>
        </svg>
    </a>
</div>`)
    }

    if (document.querySelectorAll('.opti-plus-sign')) {
        document.querySelectorAll('.opti-plus-sign').forEach(function (el) {
            el.addEventListener('click', function (event) {
                event.preventDefault();
                if (document.querySelector('.opt-home-container')) {
                    document.querySelector('.opt-home-container').style.display = "flex";
                }
            });
        });
    }
});