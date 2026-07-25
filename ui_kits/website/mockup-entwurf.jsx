const { Kicker, FaqItem, SiteFooter } = window.SimplaroDesignSystem_5f353f;

const NAV_LINKS = [
  { label: 'SimplaroLearning', href: '#learning', product: 'Learning' },
  { label: 'SimplaroBot', href: '#bot', product: 'Bot' },
  { label: 'SimplaroService', href: '#service', product: 'Service' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt', contact: true },
];

const FAQS = [
  ['Was macht Simplaro?', 'Simplaro befähigt Schweizer KMU, KI verständlich, persönlich und wirksam im Unternehmen einzusetzen. Wir verbinden Lernen, Automatisierung und langfristige Begleitung.'],
  ['Ist Simplaro eine klassische KI-Agentur?', 'Nein. KI ist für uns ein Werkzeug. Im Zentrum stehen verständliche Einführung, konkrete Abläufe und eine Umsetzung, die im Alltag funktioniert.'],
  ['Was ist SimplaroLearning?', 'SimplaroLearning bündelt Online-Lernprogramme, Firmenzugänge und persönliche Coachings, damit Unternehmer und Teams KI sicher anwenden können.'],
  ['Was ist SimplaroBot?', 'SimplaroBot ist der Ansatz für wiederkehrende Büro- und Administrationsprozesse: Wir analysieren Abläufe, priorisieren Hebel und setzen passende Automatisierungen um.'],
  ['Was ist SimplaroService?', 'SimplaroService begleitet bestehende Automatisierungen im Betrieb. Dazu gehören Pflege, Updates, Kontrolle und Weiterentwicklung nach Bedarf.'],
  ['Brauche ich technisches Vorwissen?', 'Nein. Die Inhalte und die Umsetzung werden so erklärt, dass Unternehmer und Mitarbeitende ohne technisches Vorwissen mitkommen.'],
  ['Wie beginnt eine Zusammenarbeit?', 'Am Anfang steht ein unverbindliches Gespräch. Danach klären wir, ob Learning, Bot, Service oder eine Kombination davon sinnvoll ist.'],
];

const SERVICE_PLANS = [
  {
    title: 'SimplaroService BASIC',
    features: ['Regelmässige Funktionsprüfung', 'Kleine Anpassungen nach Bedarf', 'E-Mail-Support', 'Kurze Standortmeldung'],
  },
  {
    title: 'SimplaroService STANDARD',
    badge: 'Meist gewählt',
    features: ['Laufende Pflege und Updates', 'Optimierung bestehender Abläufe', 'Support für Mitarbeitende', 'Periodischer Review-Termin', 'Empfehlungen für nächste Hebel'],
  },
  {
    title: 'SimplaroService PREMIUM',
    features: ['Proaktive Weiterentwicklung', 'Priorisierte Betreuung', 'Erweiterungen und Integrationen', 'Qualitäts- und Datenschutz-Review', 'Begleitung bei neuen Prozessen'],
  },
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
  return (
    <header className="mock-header">
      <div className="mock-header__inner">
        <a className="mock-header__logo" href="#top" aria-label="Simplaro Start">
          <img src="../../assets/logo-lockup-terra.png" alt="Simplaro" />
        </a>
        <nav className="mock-header__nav" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className={link.contact ? 'mock-header__contact' : ''} href={link.href} aria-label={link.label}>
              <NavLabel link={link} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mock-hero" aria-label="Start">
      <div className="mock-hero__content">
        <div className="mock-hero__text">
          <p className="mock-hero__intro">KI für KMU verständlich erklärt, zuverlässig umgesetzt</p>
          <h1>
            <span>Wir befähigen</span>
            <span>Schweizer KMU</span>
            <span>im Zeitalter von KI</span>
          </h1>
          <ul className="mock-hero__checks">
            <li>Simpel</li>
            <li>Klar</li>
            <li>Persönlich</li>
          </ul>
        </div>
        <div className="mock-hero__actions">
          <a className="mock-button" href="#learning">SimplaroLearning starten <Arrow /></a>
          <a className="mock-button" href="#bot">SimplaroBot kennenlernen <Arrow /></a>
        </div>
      </div>
      <div className="mock-hero__robot" aria-hidden="true">
        <img src="../../assets/buerobot-poster-hand-sharp.jpg" alt="" />
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section id="learning" className="mock-section mock-section--alt">
      <div className="mock-wrap mock-grid">
        <div className="mock-copy">
          <Kicker number="01">Lernen und befähigen</Kicker>
          <h2 className="mock-title"><ProductName name="Learning" /></h2>
          <p className="mock-lead">Wie sattelfest sind Sie in der Anwendung von KI? Mit <strong>SimplaroLearning</strong> befähigen wir Sie und Ihre Mitarbeitenden im Zeitalter von KI. Sie entscheiden, ob Sie selbständig lernen oder lieber persönliche Unterstützung in Anspruch nehmen möchten.</p>
          <p className="mock-lead">In der <strong>SimplaroAcademy</strong> finden Sie Online-Lernprogramme, die Schritt für Schritt in künstliche Intelligenz einführen. Mit einem Firmenkonto können Sie Lernprogramme auch Ihren Mitarbeitenden zugänglich machen.</p>
          <p className="mock-lead">Für Unternehmer, Führungskräfte und Teams bieten wir ergänzend <strong>SimplaroCoaching</strong>: persönliche Coachings oder kleine Workshops bei Ihnen in der Firma.</p>
          <div className="mock-actions">
            <a className="mock-button mock-button--terra" href="#kontakt">Zur SimplaroAcademy <Arrow /></a>
            <a className="mock-button mock-button--terra" href="#kontakt">SimplaroCoaching anfragen <Arrow /></a>
          </div>
        </div>
        <div className="mock-learning-visual">
          <img className="mock-learning-image" src="../../assets/simplaro-robot-teacher.png" alt="SimplaroBot als Lehrer vor einem Whiteboard" />
        </div>
      </div>
    </section>
  );
}

function MockupBuerobotVideo() {
  const ref = React.useRef(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    let url = null;
    let cancelled = false;

    fetch('../../assets/buerobot-dance.mp4')
      .then((response) => {
        if (!response.ok) throw new Error('video ' + response.status);
        return response.blob();
      })
      .then((blob) => {
        if (cancelled) return;
        url = URL.createObjectURL(blob);
        const video = ref.current;
        if (!video) return;
        video.muted = true;
        video.defaultMuted = true;
        video.volume = 0;
        video.src = url;
        video.play().catch(() => {});
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, []);

  if (failed) {
    return <img className="mock-bot-image" src="../../assets/buerobot-phone.jpg" alt="Büro-Bot unterstützt bei Prozessen" />;
  }

  return (
    <video
      className="mock-bot-image"
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      aria-label="Büro-Bot in Bewegung"
    ></video>
  );
}

function Bot() {
  return (
    <section id="bot" className="mock-section mock-section--terra">
      <div className="mock-wrap mock-grid">
        <div>
          <MockupBuerobotVideo />
        </div>
        <div className="mock-copy">
          <Kicker tone="onTerra" number="02">Automatisieren</Kicker>
          <h2 className="mock-title"><ProductName name="Bot" /></h2>
          <p className="mock-lead">Mit dem <strong>SimplaroBot</strong> automatisieren wir Prozesse, die regelmässig Zeit in Anspruch nehmen. In einem unverbindlichen Gespräch analysieren wir gemeinsam Ihre Abläufe, identifizieren Herausforderungen und machen eine Standortbestimmung.</p>
          <p className="mock-lead">Nach der Bestandesaufnahme schlagen wir vor, welche Prozesse mit Automatisierung optimiert werden können. Sie entscheiden, ob Sie die Umsetzung mit Simplaro starten möchten.</p>
          <ol className="mock-steps">
            <li><span><strong>Empfehlung:</strong> Wir zeigen Prozesse mit hohem Entlastungspotenzial und erstellen eine persönliche Offerte.</span></li>
            <li><span><strong>Priorisierung:</strong> Gemeinsam entscheiden wir, welche Abläufe zuerst optimiert werden.</span></li>
            <li><span><strong>Planung:</strong> Wir bereiten die Umsetzung verständlich und Schritt für Schritt vor.</span></li>
            <li><span><strong>Umsetzung:</strong> Wir implementieren die Prozessautomatisierung und befähigen Ihr Team.</span></li>
            <li><span><strong>Kontrolle:</strong> Mit SimplaroService prüfen wir regelmässig, ob alles funktioniert.</span></li>
          </ol>
          <div className="mock-actions">
            <a className="mock-button" href="#kontakt">Jetzt unverbindliches Gespräch buchen <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, badge, features }) {
  return (
    <article className="mock-service-card">
      {badge ? <span className="mock-service-badge">{badge}</span> : null}
      <div className="mock-service-card__head">
        <h3>{title}</h3>
      </div>
      <div className="mock-service-card__body">
        <ul>
          {features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <div className="mock-service-card__price">Preis auf Anfrage</div>
      </div>
    </article>
  );
}

function Service() {
  return (
    <section id="service" className="mock-section">
      <div className="mock-wrap">
        <div className="mock-center">
          <Kicker number="03">Betrieb und Weiterentwicklung</Kicker>
          <h2 className="mock-title"><ProductName name="Service" /></h2>
          <p className="mock-lead" style={{ maxWidth: 860 }}>Der SimplaroBot braucht Pflege und regelmässige Updates. Mit <strong>SimplaroService</strong> müssen Sie sich um den laufenden Betrieb nicht allein kümmern: Wir prüfen, optimieren und entwickeln Ihre Automatisierungen nach Bedarf weiter.</p>
        </div>
        <div className="mock-service-grid">
          {SERVICE_PLANS.map((plan) => <ServiceCard key={plan.title} {...plan} />)}
        </div>
      </div>
    </section>
  );
}

function UeberUns() {
  return (
    <section id="ueber-uns" className="mock-section mock-section--alt">
      <div className="mock-wrap">
        <div className="mock-center">
          <Kicker number="04">Über uns</Kicker>
          <h2 className="mock-title">Unternehmerische Praxis, menschliche Werte und moderne Technologie.</h2>
          <p className="mock-lead" style={{ maxWidth: 980 }}>André Ulrich und Philip Krieger sind zwei Jungunternehmer aus Zürich. Sie haben Simplaro gegründet, um Schweizer KMU in das Zeitalter von KI zu begleiten und sie zu befähigen, KI für ihr Unternehmen einzusetzen. Wir verbinden unternehmerische Praxis, menschliche Werte und moderne Technologie zu einem ganzheitlichen Ansatz und begleiten KMU persönlich, vor Ort und auf Augenhöhe.</p>
        </div>
        <div className="mock-team-grid">
          <article className="mock-team-card">
            <img src="../../assets/andre-ulrich-team.png?v=20260720-andre-bg-clean" alt="André Ulrich" />
            <h3>André Ulrich</h3>
            <p>Mitgründer · KMU-Experte</p>
          </article>
          <article className="mock-team-card">
            <img src="../../assets/philip-krieger-team.png" alt="Philip Krieger" />
            <h3>Philip Krieger</h3>
            <p>Mitgründer · Coach</p>
          </article>
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
          <Kicker number="05">FAQ</Kicker>
          <h2 className="mock-title">Die wichtigsten Fragen und Antworten zu Simplaro.</h2>
          <img className="mock-faq-robot" src="../../assets/buerobot-question.png" alt="Fragender Büro-Bot" />
        </div>
        <div>
          {FAQS.map(([question, answer], index) => (
            <FaqItem key={question} question={question} last={index === FAQS.length - 1}>{answer}</FaqItem>
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
        <Kicker tone="onTerra" number="06">Kontakt</Kicker>
        <h2 className="mock-title" style={{ color: '#fff', maxWidth: 840 }}>Welche Simplaro-Lösung passt zu Ihrem Unternehmen?</h2>
        <p className="mock-lead" style={{ maxWidth: 720 }}>Im unverbindlichen Gespräch klären wir, ob für Sie Learning, Bot, Service oder eine Kombination der richtige nächste Schritt ist.</p>
        <div className="mock-actions">
          <a className="mock-button" href="https://calendly.com/simplaro" target="_blank" rel="noopener">Termin direkt buchen <Arrow /></a>
          <a className="mock-button" href="mailto:hallo@simplaro.ch">hallo@simplaro.ch <Arrow /></a>
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
        <Learning />
        <Bot />
        <Service />
        <UeberUns />
        <Faq />
        <Kontakt />
      </main>
      <SiteFooter logoSrc="../../assets/logo-lockup-white.png" />
      <ChatWidget open={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
