import { motion } from "framer-motion";
import React from "react";

const Carousel: React.FC = () => {
  const messages = [
    "📢 Great News! IWS Online School offers an exciting opportunity – Scholarship Exam on 23rd November 2024.",
    "📢 Great News! IWS Online School offers an exciting opportunity – Scholarship Exam on 23rd November 2024.",
    "📢 Great News! IWS Online School offers an exciting opportunity – Scholarship Exam on 23rd November 2024.",
    "📢 Great News! IWS Online School offers an exciting opportunity – Scholarship Exam on 23rd November 2024.",
    "📢 Great News! IWS Online School offers an exciting opportunity – Scholarship Exam on 23rd November 2024.",
    "📢 Great News! IWS Online School offers an exciting opportunity – Scholarship Exam on 23rd November 2024.",
  ];

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        style={{ display: "inline-block" }}
      >
        <div style={{ display: "inline-flex" }}>
          {messages.map((message, index) => (
            <span key={index} style={{ marginRight: "4rem" }}>
              {message}
            </span>
          ))}
          {/* Duplicate messages for seamless looping */}
          {messages.map((message, index) => (
            <span key={`duplicate-${index}`} style={{ marginRight: "4rem" }}>
              {message}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
