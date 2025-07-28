var utils = optimizelyEdge.get('utils');
var html = `
<div class="opt-container opt-hidden homepage">
<div class="opt-overlay"></div><div class="opt-modal">
<a class="opt-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" fill="none"><path d="M11 1L1 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M1 1L11 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></a>
  <div class="opt-header">
  	<span class="opt-main-heading">You want the best for them – but where do you start?</span>
    <span class="opt-subtitle">Our quick-start guide to senior care helps you start a conversation with family, explore care options, and plan for next steps with clarity and compassion.</span>
  </div>
  <div class="opt-form">
    <div class="opt-email opt-form-field">
      <input id="opt-email" type="text" class="opt-email" placeholder="Your email address" aria-label="Your email address" name="email">
      <span class="opt-error opt-hidden">Please enter a valid email address.</span>
     </div>
     <button class="opt-submit-button opt-disabled" disabled>Download the free guide</button>
     <div class="opt-disclaimer">By clicking "download free guide" you agree to receive A Place for Mom's caregiver newsletter and email communications. You can unsubscribe at any time.</div>
  </div>
</div>
</div>`;

function showError(validation, name) {
    var formContainer = document.querySelector('.opt-' + name);
    var formInput = formContainer.querySelector('input');
    var errorMessage = formContainer.querySelector('.opt-error');

    var submitButton = document.querySelector('.opt-submit-button');

    if (validation) {
        formInput.classList.add('opt-valid');
        submitButton.disabled = false;
        submitButton.classList.remove('opt-disabled');

        if (!errorMessage.classList.contains('opt-hidden')) {
            errorMessage.classList.add('opt-hidden');
            formInput.classList.remove('opt-invalid');
        }
    } else {
        if (errorMessage.classList.contains('opt-hidden')) {
            errorMessage.classList.remove('opt-hidden');
            formInput.classList.add('opt-invalid');
            formInput.classList.remove('opt-valid');

            submitButton.disabled = true;
            submitButton.classList.add('opt-disabled');
        }
    }
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    showError(regex.test(email), 'email');
}

function closeModal() {
    document.querySelector('.opt-container').classList.add('opt-hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
}

function submitModal() {
    var email = document.querySelector('.opt-form input[name=email]').value;

    try {
        var myForm = MktoForms2.allForms()[0];
        myForm.setValues({
            "Email": email,
        });
        myForm.submit();
    }
    catch (ex) {
        console.warn('opt-form-submit-issue');
    }

    var url = 'https://img.prod.aplaceformom.com/main/uploads/lh/quick-start-guide-to-finding-senior-care.pdf';
    var ref = window.open(url, '_blank');

    closeModal();
}

function showModal() {
    function getCookieByPattern(pattern) {
        const regex = new RegExp(`(^|;\\s*)(${pattern})=([^;]*)`);
        const match = document.cookie.match(regex);
        return match ? { name: match[2], value: decodeURIComponent(match[3]) } : null;
    }

    const cookiePattern = "DownloadModal";

    if (!getCookieByPattern(cookiePattern)) {

        window['optimizelyEdge'] = window['optimizelyEdge'] || [];
        window['optimizelyEdge'].push({
            type: "event",
            eventName: "download_guide___viewed_modal_homepage",
        });

        document.cookie = "DownloadModal=opened; expires=Thu, 31 Dec 2030 12:00:00 utc; path=/; domain=aplaceformom.com";
        MktoForms2.loadForm("//my.aplaceformom.com", "549-VJU-277", 1793);
        document.querySelector('.opt-container').classList.remove('opt-hidden');
        document.querySelector('body').classList.add('overflow-hidden');
    }
}

utils.waitForElement('body').then(function (body) {
    let timeoutPC;
    let timeoutPhone;
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!document.querySelector('.opt-modal')) {
        body.insertAdjacentHTML('beforeend', html);
    }

    utils.waitForElement('#opt-email').then(function (email) {
        email.addEventListener('input', function () {
            validateEmail(email.value);
        });
    });

    var submitButton = document.querySelector('.opt-submit-button');

    if (submitButton) {
        submitButton.addEventListener('click', function () {
            window['optimizelyEdge'] = window['optimizelyEdge'] || [];
            window['optimizelyEdge'].push({
                type: "event",
                eventName: "download_guide_-_cta_click_homepage",
            });

            submitModal();
        });
    }

    utils.waitForElement('.opt-close').then(function (close) {
        close.addEventListener('click', function () {
            closeModal();
        });
    });

    if (isMobile) {
        function resetTimer() {
            clearTimeout(timeoutPhone);

            timeoutPhone = setTimeout(function () {
                if (isMobile) {
                    window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                    window['optimizelyEdge'].push({
                        type: "event",
                        eventName: "mobile-eight-second",
                    });

                    showModal();
                }
            }, 8000);
        }

        window.addEventListener('touchstart', function () {
            resetTimer();
        });
        window.addEventListener('scroll', function () {
            resetTimer();
        });

        resetTimer();
    } else {
        // Desktop
        document.querySelector('body').addEventListener('mouseleave', function (e) {
            clearTimeout(timeoutPC);

            window['optimizelyEdge'] = window['optimizelyEdge'] || [];
            window['optimizelyEdge'].push({
                type: "event",
                eventName: "desktop-exit-intent",
            });

            timeoutPC = setTimeout(function () {
                if ((e.pageY - window.scrollY <= 10)) {
                    showModal();
                }
            }, 50);
        });
    }
});

function loadScript(url, callback) {

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript("//my.aplaceformom.com/js/forms2/js/forms2.min.js", function () { });