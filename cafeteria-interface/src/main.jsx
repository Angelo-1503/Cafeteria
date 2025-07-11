import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { Router } from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDom.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider>
			<Elements stripe={stripePromise}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</Elements>
			<GlobalStyles />
			<ToastContainer autoClose={2000} theme="dark" />
		</AppProvider>
	</React.StrictMode>,
);
