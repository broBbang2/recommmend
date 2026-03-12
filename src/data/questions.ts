import { QuestionItem } from "@/types/recommendation";

export const questions: QuestionItem[] = [
  {
    id: "sweetness",
    question: "단맛은 어느 정도 좋아하시나요?",
    options: [
      { label: "별로 안 좋아해요", value: 1 },
      { label: "보통이에요", value: 3 },
      { label: "달달한 게 좋아요", value: 5 }
    ]
  },
  {
    id: "abv",
    question: "도수는 어느 정도까지 괜찮나요?",
    options: [
      { label: "낮은 도수가 좋아요", value: "low" },
      { label: "중간 정도면 괜찮아요", value: "medium" },
      { label: "센 술도 괜찮아요", value: "high" }
    ]
  },
  {
    id: "sparkling",
    question: "탄산이 있는 술을 좋아하시나요?",
    options: [
      { label: "좋아해요", value: true },
      { label: "상관없어요", value: "any" },
      { label: "없는 게 좋아요", value: false }
    ]
  },
  {
    id: "situation",
    question: "어떤 상황에서 마실 예정인가요?",
    options: [
      { label: "데이트", value: "date" },
      { label: "홈파티", value: "home-party" },
      { label: "혼술", value: "solo" },
      { label: "선물용", value: "gift" },
      { label: "식사와 함께", value: "meal" }
    ]
  },
  {
    id: "beginner",
    question: "입문자용으로 부드러운 술을 원하시나요?",
    options: [
      { label: "네", value: true },
      { label: "상관없어요", value: "any" },
      { label: "개성 강한 술도 괜찮아요", value: false }
    ]
  }
];