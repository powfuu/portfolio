import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Everit Molero </span>
        from <span className={s.purple}> 🇪🇸.</span>
        <br />
        Skilled Full-Stack and JavaScript(React.js/Node.js) Developer.
        <br/>
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Being Developer Instructor Online
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Being a content creator of development
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Play Video Games
        </li>
      </ul>

      <p
        style={{
          color: 'dodgerblue',
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom:'-1em'
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
