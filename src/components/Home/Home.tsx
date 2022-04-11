import React from "react";
import Carousel from "../Carousel/Carousel";
import MainSlider from "../MainSlider/MainSlider";
import Navigation from "../Navigation/Navigation";
import TopBrands from "../TopBrands/TopBrands";

function Home() {
  return (
    <>
      <Navigation />
      <MainSlider />
      <TopBrands />
      {/* <Carousel /> */}
    </>
  );
}

export default Home;
