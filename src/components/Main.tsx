import React from "react";
import { motion } from "framer-motion";

export const Main = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div id="scroll-target"></div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen container mx-auto pt-32 pb-10 mb-20 leading-10"
        style={{ fontSize: "18px" }}
      >
        {props.children}
      </motion.main>
    </>
  );
};
