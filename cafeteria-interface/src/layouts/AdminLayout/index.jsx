import { Navigate, Outlet } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
	const { admin: isAdmin } = JSON.parse(
		localStorage.getItem('cafeteria:userData'),
	);

	return isAdmin ? (
		<Container>
			<SideNavAdmin />
			<main>
				<section>
					<Outlet />
				</section>
			</main>
		</Container>
	) : (
		<Navigate to="/login" />
	);
}
