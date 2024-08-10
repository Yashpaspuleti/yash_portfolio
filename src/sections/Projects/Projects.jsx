import styles from "./ProjectsStyles.module.css";
import radient from "../../assets/Radient_charms.png";
import weatherApp from "../../assets/weather_app.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={radient}
          link="https://github.com/Yashpaspuleti/radiant_charm"
          h3="Radient Charms"
          p="Jewellery Site"
        />
        <ProjectCard
          src={weatherApp}
          link="https://github.com/Yashpaspuleti/Weather_app"
          h3="Weather App"
          p="Weather App using JavaScript"
        />
      </div>
    </section>
  );
}

export default Projects;
