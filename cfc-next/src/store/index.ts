import { create } from 'zustand';

type ViewState = 'home' | 'menu' | 'contact' | 'product';

interface AppState {
  currentView: ViewState;
  isPreloaded: boolean;
  activeCategory: string;
  activeAllergenFilter: string[];
  selectedProduct: any | null;
  setView: (view: ViewState) => void;
  setPreloaded: (status: boolean) => void;
  setCategory: (category: string) => void;
  toggleAllergen: (allergen: string) => void;
  selectProduct: (product: any | null) => void;
}

export const useStore = create<AppState>((set) => ({
  currentView: 'home',
  isPreloaded: false,
  activeCategory: 'All',
  activeAllergenFilter: [],
  selectedProduct: null,
  setView: (view) => set({ currentView: view }),
  setPreloaded: (status) => set({ isPreloaded: status }),
  setCategory: (category) => set({ activeCategory: category }),
  toggleAllergen: (allergen) =>
    set((state) => ({
      activeAllergenFilter: state.activeAllergenFilter.includes(allergen)
        ? state.activeAllergenFilter.filter((a) => a !== allergen)
        : [...state.activeAllergenFilter, allergen],
    })),
  selectProduct: (product) => set({ selectedProduct: product }),
}));
