import { create } from "zustand";
import { UserAnswers } from "@/types/recommendation";

interface RecommendationsState {
  answers: Partial<UserAnswers>;
  serAnswer: <K extends keyof UserAnswers>(key: K, value: UserAnswers[k]) => void;
}

export const useRecommendationStore = create<RecommendationState>((set) => ({
  answers: {},
  setAnswer: (key, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [key]: value
      }
    })),
  resetAnswers: () => set({ answers: {} })
}));