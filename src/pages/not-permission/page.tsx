import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SxNotPermissionCard, SxNotPermissionContainer, SxNotPermissionContent, SxNotPermissionIcon } from "./styles";

export const NotPermission: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToInitialPage = () => {
    navigate('/');
  };

  return (
    <>
      <Stack sx={SxNotPermissionContainer} >
        <Card sx={SxNotPermissionCard} >
          <CardContent sx={SxNotPermissionContent} >
            <GppMaybeOutlinedIcon sx={SxNotPermissionIcon} />

            <Typography
              fontSize={24}
              fontWeight="bold"
              gutterBottom
            >
              Acesso negado: você não tem permissão para visualizar esta página.
            </Typography>

            <Typography
              component='span'
              fontSize={12}
              color="gray"
            >
              Caso você acredite que deveria ter acesso, entre em contato com o administrador do sistema para solicitar a permissão necessária.
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