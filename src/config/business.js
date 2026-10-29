/**
 * ============================================================
 *  LOTEY AUTOCAD — CENTRAL BUSINESS CONFIGURATION
 *  Edit this file to update all contact details, services,
 *  hours, social links, and WhatsApp number site-wide.
 * ============================================================
 */

export const BUSINESS = {
  name: "Lotey Autocad",
  tagline: "Your Car Deserves the Best.",
  description:
    "Premium automotive repair, detailing, and maintenance services. We treat every vehicle with expert care and precision.",

  // ── CONTACT ─────────────────────────────────────────────────
  // REPLACE with your verified phone number (include country code for tel:)
  phone: "+91-9815826620",       // e.g. "+919876543210"
  phoneDisplay: "+91 9877903946",

  // REPLACE with the actual WhatsApp number (digits only, with country code)
  whatsapp: "9877903946",      // e.g. "919876543210"

  // REPLACE with your actual address
  address: "Shop No. X, Your Street, Locality",
  city: "Your City",
  state: "Your State",
  pincode: "148021",

  // Google Maps embed / directions URL — REPLACE or remove
  mapsLink: "https://maps.google.com/?q=Lotey+Autocad",

  // ── HOURS ───────────────────────────────────────────────────
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],

  // ── SOCIAL LINKS ────────────────────────────────────────────
  // Set to null / remove if not applicable
  social: {
    instagram: null,   // "https://instagram.com/YOUR_HANDLE"
    facebook: null,   // "https://facebook.com/YOUR_PAGE"
    youtube: null,   // "https://youtube.com/YOUR_CHANNEL"
  },

  // ── EMAIL ───────────────────────────────────────────────────
  email: null,         // "youremail@example.com"
};

/**
 * ============================================================
 *  SERVICES CONFIGURATION
 *  Add, remove, or edit services below.
 *  Set  enabled: false  to hide a service without deleting it.
 * ============================================================
 */
export const SERVICES = [
  {
    id: "repair",
    enabled: true,
    icon: "Wrench",
    title: "Car Repair & Mechanical",
    shortDesc: "Comprehensive engine, brake, suspension, and mechanical repair handled by skilled technicians.",
    longDesc:
      "From minor fixes to major overhauls, our certified mechanics diagnose and resolve engine issues, brake problems, suspension faults, and more — restoring your vehicle to peak condition.",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80",
  },
  {
    id: "wash",
    enabled: true,
    icon: "Droplets",
    title: "Car Washing & Foam Wash",
    shortDesc: "Deep exterior cleaning with premium foam and hand-wash techniques that protect your paint.",
    longDesc:
      "Our foam wash service uses pH-balanced shampoos and soft mitts to lift dirt safely, leaving your car spotless without micro-scratches. Available as a quick wash or full exterior treatment.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
  },
  {
    id: "detailing",
    enabled: true,
    icon: "Sparkles",
    title: "Interior Cleaning & Detailing",
    shortDesc: "Complete interior refresh — vacuuming, steam cleaning, leather conditioning, and odour removal.",
    longDesc:
      "We deep-clean every surface inside your vehicle: carpets, upholstery, dashboard, door panels, and vents. Steam sanitisation eliminates bacteria and odours for a showroom-fresh cabin.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "polish",
    enabled: true,
    icon: "Shield",
    title: "Car Polishing & Paint Care",
    shortDesc: "Machine polishing, scratch removal, and paint protection to restore your car's original shine.",
    longDesc:
      "Our polishing service removes oxidation, light scratches, and swirl marks using dual-action machine polishers and professional-grade compounds, followed by a sealant or wax for lasting protection.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80",
  },
  {
    id: "servicing",
    enabled: true,
    icon: "Settings",
    title: "General Car Servicing",
    shortDesc: "Scheduled oil changes, filter replacement, fluid checks, and full health inspections.",
    longDesc:
      "Keep your vehicle running efficiently with our comprehensive service packages — including engine oil change, air and oil filter replacement, tyre pressure check, and a multi-point safety inspection.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
  },
  {
    id: "battery",
    enabled: true,
    icon: "Battery",
    title: "Battery & Diagnostic Services",
    shortDesc: "Professional battery testing, replacement, and computerised diagnostic scanning.",
    longDesc:
      "We use advanced OBD diagnostic tools to read fault codes and identify electrical issues. Battery health testing and fast replacement service available for all major vehicle brands.",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
  },
];

/**
 * ============================================================
 *  FAQs — Edit or remove questions as needed
 * ============================================================
 */
export const FAQS = [
  {
    q: "Do I need to book in advance?",
    a: "Walk-ins are welcome, but prior booking through WhatsApp or phone is recommended, especially on weekends, to guarantee a slot.",
  },
  {
    q: "How long does a full car wash take?",
    a: "A standard exterior foam wash typically takes 30–45 minutes. Full interior + exterior detailing can take 2–4 hours depending on vehicle size.",
  },
  {
    q: "What car brands do you service?",
    a: "We work on all major passenger car brands. Contact us if you have a question about a specific model.",
  },
  {
    q: "Do you provide pickup and drop service?",
    a: "Please contact us directly to check pickup/drop availability in your area.",
  },
  {
    q: "Are the products you use safe for my car's paint?",
    a: "Yes. We use professional-grade, pH-balanced cleaning agents and soft tools that are safe for all paint types.",
  },
];
