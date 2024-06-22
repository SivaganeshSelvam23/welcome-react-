import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(`${MENU_URL}${resID}`);

    const json = await data.json();

    setResInfo(json?.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
