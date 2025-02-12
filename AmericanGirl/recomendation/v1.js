const utils = optimizely.get('utils');

utils.waitForElement('#productRecommendations #productRecommendationsCarousel .flickity-slider').then(function (sliderSection) {

    var bcprofile = blueConicClient.profile.getProfile();
    var bcProfileId = bcprofile.getId();
    var requestParameters = {
        profileId: bcProfileId,
        storeId: "a98e0d67-bb4d-421f-9d94-57a06adc35e3",
        itemId: window.location.href,
        request: [
            {
                id: "test_algo1",
                boosts: [{
                    value: "1",
                    algorithm: "INTEREST"
                }],
                filters: ["IN_STOCK", "SAME_CATEGORY", "BOUGHT"],
                count: 4
            },
        ],
        frequencyCap: 1000
    };

    // Make the API call for recommendations
    blueConicClient.recommendation.getRecommendations(requestParameters, function (response) {
        var items = response.getItems();
        console.warn('TESTING rec items', items);

        let count = 0;
        let new_product = '';

        utils.observeSelector(`#productRecommendations #productRecommendationsCarousel .flickity-slider article`, function (product) {
            if (count > 3) {
                product.remove();
            }

            // if (count < 4) {
            //     product.remove();
            //     new_product += product.outerHTML;
            // } else {
            //     product.remove();
            // }
            count++;
        });

        utils.waitForElement('#productRecommendations #productRecommendationsCarousel').then(function (sliderSection) {
            sliderSection.insertAdjacentHTML("afterend", new_product);
        });

    });
});
