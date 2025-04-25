const utils = optimizely.get('utils');

utils.waitForElement('#productRecommendations #productRecommendationsCarousel .js-carousel-flickity > .flickity-viewport > .flickity-slider').then(function (sliderSection) {

    console.warn("TESTING rec items", sliderSection);

    let api_products = null
    let api_filtered_products_without_bun = []

    let count = 0;

    utils.waitUntil(function () {
        console.warn("check...")
        return !!window.blueConicClient;
    }).then(function () {
        var bcprofile = blueConicClient.profile.getProfile();
        var bcProfileId = bcprofile.getId();
        var requestParameters = {
            profileId: bcProfileId,
            storeId: "a98e0d67-bb4d-421f-9d94-57a06adc35e3",
            itemId: window.location.href.replace(/^https?:\/\//i, '').split('?')[0],
            request: [
                {
                    id: "first",
                    boosts: [{
                        value: "1",
                        algorithm: "LOOK_ALIKE"
                    }],
                    filters: ["IN_STOCK", "SAME_CATEGORY", "BOUGHT"],
                    count: 8
                }
            ],
            frequencyCap: 1000
        };

        utils.waitUntil(function () {
            bcprofile.loadValues(_, this, function () {
                blueConicClient.recommendation.getRecommendations(requestParameters, function (response) {
                    api_products = response.getItems()
                })
            })
            console.warn("api_products", api_products)
            return api_products;
        }).then(function () {
            console.warn("okkkkkkkkkkkkkkkkkkkkkk")
            if (window.innerWidth > 1024) {
                SDG.Data.flickityInstance.remove(document.querySelectorAll('#productRecommendations #productRecommendationsCarousel .js-carousel-flickity article:nth-child(n+5)'));
                SDG.Data.flickityInstance.destroy();

                utils.waitForElement('#productRecommendations #productRecommendationsCarousel .js-carousel-flickity').then(function (carousel_div) {
                    carousel_div.style.display = "flex";
                    carousel_div.insertAdjacentHTML("afterbegin", `<style>
                        #productRecommendations #productRecommendationsCarousel .js-carousel-flickity article {
                            transform: none !important;
                        }
                    </style>`)
                });
            } else {
                SDG.Data.flickityInstance.remove(document.querySelectorAll('#productRecommendations #productRecommendationsCarousel .js-carousel-flickity article:nth-child(n+5)'));
            }

            api_filtered_products_without_bun = api_products.filter(item => {
                if (
                    item &&
                    item.customProperties &&
                    Array.isArray(item.customProperties.sku) &&
                    item.customProperties.sku.length > 0
                ) {
                    return !item.customProperties.sku[0].includes('BUN');
                }
                return true; // keep it if sku doesn't exist or is empty
            })

            console.warn("api_filtered_products_without_bun", api_filtered_products_without_bun)

            utils.observeSelector(`#productRecommendations #productRecommendationsCarousel .js-carousel-flickity article`, function (product) {

                let api_product_data = null;

                if (count < api_filtered_products_without_bun.length) {
                    api_product_data = api_filtered_products_without_bun[count];
                }

                if (api_product_data && api_product_data.customProperties.variantid && api_product_data.customProperties.variantid.length && api_product_data.customProperties.price && api_product_data.customProperties.price.length && api_product_data.id && product.querySelector('.product-item__quick-shop .js-quick-add-trigger')) {

                    const product_image = product.querySelector('.product-item__images');
                    if (product_image) {
                        product_image.remove();
                        product.insertAdjacentHTML("afterbegin", `<div class="product-item__images">
                            <div class="product-item__image js-product-item-image">
                                <a class="ir ir--product-photo js-track-link product-item__link" data-track-category="product"
                                    data-track-name="recommendations" data-track-text="${api_product_data.name}" href="${api_product_data.url}">
                                    <img class="lazyautosizes ls-is-cached lazyloaded"
                                        src="${api_product_data.image}">
                                </a>
                            </div>
                        </div>`)
                    }

                    const product_wish_list_add = product.querySelector('.product-item__wishlist .js-wishlist-add');
                    if (product_wish_list_add) {
                        product_wish_list_add.setAttribute('data-product-id', api_product_data.customProperties.variantid[0]);
                        product_wish_list_add.setAttribute('data-handle', api_product_data.id.split('/').pop());
                        product_wish_list_add.setAttribute('data-image', api_product_data.image);
                    }

                    const product_wish_list_remove = product.querySelector('.product-item__wishlist .js-wishlist-remove');
                    if (product_wish_list_remove) {
                        product_wish_list_remove.setAttribute('data-product-id', api_product_data.customProperties.variantid[0]);
                        product_wish_list_remove.setAttribute('data-handle', api_product_data.id.split('/').pop());
                    }

                    const quick_add = product.querySelector('.product-item__quick-shop .js-quick-add-trigger');
                    if (quick_add) {
                        quick_add.setAttribute('data-variant-id', api_product_data.customProperties.variantid[0]);
                        quick_add.setAttribute('data-handle', api_product_data.id.split('/').pop());
                    }

                    const product_title = product.querySelector('.product-item__desc .product-item__title a');
                    if (product_title) {
                        product_title.href = api_product_data.url;
                        product_title.innerText = api_product_data.name;
                    }

                    const product_price = product.querySelector('.product-item__desc .product-item__price .product-item__price-actual');
                    if (product_price) {
                        product_price.innerText = `$${api_product_data.customProperties.price[0]}`
                    }

                    const product_price_old = product.querySelector('.product-item__desc .product-item__price .product-item__price-compare');
                    if (product_price_old) {
                        product_price_old.remove();
                    }

                    const product_inventory = product.querySelector('.product-item__desc .product-item__inventory-status');
                    if (product_inventory) {
                        product_inventory.remove();
                    }

                    const product_promo = product.querySelector('.product-item__desc .product-item__promo');
                    if (product_promo) {
                        product_promo.remove();
                    }

                    const product_badge = product.querySelector('.product-item__reward');
                    if (product_badge) {
                        product_badge.remove();
                    }
                }

                count++;
            });
        });
    })

});
