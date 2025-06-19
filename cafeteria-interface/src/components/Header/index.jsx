import { ShoppingCart, UserCircle } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import LogoCafeteria from '../../assets/logo.jpg';
import { useUser } from '../../hooks/UserContext';
import {
	ButtonHeader,
	ButtonLog,
	Buttons,
	Container,
	HeaderLink,
	ImgLogo,
	LeftContainer,
	LogoutButton,
	SectionContainer,
} from './styles';

export function Header() {
	const navigate = useNavigate();
	const { userInfo, logout } = useUser();

	const isLoggedIn = Object.keys(userInfo).length > 0;

	const scrollToBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<Container>
			<SectionContainer>
				<LeftContainer>
					<ImgLogo src={LogoCafeteria} alt="Logo da Cafeteria" />

					<nav>
						<HeaderLink
							onClick={() => navigate('/', { state: { scrollTo: 'top' } })}
						>
							Início
						</HeaderLink>
						<HeaderLink
							onClick={() => navigate('/', { state: { scrollTo: 'bottom' } })}
						>
							Sobre
						</HeaderLink>
						<HeaderLink onClick={() => navigate('/cardapio')}>
							Cardápio
						</HeaderLink>
					</nav>
				</LeftContainer>

				{isLoggedIn ? (
					<Buttons>
						<ButtonLog onClick={() => navigate('/carrinho')}>
							<ShoppingCart size={24} weight="bold" />
						</ButtonLog>

						<ButtonLog>
							<UserCircle size={24} weight="bold" />
						</ButtonLog>

						<LogoutButton onClick={handleLogout}>Sair</LogoutButton>
					</Buttons>
				) : (
					<Buttons>
						<ButtonHeader onClick={() => navigate('/login')}>
							Entrar
						</ButtonHeader>
						<ButtonHeader onClick={() => navigate('/cadastro')}>
							Criar Conta
						</ButtonHeader>
					</Buttons>
				)}
			</SectionContainer>
		</Container>
	);
}
