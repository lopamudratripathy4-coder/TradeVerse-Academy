import { useState } from 'react';
import './App.css';

const EMAIL = 'tradeverse0707@gmail.com';
const PHONE = '916296729481';
const PHONE_DISPLAY = '+91 62967 29481';

const courses = [
  {
    number: '01',
    icon: '⌁',
    title: 'Stock Market Foundations',
    level: 'BEGINNER',
    summary: 'Understand how the market works before placing your first trade or investment.',
    topics: ['Market participants and exchanges', 'Equity, indices and order types', 'Demat and trading account basics', 'Reading a market quote'],
    accent: 'mint',
  },
  {
    number: '02',
    icon: '◫',
    title: 'Technical Analysis',
    level: 'INTERMEDIATE',
    summary: 'Read charts with a structured approach to trends, price action and indicators.',
    topics: ['Candlesticks and chart structure', 'Support, resistance and trends', 'Volume and selected indicators', 'Building a trade setup'],
    accent: 'blue',
  },
  {
    number: '03',
    icon: '◈',
    title: 'Risk & Trading Discipline',
    level: 'ALL LEVELS',
    summary: 'Learn to plan risk, manage positions and build consistent trading habits.',
    topics: ['Risk–reward planning', 'Position sizing concepts', 'Stop-loss and trade journaling', 'Emotional discipline and review'],
    accent: 'violet',
  },
];

const faqs = [
  {
    q: 'Do I need prior stock market knowledge?',
    a: 'No. The foundations track is designed for beginners. You can start with market terminology and gradually move towards charts and risk management.',
  },
  {
    q: 'Will I learn practical chart analysis?',
    a: 'The learning outline includes candlesticks, trends, support and resistance, volume and selected indicators. Ask the academy for the current batch format and session schedule.',
  },
  {
    q: 'Does TradeVerse provide investment tips or guaranteed returns?',
    a: 'No return or profit is guaranteed. The website presents an educational learning path, not a promise of trading results or personalised investment advice.',
  },
  {
    q: 'How can I enquire about a course?',
    a: 'Use the enquiry form or WhatsApp button. The message will be prepared for you so you can review it and send it to the academy.',
  },
];

function whatsappLink(message = 'Hi TradeVerse Academy, I would like to know more about your courses.') {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-heading ${align === 'left' ? 'section-heading-left' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ChartCard() {
  const bars = [32, 46, 38, 58, 51, 68, 57, 76, 66, 88, 78, 96];
  return (
    <div className="market-card" aria-label="Decorative illustration of a rising market chart">
      <div className="market-card-top">
        <div>
          <span className="market-label">MARKET LEARNING</span>
          <strong>Build your process</strong>
        </div>
        <span className="market-status"><i /> LEARN</span>
      </div>
      <div className="chart-area">
        <div className="chart-grid"><span> </span><span> </span><span> </span><span> </span></div>
        <div className="chart-bars">
          {bars.map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} className={index % 3 === 1 ? 'bar-down' : ''} />
          ))}
        </div>
        <svg className="chart-line" viewBox="0 0 500 180" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="lineGlow" x1="0" x2="1"><stop offset="0%" stopColor="#39e6a0" /><stop offset="100%" stopColor="#62a8ff" /></linearGradient></defs>
          <path d="M4 145 C35 132 37 120 72 128 S110 115 139 119 S166 92 197 104 S233 88 261 93 S296 66 326 77 S361 48 389 59 S438 30 496 12" fill="none" stroke="url(#lineGlow)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="496" cy="12" r="6" fill="#39e6a0" />
        </svg>
      </div>
      <div className="market-card-foot">
        <span><b>01</b> Learn the basics</span>
        <span><b>02</b> Practise analysis</span>
        <span><b>03</b> Manage risk</span>
      </div>
      <div className="floating-note"><span>✦</span><div><b>Knowledge first</b><small>Process over predictions</small></div></div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [['Home', '#home'], ['About', '#about'], ['Courses', '#courses'], ['Learning path', '#learning'], ['Contact', '#contact']];
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="TradeVerse Academy home">
          <img src="/tradeverse-logo.png" alt="TradeVerse Academy" />
        </a>
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
        <div className={`nav-panel ${menuOpen ? 'nav-panel-open' : ''}`}>
          <ul className="nav-links">
            {links.map(([label, href]) => <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>)}
          </ul>
          <a className="button button-small button-primary nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Join the learning path <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}

function CourseCard({ course }) {
  const message = `Hi TradeVerse Academy, I am interested in the ${course.title} course. Please share the syllabus, schedule and enrolment details.`;
  return (
    <article className={`course-card ${course.accent}`}>
      <div className="course-card-top"><span className="course-number">{course.number} / 03</span><span className="course-icon" aria-hidden="true">{course.icon}</span></div>
      <span className="course-level">{course.level}</span>
      <h3>{course.title}</h3>
      <p className="course-summary">{course.summary}</p>
      <div className="course-divider" />
      <p className="topics-label">WHAT YOU'LL EXPLORE</p>
      <ul className="topic-list">{course.topics.map((topic) => <li key={topic}><span>✓</span>{topic}</li>)}</ul>
      <a className="course-link" href={whatsappLink(message)} target="_blank" rel="noreferrer">Enquire about this course <span>↗</span></a>
    </article>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'Stock Market Foundations', message: '' });
  const [notice, setNotice] = useState('');
  const [emailOptions, setEmailOptions] = useState(null);
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const subject = `Course enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.interest}\n\nMessage:\n${form.message || 'Please share more details about the course.'}`;
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailUrl = new URL('https://mail.google.com/mail/');
    gmailUrl.searchParams.set('view', 'cm');
    gmailUrl.searchParams.set('fs', '1');
    gmailUrl.searchParams.set('to', EMAIL);
    gmailUrl.searchParams.set('su', subject);
    gmailUrl.searchParams.set('body', body);

    setEmailOptions({ gmail: gmailUrl.toString(), mailto: mailtoUrl });
    setNotice('Your enquiry is ready. Gmail should open in a new tab. If it does not, use one of the links below. Review the message and press Send.');

    // Open Gmail directly because many browsers do not have a desktop mail app configured.
    // This runs synchronously from the form submit event to reduce popup-blocker issues.
    window.open(gmailUrl.toString(), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Your name<input required name="name" value={form.name} onChange={update} placeholder="Enter your name" autoComplete="name" /></label>
        <label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" /></label>
      </div>
      <label>Course of interest<select name="interest" value={form.interest} onChange={update}><option>Stock Market Foundations</option><option>Technical Analysis</option><option>Risk & Trading Discipline</option><option>Not sure yet</option></select></label>
      <label>Message<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Tell us what you would like to learn..." /></label>
      <button className="button button-primary form-submit" type="submit">Prepare enquiry email <span>↗</span></button>
      <p className="form-note">The form prepares an email but does not send or store your details. You must review and send the message yourself.</p>
      {notice && <p className="form-success" role="status">{notice}</p>}
      {emailOptions && (
        <div className="email-options" aria-label="Email options">
          <a href={emailOptions.gmail} target="_blank" rel="noreferrer">Open Gmail compose ↗</a>
          <a href={emailOptions.mailto}>Open default mail app ↗</a>
        </div>
      )}
    </form>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="hero-pill"><span className="pulse-dot" /> A clearer way to learn the markets</div>
              <p className="eyebrow hero-eyebrow">WELCOME TO TRADEVERSE ACADEMY</p>
              <h1>Understand the market.<br /><span>Build your edge.</span></h1>
              <p className="hero-description">Learn stock market foundations, technical analysis and risk management through a structured, practical learning journey.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#courses">Explore learning tracks <span>↗</span></a>
                <a className="button button-ghost" href="#about"><span className="play-icon">▶</span> Discover TradeVerse</a>
              </div>
              <div className="hero-note"><span>✦</span> Learn with clarity. Practise with discipline.</div>
            </div>
            <div className="hero-visual"><ChartCard /></div>
          </div>
          <div className="hero-bottom container"><span>EDUCATION FIRST</span><span className="hero-bottom-line" /><span>MARKET KNOWLEDGE FOR EVERY LEVEL</span></div>
        </section>

        <section className="pillars-strip" aria-label="Learning principles">
          <div className="container pillars-grid">
            <div><span>01</span><b>Understand</b><small>Build strong foundations</small></div>
            <div><span>02</span><b>Analyse</b><small>Read charts with context</small></div>
            <div><span>03</span><b>Manage risk</b><small>Prioritise discipline</small></div>
            <div><span>04</span><b>Keep learning</b><small>Review and improve</small></div>
          </div>
        </section>

        <section className="about-section section-space" id="about">
          <div className="container about-grid">
            <div className="about-art">
              <div className="about-logo-card"><img src="/tradeverse-logo.png" alt="TradeVerse Academy logo" /><span className="logo-caption">LEARN • ANALYSE • GROW</span></div>
              <div className="about-side-note"><span>TV</span><p>Curiosity is the<br />first investment.</p></div>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="ABOUT TRADEVERSE" title="A stronger foundation for smarter market decisions." align="left" />
              <p>TradeVerse Academy is presented as a learning space for beginners and aspiring market participants. The goal is to make stock market concepts easier to understand and to encourage a thoughtful approach to analysis, planning and risk.</p>
              <p>Instead of focusing on quick predictions, the learning journey is organised around concepts, practical chart reading and responsible decision-making.</p>
              <div className="mission-vision">
                <div><span className="mini-icon">✦</span><div><h3>Our mission</h3><p>Make market education approachable, structured and practical for learners.</p></div></div>
                <div><span className="mini-icon">◎</span><div><h3>Our approach</h3><p>Encourage preparation, patience, risk awareness and continuous learning.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-section section-space" id="courses">
          <div className="container">
            <SectionHeading eyebrow="LEARNING TRACKS" title="Choose where your journey begins." description="Explore the core topics covered by the TradeVerse learning pathway. Contact the academy for current batch details, fees and schedules." />
            <div className="course-grid">{courses.map((course) => <CourseCard key={course.number} course={course} />)}</div>
            <p className="course-disclaimer">Course topics shown here are an outline for enquiry. Confirm the final syllabus, delivery format, duration and fees directly with the academy.</p>
          </div>
        </section>

        <section className="why-section section-space">
          <div className="container">
            <SectionHeading eyebrow="THE TRADEVERSE APPROACH" title="Learn the process, not just the terminology." description="A useful market learning routine connects concepts with preparation, practice and review." />
            <div className="why-grid">
              <article><span className="why-icon">⌖</span><h3>Concept-first learning</h3><p>Start by understanding market structure, terminology and how orders work.</p></article>
              <article><span className="why-icon">▥</span><h3>Chart-reading practice</h3><p>Build familiarity with price structure, candlesticks, volume and common indicators.</p></article>
              <article><span className="why-icon">⬡</span><h3>Risk awareness</h3><p>Consider position size, stop-loss planning and risk–reward before a trade.</p></article>
              <article><span className="why-icon">↻</span><h3>Review and reflection</h3><p>Use notes and a learning journal to review decisions and improve your process.</p></article>
            </div>
          </div>
        </section>

        <section className="learning-section section-space" id="learning">
          <div className="container learning-grid">
            <div><SectionHeading eyebrow="YOUR LEARNING PATH" title="Progress one step at a time." description="A suggested sequence for learners who are starting from the basics." align="left" /><a className="button button-primary" href="#contact">Ask about the learning path <span>↗</span></a></div>
            <div className="timeline">
              <div className="timeline-item"><span>01</span><div><h3>Build the base</h3><p>Learn the market ecosystem, instruments, terminology and order basics.</p></div></div>
              <div className="timeline-item"><span>02</span><div><h3>Read the chart</h3><p>Explore price action, candlesticks, trends, support, resistance and volume.</p></div></div>
              <div className="timeline-item"><span>03</span><div><h3>Plan the risk</h3><p>Understand risk–reward, position sizing concepts and stop-loss planning.</p></div></div>
              <div className="timeline-item"><span>04</span><div><h3>Practise and review</h3><p>Document observations, review decisions and keep improving your routine.</p></div></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-space">
          <div className="container faq-grid">
            <div><SectionHeading eyebrow="COMMON QUESTIONS" title="A few things to know before you begin." description="Need something more specific? Send the academy an enquiry." align="left" /><a className="text-link" href="#contact">Talk to TradeVerse <span>↗</span></a></div>
            <div className="faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}</div>
          </div>
        </section>

        <section className="contact-section section-space" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy"><p className="eyebrow">LET'S START A CONVERSATION</p><h2>Your next step<br /><span>starts with a question.</span></h2><p>Tell us what you want to learn. Reach out to ask about the course outline, upcoming batches and enrolment process.</p>
              <div className="contact-methods">
                <a href={`mailto:${EMAIL}`}><span>✉</span><div><small>EMAIL US</small><b>{EMAIL}</b></div></a>
                <a href={`tel:+${PHONE}`}><span>⌕</span><div><small>CALL THE ACADEMY</small><b>{PHONE_DISPLAY}</b></div></a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer"><span>◉</span><div><small>WHATSAPP</small><b>Chat with TradeVerse</b></div></a>
              </div>
            </div>
            <div className="contact-panel"><div className="contact-panel-heading"><span>COURSE ENQUIRY</span><b>How can we help?</b></div><ContactForm /></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main"><a className="footer-brand" href="#home"><img src="/tradeverse-logo.png" alt="TradeVerse Academy" /></a><p>Learn the market with curiosity, preparation and discipline.</p><div className="footer-links"><a href="#about">About</a><a href="#courses">Courses</a><a href="#learning">Learning path</a><a href="#contact">Contact</a></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} TradeVerse Academy. All rights reserved.</span><span>Educational content only • No guaranteed returns</span></div>
        <p className="container risk-note">Disclaimer: Stock market participation involves risk. This website is for general educational purposes only and does not provide investment, financial, tax or legal advice. Please do your own research and consult a qualified professional before making financial decisions.</p>
      </footer>
      <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with TradeVerse Academy on WhatsApp">◉</a>
    </>
  );
}

export default App;
