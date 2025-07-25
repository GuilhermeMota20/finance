import { Backdrop, Card, CircularProgress, Typography } from "@mui/material";
import { SxBackdropCustom, SxIcon, SxIconContainer } from "./styles";
import { BackdropCustomProps } from "./types";

export const BackdropCustom: React.FC<BackdropCustomProps> = ({ open = false }) => {
  if (!open) return;

  return (
    <>
      <Backdrop sx={SxBackdropCustom} open={open} >
        <Card sx={SxIconContainer} >
          <CircularProgress sx={SxIcon} />
          <Typography>Carregando...</Typography>
        </Card>
      </Backdrop>
    </>
  )
}