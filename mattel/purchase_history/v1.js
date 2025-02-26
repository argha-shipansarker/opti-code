const utils = optimizely.get('utils');

utils.waitForElement('[id*="product_personalized_recs"] .product-recommendations .flickity-slider').then(function (sliderSection) {

    console.warn("Testing rec items", sliderSection);

    let count = 0;
    let api_products = null

    var bcprofile = blueConicClient.profile.getProfile();
    var bcProfileId = bcprofile.getId();
    var propertiesToLoad = ['creations_product_recs_test_brand_affinity'];

    var requestParameters = {
        profileId: bcProfileId,
        storeId: "8b35c321-7616-4e3c-9cc6-4df6f8bb9cf5",
        itemId: window.location.href.replace(/http(s):\/\/(www.)/gi, '').split('?')[0],
        request: [
            {
                id: "bought",
                boosts: [{
                    value: "100",
                    algorithm: "BOUGHT"
                }],
                filters: ["IN_STOCK", "BOUGHT"],
                count: 4
            },
        ],
        frequencyCap: 1000
    };

    utils.waitUntil(function () {
        bcprofile.loadValues(propertiesToLoad, this, function () {
            blueConicClient.recommendation.getRecommendations(requestParameters, function (response) {
                api_products = response.getItems();
            });
        });

        console.warn("api_products", api_products);
        return api_products;

    }).then(function () {
        console.warn("okkkkkkkkkkkkkkkkkkkkkk");
        utils.observeSelector(`[id*="product_personalized_recs"] .product-recommendations .flickity-slider .product-recommendation`, function (product) {
            let api_product_data = null;

            if (count < api_products.length) {
                api_product_data = api_products[count];
            }

            const product_badge = product.querySelector(".product-recommendation__badge") || "";

            if (product_badge.innerText != "Members Only" && api_product_data && api_product_data.customProperties.variantid && api_product_data.customProperties.variantid.length && api_product_data.customProperties.price && api_product_data.customProperties.price.length) {
                const product_recommendation_wrapper = product.querySelector(".product-recommendation__wrapper");
                product_recommendation_wrapper.href = api_product_data.url;

                const product_img = product.querySelector(".product-recommendation__img-tag");
                if (product_img) {
                    product_img.src = api_product_data.image;
                    product_img.setAttribute("data-src", api_product_data.image);
                }

                const product_img_hover = product.querySelector(".product-recommendation__img-hover");
                if (product_img_hover) {
                    product_img_hover.src = api_product_data.image;
                    product_img_hover.setAttribute("data-src", api_product_data.image);
                }

                const product_recommendation_content = product.querySelector(".product-recommendation__content");
                product_recommendation_content.href = api_product_data.url;

                const product_title = product.querySelector(".product-recommendation__content-title");
                product_title.innerText = api_product_data.name;

                const product_price = product.querySelector(".product-recommendation__content-price");
                product_price.innerText = `$${api_product_data.customProperties.price[0]}`;

                const quick_add_button = product.querySelector(".product-quick-add__button");
                quick_add_button.setAttribute("data-variant-id", api_product_data.customProperties.variantid[0]);

                if ((api_product_data.customProperties.badge && api_product_data.customProperties.badge.length) || (api_product_data.customProperties.badge2 && api_product_data.customProperties.badge2.length)) {
                    if (product_badge) {
                        product_badge.innerText = api_product_data.customProperties.badge.length ? api_product_data.customProperties.badge[0] : api_product_data.customProperties.badge2[0];
                    } else {
                        product_title.insertAdjacentHTML("afterend", `<p class="product-recommendation__badge">${api_product_data.customProperties.badge.length ? api_product_data.customProperties.badge[0] : api_product_data.customProperties.badge2[0]}</p>`);
                    }
                    if (api_product_data.customProperties.badge[0] == "Members Only" || api_product_data.customProperties.badge2[0] == "Members Only") {
                        const quick_add_div = product.querySelector(".product-quick-add");
                        quick_add_div.outerHTML = `
                                <div class="product-quick-add js-add opti-members-only-btn">
                                    <div class="product-quick-add__selector js-quick-add-selector" data-current-step="error">
                                        <div class="quick-add-error js-quick-add-error">
                                            <div class="quick-add-error__icon">
                                                <i class="icon icon--error-exclamation-small"></i>
                                            </div>
                                            <div class="quick-add-error__content">
                                                <h5 class="quick-add-error__title">
                                                    This is a member-only item.
                                                </h5>
                                                <p class="quick-add-error__description">
                                                    If you are already a member, <a
                                                        href="https://platform.mattel/shopify/login?shop_url=https%3A%2F%2Fprod-collectorshub.myshopify.com&amp;return_to=/products/juan-gabriel-barbie-doll-hrm82&amp;client_id=collectorshub&amp;action=login"
                                                        class="js-quick-add-login">Sign In</a> to purchase. Or see the product’s details for more
                                                    information.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="product-quick-add__button js-simple-add">
                                        <span class="product-quick-add__button-text">
                                            Quick Add
                                        </span>
                                    </button>
                                </div>
                            `;

                        const quick_add_button_members = product.querySelector(".product-quick-add__button");
                        quick_add_button_members.addEventListener("click", function () {
                            const error_div = product.querySelector(`.opti-members-only-btn .product-quick-add__selector`);
                            error_div.classList.add('is-visible');
                        });
                    }
                } else {
                    if (product_badge) {
                        product_badge.remove();
                    }
                }

            }


            count++;
        });

        const first_banner = document.querySelector('[id*="a_spot_regular"]:nth-of-type(2)');
        if (first_banner) {
            first_banner.after(document.querySelector('[id*="product_personalized_recs"]'));
        }

        utils.waitForElement('[id*="product_personalized_recs"] .section__title').then(function (sectionTitle) {
            sectionTitle.innerText = 'Based on Your Purchase History';
        });
    });

});
