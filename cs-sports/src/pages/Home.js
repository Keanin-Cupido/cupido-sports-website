import Header_top from '../components/sections/Header-top';
import Header_bottom from '../components/sections/Header-bottom';
import Banner from '../components/sections/Banner';
import Filler_Section from '../components/sections/Filler_Section';
import About_Section from '../components/sections/About_Section';
import Section_noname from '../components/sections/Section_noname';
import Testimonial_Section from '../components/sections/Testimonial_Section';
import Footer from '../components/sections/Footer';
import Featured_Players from '../components/sections/Featured-Players';
import Showreels_Section from '../components/sections/Showreels_Section';

function Home() {
  return (
      <main>
          <Header_top/>
          <Header_bottom />
          <Banner />
          <About_Section />
          <Filler_Section />
          <Section_noname />
          <Testimonial_Section />
          <Featured_Players />
          <Showreels_Section />
          <Footer />
      </main>
  );
}

export default Home;
