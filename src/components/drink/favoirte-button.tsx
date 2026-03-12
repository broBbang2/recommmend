"use client";

import { Heart } from "lucide-react";
import { useFavoriteStore } from "@/stores/favorite-store";

interface FavoriteVuttonProps {
  id: string;
}

export default function FavoriteButton({ id }: FavoriteVuttonProps) {
  const toggleFavortie = useFavoriteStore((state) => state.toggleFavorite);
  const isFavorite = useFavoriteStore((state) => state.isFavorite(id));

  return (
    <button
      type="button"
      onClick={() => toggleFavortie(id)}
      className="rounded-full border p-2"
      aria-label="즐겨찾기 토글"
    >
      <Heart className={isFavorite ? "fill-current" : ""} size={16} />
    </button>
  );
}
