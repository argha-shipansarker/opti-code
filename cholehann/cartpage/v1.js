const utils = optimizely.get('utils');

utils.observeSelector('.cart.cart-page .product-card-container .product-info .product-image', function (product_image) {
    product_image.addEventListener('click', function () {
        let product_image_url = null;

        if (window.innerWidth < 1400 && window.innerWidth > 1000) {
            product_image_url = `${product_image.src.split('?')[0]}?sw=450"`;
        } else if (window.innerWidth < 500) {
            product_image_url = `${product_image.src.split('?')[0]}?sw=300"`;
        } else {
            product_image_url = `${product_image.src.split('?')[0]}?sw=600"`;
        }
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="opti-image-modal">
    <style>
        .opti-image-modal {
            z-index: 9999999999;
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }

        .opti-image-modal .opti-modal-overlay {
            z-index: 1;
            position: relative;
            min-height: 100%;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.75);
            transition: opacity 0.5s;
            opacity: 1;
            flex-direction: column;
        }

        .opti-image-modal .opti-modal-overlay .opti-modal-content {
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
        }

        .opti-image-modal .opti-modal-overlay .opti-modal-content .opti-close-btn {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            position: absolute;
            top: 0px;
            padding: 16px;
            right: 0px;
            z-index: 3;
            cursor: pointer;
            margin-top: 0px;
            margin-right: 0px;
            background-color: rgba(0, 0, 0, 0);
            border-radius: 0px;
        }

        .opti-image-modal .opti-modal-overlay .opti-modal-content .opti-close-btn svg {
            stroke: rgb(0, 0, 0);
            stroke-width: 4px;
            top: 6px;
            left: 6px;
            width: 18px;
            height: 18px;
        }
    </style>
    <div class="opti-modal-overlay">
        <div class="opti-modal-content">
            <div class="opti-close-btn" onclick="document.querySelector('.opti-image-modal').remove();document.body.style.overflow = 'auto';">
                <svg viewBox="0 0 45 45" color="#000000" aria-hidden="true" class="css-oohciz">
                    <line x1="5" x2="40" y1="5" y2="40"></line>
                    <line x1="5" x2="40" y1="40" y2="5"></line>
                </svg>
            </div>
            <img src="${product_image_url}" alt="">
        </div>

    </div>
</div>`);

        document.body.style.overflow = 'hidden';

        document.querySelector('.opti-image-modal').addEventListener("click", function (event) {
            if (!event.target.closest(".opti-modal-content")) {
                if (document.querySelector('.opti-image-modal')) {
                    document.querySelector('.opti-image-modal').remove();
                    document.body.style.overflow = 'auto';
                }
            }
        });


    });
});