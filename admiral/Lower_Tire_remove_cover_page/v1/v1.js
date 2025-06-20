const utils = optimizely.get('utils');

if (window.location.pathname == '/Admiral/cover' && sessionStorage.getItem('opti-landing-tier')) {
    const opti_landing_tier = JSON.parse(sessionStorage.getItem('opti-landing-tier'));
    console.warn("opti_landing_tier", opti_landing_tier)

    if (opti_landing_tier == "admiral") {
        utils.observeSelector('eui-tier eui-motor-tiers-table adm-hero .adm-hero__title', function (hero_title) {
            hero_title.innerText = "We have 3 levels of cover";
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(2)', function (essential_table_header) {
            essential_table_header.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr .adm-control-table__row-header', function (payment_frequency_table_header) {
            payment_frequency_table_header.style.gridColumn = 'span 3';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(1)', function (essential_table_body) {
            essential_table_body.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr th', function (tbody_table_header) {
            tbody_table_header.style.gridColumn = 'span 3';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(1)', function (essential_table_foot) {
            essential_table_foot.style.display = 'none';
        });
    }

    if (opti_landing_tier == "gold") {
        utils.observeSelector('eui-tier eui-motor-tiers-table adm-hero .adm-hero__title', function (hero_title) {
            hero_title.innerText = "We have 2 levels of cover";
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(2)', function (essential_table_header) {
            essential_table_header.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(3)', function (admiral_table_header) {
            admiral_table_header.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr .adm-control-table__row-header', function (payment_frequency_table_header) {
            payment_frequency_table_header.style.gridColumn = 'span 2';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(1)', function (essential_table_body) {
            essential_table_body.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(2)', function (admiral_table_body) {
            admiral_table_body.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr th', function (tbody_table_header) {
            tbody_table_header.style.gridColumn = 'span 2';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(1)', function (essential_table_foot) {
            essential_table_foot.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(2)', function (admiral_table_foot) {
            admiral_table_foot.style.display = 'none';
        });
    }

    if (opti_landing_tier == "platinum") {
        utils.observeSelector('eui-tier eui-motor-tiers-table adm-hero .adm-hero__title', function (hero_title) {
            hero_title.innerText = "We have 1 level of cover";
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(2)', function (essential_table_header) {
            essential_table_header.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(3)', function (admiral_table_header) {
            admiral_table_header.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(4)', function (gold_table_header) {
            gold_table_header.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr .adm-control-table__row-header', function (payment_frequency_table_header) {
            payment_frequency_table_header.style.gridColumn = 'span 1';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(1)', function (essential_table_body) {
            essential_table_body.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(2)', function (admiral_table_body) {
            admiral_table_body.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(3)', function (gold_table_body) {
            gold_table_body.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr th', function (tbody_table_header) {
            tbody_table_header.style.gridColumn = 'span 1';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(1)', function (essential_table_foot) {
            essential_table_foot.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(2)', function (admiral_table_foot) {
            admiral_table_foot.style.display = 'none';
        });

        utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(3)', function (gold_table_foot) {
            gold_table_foot.style.display = 'none';
        });
    }

    utils.observeSelector('eui-tier', function (cover_page) {
        if (sessionStorage.getItem('is_going_back_from_quote_page') == "true") {

            utils.observeSelector('eui-tier eui-motor-tiers-table adm-hero .adm-hero__title', function (hero_title) {
                hero_title.innerText = "We have 4 levels of cover";
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(2)', function (essential_table_header) {
                essential_table_header.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(3)', function (admiral_table_header) {
                admiral_table_header.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr th:nth-of-type(4)', function (gold_table_header) {
                gold_table_header.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] thead tr .adm-control-table__row-header', function (payment_frequency_table_header) {
                payment_frequency_table_header.style.gridColumn = 'span var(--adm-control-table-cols, 3)';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(1)', function (essential_table_body) {
                essential_table_body.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(2)', function (admiral_table_body) {
                admiral_table_body.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr td:nth-of-type(3)', function (gold_table_body) {
                gold_table_body.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] tbody tr th', function (tbody_table_header) {
                tbody_table_header.style.gridColumn = 'span var(--adm-control-table-cols, 3)';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(1)', function (essential_table_foot) {
                essential_table_foot.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(2)', function (admiral_table_foot) {
                admiral_table_foot.style.display = 'table-cell';
            });

            utils.observeSelector('table[data-test="eui-motor-tier-select"] tfoot tr td:nth-of-type(3)', function (gold_table_foot) {
                gold_table_foot.style.display = 'table-cell';
            });

        }
    });

}

utils.observeSelector('eui-quote small[data-test="other-tier-options"] a', function (change_cover_cta) {
    change_cover_cta.addEventListener('click', function () {
        sessionStorage.setItem('is_going_back_from_quote_page', "true");
    });
});

