// Data structure for translations
const translations = {
    en: { 
        welcome: "Welcome",
    },
    ar: { 
        welcome: "مرحباً",
    }
};


// Language Toggle
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    // Update Button Active States
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.classList.remove('lang-button-active');
    });
    
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('lang-button-active');
}

// Event Listeners
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('btn-ar').addEventListener('click', () => setLanguage('ar'));

// Initialize
setLanguage('en');