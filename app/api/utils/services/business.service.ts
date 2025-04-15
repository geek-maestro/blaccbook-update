import { merchants, services } from '../../sampleData';
import { useFirebaseQuery } from '../hooks/useFirebaseQuery';

const fetchMerchants = async () => {
  try {
    const data = merchants;
    return data;
  } catch (e) {
    console.log(e);
  }
};

const BusinessService = async () => {
  try {
    const data = services;
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getMerchants = () =>
    useFirebaseQuery(['merchants'], fetchMerchants, {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
      refetchInterval: false,
    });
  
 const getServices = () =>
    useFirebaseQuery(['services'], BusinessService, {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
      refetchInterval: false,
    });
  

export { getMerchants, getServices };
