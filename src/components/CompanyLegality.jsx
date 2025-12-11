import kemendag from '../assets/kemendag.png';
import kemenperin from '../assets/kemenperin.png';
import kominfo from '../assets/kominfo.png';

const CompanyLegality = () => {
  return (
    <div className="px-6 py-3 space-y-4 text-center">
      <p className="text-[8px]">Berizin & Diawasi oleh :</p>
      <div className="flex flex-wrap justify-center gap-4 px-4 grayscale opacity-50">
        <img src={kemendag} className="h-8 w-auto" alt="Kementerian Perdagangan" />
        <img src={kominfo} className="h-8 w-auto" alt="Kementerian Komunikasi dan Informatika" />
        <img src={kemenperin} className="h-8 w-auto" alt="Kementerian Perindustrian" />
      </div>
    </div>
  );
};

export default CompanyLegality;
