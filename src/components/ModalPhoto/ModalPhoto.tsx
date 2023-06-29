import { useContext } from 'react';
import { ModalPhotoContext } from '../../context/ModalPhotoContext';
import { CloseIcon } from '../../assets/icons/icons';
import './ModalPhoto.scss';

function ModalPhoto(props: {imageUrl: string}) {
  const { imageUrl } = props;
  const { setImagePopup } = useContext(ModalPhotoContext);

  function closePopup() {
    setImagePopup(false);
  }

  return (
    <div className="modal-img">
      <img className="img" src={imageUrl} alt="" />
      <CloseIcon callback={() => closePopup()} />
    </div>
  );
}

export default ModalPhoto;
