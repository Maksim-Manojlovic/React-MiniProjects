import React from "react";
import { accordionData } from "../utils/content";
import Accordion from "../Accordions/accordion";

const AccordionSection = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }, index) => (
        <Accordion key={index} title={title} content={content} />
      ))}
    </div>
  );
};

export default AccordionSection;
