import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github} from "lucide-react";
import "../styles/projectcard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const ProjectCard = ({
  index = 0,
  title = "",
  description = "",
  tags = [],              
  imgURL = "",
  github = "#",
  
}) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="project-card"
    >
      {/* Glow */}
      <div className="card-glow"></div>

      {/* Image */}
      <motion.img
        src={imgURL}
        alt={title}
        className="project-image"
        loading="lazy"
      />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        {/* Tags */}
        <div className="project-tags">
          {tags?.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="project-tag"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Buttons */}
        <div className="project-actions">
        
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="btn-primary"
          >
            <ExternalLink size={16} /> Github Link
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

