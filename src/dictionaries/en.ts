import { Dictionary } from "./types";

export const en: Dictionary = {
  common: {
    requestProposal: "Request Proposal",
    chatWhatsApp: "Chat via WhatsApp",
  },
  nav: {
    services: "Services",
    packages: "Packages",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    title: {
      line1: "More clients start",
      line2: "on Google.",
      line3: "We make sure",
      line4: "they find you.",
    },
    subtitle:
      "We create professional web identity and presence for businesses that want to look better, rank on Google, and generate real inquiries.",
    ctaPrimary: "Request Quote",
    ctaSecondary: "View Services",
    features: {
      design: "Custom Design",
      seo: "Local SEO",
      copy: "Copywriting",
      speed: "Performance",
    },
  },
  problem: {
    label: "The Problem",
    title:
      "Today most people search for services on Google. If your business doesn't appear, those inquiries go to your competition.",
    subtitle:
      "Instagram attracts. The website validates. Your own online presence builds trust and helps capture inquiries from people who are already looking for your service.",
  },
  services: {
    label: "What We Do",
    title: "Real presence. Concrete results.",
    subtitle:
      "Every project includes design, technology, and strategy aimed at generating more inquiries for your business.",
    cards: {
      professional: {
        title: "Professional Presence",
        desc: "Convey trust and seriousness from the first click. Your business deserves to look its best.",
      },
      seo: {
        title: "Visibility on Google",
        desc: "Show up when someone searches for what you offer. Real SEO, not empty promises.",
      },
      identity: {
        title: "Cohesive Identity",
        desc: "Logo, colors, typography, and web forming a unified system. Your brand speaks for itself.",
      },
      fast: {
        title: "Fast & Reliable Web",
        desc: "Loads in seconds, works on any mobile, and never goes down. Modern technology.",
      },
      mobile: {
        title: "Mobile Optimized",
        desc: "Over 80% of your visitors come from a phone. We design mobile-first, always.",
      },
      conversion: {
        title: "Generate Real Inquiries",
        desc: "WhatsApp buttons, forms, and calls to action designed to turn visitors into contacts.",
      },
    },
  },
  packages: {
    label: "Packages",
    title: "Clear options for every stage",
    subtitle:
      "Real reference prices. Each plan has a clear purpose — you can view a demo before deciding.",
    forWhom: "Who is it for?",
    viewDemo: "View demo",
    compareTitle: "Compare features in detail",
    cards: {
      start: {
        badge: "Start Pack",
        title: "Start Presence",
        audience:
          "Entrepreneurs and businesses just starting out who need to exist online without complications.",
        diff: "Be online in less than a week",
        desc: "A minimal identity and a simple but professional website. The first step to being found.",
        price: "From $160 – $190",
        delivery: "Estimated delivery: 5–7 business days",
        includes: [
          {
            text: "Minimalist Logo (1 proposal + 1 revision)",
            tooltip:
              "Initial logo design for your brand, a quick and simple format.",
          },
          {
            text: "Color Palette and Brand Typography",
            tooltip:
              "Defined colors and font styles so your brand looks professional and flawless.",
          },
          {
            text: "1-Page Landing (up to 5 sections)",
            tooltip:
              "A single website structured with all the key information of your business. Ideal for showcasing services quickly.",
          },
          {
            text: "Responsive for mobiles and tablets",
            tooltip:
              "Your website will look perfect and be easy to use from any phone or device.",
          },
          {
            text: "WhatsApp button + location map",
            tooltip:
              "Your clients can contact you directly via WhatsApp with just a click.",
          },
          {
            text: "Basic Hosting + deploy",
            tooltip:
              "We take care of uploading your website to the internet so it's visible, without technical headaches.",
          },
          {
            text: "1 round of revisions",
            tooltip: "A review to adjust details before publishing.",
          },
        ],
        excludes: [
          {
            text: "Advanced SEO",
            tooltip:
              "Deep technical optimization to appear in the top Google results.",
          },
          {
            text: "Complex integrations",
            tooltip:
              "Connections with booking systems, online stores, or enterprise CRMs.",
          },
          {
            text: "Strategic Copywriting",
            tooltip:
              "Writing persuasive texts specifically designed to sell to your ideal client.",
          },
        ],
        waText:
          "Hello Web Lab, I'm interested in the Start Pack (from $160 – $190). I would like more info.",
      },
      pro: {
        badge: "Pro Pack",
        title: "Pro Presence",
        audience:
          "Established businesses that want to look good to attract more clients from Google.",
        diff: "Custom design + Google visibility",
        desc: "The right combination of professional design, basic SEO, and tools to generate inquiries from day one.",
        price: "From $650 – $780",
        delivery: "Estimated delivery: 10–15 business days",
        includes: [
          {
            text: "Complete Branding (logo + basic visual system)",
            tooltip:
              "Logo design and visual elements that breathe life and personality into your brand.",
          },
          {
            text: "Optimized Landing (up to 6 sections)",
            tooltip:
              "Detailed page designed not just to inform, but to convert visitors into clients.",
          },
          {
            text: "100% custom design (no templates)",
            tooltip:
              "Your website will feature a unique design, built from scratch exclusively for your business.",
          },
          {
            text: "Functional contact form",
            tooltip:
              "Your visitors can leave their details or inquiries directly from the website for you to reply instantly.",
          },
          {
            text: "Basic Local SEO (appear in Google)",
            tooltip:
              "Initial configurations so people in your area can find you on Google searches.",
          },
          {
            text: "Google Analytics (know where your clients come from)",
            tooltip:
              "Tool that lets you see how many people visit your website, what they look at, and where they come from.",
          },
          {
            text: "Domain + hosting setup",
            tooltip:
              "We help register your website name (.com or .com.ar) and upload it stress-free.",
          },
          {
            text: "2 rounds of revisions",
            tooltip:
              "Two review instances to get your website exactly how you want it.",
          },
        ],
        excludes: [],
        waText:
          "Hello Web Lab, I'm interested in the Pro Pack (from $650 – $780). I would like more info.",
      },
      marcaWeb: {
        badge: "Brand + Web Pack",
        title: "Professional Brand + Web",
        audience:
          "Brands looking to scale that need a real strategy: more pages, more tools, more presence.",
        diff: "Complete strategy to scale your business",
        desc: "Not just a website. It's an entire digital presence system ready to grow: branding, strategic text, integrations, and technical SEO.",
        price: "From $1,200 – $1,480",
        delivery: "Estimated delivery: 15–25 business days",
        includes: [
          {
            text: "Complete strategic branding + mini brand guide",
            tooltip:
              "We build the entire visual identity of your business, along with a usage manual for the future.",
          },
          {
            text: "4–6 page Website (not just a landing)",
            tooltip:
              "A complete website with separate pages for Home, About Us, Services, Contact, FAQ, etc.",
          },
          {
            text: "Structured Copywriting (words that sell)",
            tooltip:
              "We write your website copy using persuasive techniques to effectively convince and communicate with your clients.",
          },
          {
            text: "Performance optimization (real speed)",
            tooltip:
              "We ensure your website loads super fast, which improves user experience and significantly helps on Google.",
          },
          {
            text: "Initial technical SEO",
            tooltip:
              "Advanced code and semantic tweaks to help Google understand your site better and index it efficiently.",
          },
          {
            text: "Integrations (CRM / Mail / Pixel)",
            tooltip:
              "We connect your website with marketing tools like Facebook Pixel, email systems, or client management software.",
          },
          {
            text: "Analytics + Search Console",
            tooltip:
              "We install complete Google tracking tools to monitor your web traffic, search engine performance, and site health.",
          },
          {
            text: "3 rounds of revisions",
            tooltip: "Three detailed instances of review and refinement.",
          },
        ],
        excludes: [],
        waText:
          "Hello Web Lab, I'm interested in the Brand + Web Pack (from $1,200 – $1,480). I would like more info.",
      },
    },
    compare: {
      headers: {
        feature: "Feature",
        start: "Start",
        pro: "Pro",
        marcaWeb: "Brand + Web",
      },
      rows: {
        logo: {
          label: "Logo Included",
          start: "Minimalist",
          pro: "Complete",
          marcaWeb: "Strategic",
        },
        design: {
          label: "Custom Design",
          start: "—",
          pro: "✓",
          marcaWeb: "✓",
        },
        pages: {
          label: "Pages",
          start: "1 (landing)",
          pro: "1 (full landing)",
          marcaWeb: "4–6 pages",
        },
        seo: {
          label: "Google SEO",
          start: "—",
          pro: "Basic",
          marcaWeb: "Technical",
        },
        analytics: {
          label: "Analytics",
          start: "—",
          pro: "✓",
          marcaWeb: "✓ + Search Console",
        },
        copy: {
          label: "Copywriting",
          start: "—",
          pro: "—",
          marcaWeb: "✓",
        },
        integrations: {
          label: "Integrations (CRM/Mail/Pixel)",
          start: "—",
          pro: "—",
          marcaWeb: "✓",
        },
        revisions: {
          label: "Revision Rounds",
          start: "1",
          pro: "2",
          marcaWeb: "3",
        },
      },
    },
  },
  process: {
    label: "Process",
    title: "How we work",
    subtitle:
      "Simple, transparent, and no surprises. You know what stage your project is at every moment.",
    steps: {
      diagnostic: {
        title: "Diagnostic",
        desc: "You fill out a brief form with your business details. No walls of text — just 6 questions that allow us to prepare a real proposal.",
        cta: "Complete Diagnostic",
      },
      proposal: {
        title: "Visual Proposal",
        desc: "We design an identity and web structure proposal. You review it before we write a single line of code.",
      },
      dev: {
        title: "Development",
        desc: "We build your site with modern, fast, and reliable technology. We keep you informed at all times.",
      },
      launch: {
        title: "Launch",
        desc: "We publish your website, set up the domain, and configure analytics. We hand everything over ready to receive clients.",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Your business should look as professional as it truly is.",
    subtitle:
      "Tell us about your project and we’ll get back to you within 24 hours. No commitment, no hassle.",
    form: {
      name: "Your Name",
      namePlaceholder: "E.g. John Doe",
      email: "Corporate / Personal Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone (WhatsApp)",
      phonePlaceholder: "+1 234 567 8900",
      phoneOptional: "(optional)",
      message: "What is your project about?",
      messagePlaceholder:
        "Tell us briefly what you do and what you are looking for...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "An error occurred. Try again.",
      footnote:
        "You can also write to us directly on WhatsApp. No spam, promised.",
    },
    info: {
      title: "Let's talk today",
      whatsapp: "Direct Chat",
      email: "Email Us",
      location: "Location",
    },
  },
  faq: {
    label: "Frequently Asked Questions",
    title: "Everything you want to know",
    items: {
      time: {
        q: "How long does it take for my website to be ready?",
        a: "It depends on the package: the Start pack takes 5-7 days, Pro 10-15 days, and Brand + Web 15-25 days. Timeframes start when we receive all the necessary business info from you.",
      },
      prep: {
        q: "What do I need to have ready to start?",
        a: "Basically: your business details, photos (or we can guide you to get them), and an idea of what you want to communicate. We handle the rest.",
      },
      domain: {
        q: "Is the domain name (.com / .com.ar) included?",
        a: "Domain registration is an additional cost paid directly to the provider (approx. USD 10–15/year). We'll guide you through the process.",
      },
      payment: {
        q: "Can I pay in installments?",
        a: "Yes. We work with a 50% down-payment to get started, and the rest upon delivery. For larger projects, we can arrange a 3-installment plan.",
      },
      revisions: {
        q: "What exactly does a 'round of revisions' include?",
        a: "It's a review instance where you can ask for tweaks on the existing design or layout (texts, colors, section order). It does not include a total redesign or creating new sections.",
      },
      maintenance: {
        q: "What happens after the launch? Who maintains the website?",
        a: "We offer a Monthly Maintenance Plan starting at $70/month which includes hosting, bug fixes, minor updates, and monitoring. If you prefer to manage it yourself, we hand it over fully documented.",
      },
    },
  },
  footer: {
    brand: "Web Lab",
    description: "Professional web presence for businesses nationwide.",
    location: "Mendoza, Argentina 🇦🇷",
    navigation: {
      title: "Navigation",
      links: {
        services: "Services",
        packages: "Packages",
        process: "How we work",
        faq: "FAQ",
      },
    },
    contact: { title: "Contact", writeUs: "Write us" },
    rights: "Web Lab. All rights reserved.",
    madeWith: "Made with ❤ in Mendoza, Argentina.",
  },
};
