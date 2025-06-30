import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    background: #d3ad7f;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        opacity: 0.8; 
    }

    &:active{
        opacity: 0.6;
    }
`;
