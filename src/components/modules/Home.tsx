import React from "react";
import NavBar from "./NavBar";
import AboveFoldSection from "./AboveFoldSection";
import { useWindowSize } from "src/hooks/useWindowSize";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <NavBar />
      <AboveFoldSection />
    </PageLayout>
  );
};

export default Home;
