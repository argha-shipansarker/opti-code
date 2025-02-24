var utils = optimizely.get('utils');

utils.waitForElement('.full-site-container > .epi-blocks:not(.no-margin-top.no-border)').then(function (existing_section) {

    const symptom_list = [
        {
            label: "Blood pressure checks or tests",
            value: "Blood pressure checks or tests",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Blood sugar checks or tests",
            value: "Blood sugar checks or tests",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Chronic disease/condition",
            value: "Chronic disease/condition",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Chronic headache",
            value: "Chronic headache",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Cold, flu or COVID-19 symptoms",
            value: "Cold, flu or COVID-19 symptoms (body ache, congestion, cough, fever, sinus infection, sore throat)",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Substance use concerns",
            value: "Substance use concerns (drugs, alcohol)",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Ear ache and infection",
            value: "Ear ache and infection",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Fatigue",
            value: "Fatigue",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Health screening examinations",
            value: "Health screening examinations (biometric screening for work)",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Isolated back pain",
            value: "Isolated back pain",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Medication refill",
            value: "Medication refill",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Mental health concern",
            value: "Mental health concern (anxiety, depression)",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Head injury",
            value: "Head injury (bump, bruise, or cut on the head without loss of consciousness)",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Newborn care",
            value: "Newborn care",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Nutrition",
            value: "Nutrition",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Pink eye, red eye, itching",
            value: "Pink eye, red eye, itching",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Post injury follow-up",
            value: "Post injury follow-up",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Preventive care",
            value: "Preventive care",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Rashes",
            value: "Rashes",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Referral to a specialist",
            value: "Referral to a specialist",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Routine care",
            value: "Routine care",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Skin concerns",
            value: "Skin concerns",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "School and sports physicals",
            value: "School and sports physicals",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Sexually transmitted infections",
            value: "Sexually transmitted infections",
            type: ['primary', 'urgent', 'wrh'],
            url: null
        },
        {
            label: "Suture/staple removal",
            value: "Suture/staple removal",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Urinary, kidney and bladder infections",
            value: "Urinary, kidney and bladder infections",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Vaccine",
            value: "Vaccine",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Vaginal itching or irritation",
            value: "Vaginal itching or irritation",
            type: ['primary', 'urgent', 'wrh'],
            url: null
        },
        {
            label: "Weight Management",
            value: "Weight Management",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Wellness",
            value: "Wellness",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Women's health concern",
            value: "Women's health concern",
            type: ['primary'],
            url: "https://www.ohiohealth.com/find-a-doctor/results/?accpat=anp%7coos&spec=489%7c289%7c256&sort=first-available"
        },
        {
            label: "Wound check",
            value: "Wound check (Increased pain, tenderness, redness, swelling or warmth around the cut or injury, fever)",
            type: ['primary', 'urgent'],
            url: null
        },
        {
            label: "Animal and insect bites and stings",
            value: "Animal and insect bites and stings",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Asthma Flare-up",
            value: "Asthma Flare-up (wheezing, not improving with inhalers, no difficulty breathing)",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Cuts, bruises or may need stitches",
            value: "Cuts, bruises or may need stitches",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Injuries",
            value: "Injuries (possible broken bones, sprains, dislocations)",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Minor allergic reactions",
            value: "Minor allergic reactions",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Minor burns",
            value: "Minor burns",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Nausea, vomiting or diarrhea without bleeding, abdominal pain or dehydration",
            value: "Nausea, vomiting or diarrhea without bleeding, abdominal pain or dehydration",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Minor nosebleeds",
            value: "Minor nosebleeds",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Sprains and strains",
            value: "Sprains and strains",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Cuts, bruises or may need stitches",
            value: "Cuts, bruises or may need stitches",
            type: ['urgent'],
            url: 'https://www.ohiohealth.com/schedule-online/urgent-care-scheduling/guest-scheduling'
        },
        {
            label: "Abnormal Bleeding",
            value: "Abnormal Bleeding",
            type: ['wrh'],
            url: 'https://www.ohiohealth.com/find-a-doctor/results/?q=women%27s+reproductive+health&accpat=oos&sort=first-available'
        },
        {
            label: "Annual Wellness Visit",
            value: "Annual Wellness Visit (Note this is different from PC)",
            type: ['wrh'],
            url: 'https://www.ohiohealth.com/find-a-doctor/results/?q=women%27s+reproductive+health&accpat=oos&sort=first-available'
        },
        {
            label: "Birth Control Options",
            value: "Birth Control Options",
            type: ['wrh'],
            url: 'https://www.ohiohealth.com/find-a-doctor/results/?q=women%27s+reproductive+health&accpat=oos&sort=first-available'
        },
        {
            label: "Breast Pain/Lump",
            value: "Breast Pain/Lump",
            type: ['wrh'],
            url: 'https://www.ohiohealth.com/find-a-doctor/results/?q=women%27s+reproductive+health&accpat=oos&sort=first-available'
        },
        {
            label: "Menopause",
            value: "Menopause",
            type: ['wrh'],
            url: 'https://www.ohiohealth.com/find-a-doctor/results/?q=women%27s+reproductive+health&accpat=oos&sort=first-available'
        },
        {
            label: "Pelvic Pain",
            value: "Pelvic Pain",
            type: ['wrh'],
            url: 'https://www.ohiohealth.com/find-a-doctor/results/?q=women%27s+reproductive+health&accpat=oos&sort=first-available'
        },
        {
            label: "Positive Pregnancy Test",
            value: "Positive Pregnancy Test",
            type: ['wrh'],
            url: 'https://www.ohiohealth.com/find-a-doctor/results/?q=women%27s+reproductive+health&accpat=oos&sort=first-available'
        },
        {
            label: "Mammo",
            value: "Mammo",
            type: ['mammo'],
            url: 'https://www.ohiohealth.com/schedule-online/mammogram/'
        },
    ]

    existing_section.style.display = 'none';
    existing_section.insertAdjacentHTML("afterend", `<div class="opti-new-design">

    <style>
        .opti-new-design {
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            font-size: 0;
            justify-content: center;
            line-height: 0;
            margin: 24px auto;
            max-width: 1024px;
            text-align: center;
            width: 100%;
        }

        .opti-new-design .header-section p {
            margin: 0;
        }

        .opti-new-design .desktop {
            display: block;
        }

        .opti-new-design .mobile {
            display: none;
        }

        .opti-new-design .header-section .page-heading {
            font-family: Adelle W01 SemiBold, arial, sans-serif;
            font-weight: 600;
            font-size: 40px;
            line-height: 50px;
            color: #0070AB;
            margin-bottom: 24px;
        }

        .opti-new-design .header-section .page-sub-heading {
            font-family: Adelle W01 SemiBold, arial, sans-serif;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            color: #002A5C;
            margin-bottom: 8px;
        }

        .opti-new-design .header-section .page-description {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #002A5C;
            margin-bottom: 24px;
        }

        .opti-new-design .header-section .search-input {
            position: relative;
            max-width: 602px;
            margin: auto;
        }

        .opti-new-design .header-section .search-input input {
            padding-left: 40px;
            max-width: 602px;
            height: 40px;
            border-radius: 3px;
            border-color: #A1A1A1;
            margin-bottom: 0;
            color: #333333;
            font-size: 14px;
            line-height: 20px;
        }

        .opti-new-design .header-section .search-input input::placeholder {
            color: #A1A1A1;
        }

        .opti-new-design .header-section .search-input input:focus {
            box-shadow: none;
        }

        .opti-new-design .header-section .search-input svg {
            position: absolute;
            top: 8px;
            left: 8px;
        }

        .opti-new-design .body-section .symptom-list-view {
            display: flex;
            flex-wrap: wrap;
            text-align: start;
            gap: 16px;
            margin: 32px 0 24px;
            justify-content: center;
        }

        .opti-new-design .body-section .symptom-list-view div {
            flex-basis: 23%;
        }

        .opti-new-design .body-section .symptom-list-view a,
        .opti-new-design .body-section .symptom-list-view p {
            font-family: Adelle W01 SemiBold, arial, sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 22.5px;
            color: #0070AB;
            margin-bottom: 0px;
        }

        .opti-new-design .body-section .symptom-list-view a {
            text-decoration: none;
            border-bottom: 0;
        }

        .opti-new-design .body-section .symptom-list-view p {
            cursor: pointer;
        }

        .opti-new-design .body-section .symptom-list-view div svg {
            display: none;
        }

        .opti-new-design .body-section .no-result-found-section {
            margin: 32px 0 24px;
        }

        .opti-new-design .body-section .no-result-found-section .no-result-message {
            font-family: Adelle W01 SemiBold, arial, sans-serif;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            color: #333333;
            margin-bottom: 24px;
        }

        .opti-new-design .body-section .no-result-found-section .consider-message {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #333333;
            margin-bottom: 24px;
        }

        .opti-new-design .body-section .no-result-found-section .search-hints {
            display: inline-block;
            text-align: start;
            margin-bottom: 0;
        }

        .opti-new-design .body-section .no-result-found-section .search-hints li {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #333333;
            margin-bottom: 24px;
        }

        .opti-new-design .body-section .no-result-found-section .suggested-symptom {
            width: 60%;
            margin: auto;
            text-align: start;
            column-count: 3;
        }

        .opti-new-design .body-section .no-result-found-section .suggested-symptom li {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #0070AB;
            margin-bottom: 4px;
        }

        .opti-new-design .body-section .no-result-found-section .suggested-symptom li a {
            text-decoration: none;
            border-bottom: 0;
        }

        .opti-new-design .footer-section {
            width: 100%;
        }

        .opti-new-design .footer-section .browse-all-message {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #002A5C;
            padding-bottom: 32px;
            margin-bottom: 0;
            border-bottom: 1px solid #D8D8D8;
        }

        .opti-new-design .footer-section .location-message {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #666666;
            margin-bottom: 30px;
            margin-top: 30px;
        }

        .opti-new-design .footer-section .desktop-login {
            background-color: rgba(188, 228, 248, 0.4);
            display: flex;
            align-items: center;
            padding: 21px 80px;
        }

        .opti-new-design .footer-section .desktop-login svg {
            margin-right: 64px;
        }

        .opti-new-design .footer-section .desktop-login .message-section {
            display: flex;
            align-items: center;
        }

        .opti-new-design .footer-section .desktop-login .message-section p {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #333333;
            margin-right: 23px;
            margin-bottom: 0;
        }

        .opti-new-design .footer-section .desktop-login .message-section div {
            width: 1px;
            height: 26px;
            background-color: #A1A1A1;
            margin-right: 23px;
        }

        .opti-new-design .footer-section .desktop-login .message-section a {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #0070AB;
            text-decoration: none;
            border-bottom: 0;
        }

        .opti-new-design .footer-section .mobile-login {
            background-color: rgba(188, 228, 248, 0.4);
            padding: 24px 19.5px;
            display: none;
        }

        .opti-new-design .footer-section .mobile-login p {
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #002A5C;
            margin-bottom: 0;
        }

        .opti-new-design .footer-section .mobile-login a {
            height: 32px;
            width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0070AB;
            color: #FFFFFF;
            font-family: Aller W01 Regular, arial, sans-serif;
            font-weight: 700;
            font-size: 14px;
            border-radius: 3px;
        }

        @media (max-width: 500px) {

            .opti-new-design {
                padding: 0 24px;
                margin-top: 0px;
            }

            .opti-new-design .desktop {
                display: none;
            }

            .opti-new-design .mobile {
                display: block;
            }

            .opti-new-design .header-section .page-heading-section.mobile {
                padding: 40px 24px;
                margin-left: -24px;
                margin-right: -24px;
                background: #0070AB;
            }

            .opti-new-design .header-section .page-heading-section.mobile .page-heading {
                color: #FFFFFF;
                margin-bottom: 0;
            }

            .opti-new-design .header-section .page-sub-heading {
                font-size: 36px;
                line-height: 45px;
                color: #002A5C;
                margin-top: 40px;
            }

            .opti-new-design .body-section .symptom-list-view div {
                flex-basis: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .opti-new-design .body-section .symptom-list-view div svg {
                display: inline-block;
            }

            .opti-new-design .body-section .no-result-found-section .no-result-message {
                margin-left: -24px;
                margin-right: -24px;
                margin-bottom: 16px;
            }

            .opti-new-design .body-section .no-result-found-section .consider-message {
                margin-bottom: 16px;
            }

            .opti-new-design .body-section .no-result-found-section .search-hints li {
                margin-bottom: 8px;
            }

            .opti-new-design .body-section .no-result-found-section .search-hints li:last-child {
                margin-bottom: 16px;
            }

            .opti-new-design .body-section .no-result-found-section .suggested-symptom {
                text-align: start;
                column-count: 1;
            }

            .opti-new-design .footer-section .browse-all-message {
                margin-left: -24px;
                margin-right: -24px;
            }

            .opti-new-design .footer-section .desktop-login {
                display: none;
            }

            .opti-new-design .footer-section .mobile-login {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-right: -24px;
                margin-left: -24px;
            }
        }
    </style>

    <div class="header-section">
        <p class="page-heading desktop">Schedule care online</p>
        <div class="page-heading-section mobile">
            <p class="page-heading">Schedule care online</p>
        </div>
        <p class="page-sub-heading">Search by service or symptom</p>
        <p class="page-description">
            Find the care you are looking for. Please select a symptom or service that best
            describes your needs. To search for a specific provider or specialty, consider trying our <a
                href="https://www.ohiohealth.com/find-a-doctor/"
                style="color: #0070AB; text-decoration: none; border: 0;">Find a
                Doctor</a>
            feature.
        </p>
        <div class="search-input">
            <input type="text" placeholder="Search by service or symptom" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.9 21L13.325 14.425C12.825 14.8583 12.242 15.1958 11.576 15.4375C10.91 15.6792 10.2014 15.8 9.45 15.8C7.6473 15.8 6.12163 15.175 4.87298 13.925C3.62433 12.675 3 11.1667 3 9.4C3 7.63333 3.625 6.125 4.875 4.875C6.125 3.625 7.6375 3 9.4125 3C11.1875 3 12.6958 3.625 13.9375 4.875C15.1792 6.125 15.8 7.63458 15.8 9.40375C15.8 10.1179 15.6833 10.8083 15.45 11.475C15.2167 12.1417 14.8667 12.7667 14.4 13.35L21 19.9L19.9 21ZM9.425 14.3C10.7792 14.3 11.9302 13.8208 12.8781 12.8625C13.826 11.9042 14.3 10.75 14.3 9.4C14.3 8.05 13.826 6.89583 12.8781 5.9375C11.9302 4.97917 10.7792 4.5 9.425 4.5C8.05695 4.5 6.8941 4.97917 5.93645 5.9375C4.97882 6.89583 4.5 8.05 4.5 9.4C4.5 10.75 4.97882 11.9042 5.93645 12.8625C6.8941 13.8208 8.05695 14.3 9.425 14.3Z"
                    fill="#0070AB" />
            </svg>

        </div>
    </div>

    <div class="body-section">
        <div class="symptom-list-view">

        </div>

        <div class="no-result-found-section">
            <p class="no-result-message">No results found for "asdfghj"</p>
            <p class="consider-message">Please consider the following:</p>
            <ul class="search-hints">
                <li>Consider using more general language</li>
                <li>Check spelling</li>
                <li>Select from the list of commonly searched terms:</li>
            </ul>
            <ul class="suggested-symptom">
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results/?q=primary&#x2B">Primary Care</a></li>
                <li><a
                        href="https://www.ohiohealth.com/find-a-doctor/results/?q=obstetrics/gynecology">Obstetrics/Gynecology</a>
                </li>
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results/?q=orthopedics">Orthopedics</a></li>
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results/?q=cardiologist">Cardiologist</a></li>
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results?q=Gynecology&type=doctors">Gynecology</a>
                </li>
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results/?q=heart">Heart and Vascular</a></li>
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results/?q=Family%20Medicine">Internal
                        Medicine</a></li>
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results/?q=Family%20Medicine">Family Medicine</a>
                </li>
                <li><a href="https://www.ohiohealth.com/find-a-doctor/results/?q=neurologist">Neurologist</a></li>
            </ul>
        </div>

    </div>

    <div class="footer-section">
        <p class="browse-all-message">
            Can’t find what you need? <a href="https://www.ohiohealth.com/services/browse-all/"
                style="color: #0070AB;text-decoration: none; border: 0; font-weight: 700;">Browse All</a>
        </p>
        <p class="location-message">
            24/7 treatment for severe and life-threatening conditions is nearby at more than <a
                href="https://www.ohiohealth.com/locations/ "
                style="color: #0070AB;text-decoration: none; border: 0;">20 locations</a> and three trauma
            centers.
        </p>
        <div class="desktop-login">
            <svg width="111" height="38" viewBox="0 0 111 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M71.097 30.771H67.5237L69.2254 21.8148C69.5657 20.0638 69.2821 19.3461 68.3747 19.3461C66.4746 19.3461 63.9223 23.8243 63.2983 27.154L62.6177 30.771H59.0729L63.0147 9.81592H66.5596L65.4536 15.8441C65.2267 17.1071 64.7731 18.5425 63.9223 20.925L63.979 20.9537C65.2551 18.3989 67.2119 16.1886 69.9059 16.1886C72.6285 16.1886 73.4508 18.1406 72.9403 20.925L71.097 30.771ZM58.4776 15.1839C57.3715 14.782 56.152 14.581 55.0179 14.581C49.9701 14.581 48.2401 19.6908 48.2401 23.5371C48.2401 26.0057 49.2325 27.6422 52.352 27.6422C53.7699 27.6422 55.1312 27.3263 56.3224 26.8384L56.0671 30.2544C54.6209 30.7136 52.8909 31.0294 51.2461 31.0294C45.4325 31.0294 44.1279 27.4124 44.1279 24.2549C44.1279 17.6525 47.9565 11.2513 55.3865 11.2513C56.9461 11.2513 58.2791 11.4522 59.4133 11.7965L58.4776 15.1839ZM78.7249 25.9484C78.7249 22.9632 80.2279 19.1166 83.4892 19.1166C84.1131 19.1166 84.6236 19.2027 85.0774 19.3175L84.907 20.2361C84.3398 23.2501 81.816 27.9291 79.8026 27.9291C79.0936 27.9291 78.7249 27.3549 78.7249 25.9484ZM83.0072 30.7709H86.5236C86.9831 27.8695 87.5271 25.0024 88.3247 20.7981C88.5608 19.5534 88.8192 18.1914 89.1042 16.6766C87.5161 16.3608 85.8147 16.246 84.1131 16.246C77.9308 16.246 75.0665 21.2409 75.0665 26.6374C75.0665 29.6801 76.2293 31.0867 78.3846 31.0867C81.1921 31.0867 83.1488 28.331 84.2833 26.2355H84.3398C83.6877 28.2161 83.2623 29.6515 83.0072 30.7709ZM99.9084 19.7481C97.8383 19.0878 95.3711 22.8483 94.4352 27.6708L93.8396 30.7711H90.2948L91.7129 23.3076C91.7975 22.846 91.8927 22.3344 91.9925 21.7979C92.327 19.9988 92.7138 17.9194 92.9322 16.5043H96.3637C96.1652 17.5952 95.8248 18.8581 95.1442 20.8101H95.2009C96.7039 17.7961 98.2353 15.8153 100.674 16.2172L99.9084 19.7481ZM106.573 19.3462H109.891L110.458 16.5043H107.112L108.076 11.366L104.389 12.1124L103.567 16.5043H101.185L100.617 19.3462H103.028L101.752 26.1782C101.099 29.5941 101.95 31.0581 104.985 31.0581C105.864 31.0581 106.941 30.9146 107.877 30.6848L108.218 27.757C107.707 27.8718 107.168 27.9577 106.459 27.9577C105.297 27.9577 105.07 27.4986 105.382 25.7763L106.573 19.3462Z"
                    fill="#0070AB" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M25.0155 13.7197V11.3945H17.8124L14.5227 21.4128C14.0691 22.848 13.7572 23.9388 13.4736 25.4316H13.4168C13.1616 24.0537 12.8213 22.7331 12.3675 21.3553L9.1629 11.3945H1.90306V13.7197C2.64044 13.8632 3.51962 14.0067 4.37027 14.0642L2.07322 28.1585C1.59109 28.1874 1.02388 28.3022 0.598633 28.4169V30.7709H7.77339V28.4457C7.20617 28.3308 6.44044 28.1874 5.78831 28.13L6.72404 21.0109C6.77449 20.6109 6.82991 20.2084 6.88589 19.802C7.01875 18.8373 7.15472 17.85 7.23453 16.8199H7.29126C7.5465 18.4561 8.00027 20.207 8.53912 21.786L11.4317 30.7709H15.1183L18.1811 21.0397C18.63 19.6225 18.9069 18.3298 19.1719 17.0922C19.1914 17.0011 19.2108 16.9104 19.2303 16.8199H19.2872C19.3721 17.796 19.5706 19.1163 19.8542 20.8673L20.9603 28.13C20.308 28.1874 19.5422 28.3308 18.975 28.4457V30.7709H26.3485V28.4169C25.9231 28.3022 25.3558 28.1874 24.8737 28.1585L22.5483 14.0642C23.3991 14.0067 24.2781 13.8632 25.0155 13.7197ZM36.5568 32.2637L41.0376 19.145C41.5765 19.0876 42.0868 19.0015 42.5689 18.858V16.5041H35.933V18.858C36.3868 18.9728 36.8404 19.0588 37.3509 19.1163L36.1032 22.7907C35.5927 24.2546 35.1673 25.8335 34.8837 27.0102H34.8553C34.515 25.6613 34.1748 24.4556 33.7494 23.1926L32.3314 19.1163C32.8419 19.0588 33.2956 18.9728 33.7494 18.858V16.5041H26.9715V18.858C27.4253 19.0015 27.9642 19.0876 28.503 19.145L32.4165 30.7709H33.4658L32.9837 32.1487C32.2465 34.2729 31.3673 34.8757 30.1478 34.8757C29.4955 34.8757 28.8717 34.7896 28.1343 34.5601L27.9358 37.7176C28.6165 37.8611 29.524 37.9472 30.1194 37.9472C33.3524 37.9472 35.0822 36.5982 36.5568 32.2637Z"
                    fill="#666666" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M47.5782 7.9616V7.09291C47.3239 7.03932 47.0272 6.98572 46.7198 6.96414V0.121158C45.9357 0.0997519 45.1198 0.131944 44.4418 0.217734V1.0758C44.749 1.09721 45.1092 1.14002 45.3636 1.183V6.96414C45.0457 6.98572 44.7172 7.03932 44.4418 7.09291V7.9616H47.5782ZM13.1125 4.55094V7.96165H15.3271V7.09296C15.0728 7.0392 14.7443 6.9856 14.4581 6.96419V4.2184C14.4581 3.28533 14.0768 2.51305 12.89 2.51305C12.0741 2.51305 11.47 2.90981 11.1628 3.51051L11.1417 3.49972C11.2158 3.18875 11.2369 2.73823 11.2369 2.41647V0.121205C10.4528 0.0997985 9.63692 0.131825 8.95888 0.217781V1.07569C9.2661 1.09726 9.62626 1.14007 9.88069 1.18305V6.96419C9.56282 6.9856 9.23429 7.0392 8.95888 7.09296V7.96165H12.0105V7.08217C11.7668 7.01779 11.4912 6.9856 11.2369 6.96419V5.38744C11.2369 4.45437 11.7668 3.66068 12.4554 3.66068C12.9641 3.66068 13.1125 3.99306 13.1125 4.55094ZM3.1419 4.28265C3.1419 2.65247 4.05321 1.85878 5.03862 1.85878C6.2678 1.85878 6.94583 2.73826 6.94583 4.3472C6.94583 6.08458 5.94993 6.81405 5.01747 6.81405C3.73517 6.81405 3.1419 5.81659 3.1419 4.28265ZM1.66895 4.43299C1.66895 6.6745 2.73927 8.07967 4.92206 8.07967C6.86108 8.07967 8.41878 6.63168 8.41878 4.23984C8.41878 1.76221 7.07304 0.603955 5.16567 0.603955C3.2478 0.603955 1.66895 2.04115 1.66895 4.43299ZM17.372 1.94459C16.9058 1.94459 16.535 1.56924 16.535 1.10793C16.535 0.65757 16.9058 0.28205 17.372 0.28205C17.8383 0.28205 18.2197 0.646784 18.2197 1.10793C18.2197 1.56924 17.8383 1.94459 17.372 1.94459ZM15.7827 7.9617V7.09284C16.0581 7.03925 16.3866 6.98565 16.7045 6.96424V3.68214C16.4501 3.63916 16.0899 3.59635 15.7827 3.57494V2.71687C16.4501 2.63108 17.2661 2.59889 18.0502 2.62029V6.96424C18.3469 6.98565 18.6542 7.03925 18.9084 7.09284V7.9617H15.7827ZM20.7182 5.24805C20.7182 4.15402 21.3117 3.68209 21.9156 3.68209C22.7103 3.68209 23.0705 4.23981 23.0705 5.26946C23.0705 6.35287 22.562 6.89981 21.8944 6.89981C21.1103 6.89981 20.7182 6.34209 20.7182 5.24805ZM19.3195 5.38744C19.3195 7.28595 20.2838 8.06901 21.7779 8.06901C23.3567 8.06901 24.4694 6.86762 24.4694 5.19445C24.4694 3.36033 23.5051 2.52383 22.011 2.52383C20.411 2.52383 19.3195 3.72506 19.3195 5.38744ZM29.6292 7.96165V7.08218C29.8623 7.01779 30.1484 6.9856 30.4027 6.9642V4.8191H27.3722V6.9642C27.6266 6.9856 27.902 7.01779 28.1458 7.08218V7.96165H25.073V7.09296C25.3484 7.0392 25.6769 6.9856 25.9948 6.9642V1.71937C25.6769 1.69779 25.3484 1.6442 25.073 1.5906V0.721907H28.1458V1.60138C27.902 1.66577 27.6266 1.69779 27.3722 1.71937V3.61771H30.4027V1.71937C30.1484 1.69779 29.8623 1.66577 29.6292 1.60138V0.721907H32.7022V1.5906C32.4266 1.6442 32.0981 1.69779 31.7802 1.71937V6.9642C32.0981 6.9856 32.4266 7.0392 32.7022 7.09296V7.96165H29.6292ZM34.7045 4.58309C34.7788 3.93958 35.1707 3.52125 35.7324 3.52125C36.3045 3.52125 36.6648 3.91817 36.6437 4.58309H34.7045ZM34.6833 5.51616H37.9469C37.9788 5.29098 37.9894 5.07642 37.9894 4.89406C37.9894 3.57484 37.3112 2.513 35.7747 2.513C34.1958 2.513 33.3058 3.71423 33.3058 5.34458C33.3058 7.22152 34.2383 8.06897 35.9125 8.06897C36.5694 8.06897 37.2369 7.95098 37.7986 7.72564L37.6714 6.6638C37.2158 6.87836 36.6542 6.99634 36.135 6.99634C35.1601 6.99634 34.6727 6.51362 34.6833 5.51616ZM41.8355 5.62344C40.564 5.62344 40.0871 5.9452 40.0871 6.46011C40.0871 6.80327 40.3202 7.02845 40.7122 7.02845C41.3799 7.02845 41.8355 6.39572 41.8355 5.74143V5.62344ZM41.9414 7.97231C41.9414 7.66134 41.952 7.33958 41.9945 7.06081L41.9838 7.05002C41.7296 7.65055 41.0832 8.06889 40.2991 8.06889C39.3455 8.06889 38.7943 7.52195 38.7943 6.66388C38.7943 5.38748 40.0447 4.75475 41.8355 4.73318V4.41143C41.8355 3.84309 41.613 3.55336 40.8712 3.55336C40.617 3.55336 40.352 3.58555 40.1296 3.64993C40.1083 3.86449 40.066 4.11108 40.0235 4.34721H39.1652V2.78124C39.7163 2.62028 40.3414 2.5023 41.0089 2.5023C42.715 2.5023 43.1917 3.19941 43.1917 4.36861V6.91047C43.4461 6.95344 43.7852 6.99626 44.0607 7.01783V7.88652C43.4461 7.96169 42.6302 7.99388 41.9414 7.97231ZM50.0471 8.06893C48.8815 8.06893 48.5212 7.63998 48.5212 6.39577V3.69279H47.6099V2.63095H48.5107V0.98998L49.8669 0.625246V2.63095H51.1491V3.69279H49.8669V6.03104C49.8669 6.71753 50.0258 6.91051 50.4922 6.91051C50.7146 6.91051 50.9584 6.87832 51.1491 6.82472V7.92954C50.8099 8.01533 50.4179 8.06893 50.0471 8.06893ZM55.8641 4.55094V7.96165H58.0786V7.09296C57.8244 7.0392 57.4959 6.9856 57.2098 6.96419V4.2184C57.2098 3.28533 56.8283 2.51305 55.6416 2.51305C54.8255 2.51305 54.2216 2.90981 53.9142 3.51051L53.8932 3.49972C53.9673 3.18875 53.9886 2.73823 53.9886 2.41647V0.121205C53.2044 0.0997985 52.3885 0.131825 51.7103 0.217781V1.07569C52.0177 1.09726 52.3778 1.14007 52.6323 1.18305V6.96419C52.3144 6.9856 51.9859 7.0392 51.7103 7.09296V7.96165H54.7619V7.08217C54.5183 7.01779 54.2427 6.9856 53.9886 6.96419V5.38744C53.9886 4.45437 54.5183 3.66068 55.207 3.66068C55.7157 3.66068 55.8641 3.99306 55.8641 4.55094Z"
                    fill="#0070AB" />
            </svg>
            <div class="message-section">
                <p>Already have an OhioHealth MyChart account? Login to schedule with your doctor.</p>
                <div></div>
                <a href="https://mychart.ohiohealth.com/MyChart/Authentication/Login">LOG IN</a>
            </div>
        </div>
        <div class="mobile-login">
            <p>Save time and sign in to <span style="color: #0070AB; font-weight: 700;">MyChart</span>.</p>
            <a href="https://mychart.ohiohealth.com/MyChart/Authentication/Login">LOG IN</a>
        </div>
    </div>
</div>`)

    const first_12_symptoms = symptom_list.slice(0, 12);

    let desktop_symptom_list_container = document.querySelector('.opti-new-design .body-section .symptom-list-view');
    if (desktop_symptom_list_container) {
        desktop_symptom_list_container.innerHTML = first_12_symptoms.map((symptom, index) => {
            return symptom.url
                ? `<div>
                <a href="${symptom.url}">${symptom.label}</a>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333008 14.12L6.10179 8L0.333008 1.88L2.10899 0L9.66634 8L2.10899 16L0.333008 14.12Z" fill="#0070AB"/>
                </svg>
                </div>`
                : `<div>
                <p>${symptom.label}</p>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333008 14.12L6.10179 8L0.333008 1.88L2.10899 0L9.66634 8L2.10899 16L0.333008 14.12Z" fill="#0070AB"/>
                </svg>
                </div>`;
        }).join('');
    }

});
