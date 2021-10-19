import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Result } from "../../../../models";

import { Hand } from "./components/Hand.component";

interface GameResultProps {
  result: Result;
}

export const GameResult: FC<GameResultProps> = ({ result }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" component="div" sx={{ mt: 2 }} gutterBottom>
        The winner is:
        <Typography
          variant="h3"
          component="div"
          sx={{ fontWeight: "bold", color: "green" }}
          gutterBottom
        >
          {result.winner}
        </Typography>
      </Typography>
      <Box>
        {result.players.map((player) => (
          <Hand player={player} />
        ))}
      </Box>
    </Box>
  );
};
