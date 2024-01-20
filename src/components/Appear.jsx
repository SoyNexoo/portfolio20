/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
const Appear = ({ props }) => {
  const [name, setName] = useState(null);
  return (
    <>
      {props.map((ele, index) => {
        return (
          <motion.div
            onMouseEnter={() => setName(index)}
            onMouseLeave={() => setName(null)}
            key={ele}
            initial={{ opacity: 0, y: -50, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="hover:text-cyan hover:-translate-y-4 relative transition-all">
            <span
              className={`sm:hidden md:hidden text-center mx-auto bg-white font-bold speech ${
                name == index ? "visible" : "invisible"
              } `}>
              {ele.name}
            </span>
            {ele.icon}
          </motion.div>
        );
      })}
    </>
  );
};

export default Appear;
