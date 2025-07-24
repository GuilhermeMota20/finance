import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import type { CardCustomProps } from "./types";
import { AnimationIn } from "../animation-in";

export const CardCustom: React.FC<CardCustomProps> = ({
  title,
  children,
  expanded = false
}) => {
  if (expanded) return (
    <AnimationIn>
      <Accordion expanded={expanded} >
        <AccordionSummary >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </AnimationIn>
  );

  return (
    <>
      <AnimationIn>
        <Accordion defaultExpanded >
          <AccordionSummary expandIcon={<ExpandMore />} >
            <Typography component="span">{title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            {children}
          </AccordionDetails>
        </Accordion>
      </AnimationIn>
    </>
  )
}