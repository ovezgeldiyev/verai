import { arrowRight } from "base/SVG";
import React from "react";
import logo1 from "assets/images/companies/1.png";
import logo2 from "assets/images/companies/2.png";
import logo3 from "assets/images/companies/3.png";
import logo4 from "assets/images/companies/4.png";
import logo5 from "assets/images/companies/5.png";

export default function Companies() {
  return (
    <section className="companies">
      <div className="auto__container">
        <div className="companies__inner">
          <div className="companies__inner-title">
            <h2>
              Companies we <br />
              Worked in
            </h2>
          </div>
          <div className="companies__inner-row">
            <div className="companiesItem">
              <img src={logo1} alt="" />
            </div>
            <div className="companiesItem">
              <img src={logo2} alt="" />
            </div>
            <div className="companiesItem">
              <img src={logo3} alt="" />
            </div>
            <div className="companiesItem">
              <img src={logo4} alt="" />
            </div>
            <div className="companiesItem">
              <img src={logo5} alt="" />
            </div>
          </div>
          <div className="companies__inner-text">
            <p>
              VerAI supports the training and deployment of autonomous AI agents
              capable of decision-making, task automation, and real-time
              adaptation. From chatbots to trading bots, VerAI enables
              developers to build and monetize agents for various industries
            </p>
          </div>
          <div className="companies__inner-buttons">
            <a href="#" className="button primary">
              Join as a Contributor
            </a>
            <a href="#" className="button solid">
              Join as a Developers
            </a>
            <a href="#" className="explore">
              Explore WP
              {arrowRight}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
