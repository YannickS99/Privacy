const translations = {

    en: {

        "page.title": "Privacy Policy | GDPR",
        "nav.title": "Privacy",

        "header.title": "Privacy Policy",
        "header.subtitle": "Information about the processing of personal data according to GDPR.",

        "sec1.title": "1. Controller",
        "sec1.link": "More information",

        "sec2.title": "2. Web Appearance (GitHub Pages)",
        "sec2.text1": "My websites are static pages hosted via GitHub Pages.",
        "sec2.text2": "When accessing this website, no cookies are set and no analytics tools are used.",
        "sec2.text3": "Note: GitHub may collect server log files (IP address, date, time). This is the responsibility of GitHub (Microsoft).",

        "sec3.title": "3. App Provisions (Monetheus)",
        "sec3.text1": "In my apps, protecting your privacy is the top priority:",
        "sec3.point1": "Local Storage: All financial data is stored exclusively on your device (SwiftData).",
        "sec3.point2": "No Data Access: As the developer, I have no access to your income or expenses.",
        "sec3.point3": "Data Export/Import: You can export and import your data as a JSON file at any time — giving you full control over your data.",

        "sec4.title": "4. Your Rights",
        "sec4.text": "You have the right to information, correction, deletion, and restriction of processing under GDPR.",

        "sec5.title": "5. Legal Basis",
        "sec5.text": "The processing of personal data on this website is based on Art. 6 (1) lit. f GDPR. The legitimate interest lies in the technically secure and optimized provision of this website.",

        "sec6.title": "6. Hosting",
        "sec6.text1": "This website is hosted via GitHub Pages, a service provided by GitHub Inc., part of Microsoft Corporation.",
        "sec6.text2": "When accessing the website, technical server log files may be automatically processed (e.g. IP address, browser type, operating system, date and time of access).",
        "sec6.text3": "These data are necessary for the secure and stable operation of the website.",
        "sec6.text4": "Data processing may also take place on servers outside the European Union, particularly in the United States.",

        "sec7.title": "7. Storage Duration",
        "sec7.text": "Personal data will only be stored for as long as necessary to fulfill the respective purpose or as required by legal retention obligations.",

        "sec8.title": "8. Contact",
        "sec8.text": "If you contact me via email, the transmitted data will be stored for the purpose of processing your request. This data will not be passed on without your consent.",

        "sec9.title": "9. Right to Lodge a Complaint",
        "sec9.text": "You have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data violates the GDPR.",

        "footer.status": "Status: April 2026",
        "footer.monetheus": "Monetheus",
        "footer.legal": "Legal Notice"

    },

    de: {

        "page.title": "Datenschutz | DSGVO",
        "nav.title": "Datenschutz",

        "header.title": "Datenschutzerklärung",
        "header.subtitle": "Informationen über die Verarbeitung personenbezogener Daten gemäß DSGVO.",

        "sec1.title": "1. Verantwortlicher",
        "sec1.link": "Weitere Informationen",

        "sec2.title": "2. Webauftritt (GitHub Pages)",
        "sec2.text1": "Meine Webseiten sind statische Seiten, die über GitHub Pages gehostet werden.",
        "sec2.text2": "Beim Zugriff auf diese Webseite werden keine Cookies gesetzt und keine Analyse-Tools verwendet.",
        "sec2.text3": "Hinweis: GitHub kann Server-Log-Files (IP-Adresse, Datum, Uhrzeit) erheben. Dies liegt in der Verantwortung von GitHub (Microsoft).",

        "sec3.title": "3. App-Bestimmungen (Monetheus)",
        "sec3.text1": "In meinen Apps steht der Schutz Ihrer Privatsphäre an oberster Stelle:",
        "sec3.point1": "Lokale Speicherung: Alle Finanzdaten werden ausschließlich lokal auf Ihrem Gerät gespeichert (SwiftData).",
        "sec3.point2": "Kein Datenzugriff: Ich als Entwickler habe keinerlei Zugriff auf Ihre Einnahmen oder Ausgaben.",
        "sec3.point3": "Datenexport/-import: Sie können Ihre Daten jederzeit als JSON-Datei exportieren und importieren — Sie behalten die volle Kontrolle über Ihre Daten.",

        "sec4.title": "4. Ihre Rechte",
        "sec4.text": "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung gemäß der DSGVO.",

        "sec5.title": "5. Rechtsgrundlage",
        "sec5.text": "Die Verarbeitung personenbezogener Daten auf dieser Website erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der technisch sicheren und optimierten Bereitstellung dieser Website.",

        "sec6.title": "6. Hosting",
        "sec6.text1": "Diese Website wird über GitHub Pages gehostet, einen Dienst der GitHub Inc., die Teil der Microsoft Corporation ist.",
        "sec6.text2": "Beim Aufruf der Website können automatisch technische Server-Logfiles verarbeitet werden (z.B. IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs).",
        "sec6.text3": "Diese Daten sind erforderlich, um den sicheren und stabilen Betrieb der Website zu gewährleisten.",
        "sec6.text4": "Eine Verarbeitung der Daten kann auch auf Servern außerhalb der Europäischen Union, insbesondere in den USA, stattfinden.",

        "sec7.title": "7. Speicherdauer",
        "sec7.text": "Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",

        "sec8.title": "8. Kontaktaufnahme",
        "sec8.text": "Wenn Sie mich per E-Mail kontaktieren, werden die übermittelten Daten zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht weitergegeben.",

        "sec9.title": "9. Beschwerderecht",
        "sec9.text": "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.",

        "footer.status": "Stand: April 2026",
        "footer.monetheus": "Monetheus",
        "footer.legal": "Impressum"

    }

};

let currentLang = 'EN';

function updateLanguage(lang) {

    const data = translations[lang.toLowerCase()];

    document.querySelectorAll('[data-i18n]').forEach(el => {

        const key = el.getAttribute('data-i18n');

        if (data[key]) {
            el.innerText = data[key];
        }

    });

    document.documentElement.lang = lang.toLowerCase();

}

document.addEventListener('DOMContentLoaded', () => {

    updateLanguage('EN');

    const btn = document.getElementById('langToggle');

    if (btn) {

        btn.innerText = 'DE';

        btn.addEventListener('click', () => {

            if (currentLang === 'EN') {

                currentLang = 'DE';
                updateLanguage('DE');
                btn.innerText = 'EN';

            } else {

                currentLang = 'EN';
                updateLanguage('EN');
                btn.innerText = 'DE';

            }

        });

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('active');

            }

        });

    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});