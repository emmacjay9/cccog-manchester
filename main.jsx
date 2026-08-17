import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import logo from './cccog-logo.jpg'
import pastor from './pastor-columbus.jpg'
import congregation from './congregation.jpg'
import './styles.css'

const PHONE_DISPLAY = '+44 7446 007314'
const PHONE_LINK = 'tel:+447446007314'
const WHATSAPP_DISPLAY = '+234 805 790 3015'
const WHATSAPP_LINK = 'https://wa.me/2348057903015'
const FACEBOOK = 'https://www.facebook.com/cccogimanchester'
const YOUTUBE = 'https://youtube.com/@cccogimanchester'
const MAPS = 'https://www.google.com/maps/search/?api=1&query=43-45+North+Street,+Cheetham+Hill,+Manchester,+M8+8RE'

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Visit Us', '#visit'],
  ['Services', '#services'],
  ['Media', '#media'],
  ['Contact', '#contact'],
]

function Icon({ type }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'pin') return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
  if (type === 'phone') return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.05 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.18 4.18 2 2 0 0 1 4.17 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.96.7 2.88a2 2 0 0 1-.45 2.11L8.15 9.98a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.92.33 1.88.57 2.88.7A2 2 0 0 1 22 16.92Z"/></svg>
  if (type === 'message') return <svg {...common}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>
  if (type === 'play') return <svg {...common}><polygon points="8 5 19 12 8 19 8 5"/></svg>
  if (type === 'arrow') return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
  return null
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = () => setOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Christ's Chosen Church of God Manchester home">
          <img src={logo} alt="Christ's Chosen Church of God International logo" />
          <span className="brand-text">
            <strong>Christ's Chosen Church</strong>
            <small>Manchester Branch</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a className="nav-cta" href="#visit">Plan Your Visit</a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <span></span><span></span><span></span>
        </button>
      </header>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu-top">
            <a className="brand" href="#home" onClick={go}>
              <img src={logo} alt="" />
              <span className="brand-text">
                <strong>Christ's Chosen Church</strong>
                <small>Manchester Branch</small>
              </span>
            </a>
            <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
          </div>
          <nav>
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={go}>{label}</a>)}
          </nav>
          <a className="button button-primary menu-visit" href="#visit" onClick={go}><Icon type="pin"/> Plan Your Visit</a>
        </div>
      )}
    </>
  )
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(5,20,39,.78), rgba(5,20,39,.9)), url(${congregation})` }}>
          <div className="hero-inner">
            <p className="eyebrow">Welcome to</p>
            <h1>Christ's Chosen<br/>Church of God</h1>
            <p className="branch-title">Manchester Branch</p>
            <div className="divider"></div>
            <p className="tagline">The One Big Family Church</p>
            <p className="hero-copy">A place to encounter Christ, grow in faith, and belong to a family.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#visit"><Icon type="pin"/> Plan Your Visit</a>
              <a className="button button-ghost" href={YOUTUBE} target="_blank" rel="noreferrer"><Icon type="play"/> Watch Online</a>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading centered">
            <p className="eyebrow dark">Join us this week</p>
            <h2>Service Times</h2>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <span className="number">01</span>
              <div className="clock">◷</div>
              <h3>Sunday Worship Service</h3>
              <p>Every Sunday</p>
              <strong>10:30 AM</strong>
            </article>
            <article className="service-card">
              <span className="number">02</span>
              <div className="clock">◷</div>
              <h3>Weekday Services</h3>
              <p>Tuesdays & Fridays</p>
              <strong>7:00 PM – 8:00 PM</strong>
            </article>
            <article className="service-card">
              <span className="number">03</span>
              <div className="clock">◷</div>
              <h3>Last Friday Prayer Service</h3>
              <p>Last Friday of every month</p>
              <strong>9:00 PM – 12:00 AM</strong>
            </article>
          </div>
        </section>

        <section id="visit" className="section visit-section">
          <div className="visit-card">
            <div className="round-icon"><Icon type="pin"/></div>
            <div>
              <h2>Christ's Chosen Church of God — Manchester</h2>
              <p>43–45 North Street<br/>Cheetham Hill, Manchester<br/>M8 8RE</p>
              <a className="button button-dark" href={MAPS} target="_blank" rel="noreferrer"><Icon type="arrow"/> Get Directions</a>
            </div>
          </div>
        </section>

        <section id="about" className="section split-section">
          <div className="image-frame">
            <img src={congregation} alt="Members of Christ's Chosen Church of God Manchester gathered together" />
          </div>
          <div className="copy-block">
            <p className="eyebrow dark left">A family for you</p>
            <h2>You Are Welcome Here</h2>
            <p>Whether you are searching for a church family, exploring faith, or looking for somewhere to grow deeper in your walk with God, there is a place for you at Christ's Chosen Church of God Manchester.</p>
            <a className="text-link" href="#visit">Discover Our Church <Icon type="arrow"/></a>
          </div>
        </section>

        <section className="section split-section pastor-section">
          <div className="image-frame">
            <img src={pastor} alt="Pastor Columbus Irabor speaking at Christ's Chosen Church of God Manchester" />
          </div>
          <div className="copy-block">
            <p className="eyebrow dark left">Our leadership</p>
            <h2>Meet Our Branch Pastor</h2>
            <h3>Pastor Columbus Irabor</h3>
            <p>Serving Christ's Chosen Church of God Manchester with a heart for God, people, spiritual growth, and the advancement of the Gospel.</p>
          </div>
        </section>

        <section id="media" className="section media-section">
          <div className="section-heading centered">
            <p className="eyebrow dark">Watch & Listen</p>
            <h2>Grow in the Word</h2>
            <p>Watch our latest sermons, worship services, and teachings.</p>
          </div>
          <a className="media-card" href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="Watch Christ's Chosen Church of God Manchester on YouTube">
            <img src={congregation} alt="" />
            <div className="media-overlay">
              <div className="play-circle"><Icon type="play"/></div>
              <strong>Watch Our Latest Service</strong>
              <span>Watch on YouTube</span>
            </div>
          </a>
          <div className="social-actions">
            <a className="button button-primary" href={YOUTUBE} target="_blank" rel="noreferrer">Watch on YouTube</a>
            <a className="button button-outline" href={FACEBOOK} target="_blank" rel="noreferrer">Follow us on Facebook</a>
          </div>
        </section>

        <section className="visitor-cta">
          <div>
            <p className="eyebrow">First-time visitors</p>
            <h2>We'd Love to<br/>Welcome You</h2>
            <p>Visiting for the first time? Find our location, service times, and everything you need to feel at home before you arrive.</p>
            <a className="button button-primary" href="#visit"><Icon type="pin"/> Plan Your Visit</a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading centered">
            <p className="eyebrow dark">Get in touch</p>
            <h2>Church Enquiries</h2>
            <p>We'd be glad to hear from you.</p>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href={PHONE_LINK}>
              <div className="round-icon"><Icon type="phone"/></div>
              <span>Call Us</span>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            <a className="contact-card" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <div className="round-icon"><Icon type="message"/></div>
              <span>WhatsApp Us</span>
              <strong>{WHATSAPP_DISPLAY}</strong>
            </a>
            <a className="contact-card" href={MAPS} target="_blank" rel="noreferrer">
              <div className="round-icon"><Icon type="pin"/></div>
              <span>Visit Us</span>
              <strong>43–45 North Street, Manchester M8 8RE</strong>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand footer-logo">
              <img src={logo} alt="Christ's Chosen Church of God International logo" />
              <span className="brand-text">
                <strong>Christ's Chosen Church of God International</strong>
                <small>Manchester Branch</small>
              </span>
            </div>
            <p>Manchester Branch — The One Big Family Church. A place to encounter Christ, grow in faith, and belong to a family.</p>
            <div className="footer-social">
              <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div>
            <h3>Visit Us</h3>
            <p>43–45 North Street<br/>Cheetham Hill<br/>Manchester, M8 8RE</p>
          </div>

          <div>
            <h3>Service Times</h3>
            <p>Sunday — 10:30 AM<br/>Tuesday — 7:00 PM<br/>Friday — 7:00 PM</p>
          </div>

          <div>
            <h3>Church Enquiries</h3>
            <p><a href={PHONE_LINK}>Call: {PHONE_DISPLAY}</a><br/><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp: {WHATSAPP_DISPLAY}</a></p>
          </div>

          <div>
            <h3>Explore</h3>
            <p className="footer-links">
              {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            </p>
          </div>
        </div>
        <div className="copyright">© 2026 Christ's Chosen Church of God International — Manchester Branch.</div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
