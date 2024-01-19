// import Profile from "../assets/img/subhan_hakim.jpg";

import Ellipse from "../../partials/ellipse";
import Location from "../../partials/location";
import ParallaxText from "../../partials/paralaxText";
import HeroText from "./heroText";

export default function Hero() {
  return (
    <div className="overflow-hidden">
      <HeroText />
      <Ellipse />
      <Location />
      <div className="mt-[100px]">
        <ParallaxText baseVelocity={-1}>Front End Developer</ParallaxText>
        <ParallaxText baseVelocity={1}>Freelancer Web Developer</ParallaxText>
      </div>
    </div>
  );
}
