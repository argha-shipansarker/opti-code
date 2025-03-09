const utils = optimizely.get('utils');

utils.waitForElement('.cart__footer').then(function (cart_footer) {

    function getCookieValue(name) {
        const cookies = document.cookie.split('; ');
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].startsWith(name + '=')) {
                return cookies[i].split('=')[1]; // Extract and return the value
            }
        }
        return null; // Return null if the cookie is not found
    }

    // Example usage
    const bc_segments2 = getCookieValue('bc_segments2');
    const bc_segments = getCookieValue('bc_segments');

    if (bc_segments2 == "bc_affinity_bs") {
        cart_footer.insertAdjacentHTML("afterbegin", `<div class="opti-upsell-cart-page">
            <style>
                .opti-upsell-cart-page {
                    margin-bottom: 48px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop {
                    position: relative;
                    background-image: url(https://cdn.optimizely.com/img/25237771658/53e2560145af40928dff68949b43653b.png);
                    border-radius: 5px;
                    background-size: cover;
                    background-position: -3px -123px;
                    background-repeat: no-repeat;
                    background-color: #ffade4;
                    height: 187px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .upsell-info {
                    position: absolute;
                    top: 36px;
                    left: 23px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .upsell-info p {
                    font-family: TungstenSemibold;
                    font-weight: 700;
                    font-size: 68px;
                    line-height: 64px;
                    color: #000000;
                    margin-bottom: 10px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .upsell-info a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    background: #000000;
                    color: white;
                    font-size: 20px;
                    line-height: 20px;
                    width: 202px;
                    height: 45px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .sign-image {
                    position: absolute;
                    width: 130px;
                    height: 60px;
                    right: 12px;
                    bottom: 11px;
                }
        
                @media (max-width: 1023px) {
                    .opti-upsell-cart-page .banner-image-desktop {
                        display: none;
                    }
                }
            </style>
            <div class="banner-image-desktop">
                <div class="upsell-info">
                    <p>Become a Member $9.99/yr</p>
                    <a href="https://creations.mattel.com/pages/barbie-club59-membership" class="btn">Join Now</a>
                </div>
                <img class="sign-image" src="https://cdn.optimizely.com/img/25237771658/422bf76d4f304ce19564f0121a455791.png"
                    alt="sign">
            </div>
        </div>`)

        cart_footer.insertAdjacentHTML("beforeend", `<div class="opti-upsell-cart-page-mobile">
            <style>
                .opti-upsell-cart-page-mobile .heading {
                    font-family: TungstenSemibold;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 32px;
                    color: #000000;
                    padding-top: 30px;
                    margin-bottom: 9px;
                    border-top: 1px solid #DDDDDD;
                    margin-right: -24px;
                    margin-left: -24px;
                    padding-left: 24px;
                }
        
                .opti-upsell-cart-page-mobile .banner-image {
                    position: relative;
                    border-radius: 5px;
                    background-image: url(https://cdn.optimizely.com/img/25237771658/53e2560145af40928dff68949b43653b.png);
                    background-size: cover;
                    height: 106px;
                    margin-bottom: 18px;
                }
        
                .opti-upsell-cart-page-mobile .banner-image .sign-image {
                    position: absolute;
                    width: 143px;
                    height: 66px;
                    top: 20px;
                    left: 9px;
                }
        
                .opti-upsell-cart-page-mobile a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    background: #000000;
                    color: white;
                    font-size: 18px;
                    line-height: 18px;
                    width: 100%;
                    height: 41px;
                }
        
                @media (min-width: 768px) {
                    .opti-upsell-cart-page-mobile .banner-image {
                        background-position: 0 30%;
                    }
                }
        
                @media (min-width: 1024px) {
                    .opti-upsell-cart-page-mobile {
                        display: none;
                    }
                }
            </style>
            <p class="heading">Become amember $9.99/Yr</p>
            <div class="banner-image">
                <img class="sign-image" src="https://cdn.optimizely.com/img/25237771658/422bf76d4f304ce19564f0121a455791.png"
                    alt="sign">
            </div>
            <a href="https://creations.mattel.com/pages/barbie-club59-membership" class="btn">Join Now</a>
        </div>`)
    } else if (bc_segments == "bc_affinity_hw") {
        cart_footer.insertAdjacentHTML("afterbegin", `<div class="opti-upsell-cart-page">
            <style>
                .opti-upsell-cart-page {
                    margin-bottom: 48px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop {
                    position: relative;
                    border-radius: 5px;
                    height: 187px;
                    overflow: hidden;
                    background: black;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .upsell-info {
                    position: absolute;
                    top: 36px;
                    left: 23px;
                    z-index: 111111;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .upsell-info p {
                    font-family: TungstenSemibold;
                    font-weight: 700;
                    font-size: 68px;
                    line-height: 64px;
                    color: white;
                    margin-bottom: 10px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .upsell-info a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    color: black;
                    background: white;
                    font-size: 20px;
                    line-height: 20px;
                    width: 202px;
                    height: 45px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .sign-image {
                    position: absolute;
                    width: 132px;
                    height: 108px;
                    bottom: 39px;
                    right: 22px;
                }
        
                .opti-upsell-cart-page .banner-image-desktop .main-image {
                    height: 312px;
                    position: absolute;
                    right: 157px;
                    top: -126px;
                }
        
                @media (max-width: 1023px) {
                    .opti-upsell-cart-page .banner-image-desktop {
                        display: none;
                    }
                }
            </style>
            <div class="banner-image-desktop">
                <div class="upsell-info">
                    <p>Become a Member $9.99/yr</p>
                    <a href="https://creations.mattel.com/pages/hot-wheels-collectors-membership" class="btn">Join Now</a>
                </div>
                <img class="sign-image" src="https://cdn.optimizely.com/img/25237771658/2e1701e967e743e590dde630d50d27d9.png"
                    alt="sign">
                <img class="main-image" src="https://cdn.optimizely.com/img/25237771658/a65406aa45344ebda0ff64525dca1cec.jpg"
                    alt="">
            </div>
        </div>`)

        cart_footer.insertAdjacentHTML("beforeend", `<div class="opti-upsell-cart-page-mobile">
            <style>
                .opti-upsell-cart-page-mobile .heading {
                    font-family: TungstenSemibold;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 32px;
                    color: #000000;
                    padding-top: 30px;
                    margin-bottom: 9px;
                    border-top: 1px solid #DDDDDD;
                    margin-right: -24px;
                    margin-left: -24px;
                    padding-left: 24px;
                }
        
                .opti-upsell-cart-page-mobile .banner-image {
                    position: relative;
                    border-radius: 5px;
                    height: 106px;
                    margin-bottom: 18px;
                    background: black;
                    overflow: hidden;
                }
        
                .opti-upsell-cart-page-mobile .banner-image .sign-image {
                    position: absolute;
                    width: 108px;
                    height: 88px;
                    top: 8px;
                    left: 26px;
                    z-index: 11;
                }
        
                .opti-upsell-cart-page-mobile .banner-image .main-image {
                    position: absolute;
                    height: 171px;
                    right: -23%;
                    bottom: 3px;
                }
        
                .opti-upsell-cart-page-mobile a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    background: #000000;
                    color: white;
                    font-size: 18px;
                    line-height: 18px;
                    width: 100%;
                    height: 41px;
                }
        
                @media (min-width: 768px) {
                    .opti-upsell-cart-page-mobile .banner-image .main-image {
                        right: -12%;
                    }
                }
        
                @media (min-width: 1024px) {
                    .opti-upsell-cart-page-mobile {
                        display: none;
                    }
                }
            </style>
            <p class="heading">Become amember $9.99/Yr</p>
            <div class="banner-image">
                <img class="sign-image" src="https://cdn.optimizely.com/img/25237771658/2e1701e967e743e590dde630d50d27d9.png"
                    alt="sign">
                <img class="main-image" src="https://cdn.optimizely.com/img/25237771658/a65406aa45344ebda0ff64525dca1cec.jpg"
                    alt="">
            </div>
            <a href="https://creations.mattel.com/pages/hot-wheels-collectors-membership" class="btn">Join Now</a>
        </div>`)
    }
});