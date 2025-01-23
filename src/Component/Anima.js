import React from "react";
import Lottie from "lottie-react";
import animationData from "./23111354.json";

function Anima() {
  return (
    <div className="anima">
      <Lottie animationData={animationData} />
    </div>
  );
}

export default Anima;