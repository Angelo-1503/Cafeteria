import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerButton = styled(Link)`
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
