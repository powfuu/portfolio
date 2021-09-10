import s from './Projects.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { PROJECTS } from '../../constants/projects';
import ProjectCard from './ProjectCard/ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Projects = () => {
  useEffect(()=>{
    AOS.init({offset:0})
  },[])
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title} style={{marginBottom:'.25em'}} data-aos='zoom-in'>
          My Recent <strong className={s.purple}>Projects</strong>
        </h1>
        <p className={s.subtitle} data-aos='fade-left'>
          You can see my recent projects on <span class={s.purple}>Coding Art</span> Official Website!.
        </p>
        <img data-aos='zoom-in-left' src="https://elements-cover-images-0.imgix.net/1b683e8f-b116-4363-86b7-caa7abf38af4?auto=compress%2Cformat&fit=max&w=2740&s=c6bc13f7c42f7cde7c60627b5e1afcc4" id='img-preview'/>
        <button id='visit-b' data-aos='fade-up'>Visit Coding Art</button>
      </div>
    </BaseLayout>
  );
};

export default Projects;
