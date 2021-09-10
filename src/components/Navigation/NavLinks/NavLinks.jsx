import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
        <i class='bx bxs-home'></i>
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
        <i class='bx bxs-user'></i>
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS} activeClassName={s.active}>
        <i class='bx bxs-dashboard' ></i>
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME} activeClassName={s.active}>
        <i class='bx bxs-file-pdf'></i>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
