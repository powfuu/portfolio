import s from './BtnToggleTheme.module.scss';
import Button from '../UIElements/Button/Button';
import { ReactComponent as ToggleLightIcon } from '../../assets/toggle-light.svg';
import { ReactComponent as ToggleDarkIcon } from '../../assets/toggle-dark.svg';
import { useThemeContext } from '../../hooks/themeHook/themeHook';

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <Button addClass={className} onClick={toggleTheme}>
      {dark && <i class='bx bx-moon' id={s.toggleTheme}></i>}
      {!dark && <i class='bx bx-sun' id={s.toggleTheme}></i>}
    </Button>
  );
};

export default BtnToggleTheme;
