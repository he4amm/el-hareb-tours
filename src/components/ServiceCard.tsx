
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { guideInfo } from "@/data/guide-info";
import { Language } from "@/data/translations";
import { toast } from "@/components/ui/sonner";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  currentLang: Language;
}

const ServiceCard = ({ title, imageUrl, currentLang }: ServiceCardProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`${title} - ${guideInfo.whatsappMsg[currentLang]}`);
    window.open(`https://wa.me/${guideInfo.whatsapp.replace(/\+/g, '')}?text=${message}`);
    
    // Show a toast notification
    toast.success(`WhatsApp message prepared for ${title}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl text-amber-900">{title}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-emerald-600 hover:bg-emerald-700"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.145.567 4.156 1.555 5.897L.052 24l6.103-1.504C7.896 23.467 9.907 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.634-.506-5.156-1.379l-3.692.97.978-3.692C2.506 15.634 2 13.882 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.782-7.196c-.317-.887-1.647-1.624-2.299-1.837-.652-.213-1.498-.241-2.129-.156-.63.085-1.384.442-1.795.833-.411.391-.435.442-.669 1.083-.234.641.319 1.384.833 2.026.515.642 2.889 1.647 2.889 1.647s-.714.74-1.083.987c-.37.247-1.334.078-2.052-.156-.719-.234-2.026-1.083-3.031-2.105s-2-2.417-2.495-3.5c-.495-1.083-.574-2.021-.327-2.781.248-.76.85-1.474 1.186-1.81.337-.337.887-.708 1.147-.76.26-.052.469.104.599.26.13.156.442.678.573.912.13.234.26.469.156.677-.104.209-.39.39-.599.573-.208.183-.467.365-.546.573-.078.209.052.443.13.573.079.13.703 1.512 1.46 2.257.755.744 1.93 1.46 2.364 1.512.435.052.677-.052.938-.26.26-.209.52-.547.781-.807.26-.26.337-.26.625-.182.287.078 1.778.86 2.078 1.016.3.156.495.234.573.364.078.13.078.729-.239 1.616z"/>
          </svg>
          WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
