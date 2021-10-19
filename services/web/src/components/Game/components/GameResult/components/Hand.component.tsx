import React, { FC } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Player } from "../../../../../models";

interface HandProps {
  player: Player;
}

export const Hand: FC<HandProps> = ({ player }) => {
  const renderCard = (card: string) => {
    return (
      <Card
        key={card}
        sx={{
          width: "100px",
          height: "180px",
          mr: 1,
          mt: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ textAlign: "center", fontWeight: "bold", mt: 2 }}
          gutterBottom
        >
          {card}
        </Typography>
      </Card>
    );
  };

  return (
    <Box key={player.player} sx={{ mt: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Player name: {player.player}
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Player points: {player.points}
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Cards:
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {player.cards.map((card) => renderCard(card))}
      </Box>
    </Box>
  );
};
