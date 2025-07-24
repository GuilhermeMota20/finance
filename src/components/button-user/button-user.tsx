import { useAuth } from "@context/AuthContext";
import { Logout as LogoutIcon, Settings } from "@mui/icons-material";
import { Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SxAvatar, SxButtonUser, SxMenu } from "./styles";
import { ButtonUserProps } from "./types";

export const ButtonUser: React.FC<ButtonUserProps> = ({
  data
}) => {
  const { Logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="text"
        size="small"
        color="info"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={SxButtonUser}
        onClick={handleClick}
      >
        <Avatar sx={SxAvatar} src={data?.photoURL!} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: SxMenu,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar src={data?.photoURL!} />
          <Stack direction="column">
            <Typography>{data?.displayName ?? "-"}</Typography>
            <Typography>{data?.email ?? "-"}</Typography>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disabled>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>
        <MenuItem onClick={Logout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  )
}