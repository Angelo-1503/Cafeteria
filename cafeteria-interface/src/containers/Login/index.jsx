import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useUser } from '../../hooks/UserContext';

import { useEffect } from 'react';
import Logo from '../../assets/logo.jpg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	Link,
	RightContainer,
	Title,
} from './styles';

export function Login() {
	const navigate = useNavigate();
	const { putUserData } = useUser();

	const schema = yup
		.object({
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter pelo menos 6 caracteres')
				.required('Digite uma senha'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			const { data: userData } = await toast.promise(
				api.post('/session', {
					email: data.email,
					password: data.password,
				}),
				{
					pending: 'Realizando login...',
					success: 'Login realizado com sucesso!',
					error: 'Email ou senha Incorretos!',
				},
			);

			putUserData(userData);

			navigate('/'); // ✅ Agora a navegação acontece logo após o sucesso
		} catch (error) {
			console.error('Erro no login:', error);
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="Logo Cafeteria" />
			</LeftContainer>

			<RightContainer>
				<Title>
					Olá, seja bem vindo a <span>radalaP!</span>
					<br />
					Acesse agora a <span>sua conta.</span>
				</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" {...register('email')} />
						<p>{errors?.email?.message}</p>
					</InputContainer>

					<InputContainer>
						<label htmlFor="password">Senha</label>
						<input type="password" id="password" {...register('password')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</Form>

				<p>
					Não possui conta? <Link to="/cadastro">Clique aqui</Link>
				</p>
			</RightContainer>
		</Container>
	);
}
