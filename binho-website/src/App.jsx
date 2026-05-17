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
const heroImageUrl = "https://i.imgur.com/NchqYvk.png";

export default function App() {
  return (
    <main style={{fontFamily:"Arial, sans-serif", padding:"40px"}}>
      <h1>BinHo – Trash Bin Cleaning</h1>
      <img
        src={heroImageUrl}
        alt="BinHo Hero"
        style={{width:"100%", maxWidth:"700px", borderRadius:"20px"}}
      />
      <p>Professional Trash Bin Cleaning in the Merrimack Valley.</p>
      <p>Call us: {phone}</p>
      <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
        <div>
          <h2>$20</h2>
          <p>Per Bin</p>
        </div>
        <div>
          <h2>$40</h2>
          <p>2 Bins</p>
        </div>
        <div>
          <h2>$15</h2>
          <p>Recurring Monthly</p>
        </div>
      </div>
    </main>
  );
}
