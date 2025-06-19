import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Video from '../../assets/coffe.mp4';
import Sobre from '../../assets/sobre.jpeg';
import { Header } from '../../components/Header';
import {
	CaixaPrincipal,
	CaixaPrincipalItens,
	CaixaSobre,
	CaixaVideo,
	SobreContainer,
	SobreImg,
	SobreTxt,
	Title,
} from './styles';

export function Home() {
	const location = useLocation();

	useEffect(() => {
		if (location.state?.scrollTo === 'bottom') {
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
		} else if (location.state?.scrollTo === 'top') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location.state]);

	return (
		<>
			<CaixaVideo>
				<video src={Video} loop muted autoPlay />
				<div className="mascara" />
			</CaixaVideo>

			<Header />

			<CaixaPrincipal>
				<CaixaPrincipalItens>
					<h3>Seja Bem-vindo a radalaP</h3>
					<p>
						Na radalaP, o café vai além da bebida — é uma experiência.
						Selecionamos grãos 100% arábica de alta qualidade, vindos das
						melhores fazendas do Brasil, torrados artesanalmente para realçar
						cada nota de sabor. Do clássico espresso ao nosso exclusivo
						cappuccino cremoso com toque de canela, cada gole é pensado para
						aquecer seu dia.
					</p>
				</CaixaPrincipalItens>
			</CaixaPrincipal>

			<CaixaSobre>
				<Title>
					<span>Sobre</span> Nós
				</Title>
				<SobreContainer>
					<SobreImg>
						<img src={Sobre} alt="Sobre" />
					</SobreImg>

					<SobreTxt>
						<h3>O que faz nosso café especial</h3>
						<p>
							Origem selecionada: Usamos apenas grãos de origem controlada,
							vindos de pequenas fazendas que respeitam o tempo da natureza e o
							trabalho justo dos produtores. Torra artesanal: Cada lote é
							torrado em pequenas quantidades para garantir frescor e preservar
							os aromas naturais do café.
						</p>
						<p>
							Preparo com técnica e paixão: Nossos baristas são treinados para
							extrair o melhor de cada xícara, com precisão, carinho e
							criatividade. Feito para encantar: Do aroma ao último gole,
							queremos que você sinta o conforto, a energia e a autenticidade de
							um café feito com alma.
						</p>
					</SobreTxt>
				</SobreContainer>
			</CaixaSobre>
		</>
	);
}
