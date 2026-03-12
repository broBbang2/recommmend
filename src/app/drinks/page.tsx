import PageContainer from "@/components/common/page-container";
import SectionTitle from "@/components/common/section-title";
import { drinks } from "@/data/drinks";
import DrinkCard from "@/components/drink/drink-card";

export default function DrinksPage() {
  return (
    <PageContainer>
      <SectionTitle
        title="술 둘러보기"
        description="와인, 위스키, 칵테일을 자유롭게 탐색해보세요."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </PageContainer>
  );
}