import {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';

interface MenuContextType {
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType | null>(null);

export const MenuProvider = ({ children }: PropsWithChildren) => {
  const [isMenu, setIsMenu] = useState(false);
  const isMenuObject = { isMenu, setIsMenu };

  return <MenuContext.Provider value={isMenuObject}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error('useMenu has to be used within <MenuContext.Provider>');
  }

  return menuContext;
};
