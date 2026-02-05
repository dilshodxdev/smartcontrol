import { useDevices } from "./hooks/useDevices";
import { DeviceCard } from "./components/DeviceCard";

export function Devices() {
  const devices = useDevices();
  //  { id: 1, name: "Lampichka", status: "on" },
  return (
    <div className=" flex gap-4 flex-wrap">
      {devices.map((d) => (
        <DeviceCard key={d.id} device={d} />
      ))}
    </div>
  );
}
