import { SituationTag } from "./drink";

export interface UserAnswers {
  sweetness: number;
  abv: "low" | "medium" | "high";
  sparkling: boolean | "any";
  situation: SituationTag;
  beginner: boolean | "any";
}

export interface QuestionOption<T = string | number | boolean> {
  label: string;
  value: T;
}

export interface QuestionItem {
  id: keyof UserAnswers;
  question: string;
  options: QuestionOption[];
}