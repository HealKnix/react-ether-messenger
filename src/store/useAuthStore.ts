import { create } from 'zustand';
import { User } from '../models/User';

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
