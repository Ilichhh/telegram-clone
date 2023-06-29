import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface ModalPhotoContextProps {
    imagePopup: boolean;
    url: string;
    setImagePopup: React.Dispatch<React.SetStateAction<boolean>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const ModalPhotoContext = createContext<ModalPhotoContextProps>({
  imagePopup: false,
  url: '',
  setImagePopup: () => null,
  setUrl: () => null,
});

export function ModalPhotoContextProvider({ children }: ProviderProps) {
  const [imagePopup, setImagePopup] = useState(false);
  const [url, setUrl] = useState('');
  const value = useMemo(() => ({
    imagePopup,
    setImagePopup,
    url,
    setUrl,
  }), [imagePopup,
    setImagePopup,
    url,
    setUrl]);

  return (
    <ModalPhotoContext.Provider value={value}>
      {children}
    </ModalPhotoContext.Provider>
  );
}
