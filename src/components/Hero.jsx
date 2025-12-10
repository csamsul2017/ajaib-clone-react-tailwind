import stars from '../assets/stars-2.png';
import dash from '../assets/number-1-dash.png';
import hero from '../assets/mobile-hero-home.png';
import googleStore from '../assets/google.png';
import appleStore from '../assets/apple.png';

const Hero = () => {
  return (
    <div className="flex flex-col h-screen -pt-10 bg-blue-50 absolute left-0 px-6">
      <h1 className="text-4xl font-bold text-center px-4 mt-20">
        <span className="relative space-y-4">
          Investasi Nyaman
          <img src={stars} className="absolute h-6 w-auto -right-5 top-11" alt="Stars Symbol" />
          <img src={dash} className="absolute h-1 w-auto -right-7" alt="Dash Symbol" />
        </span>
        <br />
        <span>dalam Genggaman</span>
      </h1>
      <h4 className="text-center my-4">Bergabung bersama lebih dari 5 juta+ pengguna Ajaib untuk mulai investasi saham, reksa dana, obligasi, aset kripto, dan saham Amerika.</h4>
      <img src={hero} className="" alt="Hero Image" />
      <div className="flex justify-center my-8 gap-4">
        <img src={googleStore} className="h-10" alt="Google Play Store" />
        <img src={appleStore} className="h-10" alt="Apple Store" />
      </div>
    </div>
  );
};

export default Hero;
