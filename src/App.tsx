import { useEffect, useState } from 'react';
import Navbar from './Scenes/Navbar';
import Home from './Scenes/home';
import Benefits from './Scenes/benefits';
import OurClasses from './Scenes/ourClasses';
import ContactUs from './Scenes/contactUs';
import { SelectedPage } from './shared/types';
import Footer from './Scenes/footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    document.title = 'Evo Gym';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />

      <Benefits setSelectedPage={setSelectedPage} />

      <OurClasses setSelectedPage={setSelectedPage} />

      <ContactUs setSelectedPage={setSelectedPage} />

      <Footer />
    </div>
  );
}

export default App;
