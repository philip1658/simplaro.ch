function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Kicker,
  FaqItem,
  SiteFooter,
  Button: DsButton,
  ServiceRow,
  LabelBadge,
  Twinkle
} = window.SimplaroDesignSystem_5f353f;
const ASSET_BASE = window.SIMPLARO_ASSET_BASE || '../../assets/';
function asset(path) {
  return ASSET_BASE + path;
}
const NAV_LINKS = [{
  label: 'SimplaroBot',
  href: '#service',
  product: 'Bot'
}, {
  label: 'SimplaroAcademy',
  href: '#academy',
  product: 'Academy'
}, {
  label: 'SimplaroLearning',
  href: '#learning',
  product: 'Learning'
}, {
  label: 'SimplaroService',
  href: '#service-pakete',
  product: 'Service'
}, {
  label: 'Über uns',
  href: 'ueber-uns.html'
}, {
  label: 'FAQ',
  href: '#faq'
}, {
  label: 'Kontakt',
  href: '#kontakt',
  contact: true
}];
const FAQS = [['Was macht Simplaro?', 'Simplaro befähigt Schweizer KMU, KI verständlich, persönlich und wirksam im Unternehmen einzusetzen. Wir verbinden Lernen, Automatisierung und langfristige Begleitung.'], ['Ist Simplaro eine klassische KI-Agentur?', 'Nein. KI ist für uns ein Werkzeug. Im Zentrum stehen verständliche Einführung, konkrete Abläufe und eine Umsetzung, die im Alltag funktioniert.'], ['Was ist SimplaroAcademy?', 'Die SimplaroAcademy ist unsere Selbstlern-Plattform: zwölf Lernpfade mit 66 kurzen Lektionen zu KI im KMU-Alltag — inklusive Advanced-Pfad für Fortgeschrittene. Die ersten Lektionen sind gratis, danach ab CHF 39 pro Monat.'], ['Was ist SimplaroLearning?', 'SimplaroLearning bündelt Online-Lernprogramme, Bibliotheken und persönliche Coachings, damit Unternehmer und Teams KI sicher anwenden können.'], ['Was ist SimplaroBot?', 'SimplaroBot ist der Ansatz für wiederkehrende Büro- und Administrationsprozesse: Wir analysieren Abläufe, priorisieren Hebel und setzen passende Automatisierungen um.'], ['Was ist SimplaroService?', 'SimplaroService begleitet bestehende Automatisierungen im Betrieb. Dazu gehören Pflege, Updates, Kontrolle und Weiterentwicklung nach Bedarf.'], ['Brauche ich technisches Vorwissen?', 'Nein. Die Inhalte und die Umsetzung werden so erklärt, dass Unternehmer und Mitarbeitende ohne technisches Vorwissen mitkommen.'], ['Was kostet eine Automation?', 'Eine Automation beginnt bei CHF 600. Den Fixpreis nennen wir nach der Erstanalyse — Sie wissen vor der Umsetzung, woran Sie sind.'], ['Was passiert mit unseren Daten?', 'Wir arbeiten nach dem revDSG. Vor der Umsetzung klären wir mit Ihnen, welche Daten ein Werkzeug überhaupt sehen darf, und halten Kundendaten dort heraus, wo sie nicht hingehören.'], ['Wie beginnt eine Zusammenarbeit?', 'Am Anfang steht ein unverbindliches Gespräch. Danach klären wir, ob Learning, Bot, Service oder eine Kombination davon sinnvoll ist.']];
const SERVICE_PLANS = [{
  number: '01',
  title: 'SimplaroService BASIC',
  text: 'Regelm\xE4ssige Funktionspr\xFCfung, kleine Anpassungen und E-Mail-Support.',
  price: 'ab CHF 90 / Monat'
}, {
  number: '02',
  title: 'SimplaroService STANDARD',
  text: 'Laufende Pflege und Updates, Optimierung bestehender Abl\xE4ufe, Support f\xFCr Ihr Team und ein periodischer Review-Termin.',
  price: 'ab CHF 190 / Monat'
}, {
  number: '03',
  title: 'SimplaroService PREMIUM',
  text: 'Proaktive Weiterentwicklung, priorisierte Betreuung, Erweiterungen und Integrationen.',
  price: 'ab CHF 390 / Monat'
}];

function Arrow() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192");
}
function ProductName({
  name,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: className
  }, "Simplaro", /*#__PURE__*/React.createElement("span", {
    className: "mock-accent"
  }, name));
}
function NavLabel({
  link
}) {
  if (!link.product) return link.label;
  return /*#__PURE__*/React.createElement("span", {
    className: "mock-nav-product"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-nav-brand"
  }, "Simplaro"), /*#__PURE__*/React.createElement("span", {
    className: "mock-nav-accent"
  }, link.product));
}
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [solid, setSolid] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: `mock-header${solid || menuOpen ? ' is-solid' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mock-header__logo",
    href: "#top",
    "aria-label": "Simplaro Start"
  }, /*#__PURE__*/React.createElement("img", {
    src: asset(solid || menuOpen ? 'logo-lockup-terra.png' : 'logo-lockup-white.png'),
    alt: "Simplaro"
  })), /*#__PURE__*/React.createElement("button", {
    className: "mock-menu-toggle",
    type: "button",
    "aria-label": menuOpen ? 'Men\xFC schliessen' : 'Men\xFC \xF6ffnen',
    "aria-controls": "mock-mobile-menu",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(open => !open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("nav", {
    className: "mock-header__nav",
    "aria-label": "Hauptnavigation"
  }, NAV_LINKS.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.label,
    className: link.contact ? 'mock-header__contact' : '',
    href: link.href,
    "aria-label": link.label
  }, /*#__PURE__*/React.createElement(NavLabel, {
    link: link
  }))))), /*#__PURE__*/React.createElement("nav", {
    id: "mock-mobile-menu",
    className: `mock-mobile-nav${menuOpen ? ' is-open' : ''}`,
    "aria-label": "Mobile Navigation"
  }, NAV_LINKS.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.label,
    className: link.contact ? 'mock-header__contact' : '',
    href: link.href,
    "aria-label": link.label,
    onClick: closeMenu
  }, /*#__PURE__*/React.createElement(NavLabel, {
    link: link
  })))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "mock-hero",
    "aria-label": "Start"
  }, /*#__PURE__*/React.createElement(Twinkle, {
    top: "17%",
    left: "11%",
    size: 13,
    duration: 6.5
  }), /*#__PURE__*/React.createElement(Twinkle, {
    top: "28%",
    right: "14%",
    size: 10,
    delay: 1.2,
    duration: 5.5
  }), /*#__PURE__*/React.createElement(Twinkle, {
    bottom: "24%",
    left: "21%",
    size: 9,
    delay: 2.4,
    duration: 6
  }), /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__text"
  }, /*#__PURE__*/React.createElement("h1", null, "Mit KI einfacher arbeiten, Zeit sparen und Kosten senken ", /*#__PURE__*/React.createElement("span", null, "– f\xFCr Schweizer KMU."))), /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__doors"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mock-hero__door",
    href: "#service"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-title"
  }, /*#__PURE__*/React.createElement(ProductName, {
    name: "Bot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-text"
  }, "Automationen f\xFCr Ihren Betrieb ", /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-arrow",
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("a", {
    className: "mock-hero__door",
    href: "#academy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-title"
  }, /*#__PURE__*/React.createElement(ProductName, {
    name: "Academy"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-text"
  }, "E-Learnings zu KI f\xFCr KMU ", /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-arrow",
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("a", {
    className: "mock-hero__door",
    href: "#learning"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-title"
  }, /*#__PURE__*/React.createElement(ProductName, {
    name: "Learning"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-text"
  }, "Trainings, Coachings, Workshops ", /*#__PURE__*/React.createElement("span", {
    className: "mock-hero__door-arrow",
    "aria-hidden": "true"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__robot",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: asset('buerobot-poster-hand-sharp.jpg'),
    alt: ""
  })), /*#__PURE__*/React.createElement("a", {
    className: "mock-stamp",
    href: "erstanalyse.html"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-stamp__over"
  }, "Kostenlos & unverbindlich"), /*#__PURE__*/React.createElement("span", {
    className: "mock-stamp__label"
  }, "Jetzt Erstanalyse starten \u2192")));
}
function Learning() {
  return /*#__PURE__*/React.createElement("section", {
    id: "learning",
    className: "mock-section mock-section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap mock-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-copy"
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "02"
  }, "Lernen und bef\xE4higen"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-accent"
  }, "Lernen"), " mit Simplaro"), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead"
  }, "Wie sattelfest sind Sie in der Anwendung von KI? Wir bef\xE4higen Sie und Ihre Mitarbeitenden im Zeitalter von KI — auf zwei Wegen, die sich erg\xE4nzen: selbst\xE4ndig online oder pers\xF6nlich begleitet."), /*#__PURE__*/React.createElement("div", {
    className: "mock-learning-tracks"
  }, /*#__PURE__*/React.createElement("article", {
    className: "mock-learning-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-learning-track__label"
  }, "Online \xB7 im eigenen Tempo"), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(ProductName, {
    name: "Academy"
  })), /*#__PURE__*/React.createElement("p", null, "Unsere Selbstlern-Plattform: E-Learnings zu KI f\xFCr KMU — zw\xF6lf Lernpfade mit 66 kurzen Lektionen, im eigenen Tempo. Die ersten Lektionen sind gratis, danach ab CHF 39 pro Monat."), /*#__PURE__*/React.createElement(DsButton, {
    variant: "cta",
    size: "sm",
    arrow: true,
    href: "#academy",
    style: {
      marginTop: 'auto',
      minHeight: 44
    }
  }, "Zur SimplaroAcademy")), /*#__PURE__*/React.createElement("article", {
    className: "mock-learning-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-learning-track__label"
  }, "Pers\xF6nlich \xB7 bei Ihnen vor Ort"), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(ProductName, {
    name: "Learning"
  })), /*#__PURE__*/React.createElement("p", null, "Trainings, Coachings und Workshops in Ihrer Firma — f\xFCr Unternehmer, F\xFChrungskr\xE4fte und Teams, zugeschnitten auf Ihre Abl\xE4ufe und Fragen."), /*#__PURE__*/React.createElement(DsButton, {
    variant: "cta",
    size: "sm",
    arrow: true,
    href: "#kontakt",
    style: {
      marginTop: 'auto',
      minHeight: 44
    }
  }, "SimplaroLearning anfragen")))), /*#__PURE__*/React.createElement("div", {
    className: "mock-learning-visual"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mock-learning-image",
    src: asset('simplaro-academy-desk.png'),
    alt: "SimplaroBot am Schreibtisch beim Erstellen eines Lernmoduls"
  }), /*#__PURE__*/React.createElement("img", {
    className: "mock-learning-image mock-learning-image--bot",
    src: asset('simplaro-robot-teacher.png'),
    alt: "SimplaroBot als Lehrer vor einem Whiteboard"
  }))));
}
function Service() {
  return /*#__PURE__*/React.createElement("section", {
    id: "service",
    className: "mock-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-center"
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "01"
  }, "Automatisieren"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, "Wir automatisieren Ihren Betrieb."), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead",
    style: {
      maxWidth: 720
    }
  }, "Wir \xFCbernehmen, was regelm\xE4ssig Zeit kostet — Schritt f\xFCr Schritt, bei Ihnen im Betrieb.")), /*#__PURE__*/React.createElement("article", {
    className: "mock-bot-tile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-bot-tile__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-bot-tile__intro"
  }, /*#__PURE__*/React.createElement(LabelBadge, {
    tone: "onTerra"
  }, "Hauptprodukt"), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(ProductName, {
    name: "Bot"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mock-bot-tile__sub"
  }, "Wir richten Ihre Automationen bei Ihnen im Betrieb ein und bef\xE4higen Ihr Team — pers\xF6nlich und auf Augenh\xF6he.")), /*#__PURE__*/React.createElement("div", {
    className: "mock-bot-tile__offer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mock-bot-tile__price-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__amount"
  }, "ab CHF 600"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__unit"
  }, "pro Automation")), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__note"
  }, "Fixpreis nach der Erstanalyse \xB7 meist in wenigen Wochen zur\xFCckverdient"), /*#__PURE__*/React.createElement(DsButton, {
    variant: "light",
    size: "sm",
    arrow: true,
    href: "#kontakt"
  }, "Gespr\xE4ch buchen"))), /*#__PURE__*/React.createElement("ol", {
    className: "mock-bot-tile__steps"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "01"), /*#__PURE__*/React.createElement("strong", null, "Empfehlung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "Prozesse mit dem gr\xF6ssten Entlastungspotenzial, mit Offerte")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "02"), /*#__PURE__*/React.createElement("strong", null, "Priorisierung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "gemeinsam festlegen, was zuerst optimiert wird")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "03"), /*#__PURE__*/React.createElement("strong", null, "Planung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "Umsetzung Schritt f\xFCr Schritt vorbereitet")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "04"), /*#__PURE__*/React.createElement("strong", null, "Umsetzung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "Automationen eingerichtet, Team bef\xE4higt")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "05"), /*#__PURE__*/React.createElement("strong", null, "Kontrolle"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "regelm\xE4ssige Pr\xFCfung mit SimplaroService")))), /*#__PURE__*/React.createElement("div", {
    className: "mock-addons",
    id: "service-pakete"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mock-addons__note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-addons__label"
  }, "Zusatzprodukte"), /*#__PURE__*/React.createElement("span", null, "Pflege und Weiterentwicklung im Abo — optional zum ", /*#__PURE__*/React.createElement(ProductName, {
    name: "Bot",
    className: "mock-inline-product"
  }), ".")), /*#__PURE__*/React.createElement("div", {
    className: "mock-service-rows"
  }, SERVICE_PLANS.map((plan, i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: plan.title,
    number: plan.number,
    title: plan.title,
    last: i === SERVICE_PLANS.length - 1
  }, plan.text, " ", /*#__PURE__*/React.createElement("span", {
    className: "mock-service-price"
  }, plan.price)))))));
}
const ACADEMY_TEASER = [['01', 'Grundlagen: KI einordnen', 'Einstieg \xB7 1 Std 05', 'Der Einstieg ohne Fachchinesisch \u2014 was die Werkzeuge k\xF6nnen und wie Sie sie ansprechen.'], ['02', 'Datenschutz & Sicherheit', 'Grundlage \xB7 1 Std 15', 'Was rein darf und was nie: revDSG, Anonymisieren, Cloud-Standort.'], ['03', 'Korrespondenz & E-Mail', 'Praxis \xB7 1 Std 22', 'Der Posteingang zuerst \u2014 Antworten, die nach Ihnen klingen.'], ['04', 'Offerten & Auftr\xE4ge', 'Praxis \xB7 1 Std 28', 'Aus f\xFCnf Stichworten eine Offerte in Ihrer Struktur.'], ['05', 'Buchhaltung & Belege', 'Praxis \xB7 1 Std 23', 'Belegstapel, Spesen, Mahnwesen \u2014 bis zur \xDCbergabe ans Treuhandb\xFCro.'], ['09', 'Abl\xE4ufe automatisieren', 'Fortgeschritten \xB7 2 Std 03', 'Vom einzelnen Handgriff zum verl\xE4sslichen Ablauf.']];
function Academy() {
  return /*#__PURE__*/React.createElement("section", {
    id: "academy",
    className: "mock-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-center"
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "03"
  }, "E-Learnings"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, "Mehr als ein Chatbot: Lernen Sie, Ihre B\xFCroarbeit mit KI zu automatisieren."), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead",
    style: {
      maxWidth: 760
    }
  }, "Die ", /*#__PURE__*/React.createElement(ProductName, {
    name: "Academy"
  }), " ist unsere Selbstlern-Plattform: 66 kurze Lektionen in zw\xF6lf Lernpfaden. Jeder Plan ist f\xFCr sich abgeschlossen und dauert rund eine Stunde \u2014 Sie starten dort, wo es bei Ihnen brennt.")), /*#__PURE__*/React.createElement("ul", {
    className: "mock-academy-grid"
  }, ACADEMY_TEASER.map(([no, title, meta, text]) => /*#__PURE__*/React.createElement("li", {
    className: "mock-academy-plan",
    key: no
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-academy-plan__no"
  }, no), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("span", {
    className: "mock-academy-plan__meta"
  }, meta), /*#__PURE__*/React.createElement("p", null, text)))), /*#__PURE__*/React.createElement("div", {
    className: "mock-academy-foot"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mock-academy-foot__note"
  }, "Die ersten Lektionen sind gratis, danach ab CHF 39 pro Monat \u2014 jederzeit k\xFCndbar."), /*#__PURE__*/React.createElement(DsButton, {
    variant: "cta",
    size: "md",
    arrow: true,
    href: "academy/index.html"
  }, "Zur SimplaroAcademy"))));
}
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "mock-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap mock-faq-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-center"
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "04"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, "Die wichtigsten Fragen und Antworten zu Simplaro."), /*#__PURE__*/React.createElement("img", {
    className: "mock-faq-robot",
    src: "data:image/jpeg;base64,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",
    alt: "SimplaroBot beantwortet Fragen zu SEO und GEO"
  })), /*#__PURE__*/React.createElement("div", null, FAQS.map(([question, answer], index) => /*#__PURE__*/React.createElement(FaqItem, {
    key: question,
    question: /*#__PURE__*/React.createElement("span", {
      className: "mock-faq-question-text"
    }, question),
    last: index === FAQS.length - 1
  }, answer)))));
}
function Kontakt() {
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    className: "mock-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap mock-center"
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "onTerra",
    number: "05"
  }, "Kontakt"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title",
    style: {
      color: '#fff',
      maxWidth: 840
    }
  }, "Welche Simplaro-L\xF6sung passt zu Ihrem Unternehmen?"), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead",
    style: {
      maxWidth: 720
    }
  }, "Im unverbindlichen Gespr\xE4ch kl\xE4ren wir, ob f\xFCr Sie Learning, Bot, Service oder eine Kombination der richtige n\xE4chste Schritt ist."), /*#__PURE__*/React.createElement("div", {
    className: "mock-actions"
  }, /*#__PURE__*/React.createElement(DsButton, {
    variant: "light",
    arrow: true,
    href: "https://calendly.com/simplaro",
    target: "_blank"
  }, "Termin direkt buchen"), /*#__PURE__*/React.createElement(DsButton, {
    variant: "glass",
    arrow: true,
    href: "mailto:hallo@simplaro.ch"
  }, "hallo@simplaro.ch")), /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'rgba(255,236,222,0.9)'
    }
  }, "Simpel \xB7 Klar \xB7 Pers\xF6nlich")));
}
function App() {
  const [chatOpen, setChatOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "mock-page"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Service, null), /*#__PURE__*/React.createElement(Learning, null), /*#__PURE__*/React.createElement(Academy, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Kontakt, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: asset('logo-lockup-white.png')
  }), /*#__PURE__*/React.createElement(ChatWidget, {
    open: chatOpen,
    onOpen: () => setChatOpen(true),
    onClose: () => setChatOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
