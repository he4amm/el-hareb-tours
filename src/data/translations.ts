
export const translations = {
  en: {
    about: "About Me",
    services: "My Services",
    contact: "Contact Me",
    whatsappMsg: "Hello, I'm interested in your services",
    languageSelect: "Select Language",
    languageName: "English"
  },
  ar: {
    about: "عني",
    services: "خدماتي",
    contact: "اتصل بي",
    whatsappMsg: "مرحبا، أنا مهتم بخدماتك",
    languageSelect: "اختر اللغة",
    languageName: "العربية"
  },
  fr: {
    about: "À Propos",
    services: "Mes Services",
    contact: "Contactez-moi",
    whatsappMsg: "Bonjour, je suis intéressé par vos services",
    languageSelect: "Choisir la Langue",
    languageName: "Français"
  },
  zh: {
    about: "关于我",
    services: "我的服务",
    contact: "联系我",
    whatsappMsg: "你好，我对您的服务感兴趣",
    languageSelect: "选择语言",
    languageName: "中文"
  },
  es: {
    about: "Sobre Mí",
    services: "Mis Servicios",
    contact: "Contáctame",
    whatsappMsg: "Hola, estoy interesado en sus servicios",
    languageSelect: "Seleccionar Idioma",
    languageName: "Español"
  },
  pt: {
    about: "Sobre Mim",
    services: "Meus Serviços",
    contact: "Contate-me",
    whatsappMsg: "Olá, estou interessado em seus serviços",
    languageSelect: "Selecionar Idioma",
    languageName: "Português"
  },
  de: {
    about: "Über Mich",
    services: "Meine Dienstleistungen",
    contact: "Kontaktieren Sie Mich",
    whatsappMsg: "Hallo, ich interessiere mich für Ihre Dienstleistungen",
    languageSelect: "Sprache Wählen",
    languageName: "Deutsch"
  },
  hi: {
    about: "मेरे बारे में",
    services: "मेरी सेवाएं",
    contact: "मुझसे संपर्क करें",
    whatsappMsg: "नमस्ते, मैं आपकी सेवाओं में रुचि रखता हूं",
    languageSelect: "भाषा चुनें",
    languageName: "हिंदी"
  }
};

export type Language = keyof typeof translations;
