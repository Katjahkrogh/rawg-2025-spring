import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<GameResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return {games, error};
};
