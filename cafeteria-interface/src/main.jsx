import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { router } from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalStyles />
		<AppProvider>
			<Elements stripe={stripePromise}>
				<RouterProvider router={router} />
			</Elements>
		</AppProvider>
		<ToastContainer autoClose={2000} theme="dark" />
	</React.StrictMode>,
);
