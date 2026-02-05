import type { Device } from "../types";
import { Card } from "@/components/ui/card";

type Props = {
  device: Device;
};

export function DeviceCard({ device }: Props) {
  return (
    <Card
      className="
        w-xs
        bg-slate-900 text-white
        p-4 rounded-xl

      "
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
        {device.name[0]}
      </div>

      {/* Name */}
      <h3 className="mt-3 font-semibold">{device.name}</h3>

      {/* Status */}
      <p className="text-sm text-slate-400">
        {device.status === "on" ? "Yoqilgan" : "O'chirilgan"}
      </p>
    </Card>
  );
}
