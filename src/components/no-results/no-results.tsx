import { Stack, Typography } from "@mui/material";
import { AnimationIn } from "../animation-in";
import { SxNoResults } from "./styles";

export const NoResults: React.FC = () => {
  return (
    <>
      <AnimationIn>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={SxNoResults}
        >
          <Typography fontWeight="400" >
            Nenhum resultado encontrado.
          </Typography>
        </Stack>
      </AnimationIn>
    </>
  )
}