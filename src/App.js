import Navbar from "components/Navbar/Navbar";
import BuyNowPage from "pages/BuyNow/BuyNow";
import Discover from "pages/Discover/Discover";
import Home from "pages/Home/Home";
import Nfts from "pages/Nfts/Nfts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Discover />} />
      </Routes>
    </>
  );
}

export default App;
