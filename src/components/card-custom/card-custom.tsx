import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { AnimationIn } from "../animation-in";
import type { CardCustomProps } from "./types";

export const CardCustom: React.FC<CardCustomProps> = ({
  title,
  children,
  expanded = true
}) => {
  if (expanded) return (
    <AnimationIn>
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            fontSize={18}
            fontWeight='bold'
          >
            {title}
          </Typography>
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
        <Card>
          <CardHeader title={title} />

          <CardContent>
            {children}
          </CardContent>
        </Card>
      </AnimationIn>
    </>
  )
}