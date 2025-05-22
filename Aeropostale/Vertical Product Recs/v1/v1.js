const utils = optimizely.get('utils');

utils.waitUntil(function () {
    return document.querySelector('.cart-recommendations .search-result-items.slick-initialized') && document.querySelector('#pdp-ymal-recommendations .search-result-items.slick-initialized');
}).then(function () {
    $('.search-result-items').slick('unslick');
});

utils.waitForElement('#pdp-ymal-recommendations .product-listing__title h2').then(function (ymal_recommendations_heading) {
    ymal_recommendations_heading.innerText = "PICKED JUST FOR YOU";
});

utils.observeSelector('.cart-recommendations .search-result-items .grid-tile', function (recommendations_tile) {
    recommendations_tile.style.setProperty("width", "calc(50% - 1rem)", "important");
});
