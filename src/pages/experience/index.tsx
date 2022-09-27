import React from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Experience from "../../containers/Experience";
import "./Experience.css";
import { experience } from "../../portfolio";
import { Theme } from "../../types";


type Props = {
  theme: Theme;
};

const ExperiencePage: React.FC<Props> = ({ theme }) => {
  return (
    <div className="experience-main">
      <Header theme={theme} />
      <Experience
        experiences={experience["experiences"]}
        theme={theme}
      />
      <TopButton theme={theme} />
    </div>
  );
};

export default ExperiencePage;
