import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = MENU_API + resId;

      const data = await fetch(url);
      const json = await data.json();

      setResInfo(json);
    };

    fetchData();
  }, []);
  return resInfo;
};

export default useRestaurantMenu;
