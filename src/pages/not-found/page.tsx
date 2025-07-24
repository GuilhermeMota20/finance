import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SxNotFoundCard, SxNotFoundContainer, SxNotFoundContent, SxNotFoundIcon } from "./styles";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToInitialPage = () => {
    navigate('/');
  };

  return (
    <>
      <Stack sx={SxNotFoundContainer} >
        <Card sx={SxNotFoundCard} >
          <CardContent sx={SxNotFoundContent} >
            <RemoveCircleOutlineOutlinedIcon sx={SxNotFoundIcon} />

            <Typography
              fontSize={22}
              fontWeight='bold'
              gutterBottom
            >
              Oops! Esta página não foi encontrada.
            </Typography>

            <Typography
              component='span'
              fontSize={12}
              color="gray"
            >
              A página que você procura não está disponível no momento. Por favor, verifique o endereço ou tente novamente mais tarde.
            </Typography>

            <Button startIcon={<KeyboardBackspaceOutlinedIcon />} onClick={handleGoToInitialPage} variant="text" color="inherit">
              Voltar para a página inicial
            </Button>
          </CardContent>
        </Card>
      </Stack >
    </>
  )
}