function jsCondition() {
    //PJS part starts
    const utils = optimizely.get('utils');
    utils.waitUntil(function () {
        return Common.utils && Common.utils.ThinClient;
    }).then(function () {
        if (Common.utils.ThinClient.isInThinClient()) {
            window.optimizely = window.optimizely || [];
            window.optimizely.push({
                "type": "user",
                "attributes": {
                    "rpx_user_is_on_auctane_application": "yes"
                }
            });
        } else {
            window.optimizely = window.optimizely || [];
            window.optimizely.push({
                "type": "user",
                "attributes": {
                    "rpx_user_is_on_auctane_application": "no"
                }
            });
        }
    });
    //PJS part ends
    return true;
}