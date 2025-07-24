import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { useThemeMode } from '@stores/useThemeMode';
import { colors } from '@theme/colors';
import { AnimationIn } from '../animation-in';
import { SxIconCard, SxInfoCard, SxInfoCardContent } from './styles';
import type { InfoCardProps } from './types';

export const InfoCard: React.FC<InfoCardProps> = ({
	title,
	value,
	type,
	icon
}) => {
	const { themeMode } = useThemeMode();
	const { palette } = useTheme();

	const valueColor =
		type === 'SAIDA'
			? palette?.error?.main
			: themeMode === 'dark'
				? colors?.primary?.contrastText
				: colors?.primary?.light;

	return (
		<AnimationIn>
			<Card sx={SxInfoCard} >
				<CardContent sx={SxInfoCardContent} >
					<Typography
						fontSize={14}
						fontWeight='bold'
						textAlign='center'
					>
						{title}
					</Typography>

					<Box display='flex' alignItems='baseline' gap={1}>
						<Typography
							fontSize={28}
							fontWeight='bold'
							color={valueColor}
						>
							{value}
						</Typography>

						{icon && (
							<Box sx={SxIconCard} >{icon}</Box>
						)}
					</Box>
				</CardContent>
			</Card>
		</AnimationIn>
	);
};
