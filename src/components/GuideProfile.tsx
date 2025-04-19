import { guideInfo } from "@/data/guide-info";
import { translations, Language } from "@/data/translations";
import { Phone, Instagram } from "lucide-react";
import ServiceCard from './ServiceCard';

interface GuideProfileProps {
  currentLang: Language;
}

const GuideProfile = ({ currentLang }: GuideProfileProps) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(translations[currentLang].whatsappMsg);
    window.open(`https://wa.me/${guideInfo.whatsapp.replace(/\+/g, '')}?text=${message}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-8 border border-amber-100">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
          <span className="text-3xl text-white font-bold">
            {guideInfo.name.charAt(0)}
          </span>
        </div>
        
        <h1 className="text-3xl font-bold mb-2 text-amber-900 text-center">{guideInfo.name}</h1>
        <h2 className="text-xl text-amber-700 mb-4">{guideInfo.title}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">{guideInfo.bio[currentLang]}</p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a 
            href={`tel:${guideInfo.phone}`} 
            className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors shadow-sm"
          >
            <Phone className="w-5 h-5" />
            {guideInfo.phone}
          </a>
          <a 
            href={`https://instagram.com/${guideInfo.instagram.replace('@', '')}`} 
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
          >
            <Instagram className="w-5 h-5" />
            {guideInfo.instagram}
          </a>
          <button 
            onClick={openWhatsApp} 
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.145.567 4.156 1.555 5.897L.052 24l6.103-1.504C7.896 23.467 9.907 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.634-.506-5.156-1.379l-3.692.97.978-3.692C2.506 15.634 2 13.882 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.782-7.196c-.317-.887-1.647-1.624-2.299-1.837-.652-.213-1.498-.241-2.129-.156-.63.085-1.384.442-1.795.833-.411.391-.435.442-.669 1.083-.234.641.319 1.384.833 2.026.515.642 2.889 1.647 2.889 1.647s-.714.74-1.083.987c-.37.247-1.334.078-2.052-.156-.719-.234-2.026-1.083-3.031-2.105s-2-2.417-2.495-3.5c-.495-1.083-.574-2.021-.327-2.781.248-.76.85-1.474 1.186-1.81.337-.337.887-.708 1.147-.76.26-.052.469.104.599.26.13.156.442.678.573.912.13.234.26.469.156.677-.104.209-.39.39-.599.573-.208.183-.467.365-.546.573-.078.209.052.443.13.573.079.13.703 1.512 1.46 2.257.755.744 1.93 1.46 2.364 1.512.435.052.677-.052.938-.26.26-.209.52-.547.781-.807.26-.26.337-.26.625-.182.287.078 1.778.86 2.078 1.016.3.156.495.234.573.364.078.13.078.729-.239 1.616z"/>
            </svg>
            WhatsApp
          </button>
        </div>

        <div className="border-t border-amber-100 pt-6">
          <h3 className="text-2xl font-semibold mb-6 text-amber-900">{translations[currentLang].services}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideInfo.services[currentLang].map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                imageUrl={service.image}
                currentLang={currentLang}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
