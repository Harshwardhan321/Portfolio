import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/harsh-wardhan-52139aa2/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://auth.geeksforgeeks.org/user/harshwardhan321/profile">
        <SiGeeksforgeeks />
      </a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
