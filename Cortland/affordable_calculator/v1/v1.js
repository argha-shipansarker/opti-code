var utils = window.optimizely.get('utils');

var jsonData;
var budgetAmount;
var communityLink;
var communityName;
utils.waitForElement('.header-layout-2 .page-banner').then(function (hero) {
    hero.insertAdjacentHTML('afterend', '<style>.optJustifyCenter{justify-content: center;}.optSelectBudgetMethod{position: relative;}.optSelectBudgetMethod.form__faux-select, .optSelectBudgetMethodLabel{outline: none !important;}.optSelectBudgetMethod .form__label--infield{left: auto;}.optStep2 .form__faux-select-option{position: relative; /*padding: 10px 15px;*/ border-bottom: 0.831939px solid rgb(203, 215, 241); margin: 0 !important;}.optStep2 .form__faux-select-option:last-of-type{border-bottom: none;}.optSelectBudgetMethod .form__faux-select-option-label::before{content: none !important;}.optSelectBudgetMethod .form__faux-select-options{padding: 0; background: white; top: calc(100% - 5px); top: 100%; border: 0.831939px solid rgb(203, 215, 241); left: -1px; right: -1px; width: auto; border-bottom-left-radius: 8.31939px; border-bottom-right-radius: 8.31939px;}.optSelectBudgetMethodLabel{border: 0; background: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none; height: 60px; width: 100%; vertical-align: middle; padding: 0 20px; height: 35px; line-height: 30px; padding: 2px 15px; box-shadow: none; position: relative; z-index: 2; padding-right: 40px;}.optCalculator .optMySpecialSelect.active{border-bottom-left-radius: 0; border-bottom-right-radius: 0;}.optSelectBudgetMethodLabel .form__faux-select-title{font-weight: 400; font-size: 12px; line-height: 20px; color: #043174;}.optSelectBudgetMethodLabel .form__faux-select-title.active{display: none;}.optSelectBudgetMethod .form__faux-select-values{padding-top: 0px;}.optSelectBudgetMethod .form__faux-select-option-label{cursor: pointer; padding: 10px 15px; display: inline-block; width: 100%;}.optSelectBudgetMethodLabel .form__faux-select-values{font-weight: 400; font-size: 12px; line-height: 30px; color: #043174;}.optSelectBudgetMethodLabel.form__column--select::after{content: none !important;}.floorplan-filter:only-child{margin-top: 15px;}.optFlex{display: flex;}.optStep1 .optFlex{margin-bottom: 20px;}.optStep1 .optFlex .optLeft{text-align: left; flex: 1;}.optStep1 .optFlex .optRight{display: flex; flex-direction: column-reverse;}.optNotVisible{visibility: hidden;}.optErrorMsg{color: #F31300; font-size: 15px; margin-bottom: 10px; text-align: left;}.ts__form-row--select.optError, .optMySpecialSelect.optError{border-color: #F31300 !important;}input.optError{border-color: #F31300 !important;}.optRadio.optError .optRadioEmpty circle{stroke: #F31300;}.ts__form-column--select::after, .ts__form-row--select::after, .optMySpecialSelect::after{width: 45px !important; cursor: pointer; background: white no-repeat center center / 13px 16px !important; border-radius: 50px; background-size: 20px 10px !important; background-image: url(\'data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="none"> <path d="M21.4448 1.01819L11.411 11.0015L1.37708 1.01819" stroke="%23789BD0" stroke-width="1.66388" stroke-linecap="round" stroke-linejoin="round"/> </svg> \') !important;}.optCalculator{max-width: 880px; margin: auto; background: #FFFFFF; box-shadow: 0px 1.60304px 7.21369px rgba(57, 68, 124, 0.25); border-radius: 20.038px; margin-top: 30px; width: 95%; position: relative; z-index: 1;}.optCalculator .optStep1 h1{font-style: normal; font-weight: 400; font-size: 15px; line-height: 29px; color: #224181; margin-bottom: 0px;}.optCalculator .optStep1 h2{font-style: normal; font-weight: 300; font-size: 16px; line-height: 29px; color: #043174;}.optCalculator .optStep1{text-align: center; padding: 25px 50px;}.optCalculator .optStep1 .optSteps{display: flex; justify-content: center; margin-bottom: 30px;}.optCalculator .optStep1 .optSteps .optStep{text-align: left; max-width: 213px; margin-right: 40px; flex: 1;}.optCalculator .optStep1 .optSteps .optStep svg{margin-right: 20px; width: 40px; height: 40px; float: left;}.optCalculator .optStep1 .optSteps .optStep .optCopy{font-weight: 400; font-size: 14px; line-height: 16px; color: #224181; display: block;}.optCalculator .optGetStarted, .optCTA.optCalculateRent, .optCTA.optStartOver{background: #7FAB1C; border-radius: 31.2804px; font-weight: 600; font-size: 12px; line-height: 25px; color: white; width: 200px; margin-bottom: 0px; cursor: pointer; height: 35px; line-height: 35px;}.optCTA.optStartOver{margin: auto; background-color: #043174; margin-bottom: 30px; margin-top: 60px;}.optCalculator .optStep1 > .optCopy, .optCalculator .optDisclamer{font-style: italic; font-weight: 400; font-size: 7px; line-height: 15px; text-align: center; color: #636363; margin: auto; text-align: left;}.optShowDisclamer .optCloseD{display: inline;}.optShowDisclamer .optShowD{display: none;}.optShowDisclamer.optClosed .optCloseD{display: none;}.optShowDisclamer.optClosed .optShowD{display: inline;}.optCalculator .optStep2, .optCalculator .optStep3{display: none;}.optCalculator.step2 .optStep1, .optCalculator.step2 .optStep3{display: none;}.optCalculator.step2 .optStep2{display: block;}.optCalculator.step3 .optStep2, .optCalculator.step3 .optStep1{display: none;}.optCalculator.step3 .optStep3{display: block;}/*step2*/ .optCalculator .optClose{cursor: pointer; position: absolute; top: 40px; left: 140px;}.optCalculator .optStep2{text-align: center; padding: 25px 30px; position: relative;}.optCalculator .optStep2 .optClearAll{cursor: pointer; position: absolute; top: 40px; right: 140px; text-decoration: underline; font-weight: 400; font-size: 17.4707px; line-height: 30px; color: #043174;}.optCalculator .optStep2 h1{margin-bottom: 10px; font-style: normal; font-weight: 400; font-size: 15px; line-height: 18px; color: #224181; text-align: left; white-space: nowrap;}.optCalculator .optStep2 h2{font-style: italic; font-weight: 400; font-size: 14.9749px; line-height: 30px; color: #224181; margin-bottom: 30px;}.optCalculator .optStep2 .optTable{display: flex; justify-content: space-between; margin-bottom: 17px;}.optCalculator .optStep2 .optTable .optColumn{flex-basis: 45%; display: flex; flex-direction: column; justify-content: flex-end; margin-right: 15px;}.optCalculator .optStep2 .optTable .optColumn:last-of-type{margin-right: 0;}.optCalculator .optStep2 .optTable .optColumn .optLabel{font-weight: 400; font-size: 11px; line-height: 20px; color: #043174; text-align: left; margin-bottom: 5px;}.optCalculator .optStep2 h3{font-weight: 600; font-size: 17px; line-height: 30px; text-align: center; color: #043174; margin-bottom: 25px; margin-top: 30px;}.optCalculator .optStep2 .optRadios{display: flex; justify-content: center; margin-bottom: 45px;}.optCalculator .optStep2 .optRadios .optRadio{position: relative; margin-right: 20px; padding-left: 30px; line-height: 26px; font-style: normal; font-weight: 400; font-size: 17px; color: #224181; cursor: pointer; padding-right: 20px;}.optCalculator .optStep2 .optRadios .optRadio svg{}.optCalculator .optStep2 .optRadios .optRadio .optRadioEmpty{position: absolute; left: 0; cursor: pointer; width: 25px; height: 25px;}.optCalculator .optStep2 .optRadios .optRadio .optRadioFill{display: none; position: absolute; left: 4px; top: 4px; width: 18px; height: 17px;}.optCalculator .optStep2 .optRadios .optRadio.selected .optRadioFill{display: block;}.optCalculator .optStep2 .optHint{position: absolute; right: 10px; cursor: pointer; height: 10px; width: 10px; top: 50%; transform: translateY(-50%);}.optCalculator .optStep2 .optHint.show{z-index: 1002;}.optCalculator .optStep2 .optHint .optHintModal{display: none; background: white; position: absolute; border: 0.801658px solid rgba(11, 23, 129, 0.12); box-shadow: 0px 3.20663px 7.21492px rgba(68, 70, 104, 0.15); width: 370px; text-align: left; z-index: 10; top: calc(100% + 25px); right: -44px; cursor: default;}.optCalculator .optStep2 .optHint.show .optHintModal{display: block;}/*.optCalculator .optStep2 .optRadios .optHint.show .optHintModal:before, .optCalculator .optStep2 .optRadios .optHint.show .optHintModal:after{bottom: 100%; left: 50px; border: solid transparent; content: ""; height: 0; width: 0; position: absolute; pointer-events: none;}.optCalculator .optStep2 .optRadios .optHint.show .optHintModal:before{border-color: rgba(68, 70, 104, 0); border-bottom-color: #44466826; border-width: 31px; margin-left: -31px;}.optCalculator .optStep2 .optRadios .optHint.show .optHintModal:after{border-color: rgba(255, 255, 255, 0); border-bottom-color: #ffffff; border-width: 30px; margin-left: -30px;}*/ /*.optCalculator .optStep2 .optRadios .optHint.show .optHintModal:after{content: ""; height: 100%; width: 100%; border-radius: 4px; position: absolute; top: 0; left: 0; box-shadow: 0 1px 14px rgba(0,0,0,.2);}*/ .optCalculator .optStep2 .optHint.show .optHintModal:before{content: ""; width: 40px; height: 40px; transform: rotate(45deg); background: #fff; position: absolute; z-index: 998; border: 0.801658px solid rgba(11, 23, 129, 0.12); box-shadow: 0px 3.20663px 7.21492px rgba(68, 70, 104, 0.15);}.optCalculator .optStep2 .optHint.show .optHintModal:before{right: 28px; top: -15px;}.optCalculator .optStep2 .optHint .optHintModal .optHR{width: 100%; height: 1px; background-color: #B3B3B3;}.optCalculator .optStep2 .optHint .optHintModal .optModalTitle{font-weight: 500; font-size: 12px; line-height: 20px; text-align: center; color: #043174; padding: 10px 15px; text-align: left; z-index: 998; position: relative; background: white;}.optCalculator .optStep2 .optHint .optHintModal .optBody{font-weight: 300; font-size: 12px; line-height: 20px; color: #043174; padding: 7px 15px;}.optCalculator .optStep2 .optHint .optHintModal .optModalClose{position: absolute; right: 19px; top: 13px; cursor: pointer; z-index: 999;}.optCalculator .optStep2 input.optTotalAmount{font-weight: 400; font-size: 12px; line-height: 30px; color: #224181; border: 0.831939px solid #CBD7F1; border-radius: 8.31939px; padding: 2px 15px;}.optCalculator .optStep2 input.optHideMobile{display: inline-block;}/*.optCTA.optCalculateRent{background: #043174; border-radius: 69.6082px; width: 245px; margin: auto; height: 50px; color: white; line-height: 50px; font-size: 14.6177px; margin-bottom: 15px; cursor: pointer;}*/ .optCTA.optCalculateRent.disabled{color: #043074; background-color: #f5f5f5; cursor: default; opacity: .5;}.optHide{display: none !important;}.optCalculator .optShowDisclamer,.optResQual{font-weight: 300; font-size: 11px; line-height: 10px; text-decoration-line: underline; color: #002D72; cursor: pointer; display: inline; display: flex; justify-content: center; flex-direction: column; margin-left: 20px;}.optCalculator .optStep3 .optShowDisclamer, .optCalculator .optStep3 .optResQual{margin-left: 0; margin-top: 20px;}.optCalculator .optStep3 .optResQual{margin-left: 0; margin-right: 20px;}.optCalculator .ts__form-field--select{font-weight: 400; font-size: 12px; line-height: 30px; color: #043174; padding: 2px 15px; height: auto;}.optCalculator .ts__form-row--select, .optMySpecialSelect{border: 0.831939px solid #CBD7F1; border-radius: 8.31939px; max-width: 400px; overflow: visible;}.optCalculator .optStep3{text-align: center; padding: 25px 60px; position: relative;}.optCalculator .optStep3 .optClose{cursor: pointer; position: absolute; top: 23px; left: 20px; color: #043174; font-size: 17.262px;}.optCalculator .optStep3 .optClose svg{margin-right: 5px; top: 1px; position: relative;}.optCalculator .optStep3 h1{color: #224181; text-align: left; font-size: 15px; font-weight: 300; margin-bottom: 30px; line-height: 18px; margin-left: 7px;}.optCalculator .optStep3 h1 .optUpToAmount{font-weight: 500; font-size: 15px;}.optCalculator .optStep3 h3{color: #224181; text-align: left; font-size: 15px; font-weight: 400; margin-bottom: 15px;}.optCalculator .optStep3 .optNoResultsMsg{text-align: left; color: #224181; text-align: center; font-size: 17px; font-weight: 300; line-height: 31.072px; margin-bottom: 40px; color: #224181; text-align: left; font-size: 15px; font-weight: 300; margin-bottom: 20px; line-height: 27px;}.optCTA.optViewAll, .optCTA.optGoToApartment{background: #043174; border-radius: 69.6082px; width: 245px; margin: auto; height: 50px; color: white; line-height: 50px; font-size: 18px; margin-bottom: 25px; cursor: pointer;}.optCalculator .optResults{/*display: flex; overflow-y: hidden;*/}.optCalculator .optResultTile{box-shadow: 0px 2.7879130840301514px 9.29304313659668px 0px rgba(25, 64, 133, 0.25); padding: 15px; margin: 5px; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;}.optCalculator .optResultTile > a{color: #194085;}.optCalculator .optResultTile .optHeader{display: flex;}.optCalculator .optResultTile .optHeader .optLeft{text-align: left;}.optCalculator .optResultTile .optHeader .optLeft h1{text-align: left; color: #194085; font-size: 18.572px; font-style: normal; font-weight: 600; letter-spacing: 0.427px; margin-bottom: 0; margin-left: 0;}.optCalculator .optResultTile .optHeader .optRight{}.optCalculator .optResultTile .optMainImage{margin: 40px 0;}.optCalculator .optResultTile .optMainImage img{max-width: 100%;}.optCalculator .optResultTile .optFooter{display: flex; justify-content: space-between;}.optCalculator .optResultTile .optFooter .optLeft{text-align: left; display: flex; flex-direction: column; justify-content: center;}.optCalculator .optResultTile .optFooter .optCTA.optViewAll, .optCalculator .optResultTile .optFooter .optCTA.optGoToApartment{width: 130px; font-size: 12px; height: 30px; line-height: 30px; margin-bottom: 0; display: block;}.optHideMobile{display: block;}.optShowMobile{display: none !important;}@media (max-width: 1024px){.optCalculator .optStep1, .optCalculator .optStep2, .optCalculator .optStep3{padding-left: 70px; padding-right: 70px;}}@media(max-width: 767px){/*.optCalculator .optStep3 .optNoResultsMsg{text-align: justify;}*/ .optHideMobile{display: none !important;}.optShowMobile{display: block !important;}.optCalculator .optStep1, .optCalculator .optStep2, .optCalculator .optStep3{padding-left: 25px; padding-bottom: 10px; padding-right: 25px;}.optCalculator .optStep1, .optCalculator .optStep2{padding-top: 10px;}.optCalculator .optStep3{padding-top: 20px;}.optCalculator .optResults .nearby-communities__nav{display: none !important;}.optDownArrow{text-align: center;}.optDownArrow svg{cursor: pointer;}.optCalculator .optStep1 h1{/*font-size: 13px; font-style: normal; font-weight: 600; line-height: 20px; margin-bottom: 15px;*/}.optCalculator .optStep2 .optClose{top: 15px; left: auto; right: 20px;}.optCalculator .optStep2 h1{font-size: 12px; font-weight: 400; line-height: 14px; margin-bottom: 23px; text-align: center;}.optCalculator .optStep2 .optTable{flex-direction: column; margin-bottom: 0;}.optCalculator .optStep2 .optTable .optColumn:first-of-type{margin-bottom: 20px;}.optCalculator .optStep2 h3{font-size: 21px; font-style: normal; font-weight: 400; text-align: left;}.optCalculator .optStep2 .optRadios{flex-direction: column; margin-bottom: 15px;}.optCalculator .optStep2 .optRadios .optRadio{margin-bottom: 15px; text-align: left; font-size: 16px; font-style: normal; font-weight: 400; padding-right: 0; margin-right: 0;}/*.optCalculator .optStep2 .optRadios .optRadio:last-of-type{margin-bottom: 0;}*/ .optCalculator .optStep2 .optRadios .optRadio .optRadioEmpty{width: 18px; height: 18px; top: 5px;}.optCalculator .optStep2 .optRadios .optRadio .optRadioFill{left: 4px; top: 9px; width: 11px; height: 10px;}.optCalculator .optStep2 input{width: 100%; max-width: none; margin-bottom: 15px;}.optCalculator .optStep3 .optClose{top: 15px;}.optCalculator .optStep3 .optClose2{cursor: pointer; position: absolute; top: 40px; left: 5%; color: #043174; font-size: 17.262px; top: 15px; left: auto; right: 20px;}.optCalculator .owl-carousel .owl-dots button.owl-dot span{height: 4px; width: 78px; background-color: #E2E8F4;}.optCalculator .owl-theme .owl-dots .owl-dot.active span, .optCalculator .owl-theme .owl-dots .owl-dot:hover span{background-color: #718ECC !important;}.optCalculator .optStep3 h2{font-size: 35px; margin-bottom: 20px;}.optNoResultsIcon{margin: 30px auto 35px auto;}.optCalculator .optStep1 .optSteps{flex-direction: column;}.optCalculator .optStep1 .optSteps .optStep{max-width: 100%; margin-right: 0; margin-bottom: 10px;}.optCalculator .optStep2 .optHint .optHintModal{left: -335px;}.optCalculator .optStep2 .optHint.show .optHintModal:before, .optCalculator .optStep2 .optHint.show .optHintModal:after{left: auto; right: 8px;}.optCalculator .optStep2 .optClearAll{position: static; text-align: left;}.optFlex{flex-direction: column;}.optFlex .optLeft, .optFlex .optRight{text-align: center !important;}.optCalculator .optDisclamer{text-align: center !important;}.optCalculator .optStep1 h2{margin-bottom: 15px;}.optCalculator .optStep1 h1, .optCalculator .optStep1 h2{font-size: 12px;}.optCalculator .optGetStarted, .optCTA.optCalculateRent{width: 135px; margin: auto;}.optCalculator .optStep2 .optTable .optColumn{margin-right: 0; margin-bottom: 20px;}.optCalculator .optStep2 .optTable .optColumn:last-of-type{margin-bottom: 0;}.optCTA.optCalculateRent{margin-bottom: 20px;}.optCalculator{margin: 0; border-radius: 0; width: 100%; background-color: #F4F4F4; padding-top: 10px; padding-bottom: 20px; box-shadow: none;}.optCalculator .optStep1, .optCalculator .optStep2, .optCalculator .optStep3{background: white; box-shadow: 0px 1.60304px 7.21369px rgba(57, 68, 124, 0.25);}.optCalculator .optStep3 h3{font-size: 12px; text-align: center;}.optCalculator .optStep3 h1{font-weight: 400; text-align: center;}.optCalculator .optStep3 h1 .optUpToAmount{display: block; text-align: center; font-size: 25px; margin-top: 10px;}.optCTA.optGoToApartment{width: 200px !important;}.optCalculator .optStep3 .optNoResultsMsg{font-weight: 400; text-align: center;}}</style><div class="optCalculator optStep1"> <div class="optStep1"> <div class="optFlex"> <div class="optLeft"> <h1> How much rent can I afford? </h1> <h2>Use our calculator to figure out which homes fit your needs and budget!</h2> </div><div class="optRight"> <div class="optCTA optGetStarted">Calculate Rent</div></div></div><div class="optCopy optDisclamer"> The results from use of the Affordability Calculator are only a reference tool for your convenience; use of the Affordability Calculator is neither an application for housing nor an approval or denial of any application for housing. Any response from use of the Affordability Calculator is not a guarantee of a successful rental application for any Cortland community. Evaluation of complete applications involves verification and consideration of many factors other than income. Please submit a completed application to be considered for the housing advertised on this site. Cortland is an Equal Housing Opportunity provider. Cortland gladly accepts rental assistance payments as required by state or local law. Please note if you intend to use any kind of third-party assistance for your rent payment (including Section 8 housing choice vouchers), the Affordability Calculator will not give you an accurate estimate of whether you will income qualify for any Cortland community. You must contact us directly if you have questions about sufficiency of income when using rental assistance. </div><!--<div class="optDownArrow optShowMobile"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"> <path d="M1 1L9 9L17 1" stroke="#224181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg> </div>--> </div><div class="optStep2"> <div class="optClose optHide"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M1.21359 0.911345C1.31293 0.811755 1.43094 0.732741 1.56086 0.678829C1.69078 0.624918 1.83006 0.597168 1.97073 0.597168C2.11139 0.597168 2.25067 0.624918 2.3806 0.678829C2.51052 0.732741 2.62853 0.811755 2.72787 0.911345L8.38715 6.57277L14.0464 0.911345C14.1459 0.811916 14.2639 0.733045 14.3938 0.679234C14.5237 0.625424 14.663 0.597728 14.8036 0.597728C14.9442 0.597728 15.0834 0.625424 15.2133 0.679234C15.3432 0.733045 15.4613 0.811916 15.5607 0.911345C15.6601 1.01077 15.739 1.12881 15.7928 1.25872C15.8466 1.38863 15.8743 1.52787 15.8743 1.66848C15.8743 1.8091 15.8466 1.94833 15.7928 2.07824C15.739 2.20815 15.6601 2.32619 15.5607 2.42562L9.89928 8.0849L15.5607 13.7442C15.6601 13.8436 15.739 13.9616 15.7928 14.0916C15.8466 14.2215 15.8743 14.3607 15.8743 14.5013C15.8743 14.6419 15.8466 14.7812 15.7928 14.9111C15.739 15.041 15.6601 15.159 15.5607 15.2585C15.4613 15.3579 15.3432 15.4368 15.2133 15.4906C15.0834 15.5444 14.9442 15.5721 14.8036 15.5721C14.663 15.5721 14.5237 15.5444 14.3938 15.4906C14.2639 15.4368 14.1459 15.3579 14.0464 15.2585L8.38715 9.59704L2.72787 15.2585C2.62844 15.3579 2.5104 15.4368 2.38049 15.4906C2.25058 15.5444 2.11134 15.5721 1.97073 15.5721C1.83011 15.5721 1.69088 15.5444 1.56097 15.4906C1.43106 15.4368 1.31302 15.3579 1.21359 15.2585C1.11416 15.159 1.03529 15.041 0.98148 14.9111C0.92767 14.7812 0.899974 14.6419 0.899974 14.5013C0.899974 14.3607 0.92767 14.2215 0.98148 14.0916C1.03529 13.9616 1.11416 13.8436 1.21359 13.7442L6.87501 8.0849L1.21359 2.42562C1.114 2.32628 1.03499 2.20827 0.981075 2.07835C0.927164 1.94843 0.899414 1.80915 0.899414 1.66848C0.899414 1.52782 0.927164 1.38854 0.981075 1.25861C1.03499 1.12869 1.114 1.01068 1.21359 0.911345Z" fill="#043174"/> </svg> </div><div class="optClearAll optHide">Clear All</div><div class="optTable"> <div class="optColumn"> <h1> How much rent can I afford? </h1> <div class="optLabel"> Total Occupants </div><div class="ts__form-row--select"> <select class="optTotalOccupants ts__form-field ts__form-field--select ts__form-field--placeholder active"> <option>Select Option</option> <option value="1"> 1 </option> <option value="2"> 2 </option> <option value="3"> 3 </option> <option value="4+"> 4+ </option> </select> </div></div><div class="optColumn"> <div class="optLabel"> I want to live in a </div><div class="ts__form-row--select"> <select class="optBedrooms ts__form-field ts__form-field--select ts__form-field--placeholder active"> <option value="1"> fill bedroom options! </option> </select> </div></div><div class="optColumn"> <div class="optLabel"> Please select which method you would like to use to determine your budget </div><div class="optMySpecialSelect ts__form-row--select"> <div class="optSelectBudgetMethod" data-target="tsBedrooms"> <button type="button" class="optSelectBudgetMethodLabel" > <div class="form__faux-select-title form__label form__label--infield" >Select option</div><div class="form__faux-select-values form__select-value" ></div></button> <div class="form__faux-select-options multiple" style="display:none" role="group" aria-label="Bedrooms"> <div data-value="1" class="form__faux-select-option"> <input type="radio" class="form__faux-select-option-checkbox" name="optSelectBudgetMethodRadio" id="optSelectBudgetMethod1" value="1" data-di-field-id="bedrooms"> <label class="form__faux-select-option-label" for="optSelectBudgetMethod1"> <span>Total Household Monthly Gross Income</span> </label> <div class="optHint"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"> <path d="M4.5 7.5H5.5V4.5H4.5V7.5ZM5 3.5C5.14167 3.5 5.2605 3.452 5.3565 3.356C5.4525 3.26 5.50033 3.14133 5.5 3C5.5 2.85833 5.452 2.73967 5.356 2.644C5.26 2.54833 5.14133 2.50033 5 2.5C4.85833 2.5 4.73967 2.548 4.644 2.644C4.54833 2.74 4.50033 2.85867 4.5 3C4.5 3.14167 4.548 3.2605 4.644 3.3565C4.74 3.4525 4.85867 3.50033 5 3.5ZM5 10C4.30833 10 3.65833 9.86867 3.05 9.606C2.44167 9.34333 1.9125 8.98717 1.4625 8.5375C1.0125 8.0875 0.656333 7.55833 0.394 6.95C0.131667 6.34167 0.000333333 5.69167 0 5C0 4.30833 0.131333 3.65833 0.394 3.05C0.656667 2.44167 1.01283 1.9125 1.4625 1.4625C1.9125 1.0125 2.44167 0.656333 3.05 0.394C3.65833 0.131667 4.30833 0.000333333 5 0C5.69167 0 6.34167 0.131333 6.95 0.394C7.55833 0.656667 8.0875 1.01283 8.5375 1.4625C8.9875 1.9125 9.34383 2.44167 9.6065 3.05C9.86917 3.65833 10.0003 4.30833 10 5C10 5.69167 9.86867 6.34167 9.606 6.95C9.34333 7.55833 8.98717 8.0875 8.5375 8.5375C8.0875 8.9875 7.55833 9.34383 6.95 9.6065C6.34167 9.86917 5.69167 10.0003 5 10Z" fill="#718ECC"/> </svg> <div class="optHintModal"> <div class="optModalClose"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M1.00733 1.00538C1.10305 0.909413 1.21677 0.833275 1.34196 0.781326C1.46715 0.729376 1.60137 0.702637 1.73691 0.702637C1.87245 0.702637 2.00667 0.729376 2.13186 0.781326C2.25705 0.833275 2.37077 0.909413 2.46649 1.00538L7.91978 6.46073L13.3731 1.00538C13.4689 0.909568 13.5826 0.833568 13.7078 0.781716C13.833 0.729864 13.9672 0.703176 14.1027 0.703176C14.2382 0.703176 14.3723 0.729864 14.4975 0.781716C14.6227 0.833568 14.7364 0.909568 14.8322 1.00538C14.928 1.10119 15.004 1.21493 15.0559 1.34011C15.1077 1.46529 15.1344 1.59946 15.1344 1.73496C15.1344 1.87045 15.1077 2.00462 15.0559 2.1298C15.004 2.25498 14.928 2.36873 14.8322 2.46454L9.37688 7.91783L14.8322 13.3711C14.928 13.4669 15.004 13.5807 15.0559 13.7059C15.1077 13.831 15.1344 13.9652 15.1344 14.1007C15.1344 14.2362 15.1077 14.3704 15.0559 14.4955C15.004 14.6207 14.928 14.7345 14.8322 14.8303C14.7364 14.9261 14.6227 15.0021 14.4975 15.0539C14.3723 15.1058 14.2382 15.1325 14.1027 15.1325C13.9672 15.1325 13.833 15.1058 13.7078 15.0539C13.5826 15.0021 13.4689 14.9261 13.3731 14.8303L7.91978 9.37493L2.46649 14.8303C2.37068 14.9261 2.25694 15.0021 2.13176 15.0539C2.00657 15.1058 1.87241 15.1325 1.73691 15.1325C1.60141 15.1325 1.46725 15.1058 1.34206 15.0539C1.21688 15.0021 1.10314 14.9261 1.00733 14.8303C0.911521 14.7345 0.835521 14.6207 0.783669 14.4955C0.731817 14.3704 0.705129 14.2362 0.705129 14.1007C0.705129 13.9652 0.731817 13.831 0.783669 13.7059C0.835521 13.5807 0.911521 13.4669 1.00733 13.3711L6.46269 7.91783L1.00733 2.46454C0.911366 2.36881 0.835228 2.2551 0.783279 2.12991C0.731329 2.00471 0.70459 1.8705 0.70459 1.73496C0.70459 1.59941 0.731329 1.4652 0.783279 1.34001C0.835228 1.21482 0.911366 1.1011 1.00733 1.00538Z" fill="#043174"/> </svg> </div><div class="optModalTitle">Monthly Gross Income</div><div class="optHR"></div><div class="optBody"> Budgets will be determined by dividing the monthly gross income by 3.</div></div></div></div><div data-value="2" class="form__faux-select-option"> <input type="radio" class="form__faux-select-option-checkbox" name="optSelectBudgetMethodRadio" id="optSelectBudgetMethod2" value="2" data-di-field-id="bedrooms"> <label class="form__faux-select-option-label" for="optSelectBudgetMethod2"> <span>Household Savings</span> </label> <div class="optHint"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"> <path d="M4.5 7.5H5.5V4.5H4.5V7.5ZM5 3.5C5.14167 3.5 5.2605 3.452 5.3565 3.356C5.4525 3.26 5.50033 3.14133 5.5 3C5.5 2.85833 5.452 2.73967 5.356 2.644C5.26 2.54833 5.14133 2.50033 5 2.5C4.85833 2.5 4.73967 2.548 4.644 2.644C4.54833 2.74 4.50033 2.85867 4.5 3C4.5 3.14167 4.548 3.2605 4.644 3.3565C4.74 3.4525 4.85867 3.50033 5 3.5ZM5 10C4.30833 10 3.65833 9.86867 3.05 9.606C2.44167 9.34333 1.9125 8.98717 1.4625 8.5375C1.0125 8.0875 0.656333 7.55833 0.394 6.95C0.131667 6.34167 0.000333333 5.69167 0 5C0 4.30833 0.131333 3.65833 0.394 3.05C0.656667 2.44167 1.01283 1.9125 1.4625 1.4625C1.9125 1.0125 2.44167 0.656333 3.05 0.394C3.65833 0.131667 4.30833 0.000333333 5 0C5.69167 0 6.34167 0.131333 6.95 0.394C7.55833 0.656667 8.0875 1.01283 8.5375 1.4625C8.9875 1.9125 9.34383 2.44167 9.6065 3.05C9.86917 3.65833 10.0003 4.30833 10 5C10 5.69167 9.86867 6.34167 9.606 6.95C9.34333 7.55833 8.98717 8.0875 8.5375 8.5375C8.0875 8.9875 7.55833 9.34383 6.95 9.6065C6.34167 9.86917 5.69167 10.0003 5 10Z" fill="#718ECC"/> </svg> <div class="optHintModal"> <div class="optModalClose"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M1.00733 1.00538C1.10305 0.909413 1.21677 0.833275 1.34196 0.781326C1.46715 0.729376 1.60137 0.702637 1.73691 0.702637C1.87245 0.702637 2.00667 0.729376 2.13186 0.781326C2.25705 0.833275 2.37077 0.909413 2.46649 1.00538L7.91978 6.46073L13.3731 1.00538C13.4689 0.909568 13.5826 0.833568 13.7078 0.781716C13.833 0.729864 13.9672 0.703176 14.1027 0.703176C14.2382 0.703176 14.3723 0.729864 14.4975 0.781716C14.6227 0.833568 14.7364 0.909568 14.8322 1.00538C14.928 1.10119 15.004 1.21493 15.0559 1.34011C15.1077 1.46529 15.1344 1.59946 15.1344 1.73496C15.1344 1.87045 15.1077 2.00462 15.0559 2.1298C15.004 2.25498 14.928 2.36873 14.8322 2.46454L9.37688 7.91783L14.8322 13.3711C14.928 13.4669 15.004 13.5807 15.0559 13.7059C15.1077 13.831 15.1344 13.9652 15.1344 14.1007C15.1344 14.2362 15.1077 14.3704 15.0559 14.4955C15.004 14.6207 14.928 14.7345 14.8322 14.8303C14.7364 14.9261 14.6227 15.0021 14.4975 15.0539C14.3723 15.1058 14.2382 15.1325 14.1027 15.1325C13.9672 15.1325 13.833 15.1058 13.7078 15.0539C13.5826 15.0021 13.4689 14.9261 13.3731 14.8303L7.91978 9.37493L2.46649 14.8303C2.37068 14.9261 2.25694 15.0021 2.13176 15.0539C2.00657 15.1058 1.87241 15.1325 1.73691 15.1325C1.60141 15.1325 1.46725 15.1058 1.34206 15.0539C1.21688 15.0021 1.10314 14.9261 1.00733 14.8303C0.911521 14.7345 0.835521 14.6207 0.783669 14.4955C0.731817 14.3704 0.705129 14.2362 0.705129 14.1007C0.705129 13.9652 0.731817 13.831 0.783669 13.7059C0.835521 13.5807 0.911521 13.4669 1.00733 13.3711L6.46269 7.91783L1.00733 2.46454C0.911366 2.36881 0.835228 2.2551 0.783279 2.12991C0.731329 2.00471 0.70459 1.8705 0.70459 1.73496C0.70459 1.59941 0.731329 1.4652 0.783279 1.34001C0.835228 1.21482 0.911366 1.1011 1.00733 1.00538Z" fill="#043174"/> </svg> </div><div class="optModalTitle">Savings / Other Assets</div><div class="optHR"></div><div class="optBody"> Savings may be used to calculate a budget by dividing the total amount by 12, and again by 3. </div></div></div></div><div data-value="3" class="form__faux-select-option"> <input type="radio" class="form__faux-select-option-checkbox" name="optSelectBudgetMethodRadio" id="optSelectBudgetMethod3" value="3" data-di-field-id="bedrooms"> <label class="form__faux-select-option-label" for="optSelectBudgetMethod3"> <span>Cosigner’s Monthly Gross Income</span> </label> <div class="optHint"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"> <path d="M4.5 7.5H5.5V4.5H4.5V7.5ZM5 3.5C5.14167 3.5 5.2605 3.452 5.3565 3.356C5.4525 3.26 5.50033 3.14133 5.5 3C5.5 2.85833 5.452 2.73967 5.356 2.644C5.26 2.54833 5.14133 2.50033 5 2.5C4.85833 2.5 4.73967 2.548 4.644 2.644C4.54833 2.74 4.50033 2.85867 4.5 3C4.5 3.14167 4.548 3.2605 4.644 3.3565C4.74 3.4525 4.85867 3.50033 5 3.5ZM5 10C4.30833 10 3.65833 9.86867 3.05 9.606C2.44167 9.34333 1.9125 8.98717 1.4625 8.5375C1.0125 8.0875 0.656333 7.55833 0.394 6.95C0.131667 6.34167 0.000333333 5.69167 0 5C0 4.30833 0.131333 3.65833 0.394 3.05C0.656667 2.44167 1.01283 1.9125 1.4625 1.4625C1.9125 1.0125 2.44167 0.656333 3.05 0.394C3.65833 0.131667 4.30833 0.000333333 5 0C5.69167 0 6.34167 0.131333 6.95 0.394C7.55833 0.656667 8.0875 1.01283 8.5375 1.4625C8.9875 1.9125 9.34383 2.44167 9.6065 3.05C9.86917 3.65833 10.0003 4.30833 10 5C10 5.69167 9.86867 6.34167 9.606 6.95C9.34333 7.55833 8.98717 8.0875 8.5375 8.5375C8.0875 8.9875 7.55833 9.34383 6.95 9.6065C6.34167 9.86917 5.69167 10.0003 5 10Z" fill="#718ECC"/> </svg> <div class="optHintModal"> <div class="optModalClose"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M1.00733 1.00538C1.10305 0.909413 1.21677 0.833275 1.34196 0.781326C1.46715 0.729376 1.60137 0.702637 1.73691 0.702637C1.87245 0.702637 2.00667 0.729376 2.13186 0.781326C2.25705 0.833275 2.37077 0.909413 2.46649 1.00538L7.91978 6.46073L13.3731 1.00538C13.4689 0.909568 13.5826 0.833568 13.7078 0.781716C13.833 0.729864 13.9672 0.703176 14.1027 0.703176C14.2382 0.703176 14.3723 0.729864 14.4975 0.781716C14.6227 0.833568 14.7364 0.909568 14.8322 1.00538C14.928 1.10119 15.004 1.21493 15.0559 1.34011C15.1077 1.46529 15.1344 1.59946 15.1344 1.73496C15.1344 1.87045 15.1077 2.00462 15.0559 2.1298C15.004 2.25498 14.928 2.36873 14.8322 2.46454L9.37688 7.91783L14.8322 13.3711C14.928 13.4669 15.004 13.5807 15.0559 13.7059C15.1077 13.831 15.1344 13.9652 15.1344 14.1007C15.1344 14.2362 15.1077 14.3704 15.0559 14.4955C15.004 14.6207 14.928 14.7345 14.8322 14.8303C14.7364 14.9261 14.6227 15.0021 14.4975 15.0539C14.3723 15.1058 14.2382 15.1325 14.1027 15.1325C13.9672 15.1325 13.833 15.1058 13.7078 15.0539C13.5826 15.0021 13.4689 14.9261 13.3731 14.8303L7.91978 9.37493L2.46649 14.8303C2.37068 14.9261 2.25694 15.0021 2.13176 15.0539C2.00657 15.1058 1.87241 15.1325 1.73691 15.1325C1.60141 15.1325 1.46725 15.1058 1.34206 15.0539C1.21688 15.0021 1.10314 14.9261 1.00733 14.8303C0.911521 14.7345 0.835521 14.6207 0.783669 14.4955C0.731817 14.3704 0.705129 14.2362 0.705129 14.1007C0.705129 13.9652 0.731817 13.831 0.783669 13.7059C0.835521 13.5807 0.911521 13.4669 1.00733 13.3711L6.46269 7.91783L1.00733 2.46454C0.911366 2.36881 0.835228 2.2551 0.783279 2.12991C0.731329 2.00471 0.70459 1.8705 0.70459 1.73496C0.70459 1.59941 0.731329 1.4652 0.783279 1.34001C0.835228 1.21482 0.911366 1.1011 1.00733 1.00538Z" fill="#043174"/> </svg> </div><div class="optModalTitle">Monthly Gross Income</div><div class="optHR"></div><div class="optBody"> Budgets will be determined by dividing the monthly gross income by 5.</div></div></div></div></div></div></div></div><div class="optColumn optTotalAmountWrap optHide"> <input placeholder="$ Enter Amount" class="optTotalAmount"/> </div></div><div class="optErrorMsg optErrorMsg1 optHide">Please complete all required steps</div><div class="optErrorMsg optHide optOccupantsError">Only 2 occupants are allowed per bedroom</div><div class="optFlex"> <div class="optCTA optCalculateRent disabled">Calculate Rent</div><a class="optResQual" href="https://cortland.com/resident-qualifications/" target="_blank">View Resident Qualifications</a> <div class="optShowDisclamer optClosed"><span class="optCloseD">Hide Disclaimer</span><span class="optShowD">Show Disclaimer</span></div></div><div class="optDisclamer optHide"> The results from use of the Affordability Calculator are only a reference tool for your convenience; use of the Affordability Calculator is neither an application for housing nor an approval or denial of any application for housing. Any response from use of the Affordability Calculator is not a guarantee of a successful rental application for any Cortland community. Evaluation of complete applications involves verification and consideration of many factors other than income. Please submit a completed application to be considered for the housing advertised on this site. Cortland is an Equal Housing Opportunity provider. Cortland gladly accepts rental assistance payments as required by state or local law. Please note if you intend to use any kind of third-party assistance for your rent payment (including Section 8 housing choice vouchers), the Affordability Calculator will not give you an accurate estimate of whether you will income qualify for any Cortland community. You must contact us directly if you have questions about sufficiency of income when using rental assistance. </div></div><div class="optStep3"> <div class="optClose"> <div class="optHideMobile"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none"> <path d="M0.389683 6.38968C0.0526142 6.72675 0.0526142 7.27325 0.389683 7.61032L5.88253 13.1032C6.2196 13.4402 6.7661 13.4402 7.10316 13.1032C7.44023 12.7661 7.44023 12.2196 7.10316 11.8825L2.22063 7L7.10316 2.11747C7.44023 1.7804 7.44023 1.2339 7.10316 0.896835C6.7661 0.559766 6.2196 0.559766 5.88253 0.896835L0.389683 6.38968ZM24 6.13688L1 6.13688V7.86312L24 7.86312V6.13688Z" fill="#224181"/> </svg> </div><div class="optShowMobile"> <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"> <path d="M6 1L1 6L6 11" stroke="#224181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg> </div></div><!--<div class="optClose2 optShowMobile"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M1.21359 0.911345C1.31293 0.811755 1.43094 0.732741 1.56086 0.678829C1.69078 0.624918 1.83006 0.597168 1.97073 0.597168C2.11139 0.597168 2.25067 0.624918 2.3806 0.678829C2.51052 0.732741 2.62853 0.811755 2.72787 0.911345L8.38715 6.57277L14.0464 0.911345C14.1459 0.811916 14.2639 0.733045 14.3938 0.679234C14.5237 0.625424 14.663 0.597728 14.8036 0.597728C14.9442 0.597728 15.0834 0.625424 15.2133 0.679234C15.3432 0.733045 15.4613 0.811916 15.5607 0.911345C15.6601 1.01077 15.739 1.12881 15.7928 1.25872C15.8466 1.38863 15.8743 1.52787 15.8743 1.66848C15.8743 1.8091 15.8466 1.94833 15.7928 2.07824C15.739 2.20815 15.6601 2.32619 15.5607 2.42562L9.89928 8.0849L15.5607 13.7442C15.6601 13.8436 15.739 13.9616 15.7928 14.0916C15.8466 14.2215 15.8743 14.3607 15.8743 14.5013C15.8743 14.6419 15.8466 14.7812 15.7928 14.9111C15.739 15.041 15.6601 15.159 15.5607 15.2585C15.4613 15.3579 15.3432 15.4368 15.2133 15.4906C15.0834 15.5444 14.9442 15.5721 14.8036 15.5721C14.663 15.5721 14.5237 15.5444 14.3938 15.4906C14.2639 15.4368 14.1459 15.3579 14.0464 15.2585L8.38715 9.59704L2.72787 15.2585C2.62844 15.3579 2.5104 15.4368 2.38049 15.4906C2.25058 15.5444 2.11134 15.5721 1.97073 15.5721C1.83011 15.5721 1.69088 15.5444 1.56097 15.4906C1.43106 15.4368 1.31302 15.3579 1.21359 15.2585C1.11416 15.159 1.03529 15.041 0.98148 14.9111C0.92767 14.7812 0.899974 14.6419 0.899974 14.5013C0.899974 14.3607 0.92767 14.2215 0.98148 14.0916C1.03529 13.9616 1.11416 13.8436 1.21359 13.7442L6.87501 8.0849L1.21359 2.42562C1.114 2.32628 1.03499 2.20827 0.981075 2.07835C0.927164 1.94843 0.899414 1.80915 0.899414 1.66848C0.899414 1.52782 0.927164 1.38854 0.981075 1.25861C1.03499 1.12869 1.114 1.01068 1.21359 0.911345Z" fill="#043174"/> </svg> </div>--> <h3>How much rent can I afford?</h3> <h1>Based on the income you’ve provided, you can possibly afford: <span class="optUpToAmount">2,300</span></h1> <div class="optNoResults optHide"> <svg class="optShowMobile optNoResultsIcon" xmlns="http://www.w3.org/2000/svg" width="125" height="123" viewBox="0 0 125 123" fill="none"> <path d="M123.596 114.562L90.113 81.0785C96.7068 72.5676 100.637 61.8892 100.637 50.3183C100.637 22.5727 78.064 0 50.3183 0C22.5727 0 0 22.5727 0 50.3183C0 78.0639 22.5727 100.637 50.3183 100.637C63.0504 100.637 74.6988 95.8826 83.5694 88.0502L116.839 121.319C117.772 122.253 118.993 122.722 120.217 122.722C121.442 122.722 122.663 122.253 123.596 121.319C125.468 119.452 125.468 116.429 123.596 114.562ZM80.6914 77.4629C80.318 77.8864 79.9355 78.2962 79.5394 78.7015C72.1305 86.3289 61.7663 91.0739 50.3183 91.0739C27.8458 91.0739 9.56276 72.7908 9.56276 50.3183C9.56276 27.8458 27.8458 9.56275 50.3183 9.56275C72.7908 9.56275 91.0739 27.8458 91.0739 50.3183C91.0739 60.7372 87.144 70.2498 80.6914 77.4629Z" fill="#C5D8FF"/> <path d="M72.6198 39.3675C72.6198 41.7445 70.6932 43.6712 68.3161 43.6712C65.9391 43.6712 64.0125 41.7445 64.0125 39.3675C64.0125 36.9904 65.9391 35.0638 68.3161 35.0638C70.6932 35.0638 72.6198 36.9904 72.6198 39.3675Z" fill="#C5D8FF"/> <path d="M38.1911 39.3675C38.1911 41.7445 36.2645 43.6712 33.8874 43.6712C31.5104 43.6712 29.5837 41.7445 29.5837 39.3675C29.5837 36.9904 31.5104 35.0638 33.8874 35.0638C36.2645 35.0638 38.1911 36.9904 38.1911 39.3675Z" fill="#C5D8FF"/> <path d="M37.1165 65.8003C36.4516 65.8003 35.7968 65.4934 35.3751 64.9155C34.6752 63.9552 34.887 62.6091 35.8474 61.9092C40.4051 58.5877 45.8045 56.8323 51.4606 56.8323C56.7748 56.8323 61.9045 58.3983 66.2933 61.3614C67.2783 62.0262 67.5374 63.3641 66.8726 64.3491C66.2086 65.334 64.8708 65.5945 63.8854 64.9283C60.2101 62.4474 55.9141 61.136 51.4606 61.136C46.7211 61.136 42.1984 62.6064 38.3815 65.3878C37.999 65.6664 37.5554 65.8003 37.1165 65.8003Z" fill="#C5D8FF"/> </svg> <p class="optNoResultsMsg"> <span class="optHideMobile"> Based on the information you’ve provided, we were unable to find an exact match for you. <br/>You may go back and add a cosigner or explore other bedroom options to get a better fit. </span> <span class="optShowMobile">Based on the information you’ve provided, we were unable to find an exact match for you. <br/>You may go back and add a cosigner or explore other bedroom options to get a better fit.</span> <div class="optCTA optStartOver optShowMobile">Start Over</div></p><!--<div class="optHide optDisclamer"> The results from use of the Affordability Calculator are only a reference tool for your convenience; use of the Affordability Calculator is neither an application for housing nor an approval or denial of any application for housing. Any response from use of the Affordability Calculator is not a guarantee of a successful rental application for any Cortland community. Evaluation of complete applications involves verification and consideration of many factors other than income. Please submit a completed application to be considered for the housing advertised on this site. Cortland is an Equal Housing Opportunity provider. Cortland gladly accepts rental assistance payments as required by state or local law. Please note if you intend to use any kind of third-party assistance for your rent payment (including Section 8 housing choice vouchers), the Affordability Calculator will not give you an accurate estimate of whether you will income qualify for any Cortland community. You must contact us directly if you have questions about sufficiency of income when using rental assistance. </div><div class="optShowDisclamer optClosed"><span class="optCloseD">Hide Disclaimer</span><span class="optShowD">Show Disclaimer</span></div>--> </div><div class="optResults"> </div><div class="optFlex"> <a class="optResQual" href="https://cortland.com/resident-qualifications/" target="_blank">View Resident Qualifications</a> <div class="optShowDisclamer optClosed"><span class="optCloseD">Hide Disclaimer</span><span class="optShowD">Show Disclaimer</span></div></div><div class="optDisclamer optHide"> The results from use of the Affordability Calculator are only a reference tool for your convenience; use of the Affordability Calculator is neither an application for housing nor an approval or denial of any application for housing. Any response from use of the Affordability Calculator is not a guarantee of a successful rental application for any Cortland community. Evaluation of complete applications involves verification and consideration of many factors other than income. Please submit a completed application to be considered for the housing advertised on this site. Cortland is an Equal Housing Opportunity provider. Cortland gladly accepts rental assistance payments as required by state or local law. Please note if you intend to use any kind of third-party assistance for your rent payment (including Section 8 housing choice vouchers), the Affordability Calculator will not give you an accurate estimate of whether you will income qualify for any Cortland community. You must contact us directly if you have questions about sufficiency of income when using rental assistance. </div></div></div>');
    //community name
    utils.waitForElement('.header__toolbar-link[data-di-id="community-name"]').then(function (name) {
        communityLink = name.getAttribute('href');
        //document.querySelector('.optComunityName').innerText = name.innerText;
        communityName = name.innerText;
    });
    //step1 to step2
    //document.querySelector('.optCalculator .optStep1 .optDownArrow').addEventListener('click', function () {
    //    document.querySelector('.optCalculator').classList.add('step2');
    //});
    initDropdown();
    document.querySelector('.optCalculator .optStep1 .optCTA').addEventListener('click', function () {
        document.querySelector('.optCalculator').classList.add('step2');
    });
    document.querySelector('.optCalculator .optStep2 input').addEventListener('change', validateStep2);
    document.querySelector('.optCalculator .optStep2 .optBedrooms').addEventListener('change', validateStep2);
    document.querySelector('.optCalculator .optStep2 .optTotalOccupants').addEventListener('change', validateStep2);
    //close step2
    document.querySelector('.optStep2 .optClose').addEventListener('click', function () {
        document.querySelector('.optCalculator').classList.add('step1');
        document.querySelector('.optCalculator').classList.remove('step2');
    });
    //step2 radios
    document.querySelectorAll('.optStep2 .optSelectBudgetMethod input[type="radio"]').forEach(function (el) {
        el.addEventListener('click', function () {
            //  document.querySelector('.optCalculator .optStep2 .optBudgetMethod').addEventListener('change', function () {
            //document.querySelectorAll('.optCalculator .optStep2 .optRadios .optRadio').forEach(function (field) {
            //    field.classList.remove('optError');
            //});

            //if (document.querySelector('.optCalculator .optStep2 .optRadios .optRadio.selected'))
            //    document.querySelector('.optCalculator .optStep2 .optRadios .optRadio.selected').classList.remove('selected');
            //console.warn(this);
            this.classList.add('selected');
            var isMobile = screen.width < 768;


            //if (isMobile) {
            //    if (this.value === '1')
            //        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').setAttribute('placeholder', '$ amount after taxes');
            //    if (this.value === '2')
            //        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').setAttribute('placeholder', '$ Savings');
            //    if (this.value === '3')
            //        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').setAttribute('placeholder', '$ Cosigner amount after taxes');

            //    //this.insertAdjacentElement('afterend', document.querySelector('.optCalculator .optStep2 input.optTotalAmount'));

            //}
            //else {
            //    if (this.value === '1')
            //        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').setAttribute('placeholder', 'Enter Total Monthly Gross Income*');
            //    if (this.value === '2')
            //        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').setAttribute('placeholder', 'Enter Household Savings*');
            //    if (this.value === '3')
            //        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').setAttribute('placeholder', 'Enter Cosigner\'s Monthly Gross Income*');

            //    //if (!document.querySelector('.optStep2 .optRadios + input'))
            //    //    document.querySelector('.optStep2 .optRadios').insertAdjacentElement('afterend', document.querySelector('.optCalculator .optStep2 input.optTotalAmount'));
            //}
            //if (this.selectedIndex === 0)
            //    document.querySelector('.optCalculator .optStep2 input.optTotalAmount').classList.add('optHide');
            //else
            document.querySelector('.optCalculator .optStep2 .optTotalAmountWrap').classList.remove('optHide');

            //disclaimer
            if (document.querySelector('.optStep2 .optShowDisclamer')) {
                document.querySelector('.optStep2 .optShowDisclamer').classList.add('optClosed');
                document.querySelector('.optStep2 .optDisclamer').classList.add('optHide');
            }
            validateStep2();
        });
    });
    //step2, step3 disclamer
    document.querySelectorAll('.optCalculator .optShowDisclamer').forEach(function (el) {
        el.addEventListener('click', function () {
            //console.warn(this);
            this.classList.toggle('optClosed');
            this.parentElement.parentElement.querySelector('.optDisclamer').classList.toggle('optHide');
            //this.remove();
        });
    });
    //step2 radio hints
    document.querySelectorAll('.optStep2 .optHint').forEach(function (hint) {
        hint.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            //console.log(e);
            if (!e.target.classList.contains('optHintModal') && !e.target.closest('.optHintModal')) {
                if (!this.classList.contains('show') && document.querySelector('.optStep2 .optHint.show'))
                    document.querySelector('.optStep2 .optHint.show').classList.remove('show');

                this.classList.toggle('show');
            }

            if (e.target.classList.contains('optModalClose') || e.target.closest('.optModalClose'))
                this.classList.remove('show');
        });
    });
    //click anywhere closes the hint
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.optHint')) {
            document.querySelectorAll('.optHint.show').forEach(function (el) {
                el.classList.remove('show');
            });
        }
    });
    //number of bedrooms dd
    utils.waitForElement('.floorplan-filter button[data-filter-field="bed"] + .floorplan-filter__flyout label').then(function () {
        //console.warn(1);
        document.querySelector('.optCalculator .optBedrooms').innerHTML = '';
        var newHtml = '<option>Select Option</option>';
        document.querySelectorAll('.floorplan-filter button[data-filter-field="bed"] + .floorplan-filter__flyout label').forEach(function (el) {
            //console.warn(el);
            var value = el.getAttribute("data-bed");
            if (value === 'Studio')
                value = 0;
            newHtml += '<option value="' + value + '">' + el.innerText + '</option>';
        });
        document.querySelector('.optCalculator .optBedrooms').innerHTML = newHtml;
    });
    //clear all
    document.querySelector('.optCalculator .optStep2 .optClearAll').addEventListener('click', function () {
        if (document.querySelector('.optCalculator .optStep2 .optRadios .optRadio.selected'))
            document.querySelector('.optCalculator .optStep2 .optRadios .optRadio.selected').classList.remove('selected');
        document.querySelector('.optCalculator .optTotalOccupants').selectedIndex = 0
        document.querySelector('.optCalculator .optBedrooms').selectedIndex = 0
        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').value = '';

        document.querySelector('.optCalculator .optStep2 input.optTotalAmount').classList.add('optHide');

        validateStep2();
    });
    //step 2 calculate
    document.querySelector('.optCalculator .optStep2 input.optTotalAmount').addEventListener('keyup', function () {
        formatCurrency(jQuery(this));
        validateStep2();
    });
    document.querySelector('.optCalculator .optStep2 input.optTotalAmount').addEventListener('blur', function () {
        //formatCurrency(jQuery(this), "blur");
        validateStep2();
    });

    document.querySelector('.optCTA.optCalculateRent').addEventListener('click', function () {
        if (validateStep2(null, true)) {
            calculateAmount();

            fillResults();

            document.querySelector('.optCalculator').classList.remove('step2');
            document.querySelector('.optCalculator').classList.add('step3');

            //trigger custom event 
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: "End_of_Calculator",
                tags: {
                    revenue: 0, // Optional in cents as integer (500 == $5.00)
                    value: 0.00 // Optional as float
                }
            });

            //tags
            window["optimizely"].push({
                "type": "tags",
                "tags": {
                    "Community name": communityName,
                    "Market name": getMarketName(),
                    "Budget dollar amount": budgetAmount,
                    "Number of bedrooms": document.querySelector('.optBedrooms').value,
                    "Number of occupants": document.querySelector('.optTotalOccupants').value
                }
            });
        }
    });

    console.warn(123);
    document.querySelector('.optTotalOccupants').addEventListener('change', function () {
        console.warn('change');
        validateOccupantsWithError();
    });
    document.querySelector('.optBedrooms').addEventListener('change', function () {
        console.warn('change');
        validateOccupantsWithError();
    });
    console.warn(123);
    //step3 back
    document.querySelector(' .optCalculator .optStep3 .optClose').addEventListener('click', function () {
        document.querySelector('.optCalculator').classList.remove('step3');
        document.querySelector('.optCalculator').classList.add('step2');
    });
    document.querySelector(' .optCalculator .optStep3 .optStartOver').addEventListener('click', function () {
        document.querySelector('.optCalculator').classList.remove('step3');
        document.querySelector('.optCalculator').classList.add('step2');
    });

    //step3 mobile close
    document.querySelector(' .optCalculator .optStep3 .optClose2').addEventListener('click', function () {
        document.querySelector('.optCalculator').classList.remove('step3');
        //document.querySelector('.optCalculator').classList.add('step2');
    });
    //no results, all apartments
    document.querySelector('.optCTA.optViewAll').addEventListener('click', function () {
        goToAvailableApts();
    });


});

function getResultTileHtml(item) {
    var title = item["title"]["#text"];
    var beds = 0;
    var floorPlan = '';
    item["p:attribute"].forEach(function (attr) {
        if (attr.name === "bed_count") {
            beds = Number(attr["#text"]);
        }
        if (attr.name === "floor_plan_name") {
            floorPlan = attr["#text"];
        }
    });
    if (beds === 0)
        beds = 'Studio';
    var baths = 0;
    item["p:attribute"].forEach(function (attr) {
        if (attr.name === "bath_count") {
            baths = Number(attr["#text"]);
        }
    });
    var imageLink = item["p:imageLink"]["#text"];
    var price = Number(item["p:price"]["p:unitPrice"]["#text"].replace('$', ''));
    var dateAvailableStr = item["pubDate"]["#text"];
    var dateAvailable = null;
    if (dateAvailableStr)
        dateAvailable = new Date(dateAvailableStr);
    //console.warn(dateAvailableStr);
    //console.warn(dateAvailable);
    //var availability = Number(item["p:stock"]["#text"]) > 0 ? 'Available Now' : 'Available soon';
    var availability = dateAvailable === null || dateAvailable < Date.now() ? 'Available Now' : 'Available ' + dateAvailable.toLocaleDateString();
    var link = item["link"]["#text"];
    var html = `<div class="optResultTile">
    <a href="${link}" target="_blank" data-number="${title}" data-floorPlan="${floorPlan}">
                <div class="optHeader">
                    <div class="optLeft">
                        <h1>Apt #${title}</h1>
                        <p><span class ="optAptName">${communityName}</span> | <span class="optAptBeds">${beds}</span> Bed | <span class ="optAptBaths">${baths}</span> Bath</p>
                    </div>
                    <div class="optRight">

                    </div>
                </div>
                <div class ="optMainImage">
                <img src="${imageLink}" alt="img"/></div>
                <div class="optFooter">
                    <div class="optLeft">
                        <div>Starting at $<span class ="optPrice">${price.toLocaleString()}</span></div>
                        <div>${availability}</div>
                    </div>
                    <div class="optRight">
                        <div class ="optHideMobile optCTA optGoToApartment" href="${link}">View Available Apt</div>
                        <div class ="optShowMobile optCTA optGoToApartment" href="${link}">View Available Apartment</div>
                    </div>
                </div>
                </a>
            </div>`;

    return html;
}
function fillResults() {
    var currentResults = getResults();

    document.querySelector('.optResults').innerHTML = `
             <div class ="nearby-communities__communities">
                <button class ="nearby-communities__nav nearby-communities__nav--prev svg-stroke-primary" id="propertyPrev" aria-label="Previous Properties" style="display:none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="48.66" viewBox="0 0 22.05 48.66">
                        <path d="M21.66.34.66,22.9l21,25.44" fill="none" stroke="#666" />
                    </svg>
                </button>
                <div class ="nearby-communities__communities-wrap owl-carousel owl-theme" data-js-hook="propertyCarousel">

                   </div>
                <div class ="nearby-communities__nav-page-count">
                    <p>
                        <span id="propertyCurrentPage"></span>
                        /<span id="propertyTotalPage"></span>
                    </p>
                </div>
                <button class ="nearby-communities__nav nearby-communities__nav--next svg-stroke-primary" id="propertyNext" aria-label="Next Properties" style="display:none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="48.66" viewBox="0 0 22.05 48.66">
                        <path d="M.39,48.32l21-22.56L.39.32" fill="none" stroke="#666" />
                    </svg>
                </button>
            </div>


        `;

    if (currentResults.length === 0) {
        document.querySelector('.optNoResults').classList.remove('optHide');
        document.querySelector('.optResults').classList.add('optHide');
        document.querySelector('.optCalculator .optStep3 .optResults + .optFlex').classList.remove('optJustifyCenter');

    }
    else {
        document.querySelector('.optCalculator .optStep3 .optResults + .optFlex').classList.add('optJustifyCenter');
        console.warn('opt - before init');
        document.querySelector('.optNoResults').classList.add('optHide');
        document.querySelector('.optResults').classList.add('optNotVisible');

        var allTilesHTML = '';
        currentResults.forEach(function (item) {
            var html = getResultTileHtml(item);
            allTilesHTML = allTilesHTML + html;
        });
        //hide carousel before init
        //document.querySelector('.optResults .nearby-communities__communities-wrap').classList.add('optHide');
        document.querySelector('.optResults .nearby-communities__communities-wrap').innerHTML = allTilesHTML;

        //all tiles click

        //document.querySelectorAll('.optCalculator.optResultTile').forEach(function(item){
        //    item.addEventListener('click', function () {
        //        var link = this.querySelector('.optGoToApartment').click();
        //    });
        //});

        //caroursel
        jQuery(".optCalculator .optResults .nearby-communities__communities-wrap").owlCarousel({
            nav: !1,
            dots: !0,
            center: !1,
            loop: !1,
            items: showNumberOfCarouselItems(),
            margin: 20,
            onTranslated: function (e) {
                //   t.$propertyCurrentPage.text(e.page.index + 1),
                //  t.$propertyTotalPage.text(e.page.count)
            },
            onInitialized: function (e) {
                //1 < e.item.count ? (t.$propertyCurrentPage.text("1"),
                //t.$propertyTotalPage.text(e.item.count)) : t.$propertyCurrentPage.parent().hide(),
                e.item.count > e.page.size ? (jQuery(".optResults .nearby-communities__nav").show(),
                    jQuery('.optResults .nearby-communities__communities-wrap').parent().addClass("has-dots")) : (jQuery(".optResults .nearby-communities__nav").hide(),
                        jQuery('.optResults .nearby-communities__communities-wrap').parent().removeClass("has-dots"))

                //document.querySelector('.optResults .nearby-communities__communities-wrap').classList.remove('optHide');
                document.querySelector('.optResults').classList.remove('optHide');
                setTimeout(function () {
                    document.querySelector('.optResults').classList.remove('optNotVisible');
                }, 1000);


                console.warn('opt - initialized');
            },
            onResized: function (e) {
                //t.$propertyCurrentPage.text(e.page.index + 1),
                //t.$propertyTotalPage.text(e.page.count),
                //console.warn(e.item.count + ' ' + e.page.size);
                e.item.count > e.page.size ? (jQuery(".optResults .nearby-communities__nav").show(),
                    jQuery('.optResults .nearby-communities__communities-wrap').parent().addClass("has-dots")) : (jQuery(".optResults .nearby-communities__nav").hide(),
                        jQuery('.optResults .nearby-communities__communities-wrap').parent().removeClass("has-dots"))
            },
            onChanged: function (e) {
                e.item.count <= e.item.index + e.page.size ? (jQuery(".optResults .nearby-communities__nav--prev").removeClass("disabled"),
                    jQuery(".optResults .nearby-communities__nav--next").addClass("disabled")) : 0 == e.item.index ? (jQuery(".optResults .nearby-communities__nav--next").removeClass("disabled"),
                        jQuery(".optResults .nearby-communities__nav--prev").addClass("disabled")) : (jQuery(".optResults .nearby-communities__nav--next").removeClass("disabled"),
                            jQuery(".optResults .nearby-communities__nav--prev").removeClass("disabled"))
            }
        });
        jQuery(".optResults #propertyPrev").click(function () {
            jQuery('.optResults .nearby-communities__communities-wrap').trigger("prev.owl.carousel")
        });
        jQuery(".optResults #propertyNext").click(function () {
            jQuery('.optResults .nearby-communities__communities-wrap').trigger("next.owl.carousel")
        });
        jQuery(window).on("resize", function () {
            var e = jQuery('.optResults .nearby-communities__communities-wrap').data("owl.carousel");
            e.options.items = showNumberOfCarouselItems();
            jQuery(window).width() > siteSettings.breakpoints.fluid ? e.options.mouseDrag = !1 : e.options.mouseDrag = !0
        });

        //tags
        document.querySelectorAll('.optCalculator .optResultTile > a').forEach(function (link) {
            link.addEventListener('click', function () {
                window["optimizely"].push({
                    "type": "tags",
                    "tags": {
                        "Unit number": this.getAttribute('data-number'),
                        "Floorplan name": this.getAttribute('data-floorplan'),
                        "Community name": communityName,
                    }
                });

                //console.warn('opt - saved tag on click');
                return true;
            });
        });


    }
}
function getResults() {
    //closest price
    //number of beds
    //people
    var selectedNumberOfBeds = Number(document.querySelector('.optBedrooms').value);
    // console.warn(selectedNumberOfBeds);
    var result = [];
    jsonData.forEach(function (item) {
        var price = item["p:price"]["p:unitPrice"]["#text"];
        var beds = 0;

        item["p:attribute"].forEach(function (attr) {
            if (attr.name === "bed_count") {
                beds = Number(attr["#text"]);
            }
        });
        //  console.warn(price + " " + beds);
        if (selectedNumberOfBeds === beds && price <= budgetAmount)
            result.push(item);
    });

    result.sort(function compareFn(a, b) {
        var priceA = a["p:price"]["p:unitPrice"]["#text"];
        var priceB = b["p:price"]["p:unitPrice"]["#text"];
        if (Math.abs(priceA - budgetAmount) < Math.abs(priceB - budgetAmount)) {
            return -1;
        }
        if (Math.abs(priceA - budgetAmount) > Math.abs(priceB - budgetAmount)) {
            return 1;
        }

        //equal, check pubDates
        var dateAstr = a["pubDate"]["#text"];
        var dateBstr = b["pubDate"]["#text"];
        if (dateAstr && dateBstr) {
            var dateA = new Date(dateAstr);
            var dateB = new Date(dateBstr);

            if (dateA < dateB)
                return -1;
            if (dateA > dateB)
                return 1;
        }
        // a must be equal to b
        return 0;
    })

    console.warn(result.slice(0, 6));
    var topResults = screen.width < 768 ? 3 : 6;

    return result.slice(0, topResults);
}
function calculateAmount() {
    var selectedRadio = document.querySelector('.optStep2 .optSelectBudgetMethod input[type="radio"]:checked').value;
    //var selectedRadio = document.querySelector('.optCalculator .optStep2 .optBudgetMethod').selectedIndex.toString();
    var enteredValue = document.querySelector('.optCalculator .optStep2 input.optTotalAmount').value.replace('$', '').replace(/,/g, '');
    var result = 0;
    switch (selectedRadio) {
        case '1':
            result = enteredValue / 3;
            break;
        case '2':
            result = enteredValue / (12 * 3);
            break;
        case '3':
            result = enteredValue / 5;
            break;
    }
    console.warn('result - ' + result);
    document.querySelector('.optUpToAmount').innerText = "up to $" + Math.round(result).toLocaleString();
    budgetAmount = Math.round(result);
}
function validateStep2(e, showErrors) {
    if (showErrors)
        document.querySelectorAll('.optError').forEach(function (field) {
            field.classList.remove('optError');
        });

    var res = document.querySelector('.optStep2 .optSelectBudgetMethod input[type="radio"]:checked') && document.querySelector('.optStep2 .optSelectBudgetMethod input[type="radio"]:checked').value != null
        && document.querySelector('.optCalculator .optStep2 input.optTotalAmount').value !== ''
        && document.querySelector('.optBedrooms').selectedIndex != 0
        && document.querySelector('.optTotalOccupants').selectedIndex != 0;

    var occupantsOK = true;

    if (res) {
        occupantsOK = checkTotalOccupants();
        res = occupantsOK;
    }

    if (res)
        document.querySelector('.optCTA.optCalculateRent').classList.remove('disabled');
    else
        document.querySelector('.optCTA.optCalculateRent').classList.add('disabled')

    if (!res && showErrors) {
        if (occupantsOK) {
            document.querySelector('.optErrorMsg1').classList.remove('optHide');
            document.querySelector('.optOccupantsError').classList.add('optHide');
        }
        else {
            document.querySelector('.optOccupantsError').classList.remove('optHide');
            document.querySelector('.optErrorMsg1').classList.add('optHide');
        }

        if (!document.querySelector('.optStep2 .optSelectBudgetMethod input[type="radio"]:checked') || document.querySelector('.optStep2 .optSelectBudgetMethod input[type="radio"]:checked').value === null)
            document.querySelector('.optCalculator .optStep2 .optSelectBudgetMethod').parentElement.classList.add('optError');
        else
            if (document.querySelector('.optCalculator .optStep2 input.optTotalAmount').value === '')
                document.querySelector('.optCalculator .optStep2 input.optTotalAmount').classList.add('optError');
        if (document.querySelector('.optBedrooms').selectedIndex === 0)
            document.querySelector('.optBedrooms').parentElement.classList.add('optError');
        if (document.querySelector('.optTotalOccupants').selectedIndex === 0)
            document.querySelector('.optTotalOccupants').parentElement.classList.add('optError');
    }
    if (res) {
        document.querySelector('.optErrorMsg1').classList.add('optHide');
        document.querySelector('.optOccupantsError').classList.add('optHide');
        document.querySelectorAll('.optError').forEach(function (field) {
            field.classList.remove('optError');
        });
    }

    return res;
}
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            //console.warn(xhr);
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
getJSON('https://cortland.com/optimizely-data/product-recs/', function (status, result) {
    console.warn(result);
    var json = parseXml(result);
    console.warn(json);

    utils.waitUntil(function () {
        return communityLink != null;
    }).then(function () {
        //filter by community
        jsonData = [];
        json.rss.channel.item.forEach(function (item) {
            //console.warn(item.link['#text']);
            if (item.link['#text'].indexOf(communityLink) != -1) {
                var title = item["title"]["#text"];
                //show only apts with number as title
                //if (!isNaN(Number(title)))
                //add only type unit
                var isUnit = false;
                var itemTypeFound = false;
                item["p:attribute"].forEach(function (attr) {
                    if (attr.name === "item_type") {
                        isUnit = (attr["#text"] === 'Unit');
                        itemTypeFound = true;
                    }
                });

                if (!itemTypeFound) {
                    console.warn('opt - did not find item type for item:')
                    console.warn(item);
                }

                if (isUnit)
                    jsonData.push(item);
            }
        });
        console.warn(jsonData);
        //sort by price
        jsonData.sort(function (a, b) {
            //console.log(a["p:price"]["p:unitPrice"]["#text"]);
            var n1 = Number(a["p:price"]["p:unitPrice"]["#text"]);
            var n2 = Number(b["p:price"]["p:unitPrice"]["#text"]);
            return n1 - n2;
        });
        console.warn(jsonData);
    });
});
function parseXml(xml, arrayTags) {
    let dom = null;
    if (window.DOMParser) dom = (new DOMParser()).parseFromString(xml, "text/xml");
    else if (window.ActiveXObject) {
        dom = new ActiveXObject('Microsoft.XMLDOM');
        dom.async = false;
        if (!dom.loadXML(xml)) throw dom.parseError.reason + " " + dom.parseError.srcText;
    }
    else throw new Error("cannot parse xml string!");

    function parseNode(xmlNode, result) {
        if (xmlNode.nodeName == "#text") {
            let v = xmlNode.nodeValue;
            if (v.trim()) result['#text'] = v;
            return;
        }

        let jsonNode = {},
            existing = result[xmlNode.nodeName];
        if (existing) {
            if (!Array.isArray(existing)) result[xmlNode.nodeName] = [existing, jsonNode];
            else result[xmlNode.nodeName].push(jsonNode);
        }
        else {
            if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) result[xmlNode.nodeName] = [jsonNode];
            else result[xmlNode.nodeName] = jsonNode;
        }

        if (xmlNode.attributes) for (let attribute of xmlNode.attributes) jsonNode[attribute.nodeName] = attribute.nodeValue;

        for (let node of xmlNode.childNodes) parseNode(node, jsonNode);
    }

    let result = {};
    for (let node of dom.childNodes) parseNode(node, result);

    return result;
}
function goToAvailableApts() {
    location.href = location.href + 'available-apartments/'
}
function showNumberOfCarouselItems() {
    var e = 3
        , t = jQuery('.optResults .nearby-communities__communities-wrap').find(".nearby-communities__community").length;
    switch (t) {
        case 1:
            e = 1;
            break;
        case 2:
        case 3:
            e = 3;
            break;
        default:
            e = 3
    }
    if (jQuery(window).width() > siteSettings.breakpoints.medium && jQuery(window).width() <= siteSettings.breakpoints.xlarge)
        switch (t) {
            case 1:
                e = 1;
                break;
            case 2:
            case 3:
                e = 3;
                break;
            default:
                e = 3
        }
    else if (jQuery(window).width() > siteSettings.breakpoints.fluid && jQuery(window).width() <= siteSettings.breakpoints.medium)
        switch (t) {
            case 1:
                e = 1;
                break;
            case 2:
                e = 2;
                break;
            default:
                e = 3
        }
    else
        jQuery(window).width() <= siteSettings.breakpoints.fluid && jQuery(window).width() > siteSettings.breakpoints.fluid_medium ? e = 1 === t ? 1 : 2 : jQuery(window).width() <= siteSettings.breakpoints.fluid_medium && (e = 1);
    return e
}
function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    var input_val = input.val();

    // don't validate empty input
    if (input_val === "") { return; }

    // original length
    var original_len = input_val.length;

    // initial caret position 
    var caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {

        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = "$" + left_side + "." + right_side;

    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = "$" + input_val;

        // final formatting
        //if (blur === "blur") {
        //    input_val += ".00";
        //}
    }

    // send updated string to input
    input.val(input_val);

    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}
function getMarketName() {
    var res = null;
    dataLayer.forEach(function (el) {
        if (el.market_name)
            res = el.market_name;
    });
    return res;
}
function initDropdown() {
    utils.waitUntil(function () {
        return typeof jQuery === 'function';
    }).then(function () {
        jQuery('.optSelectBudgetMethodLabel').click(function () {
            console.warn('click');
            var $parent = jQuery(this).closest('.optMySpecialSelect');
            var callback = null;
            if ($parent.hasClass("active"))
                callback = function () { $parent.toggleClass("active"); }
            else
                $parent.toggleClass("active");

            jQuery(this).next().slideToggle(callback).toggleClass("active");

            return false;
        });
        jQuery('.optSelectBudgetMethod').each(function () {
            var t = jQuery(this).find(".form__faux-select-title")
                , i = jQuery(this).find(".form__select-value")
                , n = jQuery(this).find('[type="radio"]');
            jQuery.each(n, function () {
                jQuery(this).change(function () {
                    var e = [];
                    jQuery.each(n, function () {
                        this.checked && e.push(jQuery('[for="' + jQuery(this).attr("id") + '"]').text())
                    });
                    e.length ? (t.addClass("active"),
                        i.text(e.join(", "))) : (i.text(""),
                            t.removeClass("active"));
                    jQuery(".form__faux-select-options").slideUp(function () { jQuery(".optSelectBudgetMethodLabel").closest('.optMySpecialSelect').removeClass("active"); }).removeClass("active");
                });
            })
        });
        jQuery(document).click(function (e) {
            jQuery(e.target).closest(".optSelectBudgetMethod.form__faux-select").length || jQuery(".optSelectBudgetMethod .form__faux-select-options").slideUp(function () { jQuery(".optSelectBudgetMethodLabel").closest('.optMySpecialSelect').removeClass("active"); }).removeClass("active");
        });
    });
}
function checkTotalOccupants() {
    var occ = Number(document.querySelector('.optTotalOccupants').value.replace('+', '')); //4+
    var rooms = Number(document.querySelector('.optBedrooms').value.replace('0', '1')); //studio = 0
    //console.warn(occ + ' ' + rooms);

    return occ <= (rooms * 2);
};
function validateOccupantsWithError() {
    if (document.querySelector('.optBedrooms').selectedIndex != 0
        && document.querySelector('.optTotalOccupants').selectedIndex != 0) {
        var occupantsOK = checkTotalOccupants();

        if (occupantsOK) {
            document.querySelector('.optOccupantsError').classList.add('optHide');
        }
        else {
            document.querySelector('.optOccupantsError').classList.remove('optHide');
        }

    }
}