import { useQuery } from "@tanstack/react-query";
import { Pokemon, getPokemon } from "../api/pokemon";

export const usePokemon = (id: string) => {
  const { data, error, isLoading } = useQuery<Pokemon>({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });
  return { data, error, isLoading };
};
