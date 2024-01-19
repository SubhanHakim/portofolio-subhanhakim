import Divider from "../../partials/divider";
import Card from "./card";

export default function Experience() {
  return (
    <>
      <div className="mx-[100px] my-16">
        <div className="mt-16">
          <h1 className="font-primary text-[#fff] text-6xl">Experience & Certification</h1>
        </div>
        <div className="mt-20 relative flex gap-40 flex-row">
          <div className="divider rounded-full"></div>
          <div className="grid gap-10">
            <Card/>
          </div>
        </div>
        <div className="mt-10">
          <Divider />
        </div>
      </div>
    </>
  );
}
