import { defaultMessages } from "@configs/constants";
import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { SxContainer, SxPieChart, SxTotalValue } from "./styles";
import { PieChartCustomProps } from "./types";

export const PieChartCustom: React.FC<PieChartCustomProps & { colors?: string[] }> = ({ rawData }) => {
	const { labels, total } = rawData;

	// Mapeia labels para incluir a cor
	const dataWithColors = labels.map((label) => ({
		...label,
		value: label.quantity,
	}));

	return (
		<Box sx={SxContainer}>
			<PieChart
				series={[
					{
						data: dataWithColors,
						arcLabel: (item) => `${(item as any)?.percent?.toFixed(1) ?? "0"}%`,
						arcLabelMinAngle: 15,
						innerRadius: 16,
						outerRadius: 100,
						paddingAngle: 2,
						cornerRadius: 6,
						highlightScope: { fade: "global", highlight: "item" },
						faded: { innerRadius: 16, additionalRadius: -20, color: "gray" },
					},
				]}
				localeText={{
					noData: defaultMessages?.genericError404,
				}}
				sx={SxPieChart}
				width={250}
				height={250}
			/>

			{labels.length ? (
				<Box sx={SxTotalValue}>Total: {total.toFixed(2)}</Box>
			) : null}
		</Box>
	);
};

