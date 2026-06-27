import { create } from 'zustand';

type ViewState = 'home' | 'menu' | 'contact' | 'product' | 'impressum' | 'datenschutz' | 'agb';

interface AppState {
  currentView: ViewState;
  isPreloaded: boolean;
  isMobileMenuOpen: boolean;
  activeCategory: string;
  activeAllergenFilter: string[];
  selectedProduct: any | null;
  setView: (view: ViewState) => void;
  setPreloaded: (status: boolean) => void;
  setMobileMenuOpen: (status: boolean) => void;
  setCategory: (category: string) => void;
  toggleAllergen: (allergen: string) => void;
  selectProduct: (product: any | null) => void;
}

export const useStore = create<AppState>((set) => ({
  currentView: 'home',
  isPreloaded: false,
  isMobileMenuOpen: false,
  activeCategory: 'All',
  activeAllergenFilter: [],
  selectedProduct: null,
  setView: (view) => set({ currentView: view }),
  setPreloaded: (status) => set({ isPreloaded: status }),
  setMobileMenuOpen: (status) => set({ isMobileMenuOpen: status }),
  setCategory: (category) => set({ activeCategory: category }),
  toggleAllergen: (allergen) =>
    set((state) => ({
      activeAllergenFilter: state.activeAllergenFilter.includes(allergen)
        ? state.activeAllergenFilter.filter((a) => a !== allergen)
        : [...state.activeAllergenFilter, allergen],
    })),
  selectProduct: (product) => set({ selectedProduct: product }),
}));
