import React from 'react';
import ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './hooks/UserContext';
import { router } from './routes';

import GlobalStyles from './styles/GlobalStyles';

ReactDom.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
			<GlobalStyles />
		</UserProvider>
	</React.StrictMode>,
);
