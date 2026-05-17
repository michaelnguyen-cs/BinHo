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
  BadgeCheck,
  Droplets,
} from "lucide-react";

const phone = "978-771-4972";
const cleanPhone = phone.replaceAll("-", "");

// Put your real hero image URL here after uploading it to Framer, Vercel, or /public.
// For now this uses a safe placeholder so the site does not crash.
const heroImageUrl = "https://i.imgur.com/NchqYvk.png";

export default function BinHoLandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#071b33]">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <ServiceAreaContact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <LogoMark small />
          <div className="leading-none">
            <div className="text-3xl font-black italic tracking-tight text-[#071b33]">
              Bin<span className="text-[#63bd20]">Ho</span>
            </div>
            <div className="mt-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#071b33]">
              Trash Bin Cleaning
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-bold text-[#071b33] md:flex">
          <a href="#home" className="hover:text-[#63bd20]">Home</a>
          <a href="#services" className="hover:text-[#63bd20]">Services</a>
          <a href="#pricing" className="hover:text-[#63bd20]">Pricing</a>
          <a href="#about" className="hover:text-[#63bd20]">About Us</a>
          <a href="#faq" className="hover:text-[#63bd20]">FAQ</a>
          <a href="#contact" className="hover:text-[#63bd20]">Contact</a>
        </nav>

        <a
          href={`tel:${cleanPhone}`}
          className="rounded-xl bg-[#63bd20] px-6 py-3 text-sm font-black text-white shadow-lg shadow-lime-600/20 transition hover:bg-[#56a91b]"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#071b33]">
      <div
        className="absolute right-0 top-0 hidden h-full w-[62%] bg-cover bg-center md:block"
        style={{
          backgroundImage: heroImageUrl
            ? `url(${heroImageUrl})`
            : "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #020617 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,51,0.96)_0%,rgba(7,27,51,0.72)_28%,rgba(7,27,51,0.22)_62%,rgba(7,27,51,0)_100%)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,22,43,1)_0%,rgba(4,22,43,0.96)_34%,rgba(4,22,43,0.35)_68%,rgba(4,22,43,0.08)_100%)]" />

      <div className="relative mx-auto grid min-h-[580px] max-w-7xl items-center px-5 py-16 md:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#7bd72b]">
            Merrimack Valley's Premier
          </p>
          <h1 className="text-6xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Trash Bin <br />
            <span className="text-[#63bd20]">Cleaning</span>
          </h1>
          <p className="mt-6 max-w-md text-lg font-medium leading-8 text-white/90">
            We remove grime, eliminate odors, and sanitize your trash bins using high-pressure cleaning.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#63bd20] px-7 py-4 font-black text-white shadow-xl shadow-lime-600/20 transition hover:bg-[#56a91b]"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now<br className="hidden sm:block" /><span className="text-sm"> {phone}</span></span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/70 px-7 py-4 font-black text-white transition hover:bg-white/10"
            >
              <CalendarCheck className="h-5 w-5" /> Get a Quote
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 text-white">
            <HeroBadge icon={BadgeCheck} title="Disinfected" text="Kills 99.9% of bacteria" />
            <HeroBadge icon={Leaf} title="Eco-Friendly" text="Safe for your family & pets" />
            <HeroBadge icon={Sparkles} title="Odor Elimination" text="Leaves bins smelling fresh" />
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-slate-900 md:hidden">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Trash bin pressure washing"
              className="h-[320px] w-full object-cover"
            />
          ) : (
            <div className="flex h-[320px] items-center justify-center p-8 text-center text-white/80">
              Upload your hero image and paste its URL into heroImageUrl.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function HeroBadge({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-1 h-6 w-6 text-[#7bd72b]" />
      <div>
        <p className="text-sm font-black">{title}</p>
        <p className="text-[11px] leading-4 text-white/80">{text}</p>
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
    [Leaf, "Eco-Friendly Cleaning", "Our cleaning products are tough on grime but safe for the environment."],
  ];

  return (
    <section id="services" className="bg-white px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#63bd20]">Our Services</p>
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          {services.map(([Icon, title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-7 text-center shadow-[0_8px_30px_rgba(15,23,42,0.10)] ring-1 ring-slate-100">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-50">
                <Icon className="h-10 w-10 text-[#071b33]" />
              </div>
              <h3 className="mt-5 text-lg font-black leading-tight">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-[#071b33] px-5 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7bd72b]">Simple, Transparent Pricing</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">Affordable & Fair Pricing</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PriceCard title="1 Bin" price="$20" subtitle="Per Bin" image="single" features={["High-pressure wash", "Disinfected", "Odor elimination", "Biodegradable products"]} />
          <PriceCard title="2 Bins" price="$40" subtitle="For 2 Bins" image="double" features={["High-pressure wash", "Disinfected", "Odor elimination", "Biodegradable products"]} />
          <PriceCard featured title="Recurring Service" price="$15" subtitle="Per Bin / Monthly" image="calendar" features={["Recurring monthly service", "Priority scheduling", "Always fresh & clean", "Cancel anytime"]} />
        </div>
      </div>
    </section>
  );
}

function PriceCard({ title, price, subtitle, features, featured = false, image }) {
  return (
    <div className={`relative rounded-2xl p-7 shadow-2xl ${featured ? "border-2 border-[#63bd20] bg-[#071b33] text-white" : "bg-white text-[#071b33]"}`}>
      {featured && (
        <div className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#63bd20] shadow-lg">
          <CalendarCheck className="h-7 w-7 text-white" />
        </div>
      )}
      <div className="flex items-start gap-5">
        <MiniBin type={image} />
        <div>
          <h3 className="text-2xl font-black">{title}</h3>
          <p className="mt-2 text-4xl font-black text-[#63bd20]">{price}</p>
          <p className={`text-lg font-black ${featured ? "text-white" : "text-[#071b33]"}`}>{subtitle}</p>
        </div>
      </div>

      <div className={`my-6 h-px ${featured ? "bg-white/15" : "bg-slate-200"}`} />

      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-semibold">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#63bd20]" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`tel:${cleanPhone}`}
        className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#63bd20] px-6 py-4 font-black text-white transition hover:bg-[#56a91b]"
      >
        {featured ? "Get Started" : "Book Now"}
      </a>
    </div>
  );
}

function ServiceAreaContact() {
  return (
    <>
      <section className="bg-[#071b33] px-5 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#63bd20]">
              <CalendarCheck className="h-10 w-10 text-[#7bd72b]" />
            </div>
            <div>
              <h3 className="text-2xl font-black">Keep your bins clean all year round.</h3>
              <p className="mt-1 text-white/85">Schedule a one-time clean or join our monthly service!</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#7bd72b]">Proudly Serving the Merrimack Valley</h3>
              <p className="mt-2 font-semibold text-white/90">Lawrence, Methuen, Andover, North Andover, Dracut, Lowell, and surrounding areas.</p>
            </div>
            <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#63bd20]/20 md:flex">
              <MapPin className="h-12 w-12 text-[#7bd72b]" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#63bd20]">Get In Touch</p>
            <h2 className="mt-2 text-4xl font-black">We’re Here to Help!</h2>
            <p className="mt-4 max-w-md text-slate-600">Have questions or ready to schedule your cleaning? Contact us today!</p>
            <div className="mt-7 space-y-4">
              <a href={`tel:${cleanPhone}`} className="flex items-center gap-4 font-black">
                <Phone className="h-6 w-6 text-[#63bd20]" /> {phone}
              </a>
              <a href="mailto:info@binhocleaning.com" className="flex items-center gap-4 font-black">
                <Mail className="h-6 w-6 text-[#63bd20]" /> info@binhocleaning.com
              </a>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#63bd20]" placeholder="Name" />
              <input className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#63bd20]" placeholder="Phone Number" />
              <input className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#63bd20] md:col-span-2" placeholder="Email" />
              <textarea className="min-h-28 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#63bd20] md:col-span-2" placeholder="Message" />
              <button type="button" className="rounded-lg bg-[#63bd20] px-5 py-3 text-sm font-black text-white hover:bg-[#56a91b] md:col-span-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071b33] px-5 py-9 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark small />
            <div>
              <div className="text-3xl font-black italic">Bin<span className="text-[#63bd20]">Ho</span></div>
              <div className="text-[10px] font-black uppercase tracking-[0.18em]">Trash Bin Cleaning</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-white/75">Professional bin cleaning service proudly serving the Merrimack Valley.</p>
        </div>

        <div>
          <h4 className="font-black uppercase text-sm">Quick Links</h4>
          <div className="mt-3 grid gap-1 text-sm text-white/80">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase text-sm">Contact Us</h4>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            <p>{phone}</p>
            <p>info@binhocleaning.com</p>
            <p>Merrimack Valley, MA</p>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-center text-xs text-white/60">© 2026 BinHo – Trash Bin Cleaning. All rights reserved.</p>
    </footer>
  );
}

function LogoMark({ small = false }) {
  return (
    <div className={`${small ? "h-14 w-14" : "h-20 w-20"} relative flex shrink-0 items-center justify-center rounded-full bg-white`}>
      <div className="absolute inset-1 rounded-full border-[3px] border-sky-500" />
      <div className="absolute right-1 top-1 h-10 w-10 rounded-full border-r-[5px] border-t-[5px] border-[#63bd20]" />
      <Trash2 className="relative h-8 w-8 text-[#071b33]" />
      <Droplets className="absolute bottom-2 left-2 h-4 w-4 text-sky-500" />
    </div>
  );
}

function TrashCanGraphic({ mobile = false }) {
  return (
    <div className={`${mobile ? "relative mx-auto h-[340px] w-full" : "absolute bottom-0 right-[6%] h-[520px] w-[520px]"}`}>
      <div className="absolute bottom-8 left-1/2 h-16 w-[92%] -translate-x-1/2 rounded-full bg-sky-400/25 blur-xl" />
      <div className="absolute bottom-10 left-1/2 h-14 w-[78%] -translate-x-1/2 rounded-[50%] border-t-4 border-sky-300/70" />
      <div className="absolute bottom-14 left-[18%] h-16 w-44 rounded-full border-t-[10px] border-sky-300/80 rotate-[-12deg]" />
      <div className="absolute bottom-24 right-[8%] h-20 w-48 rounded-full border-t-[9px] border-sky-200/70 rotate-[18deg]" />

      <div className="absolute bottom-[84px] left-[26%] h-[320px] w-[235px] rounded-b-[2.2rem] rounded-t-xl bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 shadow-2xl ring-4 ring-slate-700/70 md:left-[28%]">
        <div className="absolute -top-12 left-1/2 h-14 w-[285px] -translate-x-1/2 rounded-xl bg-gradient-to-b from-slate-700 to-slate-950 shadow-xl ring-4 ring-slate-800" />
        <div className="absolute -top-24 left-1/2 h-10 w-28 -translate-x-1/2 rounded-t-2xl border-[10px] border-slate-950 border-b-0" />
        <div className="absolute left-4 top-8 h-[270px] w-8 rounded-full bg-white/10 blur-sm" />
        <div className="absolute right-4 top-10 h-[240px] w-5 rounded-full bg-black/30 blur-sm" />
        <div className="absolute -bottom-10 left-4 h-16 w-16 rounded-full bg-slate-950 ring-8 ring-slate-800" />
        <div className="absolute -bottom-7 left-7 h-10 w-10 rounded-full bg-slate-700 ring-4 ring-slate-950" />
        <div className="absolute -bottom-10 right-4 h-16 w-16 rounded-full bg-slate-950 ring-8 ring-slate-800" />
        <div className="absolute -bottom-7 right-7 h-10 w-10 rounded-full bg-slate-700 ring-4 ring-slate-950" />
        <div className="absolute left-1/2 top-[96px] w-[180px] -translate-x-1/2 text-center">
          <LogoMark />
          <div className="mt-2 text-5xl font-black italic leading-none text-white drop-shadow-xl">
            Bin<span className="text-[#63bd20]">Ho</span>
          </div>
          <div className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white">Trash Bin Cleaning</div>
        </div>
      </div>

      <div className="absolute right-0 top-20 h-2 w-48 rotate-[20deg] rounded-full bg-white/70" />
      <div className="absolute right-2 top-28 h-2 w-44 rotate-[17deg] rounded-full bg-sky-200/80" />
      <div className="absolute right-5 top-36 h-2 w-40 rotate-[14deg] rounded-full bg-white/70" />
      <div className="absolute right-0 top-12 h-20 w-40 rounded-full border-t-[12px] border-slate-950 rotate-[16deg]" />
    </div>
  );
}

function MiniBin({ type }) {
  if (type === "calendar") {
    return (
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-sky-50">
        <CalendarCheck className="h-12 w-12 text-[#071b33]" />
      </div>
    );
  }

  return (
    <div className="relative h-24 w-24 shrink-0">
      <div className="absolute bottom-2 left-5 h-16 w-11 rounded-b-xl rounded-t-sm bg-gradient-to-r from-slate-950 to-slate-700 shadow-lg" />
      <div className="absolute bottom-[72px] left-3 h-3 w-16 rounded bg-slate-950" />
      <div className="absolute bottom-0 left-6 h-3 w-3 rounded-full bg-slate-950" />
      <div className="absolute bottom-0 left-12 h-3 w-3 rounded-full bg-slate-950" />
      {type === "double" && (
        <>
          <div className="absolute bottom-2 right-0 h-16 w-11 rounded-b-xl rounded-t-sm bg-gradient-to-r from-slate-700 to-slate-500 shadow-lg" />
          <div className="absolute bottom-[72px] right-[-5px] h-3 w-16 rounded bg-[#63bd20]" />
          <div className="absolute bottom-0 right-6 h-3 w-3 rounded-full bg-slate-950" />
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-slate-950" />
        </>
      )}
    </div>
  );
}
