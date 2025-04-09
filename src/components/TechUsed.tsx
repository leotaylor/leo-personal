import React, { useEffect, useState } from 'react';
import techData from "../data/tech.json";
import "../styles/Tech.css";

interface TechItem {
  image: string;
  desc: string;
}

const TechUsed: React.FC = () => {
  const [techList, setTechList] = useState<TechItem[]>([]);

  useEffect(() => {
    setTechList(techData.tech);
  }, []);

  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Tech Used</h1>
      <div className="row">
        {techList.map((tech, index) => (
          <div key={index} className="col-md-3 col-sm-6 col-6 mb-4 techImage">
            <img src={tech.image} alt={tech.desc} className="img-fluid spin" />
            <h2 className="h5 mt-2">{tech.desc}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechUsed;
