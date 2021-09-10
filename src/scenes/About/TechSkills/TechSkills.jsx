import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketDotIo,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
      <i class='bx bxl-javascript' style={{color:'gold'}}></i>      </li>
      <li className={s.techIcon}>
        <SiTypescript style={{color:'dodgerblue'}}/>
      </li>
      <li className={s.techIcon}>
        <DiNodejs style={{color:'green'}}/>
      </li>
      <li className={s.techIcon}>
        <DiReact style={{color:'dodgerblue'}}/>
      </li>
      <li className={s.techIcon}>
      <i class='bx bxl-html5' style={{color:'orange'}}></i>      </li>
      <li className={s.techIcon}>
      <i class='bx bxl-css3' style={{color:'dodgerblue'}}></i>      </li>
      <li className={s.techIcon}>
      <i class='bx bxl-github' style={{color:'gray'}}></i>      </li>
      <li className={s.techIcon}>
      <i class='bx bxl-tailwind-css' style={{color:'dodgerblue'}}></i>      </li>
      <li className={s.techIcon}>
      <i class='bx bxs-data' style={{color:'#555'}}></i><span style={{fontSize:'.3em',marginTop:'.5em'}}><br/>MySQL</span>      </li>
      <li className={s.techIcon}>
        <SiRedux style={{color:'dodgerblue'}}/>
      </li>
      <li className={s.techIcon}>
      <i class='bx bxl-php' style={{marginTop:'0em',color:'darkblue'}}></i>      </li>
      <li className={s.techIcon}>
      <i class='bx bxl-jquery' style={{color:'dodgerblue'}}></i>      </li>

    </ul>
  );
};

export default TechSkills;
