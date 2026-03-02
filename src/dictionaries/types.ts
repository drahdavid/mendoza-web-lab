export type Dictionary = {
  common: {
    requestProposal: string;
    chatWhatsApp: string;
  };
  nav: {
    services: string;
    packages: string;
    process: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: { line1: string; line2: string; line3: string; line4: string };
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: {
      design: string;
      seo: string;
      copy: string;
      speed: string;
    };
  };
  problem: {
    label: string;
    title: string;
    subtitle: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    cards: {
      professional: { title: string; desc: string };
      seo: { title: string; desc: string };
      identity: { title: string; desc: string };
      fast: { title: string; desc: string };
      mobile: { title: string; desc: string };
      conversion: { title: string; desc: string };
    };
  };
  packages: {
    label: string;
    title: string;
    subtitle: string;
    forWhom: string;
    viewDemo: string;
    compareTitle: string;
    mostPopular: string;
    cards: {
      start: {
        badge: string;
        title: string;
        audience: string;
        diff: string;
        desc: string;
        price: string;
        delivery: string;
        includes: { text: string; tooltip: string }[];
        excludes: { text: string; tooltip: string }[];
        waText: string;
      };
      pro: {
        badge: string;
        title: string;
        audience: string;
        diff: string;
        desc: string;
        price: string;
        delivery: string;
        includes: { text: string; tooltip: string }[];
        excludes: { text: string; tooltip: string }[];
        waText: string;
      };
      marcaWeb: {
        badge: string;
        title: string;
        audience: string;
        diff: string;
        desc: string;
        price: string;
        delivery: string;
        includes: { text: string; tooltip: string }[];
        excludes: { text: string; tooltip: string }[];
        waText: string;
      };
    };
    compare: {
      headers: {
        feature: string;
        start: string;
        pro: string;
        marcaWeb: string;
      };
      rows: {
        businessStage: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
        primaryGoal: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
        brandStrategy: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
        websiteStrategy: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
        googlePresence: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
        growthInfrastructure: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
        optimizationDepth: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
        strategicRefinement: {
          label: string;
          start: string;
          pro: string;
          marcaWeb: string;
        };
      };
    };
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: {
      diagnostic: { title: string; desc: string; cta: string };
      proposal: { title: string; desc: string };
      dev: { title: string; desc: string };
      launch: { title: string; desc: string };
    };
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      phoneOptional: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      footnote: string;
    };
    info: {
      title: string;
      whatsapp: string;
      email: string;
      location: string;
    };
  };
  faq: {
    label: string;
    title: string;
    items: {
      time: { q: string; a: string };
      prep: { q: string; a: string };
      domain: { q: string; a: string };
      payment: { q: string; a: string };
      revisions: { q: string; a: string };
      maintenance: { q: string; a: string };
    };
  };
  footer: {
    brand: string;
    description: string;
    location: string;
    navigation: {
      title: string;
      links: {
        services: string;
        packages: string;
        process: string;
        faq: string;
      };
    };
    contact: { title: string; writeUs: string };
    rights: string;
    madeWith: string;
  };
};
