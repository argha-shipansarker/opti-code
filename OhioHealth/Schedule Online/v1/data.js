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