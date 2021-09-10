import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import $ from 'jquery'
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect } from 'react';

const IntroSection = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200
    });
    },[])
  return (
    <section className={s.content}>
<i class='bx bx-down-arrow-alt' 
onClick={()=>{
    $([document.documentElement, document.body]).animate({
      scrollTop: '630px'
  }, 500);
}} id='scroll-down'></i>   
   <div className={s.introduction} id='tst' data-aos='zoom-in'>
        <div className={s.introductionText}>
          <h1 className={s.title} style={{marginBottom:'-1em'}}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description} style={{maxWidth:'900px'}} data-aos='zoom-in'>
            <p>
              Hey! I'm from 🇪🇸. i'm 21 years old, and i started to study the programming languages since i was 13 years old. on all those past years i have learned a lot of things, I'm still a <span class={s.purple}><strong>LOVER</strong></span> of development.<br/>
              after 8 years, i'm a web development instructor online and Founder of <span class={s.purple}><strong>Coding Art</strong></span>, i love to be a developer content creator and every day i do the best of myself to be better on my professional carreer.
            </p>

            <p>
              I'm interested on <span class={s.purple}><strong>Web Technologies</strong></span> and everything about the <span class={s.purple}><strong>Design</strong></span>
              <i>
              </i>
            </p>

            <p>
              A passionate Full-Stack Software Developer 🚀 
              <br />
              I have experience building <span class={s.purple}><strong>Web and Mobile</strong></span> applications with <span class={s.purple}><strong>JavaScript</strong></span>, <span class={s.purple}><strong>React.js</strong></span>, <span class={s.purple}><strong>Node.Js</strong></span>, <span class={s.purple}><strong>React Native</strong></span>, and some other libraries/frameworks or dev languages!
                <br/><br/>
                There's <span class={s.purple}><strong>no limits</strong></span> for our imagination! 🛸
            </p>
          </div>
        </div>
        <Tilt trackOnWindow={false} tiltReverse={true} onTouchStart={true}>
          <LazyLoadImage height="350px" width="350px" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial} style={{marginTop:'-4em'}}>
        <h1 style={{fontWeight:'400'}}>Contact me</h1>
        <p>
          Feel free to <span className={s.purple}><strong>connect</strong> </span>with
          me on
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/powfuu/Coding-Art/blob/main/===%20Coding%20Art%20Services%20==="
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/everit-dietrich-3874b9215/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
