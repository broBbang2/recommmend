import Link from "next/link";
import { Drink } from "@/types/drink";
import DrinkMeta from "./drink-meta";
import FavoriteButton from "./favoirte-button";

interface DrinkCardProps {
  drink: Drink;
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{drink.name}</h3>
          <p className="text-sm text-muted-foreground">{drink.englishName}</p>
        </div>
        <FavoriteButton id={drink.id} />
      </div>

      <p className="mb-4 text-sm text-muted-foreground">{drink.description}</p>

      <DrinkMeta
        abv={drink.abv}
        difficulty={drink.difficulty}
        category={drink.category}
      />

      <div className="mt-4">
        <Link
          href={`/drinks/${drink.id}`}
          className="text-sm font-medium underline"
        >
          상세보기
        </Link>
      </div>
    </div>
  );
}
