import s from './Burger.module.scss';

const Burger = ({ onClick }) => {
  return (
<i class='bx bx-menu-alt-left' onClick={onClick} id='menu'></i>
  );
};

export default Burger;
