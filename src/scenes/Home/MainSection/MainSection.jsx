import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main.gif';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const MainSection = () => {
  useEffect(()=>{
    AOS.init();
    },[])
  return (
    <section className={s.content}>
      <div  data-aos='zoom-in'  data-aos="fade-up"
    data-aos-offset="0"
    data-aos-delay="20"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h2 style={{ paddingBottom:7}} className={s.title}>
          Hi There! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle} style={{marginBottom:'-.65em'}}>
          I'M
          <strong className={s.mainName}> Everit Molero</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Full-Stack Developer',
              'Development Instructor',
              'Founder at Coding Art',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>
      <img src='https://tecnoplanet.pe/wp-content/uploads/2019/09/8.gif'  data-aos="zoom-in"
    data-aos-offset="0"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" id='img-main'/>
    
    </section>
  );
};

export default MainSection;
