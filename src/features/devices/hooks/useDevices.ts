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

  function addDevice(name: string) {
    setDevices((prev) => [
      ...prev,
      { id: prev.length + 1, name, status: "off" },
    ]);
  }

  function toggleDevice(id: number) {
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: d.status === "on" ? "off" : "on" } : d,
      ),
    );
  }

  function removeDevice(id: number) {
    setDevices((prev) => prev.filter((d) => d.id !== id));
  }
  return { devices, addDevice, toggleDevice, removeDevice };
}
