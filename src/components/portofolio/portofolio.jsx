import CardPortofolio from "./cardPortofolio";

export default function Portofolio() {
  return (
    <>
      <div className="mx-[100px] my-16">
        <div className="mt-16">
          <h1 className="font-primary text-[#fff] text-6xl">Our Portofolio</h1>
        </div>
        <div className="mt-16">
          <CardPortofolio />
        </div>
      </div>
    </>
  );
}
