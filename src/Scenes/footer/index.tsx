import Logo from '@/assets/Logo.png';
import { MapPinIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Welcome to EvoGym, your premier destination for a healthier and more
            active lifestyle. We are committed to providing top-notch fitness
            solutions tailored to your needs. Join us on this journey to a
            better you!
          </p>
          <p>© 2022 EvoGym. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">Explore Our Classes</p>
          <p className="my-5">Membership Plans</p>
          <p>Contact Us</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 flex items-start justify-center gap-3">
            <MapPinIcon className="h-7 w-7" />
            Africa Avenue / Bole Road, Addis Ababa, Ethiopia
          </p>
          <p className="flex items-start justify-center gap-3">
            <PhoneArrowDownLeftIcon className="mt-1 h-4 w-4" />
            +251 11 3870321 / +251 11 6533884
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
