import { useGlobalStyles } from '@hooks/useGlobalStyles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useRouter } from '@routes/useRouter';
import { ptBR } from 'date-fns/locale';
import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ProviderTheme } from './theme/providerTheme';
import { Analytics } from "@vercel/analytics/react"

export function App() {
	const { router } = useRouter();
	const { globalStyles } = useGlobalStyles();

	return (
		<>
			<CssBaseline />
			<GlobalStyles styles={globalStyles} />

			<AuthContextProvider>
				<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
					<ProviderTheme>
						<SnackbarProvider maxSnack={3}>
							<RouterProvider router={router} />
						</SnackbarProvider>
					</ProviderTheme>
				</LocalizationProvider>
			</AuthContextProvider>

			<Analytics />
		</>
	);
}
