import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  onAdd: (name: string) => void;
};

export function AddDevice({ onAdd }: Props) {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name) return;
    onAdd(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        placeholder="Qurilma nomi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-white"
      />
      <Button type="submit">Qo'shish</Button>
    </form>
  );
}
