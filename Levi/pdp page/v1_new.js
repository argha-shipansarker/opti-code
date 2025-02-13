const utils = window.optimizely.get('utils');

utils.observeSelector('.lowest-recent-price-block', function (lowest_price_block) {

    const interval = setInterval(() => {
        if (lowest_price_block.querySelectorAll('.opti-new-text').length == 2) {
            clearInterval(interval);
        } else {

            if (!lowest_price_block.querySelector('.opti-new-text')) {
                lowest_price_block.firstChild.remove();

                let new_text = "";

                if (window.location.href.includes('/FR/en/') || window.location.href.includes('/IT/en/') || window.location.href.includes('/ES/en/') || window.location.href.includes('/NL/en/') || window.location.href.includes('/DE/en/')) {

                    new_text = "The lowest price in last 30 days was ";

                } else if (window.location.href.includes('/FR/fr_FR/')) {

                    new_text = "Le plus bas prix du mois était ";

                } else if (window.location.href.includes('/IT/it_IT/')) {

                    new_text = "Prezzo minimo degli ultimi 30 giorni: ";

                } else if (window.location.href.includes('/ES/es_ES/')) {

                    new_text = "El precio mínimo en los últimos 30 días fue ";

                } else if (window.location.href.includes('/NL/nl_NL/')) {

                    new_text = "Laagste prijs van laatste 30 dagen: ";

                } else if (window.location.href.includes('/DE/de_DE/')) {

                    new_text = "Der Tiefstpreis der letzten 30 Tage war ";

                }

                lowest_price_block.insertAdjacentHTML("afterbegin", `
                    <p class='opti-new-text' style='display: inline;'>${new_text}</p>
                `);
            }
        }
    }, 1500);

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