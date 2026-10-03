/* i18n.js — AM/EN dictionary + t() helper + language toggle */
(function (global) {
  const DICT = {
    app_title: { am: 'የህፃናት እና ታዳጊዎች ክፍል', en: 'Children & Youth Department' },
    nav_dashboard: { am: 'ዳሽቦርድ', en: 'Dashboard' },
    nav_members: { am: 'አባላት', en: 'Members' },
    nav_attendance: { am: 'አቴንዳስ', en: 'Attendance' },
    nav_programs: { am: 'ፕሮግራሞች', en: 'Programs' },
    nav_contrib: { am: 'መዋጮ', en: 'Contributions' },
    nav_plan: { am: 'ዕቅድ', en: 'Plan' },
    nav_settings: { am: 'ቅንብር', en: 'Settings' },

    today_ec: { am: 'የዛሬ ቀን', en: 'Today' },
    upcoming_due: { am: 'በቅርቡ የሚደርሱ', en: 'Coming up' },
    total_members: { am: 'ጠቅላላ አባላት', en: 'Total members' },
    absentees_flagged: { am: 'ክትትል የሚያስፈልጋቸው', en: 'Need follow-up' },
    upcoming_programs: { am: 'ቀጣይ መርሀግብሮች', en: 'Upcoming programs' },

    add_new: { am: '+ አዲስ ጨምር', en: '+ Add new' },
    save: { am: 'አስቀምጥ', en: 'Save' },
    cancel: { am: 'ይቅር', en: 'Cancel' },
    edit: { am: 'አርም', en: 'Edit' },
    delete: { am: 'ሰርዝ', en: 'Delete' },
    search: { am: 'ፈልግ...', en: 'Search...' },
    export_excel: { am: '⬇ ወደ Excel ላክ', en: '⬇ Export Excel' },
    import_excel: { am: '⬆ ከExcel አስገባ', en: '⬆ Import Excel' },
    print: { am: '🖨 አትም', en: '🖨 Print' },
    close: { am: 'ዝጋ', en: 'Close' },
    confirm_delete: { am: 'እርግጠኛ ነዎት መሰረዝ ይፈልጋሉ?', en: 'Delete this item?' },
    no_records: { am: 'ምንም መረጃ የለም', en: 'No records yet' },
    yes: { am: 'አዎ', en: 'Yes' },
    no: { am: 'አይ', en: 'No' },
    undo: { am: 'ቀልብስ', en: 'Undo' },

    // Members
    member_name: { am: 'የልጅ ስም', en: "Child's name" },
    member_age: { am: 'እድሜ', en: 'Age' },
    member_birthdate: { am: 'የልደት ቀን', en: 'Birth date' },
    member_grade: { am: 'ክፍል ደረጃ', en: 'Grade' },
    parent_name: { am: 'የወላጅ ስም', en: 'Parent name' },
    parent_phone: { am: 'የወላጅ ስልክ', en: 'Parent phone' },
    family_group: { am: 'የቤተሰብ ቡድን', en: 'Family group' },
    family_father: { am: 'የቤተሰብ አባት', en: 'Family "father" mentor' },
    family_mother: { am: 'የቤተሰብ እናት', en: 'Family "mother" mentor' },
    join_date: { am: 'የገባበት ቀን', en: 'Join date' },
    member_status: { am: 'ሁኔታ', en: 'Status' },
    member_status_active: { am: 'ንቁ', en: 'Active' },
    member_status_inactive: { am: 'ንቁ ያልሆነ', en: 'Inactive' },
    member_notes: { am: 'ማስታወሻ', en: 'Notes' },
    comm_book_note: { am: 'የወላጅ ግንኙነት ማስታወሻ', en: 'Parent communication note' },

    // Attendance
    attendance_for_date: { am: 'የቀን አቴንዳስ', en: 'Attendance for' },
    pick_date: { am: 'ቀን ምረጥ', en: 'Pick date' },
    mark_present: { am: 'ተገኝቷል', en: 'Present' },
    mark_absent: { am: 'አልተገኘም', en: 'Absent' },
    save_attendance: { am: 'አቴንዳስ አስቀምጥ', en: 'Save attendance' },
    consecutive_absences: { am: 'ተከታታይ የቀሩ', en: 'Consecutive absences' },
    call_parent: { am: '📞 ወላጅ ደውል', en: '📞 Call parent' },
    mark_called: { am: 'ደወልኩ ✓', en: 'Called ✓' },
    already_called: { am: 'ተደውሏል', en: 'Already called' },
    call_reason: { am: 'ምክንያት', en: 'Reason' },
    called_by: { am: 'የደወለው', en: 'Called by' },
    attendance_rate: { am: 'የመገኘት መጠን', en: 'Attendance rate' },
    no_absentees: { am: 'ክትትል የሚያስፈልገው የለም 🎉', en: 'No one needs follow-up 🎉' },

    // Programs
    program_type: { am: 'የመርሀግብር አይነት', en: 'Program type' },
    program_communion: { am: 'ቁርባን', en: 'Communion' },
    program_film: { am: 'መንፈሳዊ ፊልም/ጨዋታ', en: 'Spiritual film/game' },
    program_visit: { am: 'መንፈሳዊ ቦታ ጉብኝት', en: 'Spiritual site visit' },
    program_exchange: { am: 'ልምድ ልውውጥ', en: 'Experience exchange' },
    program_event: { am: 'መርሀግብር/ውይይት', en: 'Event/discussion' },
    program_family_meeting: { am: 'የቤተሰብ ቡድን ስብሰባ', en: 'Family group meeting' },
    program_other: { am: 'ሌላ', en: 'Other' },
    program_date: { am: 'ቀን', en: 'Date' },
    program_desc: { am: 'መግለጫ', en: 'Description' },
    program_budget: { am: 'በጀት (ብር)', en: 'Budget (ETB)' },
    program_attendance_count: { am: 'የተገኙ ብዛት', en: 'Attendance count' },
    program_notes: { am: 'ማስታወሻ', en: 'Notes' },

    // Contributions
    contrib_period: { am: 'ወር', en: 'Month' },
    contrib_member: { am: 'ከማን/ከየት', en: 'From whom' },
    contrib_expected: { am: 'የሚጠበቅ መጠን', en: 'Expected amount' },
    contrib_paid: { am: 'የተከፈለ መጠን', en: 'Amount paid' },
    contrib_date_paid: { am: 'የተከፈለበት ቀን', en: 'Date paid' },
    contrib_collected_by: { am: 'የሰበሰበው', en: 'Collected by' },
    contrib_handed_over: { am: 'ለሂሳብ ክፍል ገብቷል?', en: 'Handed to Accounts?' },
    total_collected: { am: 'ጠቅላላ የተሰበሰበ', en: 'Total collected' },

    // Plan
    plan_no: { am: 'ተ.ቁ', en: 'No.' },
    plan_subunit: { am: 'ንዑስ ክፍል', en: 'Sub-unit' },
    plan_title: { am: 'አብይ ተግባር', en: 'Main task' },
    plan_details: { am: 'ዝርዝር ተግባር', en: 'Details' },
    plan_outcome: { am: 'ውጤት', en: 'Outcome' },
    plan_indicator: { am: 'መለኪያ', en: 'Indicator' },
    plan_target: { am: 'እቅድ', en: 'Target' },
    plan_timing: { am: 'የጊዜ ገደብ', en: 'Timing' },
    plan_executor: { am: 'ፈጻሚ አካል', en: 'Executor' },
    plan_budget: { am: 'በጀት', en: 'Budget' },
    plan_weight: { am: 'ክብደት', en: 'Weight' },
    plan_next_due: { am: 'ቀጣይ ጊዜ', en: 'Next due' },
    plan_mark_done: { am: 'ተከናውኗል ✓', en: 'Mark done ✓' },
    plan_done_note: { am: 'የክንውን ማስታወሻ', en: 'Completion note' },
    plan_history: { am: 'የክንውን ታሪክ', en: 'History' },
    plan_reset: { am: 'ወደ መጀመሪያው ዕቅድ መልስ', en: 'Reset to original plan' },
    plan_status_on_track: { am: 'እንደታቀደ እየሄደ ነው', en: 'On track' },
    plan_status_needs_attn: { am: 'ትኩረት ይፈልጋል', en: 'Needs attention' },
    plan_status_done: { am: 'ተጠናቋል', en: 'Done' },
    plan_status_manual: { am: 'በእጅ ክትትል', en: 'Manual tracking' },
    generate_report: { am: '🖨 ሪፖርት አመንጭ', en: '🖨 Generate report' },
    generate_pptx: { am: '📊 PowerPoint አመንጭ', en: '📊 Generate PowerPoint' },
    report_period: { am: 'የሪፖርት ጊዜ', en: 'Report period' },
    admin_only_note: { am: 'ይህ ክፍል ለ አስተዳዳሪዎች ብቻ ነው', en: 'This section is admin-only' },
    main_goal: { am: 'ዋና ግብ', en: 'Main goal' },

    // Settings
    language: { am: 'ቋንቋ', en: 'Language' },
    settings_supabase: { am: '☁️ የSupabase ግንኙነት', en: '☁️ Supabase connection' },
    settings_sync_now: { am: '🔄 አሁን አመሳስል', en: '🔄 Sync now' },
    settings_display_name: { am: 'የሚታይ ስም', en: 'Display name' },
    settings_offline_only: { am: 'ከመስመር ውጪ ብቻ (Skip)', en: 'Skip — offline only' },
    settings_signed_in_as: { am: 'ገብተዋል እንደ', en: 'Signed in as' },
    settings_sign_out: { am: 'ውጣ', en: 'Sign out' },
    settings_sign_in: { am: 'ግባ', en: 'Sign in' },
    settings_sign_up: { am: 'መለያ ፍጠር', en: 'Sign up' },
    email: { am: 'ኢሜይል', en: 'Email' },
    password: { am: 'የይለፍ ቃል', en: 'Password' },

    unauthorized: { am: 'ይህን ለማድረግ ፈቃድ የለዎትም', en: 'You are not authorized to do this' },

    reminders_title: { am: '🔔 የአካባቢ ማሳሰቢያዎች', en: '🔔 Local reminders' },
    reminders_enable: { am: 'አብራ', en: 'Enable' },
    reminders_disable: { am: 'አጥፋ', en: 'Disable' },
    reminders_explain: { am: 'መተግበሪያው ክፍት ሆኖ በዚህ መሳሪያ ላይ ብቻ ይሰራል — መተግበሪያው ተዘግቶ ባለበት ጊዜ ማንቂያ መላክ አይችልም (እውነተኛ push አይደለም)። በቀን አንዴ ይጣራል።', en: "Works only while the app is open on this device — it can't wake the app when it's closed (not real push). Checked at most once a day." },
    reminders_check_now: { am: '🔔 አሁን አረጋግጥ', en: '🔔 Check now' },
    reminders_permission_denied: { am: 'ፈቃድ ተከልክሏል — ከስልኩ ቅንብር ውስጥ ለዚህ ገጽ ማንቂያ ፈቃድ ይስጡ', en: 'Permission denied — enable notifications for this site in your device settings' },
    reminders_unsupported: { am: 'ይህ መሳሪያ/አሳሽ ማሳሰቢያዎችን አይደግፍም', en: 'Notifications are not supported on this device/browser' },
    reminders_nothing: { am: 'ምንም የሚያሳስብ ነገር የለም', en: 'Nothing to flag right now' },
  };

  let currentLang = localStorage.getItem('hk_lang') ||
    (navigator.language && navigator.language.startsWith('am') ? 'am' : 'am');

  function t(key) {
    const entry = DICT[key];
    if (!entry) return key;
    return entry[currentLang] || entry.am || key;
  }

  function getLang() { return currentLang; }

  function setLang(lang) {
    currentLang = lang === 'en' ? 'en' : 'am';
    localStorage.setItem('hk_lang', currentLang);
    document.documentElement.setAttribute('lang', currentLang);
    document.dispatchEvent(new CustomEvent('hk-lang-changed'));
  }

  function applyStaticTranslations(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    (root || document).querySelectorAll('[data-i18n-ph]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
  }

  global.I18N = { t, getLang, setLang, applyStaticTranslations, DICT };
})(window);
