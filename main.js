/* Data Analyst Portfolio — original interaction layer */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const themeButton = document.getElementById("theme-button");
const header = document.getElementById("header");
const scrollUp = document.getElementById("scroll-up");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

navToggle?.addEventListener("click", () => navMenu.classList.add("show-menu"));
navClose?.addEventListener("click", () => navMenu.classList.remove("show-menu"));
navLinks.forEach(link => link.addEventListener("click", () => navMenu.classList.remove("show-menu")));

/* Theme */
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeButton?.querySelector("i")?.classList.replace("ri-moon-line", "ri-sun-line");
}
themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const dark = document.body.classList.contains("dark-theme");
  const icon = themeButton?.querySelector("i");
  if (icon) icon.className = dark ? "ri-sun-line" : "ri-moon-line";
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
});

/* Scroll */
function handleScroll() {
  const y = window.scrollY;
  header?.classList.toggle("scrolled", y > 20);
  scrollUp?.classList.toggle("show-scroll", y > 500);
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (link) link.classList.toggle("active-link", y >= top && y < bottom);
  });
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();
scrollUp?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.getElementById("year").textContent = new Date().getFullYear();

/* Reveal */
const revealItems = document.querySelectorAll(".hero-copy, .dashboard-card, .about-copy, .skill-card, .project-card, .process-list > div, .contact-box");
revealItems.forEach(item => item.classList.add("reveal"));
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
revealItems.forEach(item => observer.observe(item));

/* Opening transition */
window.addEventListener("load", () => setTimeout(() => document.getElementById("page-loader")?.classList.add("hide"), 1350));

/* ================= LANGUAGE SWITCHER ================= */
const translations = {
  en: {
    code: "EN", 
    name: "English", 
    title: "Data Analyst | Portfolio", 
    meta: "Data Analyst portfolio — projects, skills, dashboards and contact information.",

    loader: "Loading portfolio...", 
    home: "Home", 
    about: "About", 
    skills: "Skills", 
    projects: "Projects", 
    contact: "Contact",

    heroEyebrow: "DATA ANALYST PORTFOLIO", 
    heroTitle: "Turning data into", 
    heroTitleSpan: "clear decisions.", 
    heroText: "I use data analysis to explore business questions, build meaningful dashboards and turn data into clear, practical insights.",

    viewProjects: "View projects", 
    connect: "Let's connect", 
    query: "Data querying", 
    analysisCleaning: "Analysis & cleaning", 
    dashboards: "Dashboards",

    performance: "AMAZON SALES ANALYSIS",
    revenue: "Total Sales",
    conversion: "Cancellation Rate",
    cleanData: "128,969 cleaned rows",
    actionable: "Python · SQL · Power BI",

    aboutEyebrow: "01 — ABOUT", 
    aboutTitle: "From business experience to data analytics.",

    aboutP1: "My professional background in logistics, production planning, quality assurance and personnel planning gave me practical experience working with Excel, data maintenance and structured business processes.",
    aboutP2: "Today, I am expanding this experience into data analytics using SQL, Excel, Python, pandas, Power BI and Tableau. Through practical projects, I focus on cleaning and analysing data, identifying patterns and communicating",
    aboutStrong: "what happened, why it happened and what the data can tell us.",

    ask: "Ask the right question", 
    validate: "Validate the data",
    communicate: "Communicate the insight",

    toolkit: "02 — TOOLKIT", 
    toolsTitle: "Tools I use for data analysis.", 
    toolsText: "Focused on practical analysis, clean workflows and decision-ready reporting.",

    sqlText: "Queries, joins, aggregations, subqueries and window functions.", 
    excelText: "Cleaning, formulas, pivot tables, lookups and analytical reporting.", 
    pythonText: "pandas, data cleaning, exploratory analysis and analytical workflows.", 
    visualText: "Dashboards and reports designed around KPIs, trends and business questions.", 
    visualisation: "Visualisation",

    selectedWork: "03 — SELECTED WORK", 
    certNav: "Certificates",
    certLabel: "04 — EDUCATION & CERTIFICATIONS",
    certTitle: "Certificates & professional development.",
    certText: "My primary focus is Data Analytics, supported by continuous learning and a technical background in web development.",
    analyticsCert: "Google Data Analytics Professional Certificate",
    webDiploma: "Certified PHP Web Developer",

    projectsTitle: "Projects built to answer real questions.",
    replaceText: "Practical data analysis projects using real-world workflows and business questions.",
    salesDash: "AMAZON SALES ANALYSIS", 
    salesTitle: "Amazon Sale Report", 
    salesText: "Cleaned and analysed e-commerce sales data with Python and SQL, then built a Power BI dashboard to explore sales, orders, cancellations and product performance.", 
    customerDash: "RETAIL SALES ANALYSIS", 
    customerTitle: "German E-Commerce Retail Sales Analysis", 
    customerText: "Cleaned and analysed German retail sales data in Excel using PivotTables and KPIs, then created interactive dashboards in Excel and Tableau.",

    workflow: "05 — MY DATA ANALYSIS WORKFLOW", 
    workflowTitle: "From raw data to clear, useful insights.", 
    workflowText: "I follow a structured process so that every analysis is understandable, reproducible and focused on answering a real question.", 
    define: "Ask", 
    defineText: "Define the business question, goal and key metric.", 
    prepare: "Prepare", 
    prepareText: "Collect the relevant data from files, spreadsheets or databases.", 
    clean: "Clean",
    cleanText: "Check missing values, duplicates, incorrect formats and inconsistencies.", 
    analyse: "Analyze", 
    analyseText: "Use SQL, Python, pandas and Excel to find patterns and answers.", 
    visualize: "Visualize", 
    visualizeText: "Turn findings into clear charts, dashboards and visual stories.", 
    communicateTitle: "Share & Act", 
    communicateText: "Communicate the key insights and connect them to practical next steps.", 
    tools: "Tools I use",

    contactEyebrow: "06 — CONTACT", 
    contactTitle: "Let's talk about data.", 
    contactText: "Feel free to contact me using the form below.", 
    sendMessage: "Send message",
    name: "Name", 
    email: "Email", 
    subject: "Subject",
    message: "Message", 
    sending: "Sending...", 
    sent: "Message sent successfully ✅", 
    failed: "Message not sent ❌", 
    footer1: "Josipa Karjakovic · Data Analyst Portfolio",
    footer2: "",

    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",

    placeholderName: "Your name",
    placeholderSubject: "Subject",
    placeholderMessage: "Your message...",
  },
  de: {
    code: "DE", 
    name: "Deutsch",
    title: "Data Analyst | Portfolio", 
    meta: "Data-Analyst-Portfolio — Projekte, Fähigkeiten, Dashboards und Kontaktinformationen.",

    loader: "Portfolio wird geladen...", 
    home: "Startseite", 
    about: "Über mich", 
    skills: "Fähigkeiten", 
    projects: "Projekte", 
    contact: "Kontakt",

    heroEyebrow: "DATA-ANALYST-PORTFOLIO", 
    heroTitle: "Daten in", 
    heroTitleSpan: "klare Entscheidungen verwandeln.",
    heroText: "Ich nutze Datenanalyse, um geschäftliche Fragestellungen zu untersuchen, aussagekräftige Dashboards zu erstellen und Daten in klare, praktische Erkenntnisse umzuwandeln.",

    viewProjects: "Projekte ansehen", 
    connect: "Kontakt aufnehmen", 
    query: "Datenabfragen", 
    analysisCleaning: "Analyse & Bereinigung", 
    dashboards: "Dashboards",

    performance: "AMAZON SALES ANALYSE",
    revenue: "Gesamtumsatz",
    conversion: "Stornierungsrate",
    cleanData: "128.969 bereinigte Zeilen",
    actionable: "Python · SQL · Power BI",

    aboutEyebrow: "01 — ÜBER MICH", 
    aboutTitle: "Von der Berufserfahrung zur Datenanalyse.",

    aboutP1: "Durch meine berufliche Erfahrung in Logistik, Produktionsplanung, Qualitätssicherung und Personalplanung habe ich praktische Erfahrung im Umgang mit Excel, Datenpflege und strukturierten Geschäftsprozessen gesammelt.",
    aboutP2: "Heute erweitere ich diese Erfahrung im Bereich Data Analytics mit SQL, Excel, Python, pandas, Power BI und Tableau. In praktischen Projekten konzentriere ich mich auf die Bereinigung und Analyse von Daten, das Erkennen von Mustern und die verständliche Kommunikation darüber,",
    aboutStrong: "was passiert ist, warum es passiert ist und was die Daten zeigen.",

    ask: "Die richtige Frage stellen", 
    validate: "Daten validieren", 
    communicate: "Erkenntnisse vermitteln",

    toolkit: "02 — WERKZEUGE", 
    toolsTitle: "Werkzeuge, die ich für die Datenanalyse nutze.", 
    toolsText: "Fokus auf praxisnahe Analysen, saubere Workflows und entscheidungsreife Reports.",

    sqlText: "Abfragen, Joins, Aggregationen, Subqueries und Window Functions.", 
    excelText: "Bereinigung, Formeln, Pivot-Tabellen, Lookups und analytische Reports.", 
    pythonText: "pandas, Datenbereinigung, explorative Analyse und analytische Workflows.", 
    visualText: "Dashboards und Reports mit Fokus auf KPIs, Trends und Business-Fragen.", 
    visualisation: "Visualisierung",

    selectedWork: "03 — AUSGEWÄHLTE ARBEITEN",
    certNav: "Zertifikate",
    certLabel: "04 — AUSBILDUNG & ZERTIFIKATE",
    certTitle: "Zertifikate & berufliche Weiterbildung.",
    certText: "Mein Schwerpunkt liegt auf Data Analytics, ergänzt durch kontinuierliches Lernen und einen technischen Hintergrund in der Webentwicklung.",
    analyticsCert: "Google Data Analytics Professional Certificate",
    webDiploma: "Certified PHP Web Developer", 

    projectsTitle: "Projekte zur Beantwortung echter Fragen.", 
    replaceText: "Praxisnahe Datenanalyse-Projekte mit realistischen Workflows und Business-Fragen.",

    salesDash: "AMAZON SALES ANALYSE",
    salesTitle: "Amazon Sale Report", 
    salesText: "E-Commerce-Verkaufsdaten mit Python und SQL bereinigt und analysiert. Anschließend habe ich ein Power-BI-Dashboard zur Analyse von Umsatz, Bestellungen, Stornierungen und Produktleistung erstellt.", 
    customerText: "Deutsche Einzelhandelsdaten in Excel mit Pivot-Tabellen und KPIs bereinigt und analysiert. Anschließend habe ich interaktive Dashboards in Excel und Tableau erstellt.",

    workflow: "05 — MEIN DATA-ANALYSIS-WORKFLOW", 
    workflowTitle: "Von Rohdaten zu klaren und nützlichen Erkenntnissen.", 
    workflowText: "Ich arbeite nach einem strukturierten Prozess, damit jede Analyse verständlich und nachvollziehbar bleibt.", 
    define: "Frage definieren", 
    defineText: "Geschäftsfrage, Ziel und Kennzahl festlegen.", 
    prepare: "Vorbereiten", 
    prepareText: "Relevante Daten aus Dateien, Tabellen oder Datenbanken sammeln.", 
    clean: "Bereinigen", 
    cleanText: "Fehlende Werte, Duplikate und Formatfehler prüfen.", 
    analyse: "Analysieren", 
    analyseText: "Mit SQL, Python, pandas und Excel Muster und Zusammenhänge finden.", 
    visualize: "Visualisieren", 
    visualizeText: "Erkenntnisse in klare Diagramme und Dashboards verwandeln.", 
    communicateTitle: "Teilen & handeln", 
    communicateText: "Wichtige Erkenntnisse verständlich präsentieren und nächste Schritte ableiten.", 
    tools: "Meine Tools",

    contactEyebrow: "06 — KONTAKT", 
    contactTitle: "Sprechen wir über Daten.", 
    contactText: "Kontaktieren Sie mich gerne über das Formular unten.", 
    sendMessage: "Nachricht senden",
    name: "Name", 
    email: "E-Mail", 
    subject: "Betreff",
    message: "Nachricht", 
    sending: "Wird gesendet...", 
    sent: "Nachricht erfolgreich gesendet ✅", 
    failed: "Nachricht konnte nicht gesendet werden ❌", 
    footer1: "Josipa Karjakovic · Data Analyst Portfolio",
    footer2: "",
    formName: "Name",
    formEmail: "E-Mail",
    formSubject: "Betreff",
    formMessage: "Nachricht",
    placeholderName: "Ihr Name",
    placeholderSubject: "Betreff",
    placeholderMessage: "Ihre Nachricht...",
  },
  hr: {
    code: "HR", 
    name: "Hrvatski", 
    title: "Data Analyst | Portfolio",
    meta: "Portfolio Data Analitičara — projekti, vještine, dashboardi i kontakt.",

    loader: "Učitavanje portfolija...", 
    home: "Početna", 
    about: "O meni", 
    skills: "Vještine", 
    projects: "Projekti", 
    contact: "Kontakt",

    heroEyebrow: "DATA ANALYST PORTFOLIO", 
    heroTitle: "Pretvaram podatke u", 
    heroTitleSpan: "jasne odluke.", 
    heroText: "Koristim analizu podataka za istraživanje poslovnih pitanja, izradu korisnih dashboarda i pretvaranje podataka u jasne i praktične uvide.",

    viewProjects: "Pogledaj projekte", 
    connect: "Javi mi se", 
    query: "Upiti nad podacima", 
    analysisCleaning: "Analiza i čišćenje", 
    dashboards: "Dashboardi",

    performance: "AMAZON ANALIZA PRODAJE",
    revenue: "Ukupna prodaja",
    conversion: "Stopa otkazivanja",
    cleanData: "128.969 očišćenih redaka",
    actionable: "Python · SQL · Power BI",

    aboutEyebrow: "01 — O MENI", 
    aboutTitle: "Od poslovnog iskustva do analize podataka.",

    aboutP1: "Kroz svoje radno iskustvo u logistici, planiranju proizvodnje, kontroli kvalitete i planiranju osoblja stekla sam praktično iskustvo u radu s Excelom, održavanju podataka i strukturiranim poslovnim procesima.",
    aboutP2: "Danas ovo iskustvo proširujem u području analize podataka koristeći SQL, Excel, Python, pandas, Power BI i Tableau. Kroz praktične projekte fokusiram se na čišćenje i analizu podataka, prepoznavanje obrazaca i jasno objašnjavanje",
    aboutStrong: "što se dogodilo, zašto se dogodilo i što nam podaci pokazuju.",

    ask: "Postavi pravo pitanje", 
    validate: "Provjeri podatke", 
    communicate: "Prenesi uvid",
    toolkit: "02 — ALATI", 
    toolsTitle: "Alati koje koristim za analizu podataka.",
    toolsText: "Fokus na praktičnu analizu, uredne procese i izvještaje spremne za donošenje odluka.",

    sqlText: "Upiti, spajanja tablica, agregacije, podupiti i window funkcije.", 
    excelText: "Čišćenje, formule, pivot tablice, lookup funkcije i analitički izvještaji.", 
    pythonText: "pandas, čišćenje podataka, eksplorativna analiza i analitički radni procesi.", 
    visualText: "Dashboardi i izvještaji usmjereni na KPI-jeve, trendove i poslovna pitanja.", 
    visualisation: "Vizualizacija",

    selectedWork: "03 — ODABRANI RADOVI", 
    certNav: "Certifikati",
    certLabel: "04 — OBRAZOVANJE I CERTIFIKATI",
    certTitle: "Certifikati i profesionalno usavršavanje.",
    certText: "Moj glavni fokus je Data Analytics, uz kontinuirano učenje i tehničku podlogu iz web developmenta.",
    analyticsCert: "Google Data Analytics Professional Certificate",
    webDiploma: "Certified PHP Web Developer", 
    projectsTitle: "Projekti napravljeni za odgovore na stvarna pitanja.", 
    replaceText: "Praktični projekti analize podataka s realnim radnim procesima i poslovnim pitanjima.",

    salesDash: "AMAZON SALES ANALIZA", 
    salesTitle: "Amazon Sale Report", 
    salesText: "E-commerce prodajne podatke očistila sam i analizirala pomoću Pythona i SQL-a, a zatim sam izradila Power BI dashboard za analizu prodaje, narudžbi, otkazivanja i uspješnosti proizvoda.", 
    customerDash: "RETAIL SALES ANALIZA", 
    customerTitle: "German E-Commerce Retail Sales Analysis", 
    customerText: "Njemačke maloprodajne podatke očistila sam i analizirala u Excelu pomoću Pivot tablica i KPI-jeva, a zatim sam izradila interaktivne dashboarde u Excelu i Tableauu.",

    workflow: "05 — MOJ DATA ANALYSIS WORKFLOW", 
    workflowTitle: "Od sirovih podataka do jasnih i korisnih uvida.", 
    workflowText: "Pratim strukturiran proces kako bi svaka analiza bila razumljiva, ponovljiva i usmjerena na stvarno pitanje.", 
    define: "Postavi pitanje", 
    defineText: "Definiraj poslovno pitanje, cilj i ključnu metriku.", 
    prepare: "Pripremi", 
    prepareText: "Prikupi relevantne podatke iz datoteka, tablica ili baza.", 
    clean: "Očisti", 
    cleanText: "Provjeri nedostajuće vrijednosti, duplikate i pogrešne formate.", 
    analyse: "Analiziraj", 
    analyseText: "Koristi SQL, Python, pandas i Excel za pronalazak obrazaca i odgovora.", 
    visualize: "Vizualiziraj", 
    visualizeText: "Pretvori rezultate u jasne grafikone, dashboarde i vizualne priče.", 
    communicateTitle: "Podijeli i djeluj", 
    communicateText: "Prenesi ključne uvide i poveži ih s praktičnim odlukama i sljedećim koracima.", 
    tools: "Alati koje koristim",

    contactEyebrow: "06 — KONTAKT", 
    contactTitle: "Razgovarajmo o podacima.", 
    contactText: "Slobodno me kontaktirajte putem obrasca u nastavku.", 
    sendMessage: "Pošalji poruku",
    name: "Ime", 
    email: "Email", 
    subject: "Naslov", 
    message: "Poruka",  
    sending: "Šaljem...", 
    sent: "Poruka je uspješno poslana ✅", 
    failed: "Poruka nije poslana ❌", 
    footer1: "Josipa Karjakovic · Data Analyst Portfolio",
    footer2: "",

    formName: "Ime",
    formEmail: "E-mail",
    formSubject: "Predmet",
    formMessage: "Poruka",
    placeholderName: "Vaše ime",
    placeholderSubject: "Predmet",
    placeholderMessage: "Vaša poruka...",
  }
};

const langButton = document.getElementById("language-button");
const langMenu = document.getElementById("language-menu");
const langCurrent = document.getElementById("language-current");

function setText(selector, key) {
  const el = document.querySelector(selector);
  if (el && translations[currentLang][key] !== undefined) el.textContent = translations[currentLang][key];
}

let currentLang = localStorage.getItem("portfolio-language") || "en";

function applyLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta);
  if (langCurrent) langCurrent.textContent = t.code;

  const textMap = {
    '.nav-link[href=\"#home\"]':'home', '.nav-link[href=\"#about\"]':'about', '.nav-link[href=\"#skills\"]':'skills', '.nav-link[href=\"#projects\"]':'projects', '.nav-link[href=\"#contact\"]':'contact',
    ".hero .eyebrow":"heroEyebrow", ".hero h1":"heroTitle", ".hero .hero-text":"heroText", ".hero .button.primary":"viewProjects", ".hero .button.secondary":"connect",
    ".hero-meta div:nth-child(1) span":"query", ".hero-meta div:nth-child(2) span":"analysisCleaning", ".hero-meta div:nth-child(3) span":"dashboards",
    ".dashboard-top > span:first-child":"performance", ".metric-row div:nth-child(1) small":"revenue", ".metric-row div:nth-child(2) small":"conversion", ".dashboard-bottom span:first-child":"cleanData", ".dashboard-bottom span:last-child":"actionable",
    ".about .eyebrow":"aboutEyebrow", ".about h2":"aboutTitle", ".mini-stats div:nth-child(1) span":"ask", ".mini-stats div:nth-child(2) span":"validate", ".mini-stats div:nth-child(3) span":"communicate",
    ".skills .eyebrow":"toolkit", ".skills h2":"toolsTitle", ".skills .section-heading > p":"toolsText", ".skill-card:nth-child(1) p":"sqlText", ".skill-card:nth-child(2) p":"excelText", ".skill-card:nth-child(3) p":"pythonText", ".skill-card:nth-child(4) h3":"visualisation", ".skill-card:nth-child(4) p":"visualText",
    ".projects .eyebrow":"selectedWork", ".projects h2":"projectsTitle", ".projects .section-heading > p":"replaceText", ".certificates .eyebrow":"certLabel",".certificates h2":"certTitle",".certificate-heading > div + p":"certText",".certificate-card:nth-child(1) h3":"analyticsCert",".certificate-card:nth-child(2) h3":"webDiploma",
    ".project-card:nth-child(1) .image-label":"salesDash", ".project-card:nth-child(1) h3":"salesTitle", ".project-card:nth-child(1) p":"salesText",
    ".project-card:nth-child(2) .image-label":"customerDash", ".project-card:nth-child(2) h3":"customerTitle", ".project-card:nth-child(2) p":"customerText",
    ".process .eyebrow":"workflow", ".process h2":"workflowTitle", ".process .section-heading > p":"workflowText", ".workflow-card:nth-child(1) h3":"define", ".workflow-card:nth-child(1) p":"defineText", ".workflow-card:nth-child(2) h3":"prepare", ".workflow-card:nth-child(2) p":"prepareText", ".workflow-card:nth-child(3) h3":"clean", ".workflow-card:nth-child(3) p":"cleanText", ".workflow-card:nth-child(4) h3":"analyse", ".workflow-card:nth-child(4) p":"analyseText", ".workflow-card:nth-child(5) h3":"visualize", ".workflow-card:nth-child(5) p":"visualizeText",".workflow-card:nth-child(6) h3":"communicateTitle", ".workflow-card:nth-child(6) p":"communicateText", ".workflow-tools span":"tools",
    ".contact .eyebrow":"contactEyebrow", 
    ".contact h2":"contactTitle", 
    ".contact > .container > p":"contactText",
    "#submit-button span":"sendMessage"
  };
  Object.entries(textMap).forEach(([selector,key])=>setText(selector,key));
  const placeholderMap = {
  'input[name="from_name"]': 'placeholderName',
  'input[name="subject"]': 'placeholderSubject',
  'textarea[name="message"]': 'placeholderMessage'
};

Object.entries(placeholderMap).forEach(([selector, key]) => {
  const element = document.querySelector(selector);
  if (element && t[key]) {
    element.placeholder = t[key];
  }
});
  const heroH1 = document.querySelector(".hero h1");
  if (heroH1) heroH1.innerHTML = `${t.heroTitle} <span>${t.heroTitleSpan}</span>`;

  const aboutPs = document.querySelectorAll(".about-copy > p");
  if (aboutPs[0]) aboutPs[0].textContent = t.aboutP1;
  if (aboutPs[1]) aboutPs[1].innerHTML = `${t.aboutP2} <strong>${t.aboutStrong}</strong>`;

  const labels = document.querySelectorAll(".contact-form > label");
  if (labels[0]) labels[0].childNodes[0].textContent = t.subject;
  if (labels[1]) labels[1].childNodes[0].textContent = t.message;
  const firstRowLabels = document.querySelectorAll(".contact-form .form-row label");
  if (firstRowLabels[0]) firstRowLabels[0].childNodes[0].textContent = t.name;
  if (firstRowLabels[1]) firstRowLabels[1].childNodes[0].textContent = t.email;

  document.querySelector(".contact-text")?.replaceChildren(document.createTextNode(t.contactText));
  const sendSpan = document.querySelector("#submit-button span");
  if (sendSpan) sendSpan.textContent = t.sendMessage;
  document.querySelector("footer .footer-inner span:first-child")?.replaceChildren(document.createTextNode(`© ${new Date().getFullYear()} ${t.footer1}`));
  const footerSpans = document.querySelectorAll("footer .footer-inner span");
  if (footerSpans[1]) footerSpans[1].textContent = t.footer2;
  const loaderText = document.querySelector(".page-loader p");
  if (loaderText) loaderText.innerHTML = `${t.loader.replace(/\.\.\.$/, "")}<span>...</span>`;

  document.querySelectorAll(".project-links a").forEach(a=>{
    const icon = a.querySelector("i");
    if (!icon) return;
    const text = icon.nextSibling;
    if (text && text.nodeType === Node.TEXT_NODE) text.textContent = a.querySelector(".ri-github-line") ? " GitHub" : ` ${t.caseStudy}`;
  });
  localStorage.setItem("portfolio-language", lang);
  langMenu?.querySelectorAll("button").forEach(b=>b.classList.toggle("selected", b.dataset.lang===lang));
}

langButton?.addEventListener("click", e => { e.stopPropagation(); const open = langMenu?.classList.toggle("open"); langButton.setAttribute("aria-expanded", String(!!open)); });
langMenu?.querySelectorAll("button[data-lang]").forEach(button => {
  button.addEventListener("click", () => { applyLanguage(button.dataset.lang); langMenu.classList.remove("open"); langButton?.setAttribute("aria-expanded", "false"); });
});
document.addEventListener("click", e => { if (!langMenu?.contains(e.target) && !langButton?.contains(e.target)) { langMenu?.classList.remove("open"); langButton?.setAttribute("aria-expanded", "false"); } });

applyLanguage(currentLang);

/* EmailJS + client-side anti-spam protection */
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const submitButton = document.getElementById("submit-button");
const honeypot = document.getElementById("website");
const FORM_COOLDOWN_MS = 60000;
let lastSubmission = 0;

if (typeof emailjs !== "undefined") emailjs.init({ publicKey: "DuznuusTT_pNsFM9M" });

function setContactStatus(message, type = "") {
  contactMessage.textContent = message;
  contactMessage.className = `contact-message ${type}`.trim();
}

contactForm?.addEventListener("submit", async e => {
  e.preventDefault();
  if (typeof emailjs === "undefined") {
    setContactStatus("Email service is temporarily unavailable.", "error");
    return;
  }

  // Honeypot: bots often fill fields that real users never see.
  if (honeypot?.value.trim()) return;

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const now = Date.now();
  const remaining = FORM_COOLDOWN_MS - (now - lastSubmission);
  if (remaining > 0) {
    const seconds = Math.ceil(remaining / 1000);
    setContactStatus(`Please wait ${seconds} seconds before sending another message.`, "error");
    return;
  }

  // Normalize basic user input before sending it to the mail provider.
  const fields = ["from_name", "from_email", "subject", "message"];
  fields.forEach(name => {
    const field = contactForm.elements[name];
    if (field && typeof field.value === "string") field.value = field.value.trim();
  });

  submitButton.disabled = true;
  submitButton.setAttribute("aria-busy", "true");
  submitButton.querySelector("span").textContent = translations[currentLang].sending;
  try {
    await emailjs.sendForm("service_0ustwo3", "template_0vv8okb", contactForm);
    lastSubmission = Date.now();
    setContactStatus(translations[currentLang].sent, "success");
    contactForm.reset();
  } catch (err) {
    console.error("Contact form request failed", err);
    setContactStatus(translations[currentLang].failed, "error");
  } finally {
    submitButton.disabled = false;
    submitButton.removeAttribute("aria-busy");
    submitButton.querySelector("span").textContent = translations[currentLang].sendMessage;
  }
});


// Tableau / Excel dashboard switch

const dashboardImage = document.getElementById("retail-dashboard-image");
const dashboardTabs = document.querySelectorAll(".dashboard-tab");

dashboardTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedDashboard = button.dataset.dashboard;

    if (!dashboardImage) return;

    if (selectedDashboard === "tableau") {
      dashboardImage.src = "images/Ecommerce_Sales_Dashboard_tableau.PNG";
      dashboardImage.alt = "German E-Commerce Retail Sales Analysis — Tableau Dashboard";
    }

    if (selectedDashboard === "excel") {
      dashboardImage.src = "images/Ecommerce_Sales_Dashboard.xlsx.PNG";
      dashboardImage.alt = "German E-Commerce Retail Sales Analysis — Excel Dashboard";
    }

    dashboardTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    button.classList.add("active");
  });
});

