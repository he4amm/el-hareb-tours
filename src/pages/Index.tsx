
import { useState } from "react";
import { Language } from "@/data/translations";
import LanguageSelector from "@/components/LanguageSelector";
import GuideProfile from "@/components/GuideProfile";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMzAgMTBMMTAgMzBsMjAgMjBsMjAtMjBMMzAgMTB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNiYThjNjUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-25 pointer-events-none" />
      <LanguageSelector 
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <GuideProfile currentLang={currentLang} />
    </div>
  );
};

export default Index;
