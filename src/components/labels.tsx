import { Grid, Typography } from '@mui/material';

const Label: React.FC<{ title: string; value: string }> = ({
	title,
	value,
}) => {
	return (
		<Typography>
			<Typography component='span' fontWeight='bold'>
				{title}
			</Typography>{' '}
			= {value}
		</Typography>
	);
};

export const Labels = () => {
	return (
		<Grid container padding={1}>
			<Grid size={{xs: 12, md: 4}}>
				<Label title='Customer' value='Open até Ag. Deploy em HOM' />
			</Grid>
			<Grid size={{xs: 12, md: 4}}>
				<Label title='Desenvolvimento' value='Fazendo' />
			</Grid>
			<Grid size={{xs: 12, md: 4}}>
				<Label title='LeadTime' value='A fazer até Ag. Deploy em HOM' />
			</Grid>
			<Grid size={{xs: 12, md: 4}}>
				<Label title='Throughput' value='Ag. Deploy em HOM' />
			</Grid>
			<Grid size={{xs: 12, md: 4}}>
				<Label title='CycleTime' value='Fazendo até Ag. Deploy em HOM' />
			</Grid>
			<Grid size={{xs: 12, md: 4}}>
				<Label title='CLS de Falhas' value='Ag. Deploy em HOM' />
			</Grid>
		</Grid>
	);
};
