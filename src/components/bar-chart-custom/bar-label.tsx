import { styled } from "@mui/material";
import { BarLabelProps } from "@mui/x-charts";

export const BarLabel = (props: BarLabelProps) => {
  const {
    color,
    x,
    y,
    width,
    ...otherProps
  } = props;

  const Text = styled('text')(({ theme }) => ({
    ...theme?.typography?.body2,
    stroke: 'none',
    fill: (theme.vars || theme)?.palette?.text?.primary,
    transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
    textAnchor: 'middle',
    dominantBaseline: 'central',
    pointerEvents: 'none',
  }));

  return (
    <Text
      {...otherProps}
      fill={color}
      textAnchor="middle"
      x={x + width / 2}
      y={y - 8}
    />
  );
};