import Logo from '../../assets/logo.jpg';
import { CartItems } from '../../components/CartItems';
import { CartResume } from '../../components/CartResume';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
	return (
		<Container>
			<Banner>
				<img src={Logo} alt="logo-radalap" />
			</Banner>
			<Title>Pedido</Title>
			<Content>
				<CartItems />
				<CartResume />
			</Content>
		</Container>
	);
}
