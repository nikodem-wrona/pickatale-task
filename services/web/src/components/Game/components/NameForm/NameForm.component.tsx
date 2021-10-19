import React, { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface NameFormProps {
  name: string;
  handleNameChange: (name: string) => void;
  handleSubmit: () => void;
}

export const NameForm: FC<NameFormProps> = ({
  name,
  handleNameChange,
  handleSubmit,
}) => {
  return (
    <Card
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        padding: "10px",
      }}
      noValidate
      autoComplete="off"
      variant="outlined"
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", fontWeight: "bold", mt: 2 }}
        gutterBottom
      >
        This is the Blackjack simulator. You are going to play against Bob.
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", fontWeight: "bold", mt: 2 }}
        gutterBottom
      >
        Enter your name, and click Play to run the simulation
      </Typography>
      <FormControl sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1 }}>
          <TextField
            id="player"
            label="Name"
            variant="outlined"
            type="text"
            margin="normal"
            fullWidth
            value={name}
            onChange={(event) => {
              handleNameChange(event.currentTarget.value);
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{ p: 1.5 }}
          color="success"
          disableElevation
          onClick={handleSubmit}
        >
          Play
        </Button>
      </FormControl>
    </Card>
  );
};
