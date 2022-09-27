import React from "react";
import ExperienceCard from "../../components/ExperienceCard";
import "./ExperienceAccordion.css";
import { Experience, Theme } from "../../types";
import { Fade } from "react-reveal";

type Props = {
  experiences: Experience[];
  theme: Theme;
};

const ExperienceContainer: React.FC<Props> = ({ experiences, theme }) => (
  <div className="experience-accord">
    {experiences.map((experience) => {
      return (
        <Fade bottom>
          {" "}
          <ExperienceCard experience={experience} theme={theme} />
        </Fade>
      );
    })}
  </div>
);

export default ExperienceContainer;
