const utils = optimizely.get('utils');

utils.observeSelector('article.pi.js-product-item', function (productTiles) {

    const product_name_node = productTiles.querySelector('.pi__details .js-product-title .js-product-item-link');
    const product_image = productTiles.querySelector('.js-product-image');

    if (product_name_node && product_image) {
        const product_name = product_name_node.innerText.trim();

        if (product_name == "Glossier You" || product_name == "Glossier You Rêve" || product_name == "Glossier You Doux" || product_name == "Glossier You Fleur" || product_name == "Boy Brow" || product_name == "Ultralip" || product_name == "Lash Slick" || product_name == "Cloud Paint" || product_name == "Balm Dotcom" || product_name == "Lip Line") {

            const product_existing_badge_node = productTiles.querySelector('.pi__img-label:not(.hide)');

            if (!product_existing_badge_node) {
                product_image.insertAdjacentHTML("afterbegin", `<div class="pi__img-label opti-new-badge">
                    <span class="pi__img-label-text">
                        Best-seller
                    </span>
                </div>`);
            }
        }

        if (product_name == "Futuredew Solid" || product_name == "Super Bounce" || product_name == "Body Hero Exfoliating Bar" || product_name == "Milky Jelly Cleansing Bar" || product_name == "Priming Moisturizer Balance" || product_name == "Full Orbit") {

            const product_existing_badge_node = productTiles.querySelector('.pi__img-label:not(.hide)');

            if (!product_existing_badge_node) {
                product_image.insertAdjacentHTML("afterbegin", `<div class="pi__img-label opti-new-badge">
                    <span class="pi__img-label-text">
                        Top-rated
                    </span>
                </div>`);
            }
        }
    }

});


utils.waitForElement('.pv-essential .pv-header').then(function (pdp_page_header) {
    const product_name_node = pdp_page_header.querySelector('.pv-header__title');
    const product_existing_badge_number = pdp_page_header.querySelectorAll('.pv-header__sale-tag:not(.hide)');

    if (product_name_node && product_existing_badge_number.length < 2) {
        const product_name = product_name_node.innerText.trim();

        if (product_name == "Glossier You" || product_name == "Glossier You Rêve" || product_name == "Glossier You Doux" || product_name == "Glossier You Fleur" || product_name == "Boy Brow" || product_name == "Ultralip" || product_name == "Lash Slick" || product_name == "Cloud Paint" || product_name == "Balm Dotcom" || product_name == "Lip Line") {
            pdp_page_header.insertAdjacentHTML("beforeend", `<span class="pv-header__sale-tag opti-pdp-badge">Best-seller</span>`);
        }

        if (product_name == "Futuredew Solid" || product_name == "Super Bounce" || product_name == "Body Hero Exfoliating Bar" || product_name == "Milky Jelly Cleansing Bar" || product_name == "Priming Moisturizer Balance" || product_name == "Full Orbit") {
            pdp_page_header.insertAdjacentHTML("beforeend", `<span class="pv-header__sale-tag opti-pdp-badge">Top-rated</span>`);
        }
    }
});