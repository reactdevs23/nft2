import Navbar from "components/Navbar/Navbar";
import MainLayout from "Layout/MainLayout";
import BuyNowPage from "pages/BuyNow/BuyNow";
import Discover from "pages/Discover/Discover";
import Home from "pages/Home/Home";
import Nfts from "pages/Nfts/Nfts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/discover" element={<Discover />} />
        </Route>
        <Route path="/buy-now" element={<BuyNowPage />} />
        <Route path="/nfts" element={<Nfts />} />
      </Routes>
    </>
  );
}

export default App;
