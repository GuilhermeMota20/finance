import { useMapNavTree } from "@hooks/useMapNavTree";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../logo";
import { DrawerNavProps } from "./types";

export const DrawerNav: React.FC<DrawerNavProps> = ({ setMobileOpen }) => {
  const { navListTree } = useMapNavTree();
  const location = useLocation();
  const navigation = useNavigate();

  const handleNaviagteToPath = (path: string) => {
    navigation(path);

    if (setMobileOpen) {
      setMobileOpen(false);
    };
  };

  return (
    <>
      <Stack height={"100%"} alignItems="center" >
        <Logo />

        <List>
          {navListTree?.map(({ path, text, icon }, index) => (
            <ListItem key={`${index}-${path}`} onClick={() => handleNaviagteToPath(path!)} >
              <ListItemButton selected={location?.pathname == path}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </>
  )
}