import { Refresh } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const ButtonRefresh: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRefresh = () => {
    navigate(location.pathname, { replace: true });
    window.location.reload();
  };

  return (
    <>
      <IconButton onClick={handleRefresh}>
        <Refresh />
      </IconButton>
    </>
  )
}