const utils = optimizely.get('utils');

utils.observeSelector('.hero-banner--electric-vehicle', function (hero_banner) {
    hero_banner.style.display = "none";
    hero_banner.insertAdjacentHTML("afterend", `<div class="opti-new-home-banner">
    <style>
        .opti-new-home-banner {
            position: relative;
            max-width: 1440px;
            height: 543px;
            background-image: url(https://cdn.optimizely.com/img/17941920996/7360a0738f5344f8b465cd0efb5cd776.png);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        /* .opti-new-home-banner img {
            width: 100%;
        } */
    </style>
    <!-- <img src="https://cdn.optimizely.com/img/17941920996/7360a0738f5344f8b465cd0efb5cd776.png" alt="banner-image"> -->
</div>`)
});