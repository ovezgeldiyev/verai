import { arrowRight, checkIcon } from "base/SVG";
import image from "assets/images/agents/image.png";
import React from "react";

export default function Agents() {
  return (
    <section className="features sm">
      <div className="auto__container">
        <div className="features__inner">
          <div className="features__inner-image">
            <img src={image} alt="" />
          </div>
          <div className="features__inner-content">
            <div className="features__inner-title">
              <h6>The Future of Automation</h6>
              <h2>
                <span>AI</span> Agents
              </h2>
              <p>
                VerAI supports the training and deployment of autonomous AI
                agents capable of decision-making, task automation, and
                real-time adaptation. From chatbots to trading bots, VerAI
                enables developers to build and monetize agents for various
                industries
              </p>
            </div>
            <ul className="features__inner-list">
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>Simulation Environments:</b>
                  Pre-built sandboxes for reinforcement learning.
                </p>
              </li>
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>Dynamic Hosting:</b>
                  Trade datasets with Scalable agent hosting powered by
                  Kubernetes.
                </p>
              </li>
              <li>
                <span>{checkIcon}</span>
                <p className="sm">
                  <b>Continuous Learning Pipelines:</b>
                  Real-time data streaming with Kafka for retraining
                </p>
              </li>
            </ul>
            <div className="features__inner-foot">
              <a href="https://verais-organization.gitbook.io/verai" target="_blank" className="button secondary">
                Whitepaper
                {arrowRight}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
