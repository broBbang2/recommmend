import { drinks } from "@/data/drinks";
import DrinkCard from "@/components/drink/drink-card";
import SectionTitle from "@/components/common/section-title";

export default function BeginnerPicks() {
  const beginnerDrinks = drinks.filter((drink) => drink.difficulty <= 2);

  return (
    <section>
      <SectionTitle title="입문자 추천" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {beginnerDrinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </section>
  );
}
