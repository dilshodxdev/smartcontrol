import { useState } from "react";

import { useDevices } from "./hooks/useDevices";
import { DeviceCard } from "./components/DeviceCard";
import { AddDevice } from "./components/AddDevice";

export function Devices() {
  const { devices, addDevice, toggleDevice, removeDevice } = useDevices();

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4 ">
      {/* Flex  */}
      <div className="flex flex-wrap gap-4 ">
        {devices.map((d) => (
          <DeviceCard
            key={d.id}
            device={d}
            onToggle={toggleDevice}
            onDelete={removeDevice}
          />
        ))}

        {/* Yana qo'shish */}
        <div
          onClick={() => setOpen(true)}
          className="
           w-xs
           h-45
            border-2 border-dashed
            border-slate-600
            rounded-xl
            flex items-center justify-center
            text-slate-400
            cursor-pointer
            hover:border-emerald-400
          "
        >
          + Yangi qurilma qo'shish
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-slate-900 p-4 rounded-xl w-80">
            <AddDevice
              onAdd={(name) => {
                addDevice(name);
                setOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
