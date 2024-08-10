import Creativity from "components/Home/Creativity/Creativity";
import HeroSection from "components/Home/HeroSection/HeroSection";
import Spotlight from "components/Home/Spotlight/Spotlight";
import classes from "./Home.module.css";
import Download from "components/Home/Download/Download";
import clsx from "clsx";
import NewsLetter from "components/Home/NewsLetter/NewsLetter";
import Footer from "components/Home/Footer/Footer";

import CuratedCollections from "components/Home/CuratedCollections/CuratedCollections";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Spotlight />
      <Creativity />

      <div className={classes.wrapper}>
        <div className={clsx(classes.downloadAndNewsLetter, "container")}>
          <Download />

          <NewsLetter />
        </div>
      </div>
      <Footer />
      <CuratedCollections />
    </>
  );
};

export default Home;
