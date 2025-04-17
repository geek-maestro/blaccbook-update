import { createContext, ReactNode, useContext, useState } from 'react';
import { ServiceItemProps } from '~/types/serviceItem';

interface LocationContextType {
  selectedItem: ServiceItemProps | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<ServiceItemProps | null>>;
}

export const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<ServiceItemProps | null>(null);

  return (
    <LocationContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
