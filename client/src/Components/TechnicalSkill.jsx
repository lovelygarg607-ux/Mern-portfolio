import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../styles/technicalskill.css";
import {Pagination} from "antd"


const levelMap = {
  Beginner: 40,
  Intermediate: 70,
  Advanced: 90,
};



const CircleSkill = ({ percent }) => {
  const radius = 45;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width="120"
      height="120"
      style={{ transform: "rotate(-90deg)", margin: "15px auto", display: "block" }}
    >
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={stroke}
        fill="none"
      />

      <motion.circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#6366f1"
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{
          strokeDashoffset:
            circumference - (percent / 100) * circumference,
        }}
        transition={{ duration: 1.2 }}
      />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="#0f172a"
        fontSize="16"
        fontWeight="600"
        transform="rotate(90, 60, 60)"
      >
        {percent}%
      </text>
    </svg>
  );
};

const TechnicalSkill = () => {


  const [loading, setLoading] = useState(false)
  const [limit, setlimit] = useState(4)
  const [skills, setskills] = useState([])
  const [totalpages, setTotalpages] = useState("")
  const [totalskill, setTotalskill] = useState("")
  const [currentpage, setCurrentPage] = useState(1)




 const getskilllist = async () => {
  try {
    setLoading(true);

    const query = `/portfolio/skill/getskillslist?page=${currentpage}&limit=${limit}`;
    const res = await axios.get(query);

    if (res.data.status === "success") {
      setskills(res.data.skills);          
      setTotalpages(res.data.totalpages);  
      setTotalskill(res.data.totalrecords); 
    }
  } catch (error) {
    console.log("error is", error);
  } finally {
    setLoading(false);
  }
};

const onchange = (page, pageSize) => {
  setCurrentPage(page);
  setlimit(pageSize);
};






  useEffect(() => {
    getskilllist()
  }, [currentpage, limit])


  return (
    <motion.section
      className="skills-section"
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="skills-heading">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill._id}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >

            {/* TOP: ICON + NAME */}
            <div className="skill-top">
              <img
                src={skill.iconimage}
                alt={skill.name}
                className="skill-small-icon"
              />
              <h4 className="skill-name">{skill.name}</h4>
            </div>

            {/* CIRCLE */}
            <CircleSkill percent={levelMap[skill.level]} />

            {/* CATEGORY + LEVEL */}
            <div className="skill-footer">
              <span className="skill-category">{skill.category}</span>
              <span className="skill-level">{skill.level}</span>
            </div>

          </motion.div>

        ))}
      </div>
  
    <Pagination
  showQuickJumper
  pageSizeOptions={[4, 8, 12, 20]}
  current={currentpage}
  pageSize={limit}
  total={totalskill}
  style={{ marginTop: 20, textAlign: "center" }}
  onChange={onchange}
/>

    </motion.section>
  );
};

export default TechnicalSkill;


