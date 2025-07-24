import { Grow } from "@mui/material"
import type { AnimationInProps } from "./types"

export const AnimationIn: React.FC<AnimationInProps> = ({
  children
}) => {
  if (!children) return;

  return (
    <>
      <Grow in {...({ timeout: 1000 })}>
        {children}
      </Grow>
    </>
  )
}