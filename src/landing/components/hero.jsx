import { arrowRight } from "base/SVG";
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__shape"></div>
      </div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-title">
            <h1>
              Shared Computing Power for <span> AI </span>
              Development & Deployment
            </h1>
            <p className="big">
              Connect <span>Developers</span> & <span>Contributors</span> in a
              decentralized ecosystem <br /> to accelerate AI training, share
              resources, and Earn Rewards.
            </p>
          </div>
          <div className="hero__inner-buttons">
            <a href="https://forms.gle/z1L3PcJkTTELpWJ9A" target="_blank" className="button primary">
              Join as a Contributor
            </a>
            <a href="https://forms.gle/C7B7yCbUNydHoj7N7" target="_blank" className="button solid">
              Join as a Developers
            </a>
          </div>
          <a href="https://verais-organization.gitbook.io/verai" target="_blank" className="explore">
            Explore WP
            {arrowRight}
          </a>
        </div>
      </div>
    </section>
  );
}
