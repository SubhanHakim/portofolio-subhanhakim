import aboutData from "../../utils/aboutData";

export default function AboutDesc() {
  return (
    <>
      {aboutData.map((about, i) => {
        return (
          <>
            <div key={i + 1} className="grid grid-cols-2 gap-10">
              <div className="my-5 flex flex-col gap-7">
                {about.desc.map((desc, i) => {
                  return (
                    <p
                      key={i}
                      className="text-[#fff] text-xl font-light whitespace-pre-wrap text-justify"
                    >
                      {desc}
                    </p>
                  );
                })}
              </div>
              <div>
                <div className="">
                  <div className="mt-5">
                    <h3 className="text-[#fff] font-primary text-3xl">
                      Education
                    </h3>
                    <div className="mt-5">
                      {about.education.map((education, i) => {
                        return (
                          <p
                            key={i}
                            className="text-[#fff] text-xl font-light my-4"
                          >
                            {education}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-[#fff] font-primary text-3xl">
                      Skills
                    </h3>
                    <div className="mt-5">
                      <p className="text-[#fff] text-xl font-light">
                        {about.skills.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-[#fff] font-primary text-3xl">
                      UI Tools & UI/UX Designer
                    </h3>
                    <div className="mt-5">
                      <p className="text-[#fff] text-xl font-light">
                        {about.tools.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
