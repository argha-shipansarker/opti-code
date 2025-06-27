const utils = optimizely.get('utils');

utils.observeSelector('head', function (head) {
    head.insertAdjacentHTML("afterbegin", `<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>`);
});

utils.observeSelector('eui-registration-lookup', function (lookup) {
    lookup.insertAdjacentHTML("afterbegin", `<div class="trustpilot-widget" data-locale="en-GB" data-template-id="5406e65db0d04a09e042d5fc" data-businessunit-id="4be0843700006400050788f5" data-style-height="28px" data-style-width="100%" data-theme="light">

  <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>

</div>`);
});

