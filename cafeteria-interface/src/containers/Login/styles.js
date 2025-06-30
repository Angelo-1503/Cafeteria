import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/home-img.jpeg';

export const Container = styled.div`
   display: flex;
  width: 100vw;
  height: 100vh; /* <- troque min-height por height */
  overflow: hidden;
`;


export const LeftContainer = styled.div`
  background-image: url('${Background}');
  background-size: cover;
  background-position: center;

  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 10%;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  flex: 1;
  height: 100%;
  background-color: #1e1e1e;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #fff;

    span {
        color: #d3ad7f;
        font-family: 'Road Rage', sans-serif;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #d3ad7f;
`;
