const utils = optimizely.get('utils');

utils.observeSelector('.collection-gallery-holder', function (collection_gallery_holder) {
    collection_gallery_holder.insertAdjacentHTML("afterbegin", `<style>

        .collection-gallery-holder {
            margin: 0 !important;
        }

    .collection-gallery-holder .collection-section-title {
        display: none !important;
    }

    .collection-gallery-holder .splide .splide__arrows {
        display: none !important;
    }

    .collection-gallery-holder .splide .splide__track .splide__slide {
        width: auto !important;
        margin-right: 20px !important;
    }

    .collection-gallery-holder .splide .splide__track {
        padding: 0 !important;
    }

    .collection-gallery-holder .splide .splide__track .splide__slide .collection-gallery__img {
        display: none !important;
    }
</style>`);

});