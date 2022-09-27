import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <ExperienceAccordion
          experiences={experience["experiences"]}
          theme={theme}
        />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
