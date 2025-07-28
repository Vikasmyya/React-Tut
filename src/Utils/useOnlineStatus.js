import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setOnline(false);
    });

    window.addEventListener("online", (e) => {
      setOnline(true);
    });
  });

  return online;
};

export default useOnlineStatus;
