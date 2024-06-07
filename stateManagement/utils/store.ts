import { create } from 'zustand';

interface DogBreedStore {
  data: { message: Record<string, string[]> } | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
}

export const useDogBreedStore = create<DogBreedStore>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async (url) => {
    set({ loading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      set({ data, loading: false, error: null });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ loading: false, error: error.message });
      } else {
        set({ loading: false, error: 'An unknown error occurred.' });
      }
    }
  },
}));
