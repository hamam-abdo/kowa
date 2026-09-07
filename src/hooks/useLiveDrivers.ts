import { useEffect, useState } from "react";

import { DRIVERS, REFRESH_SECONDS, type Driver } from "../constants";

function drift(value: number) {
  return value + (Math.random() - 0.5) * 0.004;
}

function moveDriver(driver: Driver): Driver {
  // السائق المتاح واقف؛ المشغول وفي رحلة يتحركان
  if (driver.status === "available") return driver;

  return {
    ...driver,
    position: {
      lat: drift(driver.position.lat),
      lng: drift(driver.position.lng),
    },
  };
}


export function useLiveDrivers() {
  const [drivers, setDrivers] = useState<Driver[]>(DRIVERS);
  const [updatedAt, setUpdatedAt] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
       setDrivers((current) => current.map(moveDriver));
      setUpdatedAt(new Date());
    }, REFRESH_SECONDS * 1000);

    return () => clearInterval(timer);
  }, []);

  return { drivers, updatedAt };
}
