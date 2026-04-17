import React from "react";
import circle from "assets/images/features/circle.png";
import { arrowRight, checkIcon } from "base/SVG";

export default function Features() {
  return (
    <section className="features">
      <div className="auto__container">
        <div className="features__inner">
          <div className="features__inner-circle">
            <img src={circle} alt="" />
          </div>
          <div className="features__inner-content">
            <div className="features__inner-title">
              <h6>Why Choose VerAI?</h6>
              <h2>Key Features</h2>
            </div>
            <ul className="features__inner-list">
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>Decentralized AI Training</b>
                  Harness a global network of GPU/CPU resources with{" "}
                  <strong>Proof-of-Compute validation</strong> for
                  cost-effective, scalable model training. Optimize deep
                  learning workflows without relying on centralized providers
                </p>
              </li>
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>Secure Data Marketplace</b>
                  Trade datasets with{" "}
                  <strong>
                    blockchain-backed ownership and zero-knowledge proof
                    security.{" "}
                  </strong>
                  VerAI ensures data integrity, privacy, and compliance for
                  sensitive industries like healthcare and finance..
                </p>
              </li>
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>AI-as-a-Service</b>
                  Deploy pre-trained models and APIs via{" "}
                  <strong>RESTful or GraphQL</strong> interfaces, enabling
                  seamless integration for NLP, computer vision, and
                  recommendation systems.
                </p>
              </li>
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>Scalable AI Agents </b>
                  Train, deploy, and monetize autonomous agents optimized for
                  real-world tasks, from customer service to supply chain
                  automation
                </p>
              </li>
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>$VER Token Economy</b>
                  Power the ecosystem with tokenized incentives, staking
                  mechanisms, and governance participation.
                </p>
              </li>
            </ul>
            <div className="features__inner-foot">
              <a href="https://verais-organization.gitbook.io/verai" target="_blank" className="button secondary">
                Explore Advantage
                {arrowRight}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
