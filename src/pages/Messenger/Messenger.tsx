import { useContext, useEffect } from 'react';
import Chat from '../../components/Chat/Chat';
import ModalPhoto from '../../components/ModalPhoto/ModalPhoto';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserSidebar from '../../components/UserSidebar/UserSidebar';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import { SendImageContext } from '../../context/SendImageContext';
import { UserContext } from '../../context/UserContext';
import { UserSidebarContext } from '../../context/UserSidebarContext';
import { ThemeContext } from '../../context/ThemeContext';
import { ActiveVisibilitySidebar } from '../../context/VisibleSidebarContext';
import './Messenger.scss';

function Messenger() {
  const {
    popup,
    setPopup,
    setFile,
    setUrl,
  } = useContext(SendImageContext);
  const { url, imagePopup, setImagePopup } = useContext(ModalPhotoContext);

  const { isActiveSidebar, setActiveSidebar } = useContext(ActiveVisibilitySidebar);
  const { userSidebar } = useContext(UserSidebarContext);
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const { setUserID } = useContext(UserContext);
  const { isDark } = useContext(ThemeContext);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 920) {
      setActiveSidebar(true);
    } else if (activeChatID === '') {
      setActiveSidebar(true);
    } else {
      setActiveSidebar(false);
    }
  });

  const closePopup = () => {
    if (popup) {
      setPopup(false);
      setFile(null);
      setUrl('');
    }
    if (imagePopup) {
      setImagePopup(false);
    }
  };

  useEffect(() => {
    setUserID('');
    setActiveChatID('');
  }, []);

  return (
    <div className={isDark ? 'messenger-container dark' : 'messenger-container light'}>
      <div className="messenger">
        {(popup || imagePopup) && <button type="button" aria-label="Blackout" className="blackout" onClick={closePopup} />}
        {isActiveSidebar ? <Sidebar sidebarClass="sidebar" /> : <Sidebar sidebarClass="sidebar hide-sidebar" />}
        {isActiveSidebar ? <Chat chatClass="chat hide-chat" /> : <Chat chatClass="chat" />}
        {userSidebar && <UserSidebar /> }
        {imagePopup && <ModalPhoto imageUrl={url} />}
      </div>
    </div>
  );
}

export default Messenger;
