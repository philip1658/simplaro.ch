function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Kicker,
  FaqItem,
  SiteFooter
} = window.SimplaroDesignSystem_5f353f;
const ASSET_BASE = window.SIMPLARO_ASSET_BASE || '../../assets/';
function asset(path) {
  return ASSET_BASE + path;
}
const NAV_LINKS = [{
  label: 'SimplaroLearning',
  href: '#learning',
  product: 'Learning'
}, {
  label: 'SimplaroBot',
  href: '#bot',
  product: 'Bot'
}, {
  label: 'SimplaroService',
  href: '#service',
  product: 'Service'
}, {
  label: 'Über uns',
  href: '#ueber-uns'
}, {
  label: 'FAQ',
  href: '#faq'
}, {
  label: 'Kontakt',
  href: '#kontakt',
  contact: true
}];
const FAQS = [['Was macht Simplaro?', 'Simplaro befähigt Schweizer KMU, KI verständlich, persönlich und wirksam im Unternehmen einzusetzen. Wir verbinden Lernen, Automatisierung und langfristige Begleitung.'], ['Ist Simplaro eine klassische KI-Agentur?', 'Nein. KI ist für uns ein Werkzeug. Im Zentrum stehen verständliche Einführung, konkrete Abläufe und eine Umsetzung, die im Alltag funktioniert.'], ['Was ist SimplaroLearning?', 'SimplaroLearning bündelt Online-Lernprogramme, Bibliotheken und persönliche Coachings, damit Unternehmer und Teams KI sicher anwenden können.'], ['Was ist SimplaroBot?', 'SimplaroBot ist der Ansatz für wiederkehrende Büro- und Administrationsprozesse: Wir analysieren Abläufe, priorisieren Hebel und setzen passende Automatisierungen um.'], ['Was ist SimplaroService?', 'SimplaroService begleitet bestehende Automatisierungen im Betrieb. Dazu gehören Pflege, Updates, Kontrolle und Weiterentwicklung nach Bedarf.'], ['Brauche ich technisches Vorwissen?', 'Nein. Die Inhalte und die Umsetzung werden so erklärt, dass Unternehmer und Mitarbeitende ohne technisches Vorwissen mitkommen.'], ['Wie beginnt eine Zusammenarbeit?', 'Am Anfang steht ein unverbindliches Gespräch. Danach klären wir, ob Learning, Bot, Service oder eine Kombination davon sinnvoll ist.']];
const SERVICE_PLANS = [{
  title: 'SimplaroService BASIC',
  features: ['Regelmässige Funktionsprüfung', 'Kleine Anpassungen nach Bedarf', 'E-Mail-Support', 'Kurze Standortmeldung']
}, {
  title: 'SimplaroService STANDARD',
  badge: 'Meist gewählt',
  features: ['Laufende Pflege und Updates', 'Optimierung bestehender Abläufe', 'Support für Mitarbeitende', 'Periodischer Review-Termin', 'Empfehlungen für nächste Hebel']
}, {
  title: 'SimplaroService PREMIUM',
  features: ['Proaktive Weiterentwicklung', 'Priorisierte Betreuung', 'Erweiterungen und Integrationen', 'Qualitäts- und Datenschutz-Review', 'Begleitung bei neuen Prozessen']
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
  const closeMenu = () => setMenuOpen(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "mock-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mock-header__logo",
    href: "#top",
    "aria-label": "Simplaro Start"
  }, /*#__PURE__*/React.createElement("img", {
    src: asset('logo-lockup-terra.png'),
    alt: "Simplaro"
  })), /*#__PURE__*/React.createElement("button", {
    className: "mock-menu-toggle",
    type: "button",
    "aria-label": menuOpen ? 'Menü schliessen' : 'Menü öffnen',
    "aria-controls": "mock-mobile-menu",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(open => !open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("nav", {
    className: "mock-header__nav",
    "aria-label": "Hauptnavigation"
  }, NAV_LINKS.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.href,
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
    key: link.href,
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
  }, /*#__PURE__*/React.createElement("h1", null, "Wir helfen Schweizer KMU, mit KI t\xE4glich Zeit und Kosten zu sparen."), /*#__PURE__*/React.createElement("ul", {
    className: "mock-hero__checks"
  }, /*#__PURE__*/React.createElement("li", null, "Simpel"), /*#__PURE__*/React.createElement("li", null, "Klar"), /*#__PURE__*/React.createElement("li", null, "Pers\xF6nlich"))), /*#__PURE__*/React.createElement("div", {
    className: "mock-hero__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mock-button",
    href: "#learning"
  }, "SimplaroLearning starten ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "mock-button",
    href: "#bot"
  }, "SimplaroBot kennenlernen ", /*#__PURE__*/React.createElement(Arrow, null)))), /*#__PURE__*/React.createElement("div", {
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
    number: "01"
  }, "Lernen und bef\xE4higen"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, /*#__PURE__*/React.createElement(ProductName, {
    name: "Learning"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead"
  }, "Wie sattelfest sind Sie in der Anwendung von KI? Mit ", /*#__PURE__*/React.createElement(ProductName, {
    name: "Learning",
    className: "mock-inline-product"
  }), " bef\xE4higen wir Sie und Ihre Mitarbeitenden im Zeitalter von KI. Sie entscheiden, ob Sie selbst\xE4ndig lernen oder lieber pers\xF6nliche Unterst\xFCtzung in Anspruch nehmen m\xF6chten."), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead"
  }, "In der ", /*#__PURE__*/React.createElement(ProductName, {
    name: "Academy",
    className: "mock-inline-product"
  }), " finden Sie Online-Lernprogramme, die Schritt f\xFCr Schritt in k\xFCnstliche Intelligenz einf\xFChren. Mit einem Firmenkonto k\xF6nnen Sie Lernprogramme auch Ihren Mitarbeitenden zug\xE4nglich machen."), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead"
  }, "F\xFCr Unternehmer, F\xFChrungskr\xE4fte und Teams bieten wir erg\xE4nzend ", /*#__PURE__*/React.createElement(ProductName, {
    name: "Coaching",
    className: "mock-inline-product"
  }), ": pers\xF6nliche Coachings oder kleine Workshops bei Ihnen in der Firma."), /*#__PURE__*/React.createElement("div", {
    className: "mock-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mock-button mock-button--terra",
    href: "#kontakt"
  }, "Zur SimplaroAcademy ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "mock-button mock-button--terra",
    href: "#kontakt"
  }, "SimplaroCoaching anfragen ", /*#__PURE__*/React.createElement(Arrow, null)))), /*#__PURE__*/React.createElement("div", {
    className: "mock-learning-visual"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mock-learning-image",
    src: asset('simplaro-robot-teacher.png'),
    alt: "SimplaroBot als Lehrer vor einem Whiteboard"
  }))));
}
function MockupBuerobotVideo() {
  const ref = React.useRef(null);
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    let url = null;
    let cancelled = false;
    fetch(asset('buerobot-dance.mp4')).then(response => {
      if (!response.ok) throw new Error('video ' + response.status);
      return response.blob();
    }).then(blob => {
      if (cancelled) return;
      url = URL.createObjectURL(blob);
      const video = ref.current;
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.src = url;
      video.play().catch(() => {});
    }).catch(() => {
      if (!cancelled) setFailed(true);
    });
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, []);
  if (failed) {
    return /*#__PURE__*/React.createElement("img", {
      className: "mock-bot-image",
      src: asset('buerobot-phone.jpg'),
      alt: "B\xFCro-Bot unterst\xFCtzt bei Prozessen"
    });
  }
  return /*#__PURE__*/React.createElement("video", {
    className: "mock-bot-image",
    ref: ref,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "aria-label": "B\xFCro-Bot in Bewegung"
  });
}
function Bot() {
  return /*#__PURE__*/React.createElement("section", {
    id: "bot",
    className: "mock-section mock-section--terra"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap mock-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MockupBuerobotVideo, null)), /*#__PURE__*/React.createElement("div", {
    className: "mock-copy"
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "onTerra",
    number: "02"
  }, "Automatisieren"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, /*#__PURE__*/React.createElement(ProductName, {
    name: "Bot"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead"
  }, "Mit dem ", /*#__PURE__*/React.createElement("strong", null, "SimplaroBot"), " automatisieren wir Prozesse, die regelm\xE4ssig Zeit in Anspruch nehmen. In einem unverbindlichen Gespr\xE4ch analysieren wir gemeinsam Ihre Abl\xE4ufe, identifizieren Herausforderungen und machen eine Standortbestimmung."), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead"
  }, "Nach der Bestandesaufnahme schlagen wir vor, welche Prozesse mit Automatisierung optimiert werden k\xF6nnen. Sie entscheiden, ob Sie die Umsetzung mit Simplaro starten m\xF6chten."), /*#__PURE__*/React.createElement("ol", {
    className: "mock-steps"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Empfehlung:"), " Wir zeigen Prozesse mit hohem Entlastungspotenzial und erstellen eine pers\xF6nliche Offerte.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Priorisierung:"), " Gemeinsam entscheiden wir, welche Abl\xE4ufe zuerst optimiert werden.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Planung:"), " Wir bereiten die Umsetzung verst\xE4ndlich und Schritt f\xFCr Schritt vor.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Umsetzung:"), " Wir implementieren die Prozessautomatisierung und bef\xE4higen Ihr Team.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Kontrolle:"), " Mit SimplaroService pr\xFCfen wir regelm\xE4ssig, ob alles funktioniert."))), /*#__PURE__*/React.createElement("div", {
    className: "mock-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mock-button",
    href: "#kontakt"
  }, "Jetzt unverbindliches Gespr\xE4ch buchen ", /*#__PURE__*/React.createElement(Arrow, null))))));
}
function ServiceCard({
  title,
  badge,
  features
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "mock-service-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-service-card__head"
  }, /*#__PURE__*/React.createElement("h3", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "mock-service-card__body"
  }, badge ? /*#__PURE__*/React.createElement("span", {
    className: "mock-service-badge"
  }, badge) : null, /*#__PURE__*/React.createElement("ul", null, features.map(feature => /*#__PURE__*/React.createElement("li", {
    key: feature
  }, feature))), /*#__PURE__*/React.createElement("div", {
    className: "mock-service-card__price"
  }, "Preis auf Anfrage")));
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
    number: "03"
  }, "Betrieb und Weiterentwicklung"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, /*#__PURE__*/React.createElement(ProductName, {
    name: "Service"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead",
    style: {
      maxWidth: 860
    }
  }, "Der SimplaroBot braucht Pflege und regelm\xE4ssige Updates. Mit ", /*#__PURE__*/React.createElement(ProductName, {
    name: "Service",
    className: "mock-inline-product"
  }), " m\xFCssen Sie sich um den laufenden Betrieb nicht allein k\xFCmmern: Wir pr\xFCfen, optimieren und entwickeln Ihre Automatisierungen nach Bedarf weiter.")), /*#__PURE__*/React.createElement("div", {
    className: "mock-service-grid"
  }, SERVICE_PLANS.map(plan => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: plan.title
  }, plan))))));
}
function UeberUns() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ueber-uns",
    className: "mock-section mock-section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-center"
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "04"
  }, "\xDCber uns"), /*#__PURE__*/React.createElement("h2", {
    className: "mock-title"
  }, "Unternehmerische Praxis, menschliche Werte und moderne Technologie."), /*#__PURE__*/React.createElement("p", {
    className: "mock-lead",
    style: {
      maxWidth: 980
    }
  }, "Andr\xE9 Ulrich und Philip Krieger sind zwei Unternehmer aus Z\xFCrich. Sie haben Simplaro gegr\xFCndet, um Schweizer KMU in das Zeitalter von KI zu begleiten und sie zu bef\xE4higen, KI f\xFCr ihr Unternehmen einzusetzen. Wir verbinden unternehmerische Praxis, menschliche Werte und moderne Technologie zu einem ganzheitlichen Ansatz und begleiten KMU pers\xF6nlich, vor Ort und auf Augenh\xF6he.")), /*#__PURE__*/React.createElement("div", {
    className: "mock-team-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "mock-team-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: asset('andre-ulrich-team.png?v=20260720-andre-bg-clean'),
    alt: "Andr\xE9 Ulrich"
  }), /*#__PURE__*/React.createElement("h3", null, "Andr\xE9 Ulrich"), /*#__PURE__*/React.createElement("p", null, "Mitgr\xFCnder \xB7 KMU-Experte")), /*#__PURE__*/React.createElement("article", {
    className: "mock-team-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: asset('philip-krieger-team.png'),
    alt: "Philip Krieger"
  }), /*#__PURE__*/React.createElement("h3", null, "Philip Krieger"), /*#__PURE__*/React.createElement("p", null, "Mitgr\xFCnder \xB7 Coach")))));
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
    number: "05"
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
    number: "06"
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
  }, /*#__PURE__*/React.createElement("a", {
    className: "mock-button",
    href: "https://calendly.com/simplaro",
    target: "_blank",
    rel: "noopener"
  }, "Termin direkt buchen ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "mock-button",
    href: "mailto:hallo@simplaro.ch"
  }, "hallo@simplaro.ch ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("small", {
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
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Learning, null), /*#__PURE__*/React.createElement(Bot, null), /*#__PURE__*/React.createElement(Service, null), /*#__PURE__*/React.createElement(UeberUns, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Kontakt, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: asset('logo-lockup-white.png')
  }), /*#__PURE__*/React.createElement(ChatWidget, {
    open: chatOpen,
    onOpen: () => setChatOpen(true),
    onClose: () => setChatOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
