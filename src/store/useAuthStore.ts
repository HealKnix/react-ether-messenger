import { create } from 'zustand';

import { User } from '@/models/User';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuth: () => boolean;
  isUser: () => boolean;
  isAdmin: () => boolean;
}

export const useAuthStore = create<AuthState>()((set, state) => ({
  user: null,
  setUser: (user) => set({ user }),
  isAuth: () => Boolean(state().user),
  isUser: () => Boolean(state().user?.role === 'user'),
  isAdmin: () => Boolean(state().user?.role === 'admin'),
}));
