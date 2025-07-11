import { SignOut } from '@phosphor-icons/react';
import { useResolvedPath } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, Footer, Img, NavLink, NavLinkContainer } from './styles';

export function SideNavAdmin() {
	const { logout } = useUser();
	const { pathname } = useResolvedPath();

	return (
		<Container>
			<Img src={Logo} alt="Hamburguer logo" />
			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink
						key={link.id}
						to={link.path}
						$isActive={pathname === link.path}
					>
						{link.icon}
						<span>{link.label}</span>
					</NavLink>
				))}
			</NavLinkContainer>
			<Footer>
				<NavLink to="/login" onClick={logout}>
					<SignOut />
					<span>Sair</span>
				</NavLink>
			</Footer>
		</Container>
	);
}
