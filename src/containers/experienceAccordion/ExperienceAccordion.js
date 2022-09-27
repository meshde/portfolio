import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { Fade } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.experiences.map((experience) => {
          return (
            <Fade bottom>
              {" "}
              <ExperienceCard experience={experience} theme={theme} />
            </Fade>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
