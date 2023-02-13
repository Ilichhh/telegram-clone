import { useState } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import SettingsSidebar from '../ForSettingsSidebar/SettingsSidebar';
import SettingsMenu from '../SettingsPopap/SettingsPopap';
import SidebarContent from '../SidebarContent/SidebarContent';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Sidebar.scss';

function Sidebar() {
  const [isActivePopup, setActivePopup] = useState(false);
  const [isSettings, setSettings] = useState(false);

  function flipFlop() {
    setActivePopup(!isActivePopup);
  }

  function changeSidebar() {
    if (isSettings) {
      setSettings(false);
    } else {
      setSettings(true);
    }
  }

  return (
    <div className="sidebar">
      {
          isSettings ? <SettingsSidebar onSidebarChange={() => changeSidebar()} />
            : (
              <>
                <SidebarHeader callback={() => flipFlop()} />
                <SidebarContent />
                <CreateButton />
                <SettingsMenu
                  isOpen={isActivePopup}
                  onClose={() => setActivePopup(false)}
                  onSidebarChange={() => changeSidebar()}
                />
              </>
            )
      }
    </div>
  );
}

export default Sidebar;
