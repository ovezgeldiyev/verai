import React from "react";
import logo from "assets/images/logo.png";
import {
  arrowRight,
  inputsIcon,
  outputsIcon,
  processIcon,
  systemIcon,
} from "base/SVG";

export default function About() {
  return (
    <section className="about">
      <div className="auto__container">
        <div className="about__inner">
          <div className="about__inner-title">
            <h6>The VerAI Workflow</h6>
            <h2>
              How
              <span>
                <img src={logo} alt="" />
              </span>
              Works?
            </h2>
            <p>
              <strong>VerAI </strong>
              enables a decentralized AI ecosystem where contributors provide
              computational power or datasets validated via blockchain.
              Developers rent these resources for model training, with smart
              contracts automating $VER token rewards and tracking
              contributions. Trained models are deployed as APIs or
              integrations, ensuring scalability and monetization efficiency.
            </p>
          </div>
          <ul className="about__inner-list">
            <li>
              <span>{inputsIcon}</span>
              <p className="sm">
                <b>Inputs: </b>
                Contributors share GPUs, CPUs, and datasets
              </p>
            </li>
            <li>
              <span>{processIcon}</span>
              <p className="sm">
                <b>Process: </b>
                Developers rent resources and train AI models
              </p>
            </li>
            <li>
              <span>{systemIcon}</span>
              <p className="sm">
                <b>System: </b>
                Blockchain tracks rewards and ensures transparency
              </p>
            </li>
            <li>
              <span>{outputsIcon}</span>
              <p className="sm">
                <b>Outputs: </b>
                AI models and agents are deployed and monetized
              </p>
            </li>
          </ul>
          <div className="about__inner-foot">
            <a href="#" className="button secondary">
              Learn more
              {arrowRight}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
