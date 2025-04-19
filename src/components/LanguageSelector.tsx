
import { Language, translations } from "@/data/translations";
import { Languages } from "lucide-react";

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSelector = ({ currentLang, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 z-10">
      <Languages className="w-5 h-5 text-amber-700" />
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm border border-amber-200 text-amber-900 font-medium hover:border-amber-300 transition-colors cursor-pointer"
      >
        {(Object.keys(translations) as Language[]).map((lang) => (
          <option key={lang} value={lang}>
            {translations[lang].languageName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
