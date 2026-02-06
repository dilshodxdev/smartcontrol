import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import type { Device } from "../types";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  device: Device;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function DeviceCard({ device, onToggle, onDelete }: Props) {
  return (
    <Card
      className="
        w-xs
        h-45
        p-4 rounded-xl
       flex flex-col gap-2
       justify-between
      "
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
        {device.name[0]}
      </div>

      {/* Name */}
      <h2 className="mt-1 font-semibold text-xl">{device.name}</h2>

      {/* Actions */}
      <div className="flex justify-between items-center pt-3">
        {/* Toggle Status*/}
        <div className="flex justify-end gap-2 items-center ">
          {device.status === "on" ? (
            <p className="text-sm text-emerald-600">Yoqilgan</p>
          ) : (
            <p className="text-sm text-red-600">O'chirilgan</p>
          )}

          <Switch
            id="switch-disabled-unchecked"
            className="
              data-[state=checked]:bg-emerald-500
              data-[state=unchecked]:bg-red-500
            "
            checked={device.status === "on"}
            onCheckedChange={() => onToggle(device.id)}
          />
        </div>

        {/* Delete */}
        <Button
          size="icon"
          variant="destructive"
          className="cursor-pointer"
          onClick={() => onDelete(device.id)}
        >
          <Trash2 size={8} />
        </Button>
      </div>
    </Card>
  );
}
