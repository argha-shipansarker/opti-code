const utils = optimizely.get('utils');

if (window.location.pathname == '/trip-details') {
    utils.observeSelector('.section:has(.start-date)', function (start_date_section) {
        start_date_section.insertAdjacentHTML("beforebegin", `
            <input type="date" style="appearance: none; -webkit-appearance: none; -moz-appearance: none; width: 200px; padding: 10px; position: relative;" />    
        `)
    });
}

