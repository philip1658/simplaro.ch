function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Kicker,
  FaqItem,
  SiteFooter,
  Button: DsButton,
  ServiceRow,
  LabelBadge
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__text"
  }, /*#__PURE__*/React.createElement("h1", null, "Digitale Sichtbarkeit und ", /*#__PURE__*/React.createElement("span", null, "KI-Kompetenz"), /*#__PURE__*/React.createElement("span", null, "f\xFCr Schweizer KMU."))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u2192")))), /*#__PURE__*/React.createElement("a", {
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
  }, "\u2192"))), /*#__PURE__*/React.createElement("a", {
    className: "mock-stamp",
    href: "erstanalyse.html"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-stamp__over"
  }, "Kostenlos & unverbindlich"), /*#__PURE__*/React.createElement("span", {
    className: "mock-stamp__label"
  }, "Jetzt Erstanalyse starten \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__robot",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: asset('buerobot-poster-hand-sharp.jpg'),
    alt: ""
  })));
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
  })), /*#__PURE__*/React.createElement("p", null, "Trainings, Coachings und Workshops in Ihrer Firma — f\xFCr Unternehmer, F\xFChrungskräfte und Teams, zugeschnitten auf Ihre Abläufe und Fragen."), /*#__PURE__*/React.createElement(DsButton, {
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
  }, "Wir richten Ihre Automationen bei Ihnen im Betrieb ein und bef\xE4higen Ihr Team — persönlich und auf Augenhöhe.")), /*#__PURE__*/React.createElement("div", {
    className: "mock-bot-tile__offer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mock-bot-tile__price-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__amount"
  }, "ab CHF 600"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__unit"
  }, "pro Automation")), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__note"
  }, "Fixpreis nach der Erstanalyse \xB7 meist in wenigen Wochen zurückverdient"), /*#__PURE__*/React.createElement(DsButton, {
    variant: "light",
    size: "sm",
    arrow: true,
    href: "#kontakt"
  }, "Gespräch buchen"))), /*#__PURE__*/React.createElement("ol", {
    className: "mock-bot-tile__steps"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "01"), /*#__PURE__*/React.createElement("strong", null, "Empfehlung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "Prozesse mit dem grössten Entlastungspotenzial, mit Offerte")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "02"), /*#__PURE__*/React.createElement("strong", null, "Priorisierung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "gemeinsam festlegen, was zuerst optimiert wird")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "03"), /*#__PURE__*/React.createElement("strong", null, "Planung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "Umsetzung Schritt für Schritt vorbereitet")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "04"), /*#__PURE__*/React.createElement("strong", null, "Umsetzung"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "Automationen eingerichtet, Team befähigt")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-no"
  }, "05"), /*#__PURE__*/React.createElement("strong", null, "Kontrolle"), /*#__PURE__*/React.createElement("span", {
    className: "mock-bot-tile__step-text"
  }, "regelmässige Prüfung mit SimplaroService")))), /*#__PURE__*/React.createElement("div", {
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
const ACADEMY_TEASER = [['01', 'Grundlagen: KI einordnen', 'Einstieg \xB7 1 Std 05', 'Der Einstieg ohne Fachchinesisch \u2014 was die Werkzeuge k\xF6nnen und wie Sie sie ansprechen.'], ['02', 'Datenschutz & Sicherheit', 'Grundlage \xB7 1 Std 15', 'Was rein darf und was nie: revDSG, Anonymisieren, Cloud-Standort.'], ['03', 'Korrespondenz & E-Mail', 'Praxis \xB7 1 Std 22', 'Der Posteingang zuerst \u2014 Antworten, die nach Ihnen klingen.'], ['04', 'Offerten & Auftr\xE4ge', 'Praxis \xB7 1 Std 28', 'Aus f\xFCnf Stichworten eine Offerte in Ihrer Struktur.'], ['05', 'Buchhaltung & Belege', 'Praxis \xB7 1 Std 23', 'Belegstapel, Spesen, Mahnwesen \u2014 bis zur \xDCbergabe ans Treuhandbüro.'], ['09', 'Abl\xE4ufe automatisieren', 'Fortgeschritten \xB7 2 Std 03', 'Vom einzelnen Handgriff zum verlässlichen Ablauf.']];
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
  }, "Mehr als ein Chatbot: Lernen Sie, Ihre Büroarbeit mit KI zu automatisieren."), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead",
    style: {
      maxWidth: 760
    }
  }, "Die ", /*#__PURE__*/React.createElement(ProductName, {
    name: "Academy"
  }), " ist unsere Selbstlern-Plattform: 66 kurze Lektionen in zwölf Lernpfaden. Jeder Plan ist für sich abgeschlossen und dauert rund eine Stunde \u2014 Sie starten dort, wo es bei Ihnen brennt.")), /*#__PURE__*/React.createElement("ul", {
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
  }, "Die ersten Lektionen sind gratis, danach ab CHF 39 pro Monat \u2014 jederzeit kündbar."), /*#__PURE__*/React.createElement(DsButton, {
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
    src: asset('buerobot-faq-simplaro.png?v=20260725-17'),
    alt: "SimplaroBot beantwortet Fragen"
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
  }, "Welche Simplaro-Lösung passt zu Ihrem Unternehmen?"), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead",
    style: {
      maxWidth: 720
    }
  }, "Im unverbindlichen Gespräch klären wir, ob für Sie Learning, Bot, Service oder eine Kombination der richtige nächste Schritt ist."), /*#__PURE__*/React.createElement("div", {
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
  }, "Simpel \xB7 Klar \xB7 Persönlich")));
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
