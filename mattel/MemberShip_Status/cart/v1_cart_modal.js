const utils = optimizely.get('utils');

utils.observeSelector('.mini-cart__inner', function (cart_section) {

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
        cart_section.insertAdjacentHTML("beforeend", `<div class="opti-upsell-section">
            <style>
                .opti-upsell-section {
                    width: 100%;
                    margin-top: 31px;
                }
        
                .opti-upsell-section .heading {
                    font-family: TungstenSemibold;
                    font-size: 36px;
                    line-height: 32px;
                    font-weight: 600;
                    color: #000000;
                    margin-bottom: 9px;
                    text-transform: uppercase;
                }
        
                .opti-upsell-section .heading span {
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    font-size: 20px;
                    line-height: 22px;
                    text-transform: none;
                }
        
                .opti-upsell-section .image {
                    position: relative;
                    height: 106px;
                    margin-bottom: 11px;
                    background-image: url(https://cdn.optimizely.com/img/25237771658/53e2560145af40928dff68949b43653b.png);
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: 5px;
                }
        
                .opti-upsell-section .image .sign-image {
                    width: 136px;
                    height: 63px;
                    position: absolute;
                    top: 20px;
                    left: 9px;
                }
        
                .opti-upsell-section .description .main-text {
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 16.9px;
                    color: #000000;
                    margin-bottom: 12px;
                }

                .opti-upsell-section .description ul {
                    list-style-position: outside;
                    padding-left: 15px;
                }
        
                .opti-upsell-section .description ul li {
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    font-weight: 500;
                    font-size: 12px;
                    color: #000000;
                }
        
                .opti-upsell-section .btn {
                    width: 100%;
                    height: 41px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    font-weight: 700;
                    font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
                    background: #000000;
                    color: white;
                    margin-top: 15px;
                }
            </style>
            <p class="heading">Join the Club <span>Only $9.99/year</span></p>
            <div class="image">
                <img class="sign-image" src="https://cdn.optimizely.com/img/25237771658/422bf76d4f304ce19564f0121a455791.png"
                    alt="sign">
            </div>
            <div class="description">
                <p class="main-text">Become a Member for Only $9.99/year</p>
                <ul>
                    <li>Get exclusive access to members-only dolls</li>
                    <li>Enjoy priority windows for select public sales</li>
                    <li>Go deeper with confidential content</li>
                    <li>Share your voice via member voting</li>
                </ul>
            </div>
            <a href="https://creations.mattel.com/pages/barbie-club59-membership" class="btn">Join Now</a>
        </div>`);
    } else if (bc_segments == "bc_affinity_hw") {
        cart_section.insertAdjacentHTML("beforeend", `<div class="opti-upsell-section">
    <style>
        .opti-upsell-section {
            width: 100%;
            margin-top: 31px;
        }

        .opti-upsell-section .heading {
            font-family: TungstenSemibold;
            font-size: 36px;
            line-height: 32px;
            font-weight: 600;
            color: #000000;
            margin-bottom: 9px;
            text-transform: uppercase;
        }

        .opti-upsell-section .heading span {
            font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
            font-size: 20px;
            line-height: 22px;
            text-transform: none;
        }

        .opti-upsell-section .image {
            position: relative;
            height: 106px;
            margin-bottom: 11px;
            background-image: url(https://cdn.optimizely.com/img/25237771658/a65406aa45344ebda0ff64525dca1cec.jpg);
            background-size: cover;
            background-position: 74px bottom;
            background-repeat: no-repeat;
            background-color: black;
            border-radius: 5px;
        }

        .opti-upsell-section .image .sign-image {
            position: absolute;
            width: 108px;
            height: 88px;
            top: 8px;
            left: 26px;
        }

        .opti-upsell-section .description .main-text {
            font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 16.9px;
            color: #000000;
            margin-bottom: 12px;
        }

        .opti-upsell-section .description ul {
            list-style-position: outside;
            padding-left: 15px;
        }

        .opti-upsell-section .description ul li {
            font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
            font-weight: 500;
            font-size: 12px;
            color: #000000;
        }

        .opti-upsell-section .btn {
            width: 100%;
            height: 41px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: 700;
            font-family: HelveticaNeueLTPro-Bd, Arial, sans-serif;
            background: #000000;
            color: white;
            margin-top: 15px;
        }
    </style>
    <p class="heading">Join the Club <span>Only $9.99/year</span></p>
    <div class="image">
        <img class="sign-image" src="https://cdn.optimizely.com/img/25237771658/2e1701e967e743e590dde630d50d27d9.png"
            alt="sign">
    </div>
    <div class="description">
        <p class="main-text">Become a Member for Only $9.99/year</p>
        <ul>
            <li>Get exclusive access to products, forums and more.</li>
            <li>Vote on new collectible releases created for members.</li>
            <li>Get exclusive behind-the-scenes content and experiences.</li>
        </ul>
    </div>
    <a href="https://creations.mattel.com/pages/hot-wheels-collectors-membership" class="btn">Join Now</a>
</div>`);
    }

});

utils.observeSelector('.opti-upsell-section .btn', function (cart_modal_join_btn) {
    cart_modal_join_btn.addEventListener('click', function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
            type: "event",
            eventName: "join_now_clicks_-_aggregate",
        });
    });
});