const utils = optimizely.get('utils');

utils.observeSelector('.ss-item-container div[ng-repeat-start="result in results track by result.uid"]', function (product_card) {
    const product_image = product_card.querySelector('.product-item__img');
    if (product_image) {
        if (!product_image.querySelector('.opti-plus-sign')) {
            product_image.insertAdjacentHTML("beforeend", `<a class="opti-plus-sign" href="https://www.google.co.uk/">
    <style>
        .opti-plus-sign {
            border-radius: 100%;
            background: #1D1D1D;
            /* padding: 10px; */
            position: absolute;
            bottom: 16px;
            left: 16px;
            z-index: 99;
        }
    </style>
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
</a>`)
        }
    }
});