document.addEventListener("DOMContentLoaded", (event) => {
    var w84 = optimizely.get('utils').waitForElement;

    var styles = `
      .checkout-product-line-item {
          cursor: pointer;
      }
      .checkout-line-items .checkout-product-line-item-details .name a, .checkout-line-items .checkout-product-line-item .stretched-link  {
          pointer-events: none;
      }
      .opt-tile-overlay {
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          height: calc(100% - 24px);
          width: calc(100% - 48px);
          background-color: white;
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          padding: 12px 24px;
          border-radius: 0.625rem;
      }
      [showTileOverlay=true] .opt-tile-overlay {
          visibility: visible;
          opacity: 1;
      }
      .opt-tile-overlay .ac-button {
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .ac-button.ac-button--checkout.opt-button {
          background-color: white;
          color: black;
          border-color: black;
          font-weight: 500;
      }
      .ac-button.ac-button--checkout.opt-button:hover {
          background-color: black;
          color: white;
      }
      .ac-button.ac-button--checkout.opt-cta-button:hover {
          background-color: #11284c !important;
          color: white;
      }
  `;

    document.body.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

    w84('.checkout-line-items .checkout-product-line-item .stretched-link').then(() => {
        var productLinks = document.querySelectorAll('.checkout-line-items .checkout-product-line-item .stretched-link');
        productLinks.forEach((link) => {
            link.parentNode.setAttribute('showTileOverlay', "false");
            link.parentNode.addEventListener('click', () => {
                setTimeout(() => {
                    link.parentNode.setAttribute('showTileOverlay', link.parentNode.getAttribute('showTileOverlay') == "true" ? "false" : "true");
                }, 100)
            });
            link.insertAdjacentHTML('afterend', `<div class="opt-tile-overlay">
              <div class="ac-button ac-button--checkout opt-cta-button">
                  Go Back to Bag and Edit Item
              </div>
              <div class="ac-button ac-button--checkout opt-button">
                  Continue Checkout
              </div>
          </div>`);
            link.parentNode.querySelector('.opt-tile-overlay').addEventListener('click', e => {
                e.stopPropagation();
            });
            link.parentNode.querySelector('.opt-tile-overlay .opt-button').addEventListener('click', () => {
                link.parentNode.setAttribute('showTileOverlay', "false");
            });
            link.parentNode.querySelector('.opt-tile-overlay .opt-cta-button').addEventListener('click', () => {
                sessionStorage.setItem('opt-product-tiles-click-link', link.href.split('/').pop());
                location.href = '/cart';
            });
        });
    });

    document.body.addEventListener('click', () => {
        document.querySelectorAll('[showTileOverlay=true]').forEach((el) => {
            el.setAttribute('showTileOverlay', "false");
        });
    });
});
