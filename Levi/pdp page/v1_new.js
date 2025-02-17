const utils = window.optimizely.get('utils');

utils.observeSelector('.lowest-recent-price-block', function (lowest_price_block) {

    const interval = setInterval(() => {
        if (lowest_price_block.querySelectorAll('.opti-new-text').length == 2) {
            clearInterval(interval);
        } else {

            if (!lowest_price_block.querySelector('.opti-new-text')) {
                lowest_price_block.firstChild.remove();

                let new_text = "";

                let original_price = document.querySelector('.price-section-block .price-container .price.hard-sale').textContent.trim().replace(',', '.').match(/[\d.]+/)[0];
                let lowest_discount_price = document.querySelector('.lowest-recent-price-block .price').textContent.trim().replace(',', '.').match(/[\d.]+/)[0];
                let discount_percentage = "";

                if (original_price && lowest_discount_price) {
                    discount_percentage = Math.abs(((parseFloat(original_price) - parseFloat(lowest_discount_price)) / parseFloat(original_price)) * 100).toFixed(2);
                }

                if (window.location.href.includes('/FR/en/') || window.location.href.includes('/IT/en/') || window.location.href.includes('/ES/en/') || window.location.href.includes('/NL/en/') || window.location.href.includes('/DE/en/')) {
                    if (discount_percentage == 0.00) {
                        new_text = 'This is the lowest price in the last 30 days';
                        document.querySelectorAll('.lowest-recent-price-block .price').forEach(function (price) {
                            price.style.display = 'none';
                        });
                    } else {
                        new_text = "The lowest price in last 30 days was ";
                    }

                } else if (window.location.href.includes('/FR/fr_FR/')) {
                    if (discount_percentage == 0.00) {
                        new_text = "C'est le prix le plus bas des 30 derniers jours.";
                        document.querySelectorAll('.lowest-recent-price-block .price').forEach(function (price) {
                            price.style.display = 'none';
                        });
                    } else {
                        new_text = "Le plus bas prix du mois était ";
                    }

                } else if (window.location.href.includes('/IT/it_IT/')) {
                    if (discount_percentage == 0.00) {
                        new_text = "Questo è il prezzo più basso degli ultimi 30 giorni.";
                        document.querySelectorAll('.lowest-recent-price-block .price').forEach(function (price) {
                            price.style.display = 'none';
                        });
                    } else {
                        new_text = "Prezzo minimo degli ultimi 30 giorni: ";
                    }

                } else if (window.location.href.includes('/ES/es_ES/')) {
                    if (discount_percentage == 0.00) {
                        new_text = "Este es el precio más bajo en los últimos 30 días.";
                        document.querySelectorAll('.lowest-recent-price-block .price').forEach(function (price) {
                            price.style.display = 'none';
                        });
                    } else {
                        new_text = "El precio mínimo en los últimos 30 días fue ";
                    }

                } else if (window.location.href.includes('/NL/nl_NL/')) {
                    if (discount_percentage == 0.00) {
                        new_text = "Dit is de laagste prijs van de laatste 30 dagen.";
                        document.querySelectorAll('.lowest-recent-price-block .price').forEach(function (price) {
                            price.style.display = 'none';
                        });
                    } else {
                        new_text = "Laagste prijs van laatste 30 dagen: ";
                    }

                } else if (window.location.href.includes('/DE/de_DE/')) {
                    if (discount_percentage == 0.00) {
                        new_text = "Dies ist der niedrigste Preis der letzten 30 Tage.";
                        document.querySelectorAll('.lowest-recent-price-block .price').forEach(function (price) {
                            price.style.display = 'none';
                        });
                    } else {
                        new_text = "Der Tiefstpreis der letzten 30 Tage war ";
                    }

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