const { Kicker, FaqItem, SiteFooter, Button: DsButton, ServiceRow, LabelBadge } = window.SimplaroDesignSystem_5f353f;
const ASSET_BASE = window.SIMPLARO_ASSET_BASE || '../../assets/';

function asset(path) {
  return ASSET_BASE + path;
}

const NAV_LINKS = [
  { label: 'SimplaroBot', href: '#service', product: 'Bot' },
  { label: 'SimplaroAcademy', href: '#academy', product: 'Academy' },
  { label: 'SimplaroLearning', href: '#learning', product: 'Learning' },
  { label: 'SimplaroService', href: '#service-pakete', product: 'Service' },
  { label: 'Über uns', href: 'ueber-uns.html' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt', contact: true },
];

const FAQS = [
  ['Was macht Simplaro?', 'Simplaro befähigt Schweizer KMU, KI verständlich, persönlich und wirksam im Unternehmen einzusetzen. Wir verbinden Lernen, Automatisierung und langfristige Begleitung.'],
  ['Ist Simplaro eine klassische KI-Agentur?', 'Nein. KI ist für uns ein Werkzeug. Im Zentrum stehen verständliche Einführung, konkrete Abläufe und eine Umsetzung, die im Alltag funktioniert.'],
  ['Was ist SimplaroAcademy?', 'Die SimplaroAcademy ist unsere Selbstlern-Plattform: zwölf Lernpfade mit 66 kurzen Lektionen zu KI im KMU-Alltag — inklusive Advanced-Pfad für Fortgeschrittene. Die ersten Lektionen sind gratis, danach ab CHF 39 pro Monat.'],
  ['Was ist SimplaroLearning?', 'SimplaroLearning bündelt Online-Lernprogramme, Bibliotheken und persönliche Coachings, damit Unternehmer und Teams KI sicher anwenden können.'],
  ['Was ist SimplaroBot?', 'SimplaroBot ist der Ansatz für wiederkehrende Büro- und Administrationsprozesse: Wir analysieren Abläufe, priorisieren Hebel und setzen passende Automatisierungen um.'],
  ['Was ist SimplaroService?', 'SimplaroService begleitet bestehende Automatisierungen im Betrieb. Dazu gehören Pflege, Updates, Kontrolle und Weiterentwicklung nach Bedarf.'],
  ['Brauche ich technisches Vorwissen?', 'Nein. Die Inhalte und die Umsetzung werden so erklärt, dass Unternehmer und Mitarbeitende ohne technisches Vorwissen mitkommen.'],
  ['Was kostet eine Automation?', 'Eine Automation beginnt bei CHF 600. Den Fixpreis nennen wir nach der Erstanalyse — Sie wissen vor der Umsetzung, woran Sie sind.'],
  ['Was passiert mit unseren Daten?', 'Wir arbeiten nach dem revDSG. Vor der Umsetzung klären wir mit Ihnen, welche Daten ein Werkzeug überhaupt sehen darf, und halten Kundendaten dort heraus, wo sie nicht hingehören.'],
  ['Wie beginnt eine Zusammenarbeit?', 'Am Anfang steht ein unverbindliches Gespräch. Danach klären wir, ob Learning, Bot, Service oder eine Kombination davon sinnvoll ist.'],
];

const SERVICE_PLANS = [
  { number: '01', title: 'SimplaroService BASIC', text: 'Regelmässige Funktionsprüfung, kleine Anpassungen und E-Mail-Support.', price: 'ab CHF 90 / Monat' },
  { number: '02', title: 'SimplaroService STANDARD', text: 'Laufende Pflege und Updates, Optimierung bestehender Abläufe, Support für Ihr Team und ein periodischer Review-Termin.', price: 'ab CHF 190 / Monat' },
  { number: '03', title: 'SimplaroService PREMIUM', text: 'Proaktive Weiterentwicklung, priorisierte Betreuung, Erweiterungen und Integrationen.', price: 'ab CHF 390 / Monat' },
];


function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function ProductName({ name, className = '' }) {
  return (
    <span className={className}>
      Simplaro<span className="mock-accent">{name}</span>
    </span>
  );
}

function NavLabel({ link }) {
  if (!link.product) return link.label;
  return (
    <span className="mock-nav-product">
      <span className="mock-nav-brand">Simplaro</span>
      <span className="mock-nav-accent">{link.product}</span>
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [solid, setSolid] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`mock-header${solid || menuOpen ? ' is-solid' : ''}`}>
      <div className="mock-header__inner">
        <a className="mock-header__logo" href="#top" aria-label="Simplaro Start">
          <img src={asset(solid || menuOpen ? 'logo-lockup-terra.png' : 'logo-lockup-white.png')} alt="Simplaro" />
        </a>
        <button
          className="mock-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
          aria-controls="mock-mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="mock-header__nav" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} className={link.contact ? 'mock-header__contact' : ''} href={link.href} aria-label={link.label}>
              <NavLabel link={link} />
            </a>
          ))}
        </nav>
      </div>
      <nav id="mock-mobile-menu" className={`mock-mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile Navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.label} className={link.contact ? 'mock-header__contact' : ''} href={link.href} aria-label={link.label} onClick={closeMenu}>
            <NavLabel link={link} />
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mock-hero" aria-label="Start">
      <div className="mock-hero__content">
        <div className="mock-hero__text">
          <h1>Digitale Sichtbarkeit und <span>KI-Kompetenz</span><span>für Schweizer KMU.</span></h1>
        </div>
        <div className="mock-hero__doors">
          <a className="mock-hero__door" href="#service">
            <span className="mock-hero__door-title"><ProductName name="Bot" /></span>
            <span className="mock-hero__door-text">Automationen für Ihren Betrieb <span className="mock-hero__door-arrow" aria-hidden="true">→</span></span>
          </a>
          <a className="mock-hero__door" href="#academy">
            <span className="mock-hero__door-title"><ProductName name="Academy" /></span>
            <span className="mock-hero__door-text">E-Learnings zu KI für KMU <span className="mock-hero__door-arrow" aria-hidden="true">→</span></span>
          </a>
          <a className="mock-hero__door" href="#learning">
            <span className="mock-hero__door-title"><ProductName name="Learning" /></span>
            <span className="mock-hero__door-text">Trainings, Coachings, Workshops <span className="mock-hero__door-arrow" aria-hidden="true">→</span></span>
          </a>
        </div>
        <a className="mock-stamp" href="erstanalyse.html">
          <span className="mock-stamp__over">Kostenlos &amp; unverbindlich</span>
          <span className="mock-stamp__label">Jetzt Erstanalyse starten →</span>
        </a>
      </div>
      <div className="mock-hero__robot" aria-hidden="true">
        <img src={asset('buerobot-poster-hand-sharp.jpg')} alt="" />
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section id="learning" className="mock-section mock-section--alt">
      <div className="mock-wrap mock-grid">
        <div className="mock-copy">
          <Kicker number="02">Lernen und befähigen</Kicker>
          <h2 className="mock-title"><span className="mock-accent">Lernen</span> mit Simplaro</h2>
          <p className="mock-lead">Wie sattelfest sind Sie in der Anwendung von KI? Wir befähigen Sie und Ihre Mitarbeitenden im Zeitalter von KI — auf zwei Wegen, die sich ergänzen: selbständig online oder persönlich begleitet.</p>
          <div className="mock-learning-tracks">
            <article className="mock-learning-track">
              <span className="mock-learning-track__label">Online · im eigenen Tempo</span>
              <h3><ProductName name="Academy" /></h3>
              <p>Unsere Selbstlern-Plattform: E-Learnings zu KI für KMU — zwölf Lernpfade mit 66 kurzen Lektionen, im eigenen Tempo. Die ersten Lektionen sind gratis, danach ab CHF 39 pro Monat.</p>
              <DsButton variant="cta" size="sm" arrow href="#academy" style={{ marginTop: 'auto', minHeight: 44 }}>Zu den E-Learnings</DsButton>
            </article>
            <article className="mock-learning-track">
              <span className="mock-learning-track__label">Persönlich · bei Ihnen vor Ort</span>
              <h3><ProductName name="Learning" /></h3>
              <p>Trainings, Coachings und Workshops in Ihrer Firma — für Unternehmer, Führungskräfte und Teams, zugeschnitten auf Ihre Abläufe und Fragen.</p>
              <DsButton variant="cta" size="sm" arrow href="#kontakt" style={{ marginTop: 'auto', minHeight: 44 }}>SimplaroLearning anfragen</DsButton>
            </article>
          </div>
        </div>
        <div className="mock-learning-visual">
          <img className="mock-learning-image" src={asset('simplaro-academy-desk.png')} alt="SimplaroBot am Schreibtisch beim Erstellen eines Lernmoduls" />
          <img className="mock-learning-image mock-learning-image--bot" src={asset('simplaro-robot-teacher.png')} alt="SimplaroBot als Lehrer vor einem Whiteboard" />
        </div>
      </div>
    </section>
  );
}

function Service() {
  return (
    <section id="service" className="mock-section">
      <div className="mock-wrap">
        <div className="mock-center">
          <Kicker number="01">Automatisieren</Kicker>
          <h2 className="mock-title">Wir automatisieren Ihren Betrieb.</h2>
          <p className="mock-lead" style={{ maxWidth: 720 }}>Wir übernehmen, was regelmässig Zeit kostet — Schritt für Schritt, bei Ihnen im Betrieb.</p>
        </div>
        <article className="mock-bot-tile">
          <div className="mock-bot-tile__head">
            <div className="mock-bot-tile__intro">
              <LabelBadge tone="onTerra">Hauptprodukt</LabelBadge>
              <h3><ProductName name="Bot" /></h3>
              <p className="mock-bot-tile__sub">Wir richten Ihre Automationen bei Ihnen im Betrieb ein und befähigen Ihr Team — persönlich und auf Augenhöhe.</p>
            </div>
            <div className="mock-bot-tile__offer">
              <p className="mock-bot-tile__price-line">
                <span className="mock-bot-tile__amount">ab CHF 600</span>
                <span className="mock-bot-tile__unit">pro Automation</span>
              </p>
              <span className="mock-bot-tile__note">Fixpreis nach der Erstanalyse · meist in wenigen Wochen zurückverdient</span>
              <DsButton variant="light" size="sm" arrow href="#kontakt">Gespräch buchen</DsButton>
            </div>
          </div>
          <ol className="mock-bot-tile__steps">
            <li>
              <span className="mock-bot-tile__step-no">01</span>
              <strong>Empfehlung</strong>
              <span className="mock-bot-tile__step-text">Prozesse mit dem grössten Entlastungspotenzial, mit Offerte</span>
            </li>
            <li>
              <span className="mock-bot-tile__step-no">02</span>
              <strong>Priorisierung</strong>
              <span className="mock-bot-tile__step-text">gemeinsam festlegen, was zuerst optimiert wird</span>
            </li>
            <li>
              <span className="mock-bot-tile__step-no">03</span>
              <strong>Planung</strong>
              <span className="mock-bot-tile__step-text">Umsetzung Schritt für Schritt vorbereitet</span>
            </li>
            <li>
              <span className="mock-bot-tile__step-no">04</span>
              <strong>Umsetzung</strong>
              <span className="mock-bot-tile__step-text">Automationen eingerichtet, Team befähigt</span>
            </li>
            <li>
              <span className="mock-bot-tile__step-no">05</span>
              <strong>Kontrolle</strong>
              <span className="mock-bot-tile__step-text">regelmässige Prüfung mit SimplaroService</span>
            </li>
          </ol>
        </article>
        <div className="mock-addons" id="service-pakete">
          <p className="mock-addons__note">
            <span className="mock-addons__label">Zusatzprodukte</span>
            <span>Pflege und Weiterentwicklung im Abo — optional zum <ProductName name="Bot" className="mock-inline-product" />.</span>
          </p>
          <div className="mock-service-rows">
            {SERVICE_PLANS.map((plan, i) => (
              <ServiceRow key={plan.title} number={plan.number} title={plan.title} last={i === SERVICE_PLANS.length - 1}>
                {plan.text} <span className="mock-service-price">{plan.price}</span>
              </ServiceRow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ACADEMY_TEASER = [
  ['01', 'Grundlagen: KI einordnen', 'Einstieg · 1 Std 05', 'Der Einstieg ohne Fachchinesisch — was die Werkzeuge können und wie Sie sie ansprechen.'],
  ['02', 'Datenschutz & Sicherheit', 'Grundlage · 1 Std 15', 'Was rein darf und was nie: revDSG, Anonymisieren, Cloud-Standort.'],
  ['03', 'Korrespondenz & E-Mail', 'Praxis · 1 Std 22', 'Der Posteingang zuerst — Antworten, die nach Ihnen klingen.'],
  ['04', 'Offerten & Aufträge', 'Praxis · 1 Std 28', 'Aus fünf Stichworten eine Offerte in Ihrer Struktur.'],
  ['05', 'Buchhaltung & Belege', 'Praxis · 1 Std 23', 'Belegstapel, Spesen, Mahnwesen — bis zur Übergabe ans Treuhandbüro.'],
  ['09', 'Abläufe automatisieren', 'Fortgeschritten · 2 Std 03', 'Vom einzelnen Handgriff zum verlässlichen Ablauf.'],
];

function Academy() {
  return (
    <section id="academy" className="mock-section">
      <div className="mock-wrap">
        <div className="mock-center">
          <Kicker number="03">E-Learnings</Kicker>
          <h2 className="mock-title">Mehr als ein Chatbot: Lernen Sie, Ihre Büroarbeit mit KI zu automatisieren.</h2>
          <p className="mock-lead" style={{ maxWidth: 760 }}>Die <ProductName name="Academy" /> ist unsere Selbstlern-Plattform: 66 kurze Lektionen in zwölf Lernpfaden. Jeder Plan ist für sich abgeschlossen und dauert rund eine Stunde — Sie starten dort, wo es bei Ihnen brennt.</p>
        </div>
        <ul className="mock-academy-grid">
          {ACADEMY_TEASER.map(([no, title, meta, text]) => (
            <li className="mock-academy-plan" key={no}>
              <span className="mock-academy-plan__no">{no}</span>
              <h3>{title}</h3>
              <span className="mock-academy-plan__meta">{meta}</span>
              <p>{text}</p>
            </li>
          ))}
        </ul>
        <div className="mock-academy-foot">
          <p className="mock-academy-foot__note">Die ersten Lektionen sind gratis, danach ab CHF 39 pro Monat — jederzeit kündbar.</p>
          <DsButton variant="cta" size="md" arrow href="academy/index.html">Zur SimplaroAcademy</DsButton>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mock-section">
      <div className="mock-wrap mock-faq-layout">
        <div className="mock-center">
          <Kicker number="04">FAQ</Kicker>
          <h2 className="mock-title">Die wichtigsten Fragen und Antworten zu Simplaro.</h2>
          <img className="mock-faq-robot" src={asset('buerobot-faq-simplaro.png?v=20260725-17')} alt="SimplaroBot beantwortet Fragen" />
        </div>
        <div>
          {FAQS.map(([question, answer], index) => (
            <FaqItem key={question} question={<span className="mock-faq-question-text">{question}</span>} last={index === FAQS.length - 1}>{answer}</FaqItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kontakt() {
  return (
    <section id="kontakt" className="mock-contact">
      <div className="mock-wrap mock-center">
        <Kicker tone="onTerra" number="05">Kontakt</Kicker>
        <h2 className="mock-title" style={{ color: '#fff', maxWidth: 840 }}>Welche Simplaro-Lösung passt zu Ihrem Unternehmen?</h2>
        <p className="mock-lead" style={{ maxWidth: 720 }}>Im unverbindlichen Gespräch klären wir, ob für Sie Learning, Bot, Service oder eine Kombination der richtige nächste Schritt ist.</p>
        <div className="mock-actions">
          <DsButton variant="light" arrow href="https://calendly.com/simplaro" target="_blank">Termin direkt buchen</DsButton>
          <DsButton variant="glass" arrow href="mailto:hallo@simplaro.ch">hallo@simplaro.ch</DsButton>
        </div>
        <small style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,236,222,0.9)' }}>Simpel · Klar · Persönlich</small>
      </div>
    </section>
  );
}

function App() {
  const [chatOpen, setChatOpen] = React.useState(false);

  return (
    <div className="mock-page">
      <Header />
      <Hero />
      <main>
        <Service />
        <Learning />
        <Academy />
        <Faq />
        <Kontakt />
      </main>
      <SiteFooter logoSrc={asset('logo-lockup-white.png')} />
      <ChatWidget open={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
