import React from "react";
import { Experience, Theme } from "../../types";

import "./ExperienceCard.css";

type Props = { experience: Experience, theme: Theme; };
const ExperienceCard:React.FC<Props> = ({ experience, theme })=>
    (
      <div className="experience-card">
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assets/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {experience["description"]}
            <ul className="bullet-key">
              {(experience.bulletList || []).map((bullet) => (
                <li>
                  <b>{bullet.key}</b>
                  <ul className="bullet-value">
                    {bullet.value.map((point) => (
                      <li>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    );

export default ExperienceCard;
