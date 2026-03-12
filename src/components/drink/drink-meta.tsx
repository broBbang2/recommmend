interface DrinkMetaProps {
  abv: number;
  difficulty: number;
  category: string;
}

export default function DrinkMeta({
  abv,
  difficulty,
  category,
}: DrinkMetaProps) {
  return (
    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
      <span>도수 {abv}%</span>
      <span>난이도 {"⭐".repeat(difficulty)}</span>
      <span>{category}</span>
    </div>
  );
}
