const utils = optimizely.get('utils');

utils.observeSelector('.cart.cart-page .product-card-container .product-info', function (product) {
    const product_image = product.querySelector('.product-image');
    const edit_button = product.querySelector('.product-edit');

    if (product_image && edit_button) {
        product_image.addEventListener('click', function () {
            edit_button.classList.add('opti-cart-image-clicked');
            setTimeout(() => {
                edit_button.querySelector('a').click();
            }, 100);
        });
    }
});

utils.waitForElement('.modal-background').then(function (modal_background) {

    const observer = new MutationObserver(() => {
        const displayValue = window.getComputedStyle(modal_background).display;

        if (displayValue == 'none') {
            const productEdits = document.querySelectorAll('.product-edit');
            productEdits.forEach(productEdit => {
                if (productEdit.classList.contains('opti-cart-image-clicked')) {
                    console.warn('Deleted from:', productEdit);
                    productEdit.classList.remove('opti-cart-image-clicked');
                }
            });
        }
    });

    observer.observe(modal_background, { attributes: true, attributeFilter: ['style'] });

});