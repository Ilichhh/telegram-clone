import { createContext, useState, useMemo } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface SendImageContextProps {
    popup: boolean;
    url: string;
    file: File | null;
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
    setFile:React.Dispatch<React.SetStateAction<File | null>>
}

export const SendImageContext = createContext<SendImageContextProps>({
  popup: false,
  url: '',
  file: null,
  setPopup: () => null,
  setUrl: () => null,
  setFile: () => null,
});

export function SendImageContextProvider({ children }: ProviderProps) {
  const [popup, setPopup] = useState(false);
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const value = useMemo(() => ({
    popup,
    setPopup,
    url,
    setUrl,
    file,
    setFile,
  }), [popup,
    setPopup,
    url,
    setUrl,
    file,
    setFile]);

  return (
    <SendImageContext.Provider value={value}>
      {children}
    </SendImageContext.Provider>
  );
}
