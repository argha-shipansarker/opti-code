const utils = optimizely.get('utils');

//Engagement Menu 
utils.waitForElement('nav .menu .menu__root-links > li:nth-of-type(1)').then(function (engagement_menu) {

    engagement_menu.insertAdjacentHTML("beforeend", `<style>
    nav .menu .menu__root-links>li:nth-of-type(1) .menu-panels .menu-panels__scroll>li:nth-of-type(1) {
        border-bottom: 0px;
    }

    nav .menu .menu__root-links>li:nth-of-type(1) .menu-panels .menu-panels__scroll>li:nth-of-type(1) ul li a {
        font-size: 16px;
    }

    nav .menu .menu__root-links>li:nth-of-type(1) .menu-panels .menu-panels__scroll>li:nth-of-type(1) ul>li:nth-of-type(1),
    nav .menu .menu__root-links>li:nth-of-type(1) .menu-panels .menu-panels__scroll>li:nth-of-type(1) ul>li:nth-of-type(6) {
        display: none;
    }

    nav .menu .menu__root-links>li:nth-of-type(1) .menu-panels .menu-panels__scroll>li:nth-of-type(1) ul>li:nth-of-type(7) {
        margin-bottom: 12px;
    }

    nav .menu .menu__root-links>li:nth-of-type(1) .menu-panels .menu-panels__scroll>li:nth-of-type(2),
    nav .menu .menu__root-links>li:nth-of-type(1) .menu-panels .menu-panels__scroll>li:nth-of-type(3) {
        display: none;
    }
</style>`)

    engagement_menu.insertAdjacentHTML("beforeend", `<div class="menu-panels menu-panels--close opti-engagement-cut-panels">

    <div class="menu-panels__header">
        <button class="menu-panels__header-close" title="Close">
            <svg class="icons"><!----><!---->
                <use href="/_nuxt3/icons.DgK34huS.svg#cross"></use>
            </svg>
        </button>
        <button class="menu-panels__header-back">
            <svg class="icons"><!----><!---->
                <use href="/_nuxt3/icons.DgK34huS.svg#arrow-carousel-left"></use>
            </svg>
            Cut
        </button>
    </div>

    <ul class="menu-panels__scroll">

    </ul>

</div>`);


    const engagement_menu_panel_first_section = engagement_menu.querySelector('.menu-panels .menu-panels__scroll > li:nth-of-type(1)');

    engagement_menu_panel_first_section.insertAdjacentHTML("afterend", `<div class="opti-new-engagement-menu">
    <style>
        .opti-new-engagement-menu .bold-menu {
            font-size: 16px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0.02rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #282829;
            text-decoration: none;
            padding: 18.5px 0;
            border-bottom: 1px solid #E8E9EA;
        }

        .opti-new-engagement-menu a.bold-menu {
            padding: 16px 0;
        }

        .opti-new-engagement-menu .bold-menu .sub {
            font-weight: 400;
            color: #707172;
        }

        .opti-new-engagement-menu .bold-menu .icons {
            height: 1rem;
        }

        .opti-new-engagement-menu .menu-heading {
            font-size: 12px;
            line-height: 1.2;
            letter-spacing: 0.08rem;
            font-weight: 700;
            color: #707172;
            padding: 24px 0 12px;
            text-transform: uppercase;
            margin-bottom: 0;
        }

        .opti-new-engagement-menu .normal-menu {
            font-size: 16px;
            line-height: 1.2;
            letter-spacing: 0.02rem;
            font-weight: 400;
            color: #282829;
            padding: 12px 0;
            text-decoration: none;
            display: block;
        }
    </style>

    <div class="bold-menu cut">
        <span>Cut <span class="sub">(Shape)</span></span>
        <svg class="icons">
            <use href="/_nuxt3/icons.DgK34huS.svg#arrow-carousel-right"></use>
        </svg>
    </div>

    <div class="bold-menu bridal-collection">
        Bridal Collections
        <svg class="icons">
            <use href="/_nuxt3/icons.DgK34huS.svg#arrow-carousel-right"></use>
        </svg>
    </div>

    <a href="/engagement" class="bold-menu">
        Explore Engagement
    </a>

    <p class="menu-heading">Guides</p>

    <a href="/article/knowledge-advice/size-guide/rings" class="normal-menu">Size Guide</a>
    <a href="/article/knowledge-advice/engagement-ring-guide" class="normal-menu">Engagement Ring Guide</a>
</div>`);

    const cut_menu = document.querySelector('.opti-new-engagement-menu .bold-menu.cut');
    if (cut_menu) {
        cut_menu.addEventListener('click', function () {
            const cut_menu_panel = document.querySelector('.opti-engagement-cut-panels');
            if (cut_menu_panel) {
                cut_menu_panel.classList.remove('menu-panels--close');
                cut_menu_panel.classList.add('menu-panels--open');
            }
        })
    }

    const cut_menu_panel_back = document.querySelector('.opti-engagement-cut-panels .menu-panels__header-back');
    if (cut_menu_panel_back) {
        cut_menu_panel_back.addEventListener('click', function () {
            const cut_menu_panel = document.querySelector('.opti-engagement-cut-panels');
            if (cut_menu_panel) {
                cut_menu_panel.classList.add('menu-panels--close');
                cut_menu_panel.classList.remove('menu-panels--open');
            }
        })
    }

    const cut_menu_panel_close = document.querySelector('.opti-engagement-cut-panels .menu-panels__header-close');
    if (cut_menu_panel_close) {
        cut_menu_panel_close.addEventListener('click', function () {
            const cut_menu_panel = document.querySelector('.opti-engagement-cut-panels');
            if (cut_menu_panel) {
                cut_menu_panel.classList.add('menu-panels--close');
                cut_menu_panel.classList.remove('menu-panels--open');
            }

            const engagement_panel = engagement_menu.querySelector('.menu-panels:not(.opti-engagement-cut-panels) .menu-panels__header-close');
            if (engagement_panel) {
                engagement_panel.click();
            }
        })
    }
});