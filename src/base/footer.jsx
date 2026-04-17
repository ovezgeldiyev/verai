import React from "react";
import logo from "assets/images/logo.png";
import { telegram, twitter } from "./SVG";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg"></div>
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer__inner-row">
            <div className="footerInfo">
              <div className="footerInfo__logo">
                <img src={logo} alt="" />
              </div>
              <p>
                Connect Developers & Contributors in a decentralized ecosystem
                to accelerate AI training, share resources, and Earn Rewards.
              </p>
              <div className="footerInfo__social">
                <a href="https://x.com/VerAI_Agents" target="_blank">
                  {twitter}
                </a>
                <a href="https://t.me/VerAIIntelligence" target="_blank">
                  {telegram}
                </a>
              </div>
            </div>
            <div className="footer__inner-links">
              <a href="#product">Product</a>
              <a href="#features">Features</a>
              <a href="#agents">AI Agents</a>
              <a
                href="https://verais-organization.gitbook.io/verai"
                target="_blank"
              >
                Docs
              </a>
            </div>
          </div>
          <div className="footer__inner-copy">
            <p>verai.io all Rights Reserved 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
