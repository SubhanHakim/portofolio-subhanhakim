import DigitalGlobe from "./globe";

const dataAddress = [
  {
    address: "Tasikmalaya",
    province: "West Java",
    country: "Indonesia",
  },
];

export default function Location() {
  return (
    <>
      <div className="bg-[#fff] max-w-fit rounded-r-full">
        {dataAddress.map((address, index) => {
          return (
            <div key={index} className="py-5 w-[400px]">
              <div className="flex relative justify-center items-center w-full">
                <div className="font-secondary text-2xl text-blackColor font-light">
                  <p>Locate</p>
                  <p>{address.address}</p>
                  <p>
                    {address.province}, {address.country}
                  </p>
                </div>
                <DigitalGlobe className="absolute right-0 top-0" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
