const utils = optimizely.get('utils');

utils.waitUntil(function () {
    return document.querySelector('.pdp-main__details .pdp-main__klarna') && document.querySelector('.pdp-main__details .pdp-main__section--actions');
}).then(function () {
    const klarna_node = document.querySelector('.pdp-main__details .pdp-main__klarna');
    const atb_node = document.querySelector('.pdp-main__details .pdp-main__section--actions');
    const parent_node = klarna_node.parentNode;

    parent_node.insertBefore(klarna_node, atb_node.nextSibling);
    parent.insertBefore(atb_node, klarna_node);
});