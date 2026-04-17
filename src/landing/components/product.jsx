import React from "react";
import image from "assets/images/product/looper.svg";
import logo from "assets/images/logo.png";
import { arrowRight } from "base/SVG";

export default function Product() {
  return (
    <section className="product">
      <div className="auto__container">
        <div className="product__inner">
          <div className="product__inner-content">
            <div className="product__inner-title">
              <h6>The Platform for Decentralized AI</h6>
              <h2>
                What is{" "}
                <span>
                  <img src={logo} alt="" />
                </span>
              </h2>
              <p>
                VerAI leverages blockchain technology to create a decentralized
                ecosystem for AI development. From training AI models to
                deploying scalable AI agents, VerAI empowers contributors and
                developers to collaborate seamlessly. By integrating secure data
                sharing, affordable computational power, and tokenized
                incentives, we are shaping the future of AI.
              </p>
            </div>
            <div className="product__inner-buttons">
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
          <div className="product__inner-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
