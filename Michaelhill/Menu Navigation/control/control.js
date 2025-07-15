const utils = optimizely.get('utils');

//Vue.js menu logics.
window.opti_selected_menu_name = "";

utils.observeSelector('.header-menu-drawer .header-menu-drawer__main-panel-wrapper .header-menu-drawer__navigation-links', function (vue_menu_container) {
    const links = vue_menu_container.querySelectorAll('.header-menu-drawer__navigation-link-wrapper');
    links.forEach(link => {
        link.addEventListener('mousedown', function () {
            const anchor = this.querySelector('a');
            if (anchor) {
                window.opti_selected_menu_name = anchor.innerText.trim();
            }
        });
    });
});

utils.observeSelector('.header-menu-drawer .header-menu-drawer__panel-switcher-wrapper', function (vue_menu_2nd_level_container) {
    if (window.opti_selected_menu_name == "ENGAGEMENT") {
        vue_menu_2nd_level_container.classList.add('opti-engagement-vue-menu-panel');
    }

    if (window.opti_selected_menu_name == "WEDDING") {
        vue_menu_2nd_level_container.classList.add('opti-wedding-vue-menu-panel');
    }

    if (window.opti_selected_menu_name == "JEWELLERY") {
        vue_menu_2nd_level_container.classList.add('opti-jewellery-vue-menu-panel');
    }

    if (window.opti_selected_menu_name == "WATCHES") {
        vue_menu_2nd_level_container.classList.add('opti-watches-vue-menu-panel');
    }

    if (window.opti_selected_menu_name == "GIFTS") {
        vue_menu_2nd_level_container.classList.add('opti-gifts-vue-menu-panel');
    }

    if (window.opti_selected_menu_name == "CLEARANCE") {
        vue_menu_2nd_level_container.classList.add('opti-clearance-vue-menu-panel');
    }

    if (window.opti_selected_menu_name == "OUR WORLD") {
        vue_menu_2nd_level_container.classList.add('opti-our-world-vue-menu-panel');
    }
});