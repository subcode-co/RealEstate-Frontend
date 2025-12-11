import React from "react";
import ServicesCard from "../shared/services-card";

const ServicesSection = ({ coreValues = [] }) => {
  return (
    <section className="container  py-12 overflow-hidden">
      <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4 ">
        {coreValues.length > 0
          ? coreValues.map((value, index) => (
              <ServicesCard key={index} value={value} />
            ))
          : // Fallback to 4 placeholder cards if no data
            Array.from({ length: 4 }).map((_, index) => (
              <ServicesCard key={index} />
            ))}
      </div>
    </section>
  );
};

export default ServicesSection;
