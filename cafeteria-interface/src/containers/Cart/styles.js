import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #f5f5f5;
    min-height: 100vh;
    
`;

export const Banner = styled.div`
    background-color: #1f1f1f;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 180px;

    img {
        height: 130px;
        border-radius: 100px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding: 12px;
    color: #d3ad7f;
    text-align: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: calc(50% - 28px);
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #d3ad7f;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    gap: 40px;
    padding: 40px;
    margin: 0 auto;
`;
