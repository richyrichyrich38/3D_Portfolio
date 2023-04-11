import { motion } from "framer-motion";
import { Component } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (component, idName) => 
function HOC() {
  return (
    <motion.section>
      <Component />
    </motion.section>
  )
}

export default SectionWrapper