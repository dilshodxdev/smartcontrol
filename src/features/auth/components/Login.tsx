import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Login() {
  const login = useAuth((s) => s.login);

  const [email, setEmail] = useState("dilshodxdev"); // yolgon login
  const [password, setPassword] = useState("12345"); // yolgon parol
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const ok = login(email, password);

    if (!ok) {
      setError("Email yoki parol noto‘g‘ri");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-40 space-y-4">
      <h1 className="text-xl font-bold text-center">Login</h1>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button className="w-full">Login</Button>
    </form>
  );
}
