import styled from "styled-components";

export const CaixaVideo = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    
    video {
        min-height: 100%;
        min-width: 100%;
        position: fixed;
        top: 0;
    }

    .mascara{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        background: linear-gradient(109deg, rgba(10, 12, 16, 0.99)15%, rgba(10, 12, 16, 0.7)50%, rgba(10, 12, 16, 0.99) 85%);
    }
`;

export const CaixaPrincipal = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 3rem 2rem;
    margin: 0 auto;
    max-width: 1200px;  
`;

export const CaixaPrincipalItens = styled.div`
    max-width: 60rem;

h3 {
    color: #fff;
    font-size: 5rem;
    text-transform: uppercase;
    
}

p{
    font-size: 2rem;
    color: #fff;
    font-weight: lighter;
    padding: 1rem 0;
    line-height: 1.8;
}

div{
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export const CaixaSobre = styled.section`
    padding: 3rem 2rem;
    margin: 0 auto;
    max-width: 1200px;  
`;

export const Title = styled.h2`
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 3.5rem;
    font-size: 4rem;

    span{
        color: #d3ad7f;
    }
`;

export const SobreContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--black);
    gap: 1.5rem;
    flex-wrap: wrap;
`;
export const SobreImg = styled.div`
    flex: 1 1 45rem;
    padding: 2rem;

    img{
        width: 100%;
    }
`;

export const SobreTxt = styled.div`
    flex: 1 1 45rem;
    padding: 2rem;

    h3{
        font-size: 3rem;
        color: #fff;
    }

    p{
        font-size: 1.5rem;
        font-weight: lighter;
        color: #fff;
        line-height: 1.8;
        padding: 1rem 0;
    }
`;


