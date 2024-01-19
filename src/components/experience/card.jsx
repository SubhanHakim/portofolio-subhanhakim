import experience from "../../utils/experience";

export default function Card() {

  return (
    <>
      {experience.map((exp) => {
        return (
          <>
            <div
              key={exp.id}
              className={`circle-divider ${
                exp.id === 1 ? `top-[300px]` : exp.id === 2 ? `top-[600px]` : "top-0"
              }`}
            >
            </div>
            <div className="px-8 py-5 bg-grayColor rounded-2xl">
              <div className="mb-[30px]">
                <h3 className="font-secondary font-semibold text-primaryColor text-xl">
                  {exp.date}
                </h3>
                <h3 className="font-secondary font-semibold text-blackColor text-xl">
                  {exp.title}
                </h3>
              </div>
              <h3 className="font-secondary font-semibold text-blackGray text-xl">
                {exp.desc}
              </h3>
            </div>
          </>
        );
      })}
    </>
  );
}
