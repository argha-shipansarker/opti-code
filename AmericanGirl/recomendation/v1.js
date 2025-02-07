const utils = optimizely.get('utils');

utils.waitForElement('#productRecommendations #productRecommendationsCarousel .flickity-slider').then(function (sliderSection) {

    let count = 0;

    var bcprofile = blueConicClient.profile.getProfile();
    console.warn("bcprofile", bcprofile);
    var bcProfileId = bcprofile.getId();
    var propertiesToLoad = ['creations_product_recs_test_brand_affinity'];

    bcprofile.loadValues(propertiesToLoad, this, function () {

        var requestParameters = {
            profileId: bcProfileId,
            storeId: "75214ee2-d8db-468d-bc89-a3acfdac9c5c",
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

        console.warn("requestParameters", requestParameters);

        // Make the API call for recommendations
        blueConicClient.recommendation.getRecommendations(requestParameters, function (response) {
            var items = response.getItems();
            console.warn('TESTING rec items', items);

        });
    });

});
