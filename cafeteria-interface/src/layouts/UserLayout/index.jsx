import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Header } from '../../components';

export function UserLayout() {
	const location = useLocation();

	const noLayoutRoutes = ['/checkout', '/complete'];

	const shouldHideLayout = noLayoutRoutes.includes(location.pathname);

	return (
		<>
			{!shouldHideLayout && <Header />}
			<Outlet />
			{!shouldHideLayout && <Footer />}
		</>
	);
}
