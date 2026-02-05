import { useEffect, useState } from "react";
import type { Device } from "../types";

export function useDevices() {
  const [devices, setDevices] = useState<Device[]>([]);
  // yolgon datchik malumotlari
  useEffect(() => {
    setTimeout(() => {
      setDevices([
        { id: 1, name: "Lampichka", status: "on" },
        { id: 2, name: "Televizor", status: "off" },
        { id: 3, name: "Ventilyator", status: "on" },
      ]);
    }, 500);
  }, []);
  return devices;
}
