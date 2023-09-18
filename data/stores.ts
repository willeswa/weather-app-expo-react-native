import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { City } from "./types";

type WeatherStore = {
    cities: City[];
    setCities: (cities: City[]) => void;
}

export const watherStore = create<WeatherStore>()(persist(
    (set, get) => ({
        cities: [],
        setCities: (cities: City[]) => set({ cities })
    }),
    {
        name: "weather-storage",
        storage: createJSONStorage(() => AsyncStorage),
        partialize: (state) => ({ city: state.cities }),
    },
    
))