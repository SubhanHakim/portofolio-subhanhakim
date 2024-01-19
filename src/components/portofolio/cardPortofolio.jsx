import porto1 from "../../assets/img/porto1.png";

export default function CardPortofolio() {
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        <div className="rounded-3xl hover:">
          <img
            src={porto1}
            alt="Portofolio"
            style={{ width: 330 }}
            className="rounded-3xl"
          />
          <div className="p-5 flex flex-col gap-2">
            <h3 className="font-primary text-2xl">Barber Cart</h3>
            <p className="font-secondary font-light text-xl">Mobile App</p>
          </div>
        </div>
      </div>
    </>
  );
}
