import { arrowRight } from "base/SVG";
import React from "react";
import image from "assets/images/roles/circles.svg";

export default function Roles() {
  return (
    <section className="roles">
      <div className="auto__container">
        <div className="roles__inner">
          <div className="roles__inner-image">
            <img src={image} alt="" />
          </div>
          <div className="roles__inner-content">
            <div className="roles__inner-title">
              <h6>Roles in the VerAI Ecosystem</h6>
              <h2>
                Contributors vs. <br /> Developers
              </h2>
            </div>
            <div className="roles__inner-text">
              <p className="sm">
                <span>Contributor Role -</span>
                <b>Monetize Your Unused Resources</b> As a contributor, you
                share idle computational power (GPUs/CPUs) or valuable datasets
                with the VerAI network. Your resources help developers train AI
                models efficiently. In return, you earn $VER tokens
                automatically tracked and rewarded via blockchain. It’s an easy
                way to generate passive income while supporting AI innovation.
              </p>
              <p className="sm">
                <span>Developer Role -</span>
                <b>Build, Train, and Deploy Smarter</b> As a contributor, you As
                a developer, you access affordable computational power and
                diverse datasets on VerAI’s decentralized platform. Train AI
                models faster, collaborate transparently using smart contracts,
                and deploy your models as APIs for monetization. VerAI
                simplifies the AI lifecycle, letting you focus on innovation,
                not infrastructure
              </p>
            </div>
            <div className="roles__inner-foot">
              <a
                href="https://forms.gle/z1L3PcJkTTELpWJ9A"
                target="_blank"
                className="button primary"
              >
                Join as a Contributor
              </a>
              <a
                href="https://forms.gle/C7B7yCbUNydHoj7N7"
                target="_blank"
                className="button solid"
              >
                Join as a Developers
              </a>
              <a
                href="https://verais-organization.gitbook.io/verai"
                target="_blank"
                className="explore"
              >
                Explore WP
                {arrowRight}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
