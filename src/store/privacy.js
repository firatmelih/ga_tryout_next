import { create } from 'zustand'
const INITIAL_STATE = {
  allowed: true,
}
export const usePrivacyStore = create((set) => ({
  ...INITIAL_STATE,
  setAllowed: (allowed) => set({ allowed }),
}))
