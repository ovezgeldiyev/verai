import React from "react";
import {
  arrowRight,
  inputsIcon,
  outputsIcon,
  processIcon,
  systemIcon,
} from "base/SVG";

export default function Token() {
  return (
    <section className="about sm">
      <div className="auto__container">
        <div className="about__inner">
          <div className="about__inner-title">
            <h6>$VER Token: The Engine of the VerAI Ecosystem</h6>
            <h2>Token Utility</h2>
            <p>
              The $VER token powers the VerAI ecosystem, enabling payments for
              resources, staking for premium features, and governance
              participation
            </p>
          </div>
          <ul className="about__inner-list">
            <li>
              <span>{inputsIcon}</span>
              <p className="sm">
                <b>Payments: </b>
                Rent resources and access datasets
              </p>
            </li>
            <li>
              <span>{processIcon}</span>
              <p className="sm">
                <b>Rewards: </b>
                Contributors earn $VER for sharing resources.
              </p>
            </li>
            <li>
              <span>{systemIcon}</span>
              <p className="sm">
                <b>Staking: </b>
                Unlock discounts and premium access.
              </p>
            </li>
            <li>
              <span>{outputsIcon}</span>
              <p className="sm">
                <b>Governance: </b>
                Shape the platform’s future via DAO voting.
              </p>
            </li>
          </ul>
          <div className="about__inner-foot">
            <a href="#" className="button secondary">
              Full Tokenomics
              {arrowRight}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
