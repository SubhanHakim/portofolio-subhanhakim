import profile1 from "../../assets/img/subhan.png";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <>
      <div className=" flex relative flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-[768px]"
        >
          <h1 className="text-[160px] text-[#fff] text-center font-primary uppercase">
            Subhan Nur Iqbal Hakim
          </h1>
        </motion.div>
        <div className="absolute">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              scale: [0, 1],
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "anticipate",
            }}
            className="box"
          >
            <img src={profile1} alt="testiii" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
