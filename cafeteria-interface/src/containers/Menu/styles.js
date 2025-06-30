import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/background.png';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    height: 100%;

`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    position: relative;

    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #1f1f1f;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;
        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #fff;
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? '#d3ad7f' : '#484848')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => (props.$isActiveCategory ? '2px solid #d3ad7f' : 'none')};

  transition: color 0.2s, border-bottom 0.2s;

  &:hover {
    color: #d3ad7f;
  }
`;


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;

`;

export const ButtonBack = styled(Link)`
    color: #d3ad7f ;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 81%;
    margin-bottom: 50px;
`;
