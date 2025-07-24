import { Divider, Stack, Typography } from "@mui/material"
import React from "react"
import type { HeadingProps } from "./types"
import { AlertCustom } from "../alert-custom"
import { AnimationIn } from "@components/animation-in"

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  infoTitle,
  info
}) => {
  return (
    <>
      <AnimationIn>
        <Stack sx={{ position: "relative" }} spacing={2}>
          <Stack>
            <Typography
              fontSize={28}
              fontWeight='bold'
            >
              {title}
            </Typography>

            <Typography
              component='span'
              fontSize={12}
              color="gray"
            >
              {description}
            </Typography>
          </Stack>

          {info ? (
            <AlertCustom title={infoTitle} >
              {info}
            </AlertCustom>
          ) : null}
        </Stack>
      </AnimationIn>

      <AnimationIn>
        <Divider />
      </AnimationIn>
    </>
  )
}