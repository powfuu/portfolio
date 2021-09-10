import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import laptopImg from '../../assets/about-laptop.png';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about} data-aos='fade-right'>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Know About <b className={s.purple}>Me</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src='https://marketing.adrianhallberg.com/wp-content/uploads/2021/02/Benefits-Of-Local-SEO.gif' id='about-img' />
          </div>
        </div>

        <h2 className={s.skills} data-aos='zoom-in'>
          Some of my professional <b className={s.purple}>Skills</b>
        </h2>
        <div data-aos='fade-left'>
        <TechSkills/>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
