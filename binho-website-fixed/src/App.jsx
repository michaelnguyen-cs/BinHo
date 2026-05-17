import React from "react";
import {
  Phone,
  CalendarCheck,
  Recycle,
  ShieldPlus,
  Leaf,
  Sparkles,
  MapPin,
  CheckCircle2,
  Mail,
  Trash2,
  Waves,
  BadgeCheck
} from "lucide-react";

const phone = "978-771-4972";
const heroImageUrl = "https://i.imgur.com/NchqYvk.png";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <ServiceBar />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="brand">
          <div className="brand-mark"><Trash2 size={28} /></div>
          <div>
            <div className="brand-name">Bin<span>Ho</span></div>
            <div className="brand-sub">Trash Bin Cleaning</div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn nav-btn" href={`tel:${phone.replaceAll("-", "")}`}>Book Now</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image" style={{ backgroundImage: `url(${heroImageUrl})` }} />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">Merrimack Valley's Premier</p>
          <h1>Trash Bin <span>Cleaning</span></h1>
          <p className="hero-sub">
            We remove grime, eliminate odors, and sanitize your trash bins using high-pressure cleaning.
          </p>
          <div className="hero-actions">
            <a className="btn" href={`tel:${phone.replaceAll("-", "")}`}>
              <Phone size={22} /> Call Now <small>{phone}</small>
            </a>
            <a className="btn btn-outline" href="#contact">
              <CalendarCheck size={22} /> Get a Quote
            </a>
          </div>
          <div className="badges">
            <Badge icon={BadgeCheck} title="Disinfected" text="Kills 99.9% of bacteria" />
            <Badge icon={Leaf} title="Eco-Friendly" text="Safe for family & pets" />
            <Badge icon={Sparkles} title="Odor Elimination" text="Leaves bins smelling fresh" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, title, text }) {
  return (
    <div className="badge">
      <Icon size={26} />
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    [Trash2, "Trash Bin Cleaning", "We deep clean your trash bins, removing dirt, grime, and bacteria."],
    [Recycle, "Recycling Bin Cleaning", "Thorough cleaning for recycling bins to keep them fresh and sanitary."],
    [Waves, "Odor Elimination", "We eliminate unpleasant odors at the source, leaving bins smelling fresh."],
    [ShieldPlus, "Sanitizing & Disinfecting", "High-pressure cleaning that disinfects and kills harmful bacteria."],
    [Leaf, "Eco-Friendly Cleaning", "Our cleaning products are tough on grime but safe for the environment."]
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <p className="section-eyebrow">Our Services</p>
        <div className="service-grid">
          {services.map(([Icon, title, text]) => (
            <div className="service-card" key={title}>
              <div className="icon-circle"><Icon size={42} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <p className="section-eyebrow">Simple, Transparent Pricing</p>
        <h2>Affordable & Fair Pricing</h2>
        <div className="pricing-grid">
          <PriceCard title="1 Bin" price="$20" subtitle="Per Bin" features={["High-pressure wash", "Disinfected", "Odor elimination", "Biodegradable products"]} />
          <PriceCard title="2 Bins" price="$40" subtitle="For 2 Bins" features={["High-pressure wash", "Disinfected", "Odor elimination", "Biodegradable products"]} />
          <PriceCard dark title="Recurring Service" price="$15" subtitle="Per Bin / Monthly" features={["Recurring monthly service", "Priority scheduling", "Always fresh & clean", "Cancel anytime"]} />
        </div>
      </div>
    </section>
  );
}

function PriceCard({ title, price, subtitle, features, dark }) {
  return (
    <div className={`price-card ${dark ? "dark" : ""}`}>
      {dark && <div className="best">Best Value</div>}
      <h3>{title}</h3>
      <div className="price">{price}</div>
      <p className="subtitle">{subtitle}</p>
      <ul>
        {features.map((f) => (
          <li key={f}><CheckCircle2 size={18} /> {f}</li>
        ))}
      </ul>
      <a className="btn full" href={`tel:${phone.replaceAll("-", "")}`}>{dark ? "Get Started" : "Book Now"}</a>
    </div>
  );
}

function ServiceBar() {
  return (
    <section className="service-bar">
      <div className="container service-bar-inner">
        <div>
          <h3>Keep your bins clean all year round.</h3>
          <p>Schedule a one-time clean or join our monthly service.</p>
        </div>
        <div>
          <h3>Proudly Serving the Merrimack Valley</h3>
          <p>Lawrence, Methuen, Andover, North Andover, Dracut, Lowell, and surrounding areas.</p>
        </div>
        <MapPin size={64} />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <p className="section-eyebrow left">Get In Touch</p>
          <h2>We’re Here to Help!</h2>
          <p>Have questions or ready to schedule your cleaning? Contact us today.</p>
          <a href={`tel:${phone.replaceAll("-", "")}`} className="contact-link"><Phone size={24} /> {phone}</a>
          <a href="mailto:info@binhocleaning.com" className="contact-link"><Mail size={24} /> info@binhocleaning.com</a>
        </div>
        <form className="form">
          <input placeholder="Name" />
          <input placeholder="Phone Number" />
          <input placeholder="Email" className="wide" />
          <textarea placeholder="Message" className="wide" />
          <button type="button" className="btn wide">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <div className="brand-mark"><Trash2 size={28} /></div>
            <div>
              <div className="brand-name white">Bin<span>Ho</span></div>
              <div className="brand-sub white-sub">Trash Bin Cleaning</div>
            </div>
          </div>
          <p>Professional bin cleaning service proudly serving the Merrimack Valley.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>{phone}</p>
          <p>info@binhocleaning.com</p>
          <p>Merrimack Valley, MA</p>
        </div>
      </div>
      <p className="copy">© 2026 BinHo – Trash Bin Cleaning. All rights reserved.</p>
    </footer>
  );
}
