import { Backdrop, Card, CircularProgress } from "@mui/material";
import { useBackdropLoading } from "@stores/backdrop-loading";
import { SxBackdropCustom, SxIcon, SxIconContainer } from "./styles";

export const BackdropCustom: React.FC = () => {
  const { openStates } = useBackdropLoading((state) => state);

  if (!openStates?.length) return;

  const open = openStates?.some((state) => state === true);

  return (
    <>
      <Backdrop sx={SxBackdropCustom} open={open} >
        <Card sx={SxIconContainer} >
          <CircularProgress sx={SxIcon} />
        </Card>
      </Backdrop>
    </>
  )
}