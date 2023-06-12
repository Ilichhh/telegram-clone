import {
  useState, useContext, useRef,
} from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../../context/AuthContext';
import { ActiveChatContext } from '../../../context/ActiveChatContext';
import { SendImageContext } from '../../../context/SendImageContext';
import { UserContext } from '../../../context/UserContext';
import { sendMessage, activateChat } from '../../../API/api';
import { CloseIcon, MoreIcon } from '../../../assets/icons/icons';
import './SendImagePopup.scss';
import { FILE_SIZE_LIMIT } from '../../../constans';

const TextArea = styled.textarea``;

function SendImagePopup() {
  const [messageValue, setMessageValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const {
    popup,
    setPopup,
    url,
    setUrl,
    file,
    setFile,
  } = useContext(SendImageContext);
  const { currentUser } = useContext(AuthContext);
  const { activeChatID, setActiveChatID } = useContext(ActiveChatContext);
  const { userID } = useContext(UserContext);

  function closePopup() {
    setUrl('');
    setFile(null);
    setPopup(!popup);
  }

  const handleSendMessageTextArea = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && messageValue.trim() !== '') {
      e.preventDefault();
      if (activeChatID !== userID && currentUser) {
        await activateChat(currentUser, userID, activeChatID, setActiveChatID);
      }
      if (currentUser) {
        await sendMessage(messageValue, currentUser, activeChatID, userID, file);
      }
      closePopup();
      setMessageValue('');
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  return (
    <div className="image-popup">
      <div className="image-popup__header">
        <CloseIcon callback={() => closePopup()} />
        <span className="image-popup__header__title">Send Photo</span>
        <MoreIcon />
      </div>
      <div className="image-popup__image-wrapper">
        <img className="img" src={url} alt="sending" />
      </div>
      <div className="captcha">
        <TextArea
          placeholder="Add a caption..."
          className="message-input__text-area"
          id="send"
          ref={textAreaRef}
          value={messageValue}
          onKeyDown={handleSendMessageTextArea}
          onChange={handleChange}
          rows={2}
        />
        <button
          disabled={file ? file?.size > FILE_SIZE_LIMIT : false}
          className="image-popup__send-button"
          data-title="File is too big! Max size - 7mb"
          type="button"
          onClick={async () => {
            if (activeChatID !== userID && currentUser) {
              await activateChat(currentUser, userID, activeChatID, setActiveChatID);
            }
            if (currentUser) {
              sendMessage(messageValue, currentUser, activeChatID, userID, file);
            }
            closePopup();
          }}
        >
          Send

        </button>
      </div>
    </div>
  );
}

export default SendImagePopup;
