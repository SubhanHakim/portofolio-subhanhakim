import AboutDesc from "./aboutdescData";
import Divider from "../../partials/divider";

export default function About() {
  return (
    <div className="mx-[100px] mt-[130px]">
      <Divider/>
      <div className="mt-16">
        <h1 className="font-primary text-[#fff] text-6xl">About Me</h1>
      </div>
      <AboutDesc/>
      <Divider/>
    </div>
  );
}
