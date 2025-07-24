import { Search } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { SxButtonSearch, SxTypography } from "./styles"

export const ButtonSearch: React.FC = () => {
  return (
    <>
      <Box flexGrow={1} sx={SxButtonSearch}>
        <IconButton>
          <Search />
        </IconButton>

        <Typography sx={SxTypography}>Search ⌘K</Typography>
      </Box>
    </>
  )
}