const utils = window.optimizely.get('utils');

utils.observeSelector('.lowest-recent-price-block', function (lowest_price_block) {
    lowest_price_block.classList.add('manto');
    if (window.location.href.includes('/IT/en/')) {
        // lowest_price_block.firstChild.nodeValue = "The lowest price in last 30 days was ";
        lowest_price_block.firstChild.remove();
        lowest_price_block.insertAdjacentHTML("afterbegin", `
            <span>The lowest price in last 30 days was </span>
        `);
    } else if (window.location.href.includes('/FR/fr_FR/')) {
        lowest_price_block.firstChild.nodeValue = "Le plus bas prix du mois était ";
    } else if (window.location.href.includes('/IT/it_IT/')) {
        lowest_price_block.firstChild.nodeValue = "Prezzo minimo degli ultimi 30 giorni: ";
    } else if (window.location.href.includes('/ES/es_ES/')) {
        lowest_price_block.firstChild.nodeValue = "El precio mínimo en los últimos 30 días fue ";
    } else if (window.location.href.includes('/NL/nl_NL/')) {
        lowest_price_block.firstChild.nodeValue = "Laagste prijs van laatste 30 dagen: ";
    } else if (window.location.href.includes('/DE/de_DE/')) {
        // lowest_price_block.firstChild.nodeValue = "Der Tiefstpreis der letzten 30 Tage war ";

        const interval = setInterval(() => {
            if (lowest_price_block.querySelectorAll('.opti-new-text').length == 2) {
                clearInterval(interval); // Stop the interval
            } else {
                if (!lowest_price_block.querySelector('.opti-new-text')) {
                    lowest_price_block.firstChild.remove();
                    lowest_price_block.insertAdjacentHTML("afterbegin", `
                        <p class='opti-new-text' style='display: inline;'>Der Tiefstpreis der letzten 30 Tage war </p>
                    `);
                }
            }
        }, 1500);
    }

    lowest_price_block.style.fontSize = "14px";
    lowest_price_block.style.lineHeight = "21px";
    lowest_price_block.style.color = "#403E3F";
    lowest_price_block.style.marginTop = "0px";
    lowest_price_block.style.marginBottom = "4px";

    utils.observeSelector('.price-section-block', function (price_section) {
        price_section.style.marginBottom = "0px";
    });
});

utils.observeSelector('.promo-badge', function (promo_badge) {
    promo_badge.style.display = "none";
});