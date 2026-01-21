import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Projectcard from "../Components/Projectcard";
import { Pagination } from "antd";
import "../styles/project.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(3);
  const [projects, setProjects] = useState([]);
  const [totalproject, setTotalproject] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const[totalpages , setTotalpages]=useState("")

  const getProjectList = async () => {
    try {
      setLoading(true);
     const res = await axios.get(
  `https://mern-portfolio-d3xy.onrender.com/portfolio/project/getprojectlist?page=${currentPage}&limit=${limit}`
);

if (res.data.status === "success") {
  setProjects(res.data.projects);
  setTotalpages(res.data.totalpages);
  setTotalproject(res.data.totalproject);
}

    } catch (error) {
      console.log("Project fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const onchange=(page,pageSize)=>{
    setCurrentPage(page);
    setlimit(pageSize);

  useEffect(() => {
    getProjectList();
  }, [currentPage, limit]);

  return (
    <section id="projects" className="projects-section">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
        className="projects-header"
      >
        <motion.h3 variants={fadeUp} className="projects-title">
          Selected <span className="projects-title-gradient">Projects</span>
        </motion.h3>

        <motion.p variants={fadeUp} className="projects-subtitle">
          Crafted with focus on accessibility, performance, and user-centered design.
        </motion.p>
      </motion.div>

      {/* Cards */}
     <motion.div
  className="projects-grid"
  initial="hidden"
  animate="visible"
>
  {projects.map((project, i) => (
    <motion.div key={project._id} variants={fadeUp}>
      <Projectcard
        index={i}
        title={project.title}
        description={project.description}
        tags={project.techStack}
        imgURL={project.projectimage}

        github={project.githubLink}
      />
    </motion.div>
  ))}
</motion.div>


      {/* Pagination */}
      <Pagination
        current={currentPage}
        pageSize={limit}
        total={totalproject}
        onChange={(page, pageSize) => {
          setCurrentPage(page);
          setLimit(pageSize);
        }}
        style={{ marginTop: 20, textAlign: "center" }}
      />
    </section>
  );
};

export default Projects;
