import styles from "./ProjectsStyles.module.css";
import radient from "../../assets/Radient_charms.png";
import weatherApp from "../../assets/weather_app.png";
import ProjectCard from "../../common/ProjectCard";
import Brainwave from "../../assets/Brainwave AI technology.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={radient}
          link="https://github.com/Yashpaspuleti/radiant_charm"
          h3="Radient Charms"
          p="Tailwind & JavaScript"
        />
        <ProjectCard
          src={weatherApp}
          link="https://github.com/Yashpaspuleti/Weather_app"
          h3="Weather App"
          p="WeatherAPI & JavaScript"
        />
        <ProjectCard
          src={Brainwave}
          link="https://github.com/Yashpaspuleti/Brainwave"
          h3="Brainwave AI"
          p="Tailwind & React.js"
        />
      </div>
    </section>
  );
}

export default Projects;
