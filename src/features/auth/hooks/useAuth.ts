import { create } from "zustand";
import type { User } from "../types";

type AuthStore = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  login: (email: string, password: string) => {
    // Yolgon login
    if (email === "dilshodxdev" && password === "12345") {
      set({ user: { email } });
      return true;
    }
    return false;
  },
  logout: () => set({ user: null }),
}));
