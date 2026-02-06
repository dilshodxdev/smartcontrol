import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { GalleryVerticalEnd } from "lucide-react";

export default function Login() {
  const login = useAuth((s) => s.login);

  // Fake login data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(
    "Iltimos kutib turib automatik login amalga oshirilmoqda...",
  );

  setTimeout(() => {
    setEmail("dilshodxdev");
    setPassword("12345");
    setError("");
  }, 3000);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const ok = login(email, password);

    if (!ok) {
      setError("Email yoki parol noto‘g‘ri");
    }
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Logo */}
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            SmartControl
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
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
        </div>
      </div>

      {/* Right Image */}
      {/* <div className="bg-muted relative hidden lg:block">
        <img
          src="/smartcontrol.jpg"
          alt="Login image"
          className="absolute inset-0 h-full w-full object-cover object-right
            dark:brightness-[0.2] dark:grayscale"
        />
      </div> */}

      <div className="bg-muted relative hidden lg:block overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
  absolute inset-0
  h-full w-full
  object-cover object-center
  dark:brightness-[0.2] dark:grayscale
  bg-black
"
        >
          <source src="/login-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}
