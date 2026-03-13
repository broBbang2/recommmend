import { create } from "zustand";
import { UserAnswers } from "@/types/recommendation";

interface RecommendationState {
  answers: Partial<UserAnswers>;
  setAnswer: <K extends keyof UserAnswers>(
    key: K,
    value: UserAnswers[K],
  ) => void;
  resetAnswers: () => void;
}

export const useRecommendationStore = create<RecommendationState>((set) => ({
  answers: {},
  setAnswer: (key, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [key]: value,
      },
    })),
  resetAnswers: () => set({ answers: {} }),
}));