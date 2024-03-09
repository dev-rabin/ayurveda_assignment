import React from "react";
import "./page.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMultiply,
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <>
      <div className="container">
        <FontAwesomeIcon icon={faMultiply} size="2x" />
        <h1>Leave a review</h1>
        <div>
          <h3>Safety</h3>
          <p>Lorem ipsum dolor sit, amet consectetur</p>
          <div className="safety-div">
            <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />{" "}
            <span>
              <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />
            </span>
          </div>
        </div>
        <div className="communication-div">
          <h3>Communication</h3>
          <p>Lorem ipsum dolor sit, amet consectetur</p>
          <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />{" "}
          <span>
            <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} size="3x" color="yellow" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} size="3x" color="grey" />
          </span>
        </div>
        <div className="recommend-div">
          <h3>Would you recommend Trausti?</h3>
          <p>Lorem ipsum dolor sit, amet consectetur</p>
         <div className="thumb-icons">
         <span >
            <FontAwesomeIcon icon={faThumbsDown} size="2x" color="grey" className="thumb-span-icons" />
           <span>No</span>
          </span>
          <span className="thumb-span-icons">
            <FontAwesomeIcon icon={faThumbsUp} size="2x" color="green" className="thumb-span-icons" />
            <span>Yes</span>
          </span>
         </div>
        </div>
        <div>
          <h3>Praise</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
