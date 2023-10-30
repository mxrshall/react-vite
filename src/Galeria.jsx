import { GaleriaText } from "./GaleriaText";
import Nadpis from "./Nadpis";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Galeria() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="bg-black flex justify-center items-center flex-col">
      <Nadpis nadpis="Galéria 1957" color="white" />
      <div
        ref={ref}
        className="w-3/4 h-64 text-xs font-julius text-justify text-white overflow-auto"
      >
        <GaleriaText />
      </div>
      <motion.div
        className="w-3/4 h-10 bg-red-500 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </div>
  );
}

export default Galeria;
