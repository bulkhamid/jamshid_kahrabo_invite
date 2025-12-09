/*
 * Translation dictionary for the wedding invitation website.
 * Each key corresponds to a translation token used in the HTML via the
 * `data-i18n` attribute.  When a language is selected, the appropriate
 * strings are injected into the page.  Placeholders for form fields are
 * handled separately via the `data-i18n-placeholder` attribute.
 *
 * Additional keys `countdownDays`, `countdownHours`, `countdownMinutes`
 * and `countdownSeconds` have been added to support translation of the
 * countdown timer units.  These map to the human‑readable labels shown
 * beneath the numeric values in the timer.
 */

const translations = {
  kk: {
    invitationTitle: "Үйлену тойға шақыру",
    coupleNames: "Жамшидбек <br /> &amp; <br />Кахрабо",
    weddingDate: "24 қаңтар 2026, сағат 19:00",
    poem:
      "Артқа тастап балауса бала шақты,<br />Біз де тіктік жас отау, жаңа ошақты.<br />Әке – шеше жолына қадам бастық,<br />Жалғау үшін бүгін мен болашақты.",
    address:
      "Құрметті ағайын-туыс, бауырлар, нағашы-жиен, бөлелер, құда-жекжат, дос-жарандар, көршілер мен әріптестер!",
    invitationMessage:
      'Сіз(дер)ді балаларымыз<br><span class="couple-inline-names great-vibes">Жамшидбек &amp; Кахрабо</span><br>үйлену тойына жайылған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!',
    countdownTitle: "Тойға дейін:",
    // Unit labels for the countdown timer
    countdownDays: "күн",
    countdownHours: "сағат",
    countdownMinutes: "минут",
    countdownSeconds: "секунд",
    calendarTitle: "Той салтанаты:",
    calendarDate: "24.01.2026 жыл",
    timelineDesc: "Тойдың басталуы",
    photosTitle: "Біздің суреттер",
    locationTitle: "Мекен‑жайымыз",
    venueAddress: "Түркістан қаласы, Ескі Иқан ауылы, «Азизбек» тойханасы",
    hostTitle: "Той иесі",
    hostName: "Атаевтар әулеті",
    dressTitle: "Дресс‑код:",
    dressMen: "Ер адамдар: классикалық костюм",
    dressWomen: "Әйел адамдар: кешкі көйлек",
    joinMessage: "Қуанышымызға ортақ болыңыздар!",
    formInstructions:
      "Төмендегі форманы толтырып тойға қатысуыңызды растауыңызды сұраймыз:",
    rsvpTitle: "Қатысу формасы",
    nameLabel:
      "Аты‑жөніңіз (Жұбыңызбен келсеңіз, есімдеріңізді бірге жазыңыз)",
    attendanceQuestion: "Тойға келесіз бе?",
    attendYes: "Иә келемін",
    attendYesWithSpouse: "Иә, жұбыммен келемін",
    attendNo: "Жоқ, келе алмаймын",
    guestCountLabel: "Қанша адам болып келесіз?",
    additionalMessageLabel: "Қосымша хабарлама (қаласаңыз):",
    additionalMessagePlaceholder: "Хабарламаңызды жазуға болады...",
    submitButton: "Жіберу",
    footerMessage: "Қуанышымызға ортақ болуға асыға күтеміз!",
    mon: "ДС",
    tue: "СС",
    wed: "СР",
    thu: "БС",
    fri: "ЖМ",
    sat: "СН",
    sun: "ЖС",
  },
  uz: {
    invitationTitle: "Никоҳ тўйига таклиф",
    coupleNames: "Жамшидбек <br /> &amp; <br />Кахрабо",
    weddingDate: "24 январь 2026, соат 19:00",
    poem:
      "Oрқа ташлаб болалик йилларини,<br />Биз ҳам тикидик янги оила, янги отажой.<br />Ота-она йўлларига қадам ташладик,<br />Бугун ва келажакни бирлаштириш учун.",
    address: "Ҳурматли қавм-қариндошлар, Азиз ака-укалар,  Тоға-жиянлар, Бўлалар, Қадрли қуда-андалар, Дўст-у дугоналар, Ҳамкасблар!",
    invitationMessage:
      "Сиз(лар)ни фарзандларимиз<br><span class=\"couple-inline-names great-vibes\">Жамшидбек &amp; Кахрабо</span><br> никоҳ тўйига таклиф этамиз ва бахтимизга шерик бўлишингизни истаймиз!",
    countdownTitle: "Тўйгача қолди:",
    countdownDays: "кун",
    countdownHours: "соат",
    countdownMinutes: "дақиқа",
    countdownSeconds: "сония",
    calendarTitle: "Тўй тантанаси:",
    calendarDate: "24.01.2026 йил",
    timelineDesc: "Тўй бошланиши",
    photosTitle: "Бизнинг расмлар",
    locationTitle: "Манзилимиз",
    venueAddress: "Туркистон шаҳри, Эски Иқон қишлоғи, «Азизбек» тўйхонаси",
    hostTitle: "Тўй эгаси",
    hostName: "Атаевлар оиласи",
    dressTitle: "Кийиниш қоидалари:",
    dressMen: "Эркаклар: классик костюм",
    dressWomen: "Аёллар: кечки кўйлак",
    joinMessage: "Қувончимизга шерик бўлинг!",
    formInstructions:
      "Қуйидаги формани тўлдириб тўйга қатнашишингизни тасдиқлашингизни сўраймиз:",
    rsvpTitle: "Қатнашув формаси",
    nameLabel:
      "Исмингиз (Эр-хотин келсангиз, исмларингизни бирга ёзинг)",
    attendanceQuestion: "Тўйга келасизми?",
    attendYes: "Ҳа, келаман",
    attendYesWithSpouse: "Ҳа, турмуш ўртоғим билан келаман",
    attendNo: "Йўқ, келолмайман",
    guestCountLabel: "Нечта одам бўлиб келасиз?",
    additionalMessageLabel: "Қўшимча хабарнома (истаганингиз ҳолда):",
    additionalMessagePlaceholder: "Хабарномангизни ёзишингиз мумкин...",
    submitButton: "Юбориш",
    footerMessage:
      "Қувончимизга шерик бўлишингизни интизорлик билан кутамиз!",
    mon: "ДУ",
    tue: "СЕ",
    wed: "ЧО",
    thu: "ПА",
    fri: "ЖУ",
    sat: "ША",
    sun: "ЯК",
  },
  en: {
    invitationTitle: "Wedding Invitation",
    coupleNames: "Jamshidbek <br /> &amp; <br />Kakhrabo",
    weddingDate: "January 24, 2026, at 7:00 PM",
    poem:
      "Leaving behind the tender childhood days,<br />We have also built a young home, a new hearth.<br />We stepped on the path of father and mother,<br />To connect the present and the future.",
    address: "Dear relatives, friends, and neighbors!",
    invitationMessage:
      "We invite you to be a valued guest at the wedding of our children, <br><span class=\"couple-inline-names great-vibes\">Jamshidbek &amp; Kahrabo</span><br> and share in our happiness!",
    countdownTitle: "Until the wedding:",
    countdownDays: "days",
    countdownHours: "hours",
    countdownMinutes: "minutes",
    countdownSeconds: "seconds",
    calendarTitle: "Wedding Ceremony:",
    calendarDate: "24.01.2026",
    timelineDesc: "Wedding begins",
    photosTitle: "Our photos",
    locationTitle: "Our address",
    venueAddress:
      "City of Turkistan, village of Eski Iqan, \"Azizbek\" banquet hall",
    hostTitle: "Host",
    hostName: "Ataev family",
    dressTitle: "Dress code:",
    dressMen: "Men: classic suit",
    dressWomen: "Women: evening dress",
    joinMessage: "Share in our happiness!",
    formInstructions:
      "Please fill out the form below to confirm your attendance at the wedding:",
    rsvpTitle: "RSVP Form",
    nameLabel:
      "Your name(s) (If you are coming with your spouse, write both names)",
    attendanceQuestion: "Will you attend the wedding?",
    attendYes: "Yes, I will come",
    attendYesWithSpouse: "Yes, I will come with my spouse",
    attendNo: "No, I cannot attend",
    guestCountLabel: "How many people will be attending?",
    additionalMessageLabel: "Additional message (optional):",
    additionalMessagePlaceholder: "You can write your message...",
    submitButton: "Submit",
    footerMessage:
      "We look forward to sharing our joy with you!",
    mon: "MON",
    tue: "TUE",
    wed: "WED",
    thu: "THU",
    fri: "FRI",
    sat: "SAT",
    sun: "SUN",
  },
};

/**
 * Apply translations to all elements with a `data-i18n` attribute.
 * Also update placeholders when the `data-i18n-placeholder` attribute is present.
 * @param {string} lang Two-letter language code (kk, uz, en)
 */
function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  // Update text content/HTML for all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });
  // Update placeholders for inputs/textarea
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = dict[key];
    if (value !== undefined) {
      el.setAttribute('placeholder', value);
    }
  });
  // Update days of week separately if calendar headers exist
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  document.querySelectorAll('.calendar-table thead th').forEach((th, idx) => {
    const key = days[idx];
    if (dict[key]) {
      th.textContent = dict[key];
    }
  });
}

// Initialise language selection on page load
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('langSelect');
  const defaultLang = 'kk';
  setLanguage(defaultLang);
  if (selector) {
    selector.value = defaultLang;
    selector.addEventListener('change', (e) => {
      setLanguage(e.target.value);
      // When the language changes, restart scroll‑triggered animations.
      if (typeof resetAnimations === 'function') {
        resetAnimations();
      }
    });
  }
});