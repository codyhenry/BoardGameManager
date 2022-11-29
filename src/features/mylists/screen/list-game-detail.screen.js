import React from "react";

import { GameInfoCard } from "../components/list-game-info-card.component";

export const GameDetailScreen = ({ route }) => {
  const { game } = route.params;
  return (
    <>
      <GameInfoCard game={game} />
    </>
  );
};
