import { useContext } from 'react';
import PopupMenuItem from '../../common/PopupMenuItem/PopupMenuItem';
import { ReactComponent as SettingIcon } from '../../../assets/icons/setting-icon.svg';
import { DarkModeIcon } from '../../../assets/icons/icons';
import './SettingsPopup.scss';
import { ThemeContext } from '../../../context/ThemeContext';

function SettingsPopup(props: { isOpen: boolean, onClose: () => void,
  onSidebarChange: () => void }) {
  const { isOpen, onClose, onSidebarChange } = props;
  const { isDark, setIsDark } = useContext(ThemeContext);

  const click = () => null;

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={isOpen ? 'popup active' : 'popup'} id="popup" onMouseLeave={() => onClose()}>
      <PopupMenuItem label="Settings" icon={<SettingIcon />} handleClick={onSidebarChange} />
      <div className="dark-mode" onClick={changeTheme} role="presentation">
        <PopupMenuItem label="Dark mode" icon={<DarkModeIcon />} handleClick={click} />
        <div className={`switch-btn switch-${isDark ? 'on' : 'off'}`} />
      </div>
    </nav>
  );
}

export default SettingsPopup;
