import React from "react";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import DynamicSection from "../components/Home/DynamicSection";

const Home = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <DynamicSection title="Section 3" />
      <DynamicSection title="Section 4" />
      <DynamicSection
        title="Section 5"
        content="This is the content for section 5"
      />
      <DynamicSection title="Section 6" />
      <DynamicSection title="Section 7" />
      <DynamicSection title="Section 8" />
    </>
  );
};

export default Home;
