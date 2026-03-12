import { notFound } from "next/navigation";
import PageContainer from "@/components/common/page-container";
import { drinks } from "@/data/drinks";

interface DrinkDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DrinkDetailPage({
  params
}: DrinkDetailPageProps) {
  const { id } = await params;
  const drink = drinks.find((item) => item.id === id);

  if (!drink) {
    notFound();
  }

  return (
    <PageContainer className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">{drink.category}</p>
        <h1 className="text-3xl font-bold">{drink.name}</h1>
        <p className="mt-2 text-muted-foreground">{drink.englishName}</p>
      </div>

      <div className="rounded-2xl border p-6">
        <p>{drink.description}</p>
        <div className="mt-4 space-y-2 text-sm">
          <p>도수: {drink.abv}%</p>
          <p>가격대: {drink.priceRange}</p>
          <p>난이도: {"⭐".repeat(drink.difficulty)}</p>
        </div>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">추천 이유</h2>
        <p className="mt-2 text-muted-foreground">{drink.recommendationReason}</p>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">어울리는 음식</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {drink.foodPairings.map((food) => (
            <span key={food} className="rounded-full border px-3 py-1 text-sm">
              {food}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">입문자 팁</h2>
        <p className="mt-2 text-muted-foreground">{drink.beginnerTip}</p>
      </div>
    </PageContainer>
  );
}