import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subscriptionType: 'monthly' | 'yearly';
  planType: 'arcade' | 'advanced' | 'pro';
  addOns: null | 'online service' | 'larger storage' | 'customizable profile';
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setSubscriptionType: (subscriptionType: 'monthly' | 'yearly') => void;
  setPlanType: (planType: 'arcade' | 'advanced' | 'pro') => void;
  setAddOns: (
    addOns: null | 'online service' | 'larger storage' | 'customizable profile',
  ) => void;
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      name: '',
      email: '',
      phone: '',
      subscriptionType: 'monthly',
      planType: 'arcade',
      addOns: null,
      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setPhone: (phone) => set({ phone }),
      setSubscriptionType: (subscriptionType) => set({ subscriptionType }),
      setPlanType: (planType) => set({ planType }),
      setAddOns: (addOns) => set({ addOns }),
    }),
    {
      name: 'form-data',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
