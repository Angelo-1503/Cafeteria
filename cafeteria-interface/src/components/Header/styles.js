import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--bg);
  border-bottom: var(--border);
  width: 100vw;

    
  
`;

export const SectionContainer = styled.section`
  display: flex;
    align-items: center;
    justify-content: space-between; /* Alinha esquerda e direita */
    padding: 1.5rem 4rem;
    margin: 0 auto;
    max-width: 1200px;  
`;

export const LeftContainer = styled.div`
  display: flex;
      align-items: center;
      gap: 50px;
`;
export const ImgLogo = styled.img`
      height: 6rem;
      border-radius: 100px;
`;

export const HeaderLink = styled.a`
margin: 0 1rem;
      font-size: 1.8rem;
      color: #fff;
      transition: 0.3s linear;
       color: ${(props) =>
    props.$isActiveStatus ? '#d3ad7f' : '#fff'};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `2px solid #d3ad7f` : 'none'};

      &:hover{
        color: #d3ad7f;
      border-bottom: 0.1rem solid #d3ad7f;
      padding-bottom: 0.5rem;
      cursor: pointer;
      }

      
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonHeader = styled.button`
background-color: #d3ad7f;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
  display: inline-block;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ButtonLog = styled.button`
  background: transparent;
	border: none;
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	font-size: 1rem;

	&:hover {
		opacity: 0.8;
	}
`;

export const LogoutButton = styled.button`
	background: transparent;
	border: none;
	color: #ff4d4d; /* vermelho suave, pode trocar se quiser */
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	font-size: 1.5rem;


	&:hover {
		opacity: 0.8;
	}
`;
