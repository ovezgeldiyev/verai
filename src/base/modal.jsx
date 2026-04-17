import { motion } from "framer-motion";
import ReactDom from "react-dom";
import { closeIcon } from "./SVG";
import fav from "assets/images/fav.png";
export default function Modal({ closeFunc }) {
  return ReactDom.createPortal(
    <motion.div
      className="modal"
      onClick={closeFunc}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal__inner">
        <div className="modal__close" onClick={closeFunc}>
          {closeIcon}
        </div>
        <div className="modal__icon">
          <img src={fav} alt="fav" />
        </div>
        <h6>Early Access App</h6>
        <p>
          Enroll in Early Access for version V.14_9 and enjoy exclusive
          benefits. Access will be limited and follow the schedule below:
        </p>
        <p>
          March 8th - up to 500 invited users <br />
          April 14th - up to 5,000 selected users <br />
          May 21st - up to 15,000 selected users <br />
          <span>Full release on June 8th</span>
        </p>
        <a
          href="https://forms.gle/W9iF8W7V1ebBAGTR9"
          target="_blank"
          className="button primary"
          onClick={closeFunc}
        >
          Join Waitlist
        </a>
      </div>
    </motion.div>,
    document.getElementById("popups")
  );
}
