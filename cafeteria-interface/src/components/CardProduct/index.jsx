import PropTypes from 'prop-types';
import { useCart } from '../../hooks/CartContext';
import { CartButton } from '../CartButton';
import { Cardimage, Container } from './styles';

export function CardProduct({ product }) {
	const { putProductInCart } = useCart();

	console.log(product);

	return (
		<Container>
			<Cardimage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.currencyValue}</strong>
			</div>
			<CartButton onClick={() => putProductInCart(product)}></CartButton>
		</Container>
	);
}

CardProduct.propTypes = {
	product: PropTypes.object,
};
