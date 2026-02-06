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
  const isOn = device.status === "on";

  return (
    <Card
      className={`
        w-xs
        h-45
        p-4
        rounded-2xl
        flex flex-col
        justify-between
        transition
        duration-200
        ${
          isOn
            ? "bg-zinc-900 text-white"
            : "bg-white text-zinc-900 border border-zinc-200"
        }
      `}
    >
      {/* Top */}
      <div className="flex justify-between items-center">
        {/* Icon */}
        <div
          className={`
            w-11 h-11
            rounded-full
            flex items-center justify-center
            text-sm
            font-semibold
            tracking-wide
            ${isOn ? "bg-zinc-800 text-white" : "bg-zinc-100 text-zinc-700"}
          `}
        >
          {device.name[0].toUpperCase()}
        </div>

        {/* Switch */}
        {/* Switch */}
        <Switch
          checked={isOn}
          onCheckedChange={() => onToggle(device.id)}
          className={`
    relative
    h-8 w-11
    rounded-full
    border
    transition-all
    duration-200
    shadow-inner

    ${isOn ? "bg-gray-500 border-gray-600" : "bg-zinc-300 border-zinc-400"}
  `}
        >
          <span
            className={`
      pointer-events-none
      absolute
      top-0.5 left-0.5
      h-5 w-5
      rounded-full
      bg-white
      border
      border-zinc-300
      shadow-md
      transition-transform
      duration-200
      ease-in-out

      ${isOn ? "translate-x-5" : "translate-x-0"}
    `}
          />
        </Switch>
      </div>

      {/* Content */}
      <div className="space-y-0.5">
        {/* Title */}
        <p
          className="
            text-[15px]
            font-semibold
            leading-tight
            tracking-tight
          "
        >
          {device.name}
        </p>

        {/* Status */}
        <p
          className={`
            text-xs
            font-medium
            tracking-wide
            ${isOn ? "text-zinc-400" : "text-zinc-500"}
          `}
        >
          {isOn ? "YOQILGAN" : "O‘CHIRILGAN"}
        </p>
      </div>

      {/* Delete */}
      <div className="flex justify-end items-center">
        <Button
          size="icon"
          variant="ghost"
          className="
            h-7 w-7
            text-zinc-400
            hover:text-red-500
            hover:bg-transparent
            transition
            
          "
          onClick={() => onDelete(device.id)}
        >
          <Trash2 size={15} />
        </Button>
      </div>
    </Card>
  );
}
