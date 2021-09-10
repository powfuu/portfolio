import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <img src={logo} id='logo2'/>
      </Link>
    </div>
  );
};

export default Logo;
