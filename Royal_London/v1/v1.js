var utils = optimizely.get('utils');

utils.waitForElement('#header').then(function (head) {
    head.style.borderBottom = "0px";
});

utils.waitForElement('#header .headercontainer .header__content').then(function (head_content) {
    head_content.style.paddingTop = "16px";
});

utils.waitForElement('#header .top-head-section').then(function (topHead) {
    topHead.style.display = "none";
});

utils.waitForElement('#header .mainnavcolumn .navbar').then(function (mainHead) {
    mainHead.style.display = "none";
    mainHead.parentElement.style.display = "flex";

    mainHead.parentElement.insertAdjacentHTML("afterbegin", `
        <div class="opti-back-to-main-site">
            <style>
                .opti-back-to-main-site {
                    margin-left: auto;
                    margin-top: auto;
                }

                .opti-back-to-main-site a {
                    width: 209px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 3px solid #6C3376;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 18px;
                    color: #6C3376;
                    background-color: white;
                    font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
                }

                .opti-back-to-main-site a:hover {
                    color: white;
                    background-color: #6C3376;
                }
            </style>
            <a href="https://www.royallondon.com/">Back to main site</a>
        </div>
    `);
});

utils.waitForElement('#main-content .breadcrumbs').then(function (breadcrumbs) {
    breadcrumbs.style.display = "none";
});

utils.waitForElement('#main-content .standardPage .content-heading').then(function (content_heading) {
    const d_block = content_heading.querySelector(".d-none");
    if (d_block) {
        d_block.style.display = "none";
        d_block.style.setProperty("display", "none", "important");
    }

    const page_heading = content_heading.querySelector(".page-heading");
    if (page_heading) {
        page_heading.style.display = "none";
    }

    content_heading.insertAdjacentHTML("afterbegin", `
        <div class="opti-page-heading">
            <style>
                .opti-page-heading {
                    padding: 0 0 0 15px;
                    margin-top: 46px;
                }

                .opti-page-heading h1 {
                    font-family: Grot10 Bold, Helvetica, Arial, sans-serif;
                    font-size: 61px;
                    font-weight: 700;
                    line-height: 70px;
                    color: #6C3376;
                }

                @media (max-width: 600px) {
                    .opti-page-heading h1 {
                        font-size: 43px;
                        line-height: 53px;
                    }

                    .opti-page-heading {
                        margin-top: 19px;
                    }
                }
            </style>
            <h1>Log in or register</h1>
        </div>
    `);
});

