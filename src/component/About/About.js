import React from "react";
import './about.css'

const About = () => {
  return (
    <>
    <div id="About">

      <div className="about-container">
        <div className="left-about">
          <h3>
            You can watch this video to get a sense of what CLUE is like in
            person.
          </h3>
        </div>

        <div className="right-about">
          <div className="about-video">
            <iframe className="video"
              width="720"
              height="415"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
