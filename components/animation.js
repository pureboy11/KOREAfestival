import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

export default function Animation() {
  return <Lottie loop animationData={lottieJson} play />;
}
