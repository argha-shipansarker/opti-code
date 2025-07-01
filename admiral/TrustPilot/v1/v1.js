const utils = optimizely.get('utils');

utils.observeSelector('eui-registration-lookup', function (lookup) {
  // Add the Trustpilot widget div
  lookup.insertAdjacentHTML("afterbegin", `
        <div class="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="5406e65db0d04a09e042d5fc"
            data-businessunit-id="4be0843700006400050788f5"
            data-style-height="28px"
            data-style-width="100%"
            data-theme="light">
            <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
        </div>
    `);

  // Load the Trustpilot widget script dynamically
  const script = document.createElement('script');
  script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
  script.type = "text/javascript";
  script.async = true;
  document.body.appendChild(script); // or `lookup.appendChild(script)` if you prefer local scope

  if (window.Trustpilot) {
    window.Trustpilot = null
  }
});

utils.observeSelector('eui-vehicle-list', function (lookup) {
  // Add the Trustpilot widget div
  lookup.insertAdjacentHTML("afterbegin", `
        <div class="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="5406e65db0d04a09e042d5fc"
            data-businessunit-id="4be0843700006400050788f5"
            data-style-height="28px"
            data-style-width="100%"
            data-theme="light">
            <a href="https://uk.trustpilot.com/review/www.admiral.com" target="_blank" rel="noopener">Trustpilot</a>
        </div>
    `);

  if (window.Trustpilot) {
    window.Trustpilot = null
  }
});
