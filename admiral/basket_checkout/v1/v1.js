const utils = optimizely.get('utils');

if (window.location.pathname == '/Admiral/cover') {

    utils.observeSelector('eui-motor-tier-select > adm-wrap', function (selected_cover) {

    });

    utils.observeSelector('eui-motor-tier-select > adm-wrap', function (selected_cover) {
        let cover_name = selected_cover.querySelector('h3[data-test="tier-heading"]');
        console.warn("cover_name", cover_name);
        let cover_image = selected_cover.querySelector('.adm-cover-level-footer__logo img');
        console.warn("cover_image", cover_image);
        let motorTier = [...dataLayer].reverse().find(obj => obj.event === 'motorTier');
        console.warn("motorTier", motorTier);
    })
}