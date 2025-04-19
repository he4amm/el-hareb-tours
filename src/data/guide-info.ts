
import { translations } from "./translations";

export const guideInfo = {
  name: "Ahmed Hassan",
  title: "Luxor Tourism Guide",
  bio: {
    en: "Professional tour guide with 10+ years of experience in Luxor's historical sites. Expert in Egyptian history and culture.",
    ar: "مرشد سياحي محترف مع أكثر من 10 سنوات من الخبرة في المواقع التاريخية في الأقصر. خبير في التاريخ والثقافة المصرية.",
    fr: "Guide touristique professionnel avec plus de 10 ans d'expérience des sites historiques de Louxor. Expert en histoire et culture égyptienne.",
    zh: "拥有10年以上卢克索历史遗址导游经验的专业导游。埃及历史文化专家。",
    es: "Guía turístico profesional con más de 10 años de experiencia en sitios históricos de Luxor. Experto en historia y cultura egipcia.",
    pt: "Guia turístico profissional com mais de 10 anos de experiência nos sítios históricos de Luxor. Especialista em história e cultura egípcia.",
    de: "Professioneller Reiseführer mit über 10 Jahren Erfahrung an den historischen Stätten von Luxor. Experte für ägyptische Geschichte und Kultur.",
    hi: "लक्सर के ऐतिहासिक स्थलों में 10+ वर्षों के अनुभव के साथ पेशेवर टूर गाइड। मिस्र के इतिहास और संस्कृति में विशेषज्ञ।"
  },
  phone: "+20 123 456 789",
  whatsapp: "+201234567890",
  instagram: "@luxor_guide_ahmed",
  services: {
    en: [
      "Private Tours of Luxor Temple",
      "Valley of the Kings Guided Tours",
      "Karnak Temple Complex Tours",
      "Nile River Sunset Tours",
      "Custom Historical Tours"
    ],
    ar: [
      "جولات خاصة في معبد الأقصر",
      "جولات وادي الملوك",
      "جولات مجمع معبد الكرنك",
      "جولات غروب الشمس في النيل",
      "جولات تاريخية مخصصة"
    ],
    fr: [
      "Visites privées du temple de Louxor",
      "Visites guidées de la Vallée des Rois",
      "Visites du complexe du temple de Karnak",
      "Croisières au coucher du soleil sur le Nil",
      "Visites historiques personnalisées"
    ],
    zh: [
      "卢克索神庙私人导览",
      "帝王谷导览游",
      "卡纳克神庙群游览",
      "尼罗河日落游船",
      "定制历史游览"
    ],
    es: [
      "Tours privados del Templo de Luxor",
      "Tours guiados al Valle de los Reyes",
      "Tours del Complejo del Templo de Karnak",
      "Tours del atardecer en el Nilo",
      "Tours históricos personalizados"
    ],
    pt: [
      "Tours privados do Templo de Luxor",
      "Tours guiados ao Vale dos Reis",
      "Tours do Complexo do Templo de Karnak",
      "Tours do pôr do sol no Nilo",
      "Tours históricos personalizados"
    ],
    de: [
      "Private Führungen durch den Luxor-Tempel",
      "Geführte Touren durchs Tal der Könige",
      "Karnak-Tempelkomplex Führungen",
      "Nil-Sonnenuntergang-Touren",
      "Individuelle historische Führungen"
    ],
    hi: [
      "लक्सर मंदिर की निजी यात्राएं",
      "किंग्स वैली की गाइडेड टूर",
      "कारनक मंदिर परिसर की यात्राएं",
      "नील नदी सूर्यास्त यात्राएं",
      "कस्टम ऐतिहासिक यात्राएं"
    ]
  }
} as const;

export type Language = keyof typeof translations;
