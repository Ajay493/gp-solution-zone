export type Locale = "en" | "hi";

export type Translation = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    knowledge: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    practiceAreas: string[];
    cardKnowledgeTitle: string;
    cardKnowledgeSubtitle: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    points: string[];
    advocate: string;
    designation: string;
    experience: string;
    practiceLabel: string;
    locationLabel: string;
    firmLabel: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  knowledge: {
    label: string;
    title: string;
    subtitle: string;
    definition: string;
    requirementsLabel: string;
    methods: {
      title: string;
      description: string;
      requirements: string[];
      color: string;
    }[];
    remember: {
      title: string;
      points: string[];
    };
    quote: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    whatsapp: string;
    hours: string;
    hoursValue: string;
    formName: string;
    formPhone: string;
    formMessage: string;
    formDefaultMessage: string;
    formSubmit: string;
    mapTitle: string;
    mapLink: string;
  };
  footer: {
    tagline: string;
    disclaimer: string;
    rights: string;
  };
};
