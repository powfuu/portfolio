import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
        <h3><img src={require(`../../assets/logo.png`).default} id='logo'/></h3>
        </div>

        <div className={s.copyright}>
        </div>

        <div className={s.body} style={{marginTop:'.85em'}}><br/>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/powfuu/Coding-Art/blob/main/===%20Coding%20Art%20Services%20==="
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/everit-dietrich-3874b9215/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
