import useData from './useData';

export interface Store {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useStores = () => useData<Store>("/stores");
export default useStores;
