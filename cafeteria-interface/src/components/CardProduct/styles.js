import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    border-radius: 8px;
    background-color: #1e1e1e;
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
    position: relative;

    div {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;


        p{
            font-size: 18px;
            color: #ffffff;
            line-height: 20px;
            font-weight: 700;
            margin-top: 40px;
        }

        strong {
            font-size: 22px;
            color:var(--main-color);
            line-height: 20px;
            font-weight: 800;
        }
    }
`;

export const Cardimage = styled.img`
    height: 100px;
    width: 100px;
    position: absolute;
    background-position: center;
    top: -50px;
    object-fit: cover;
    border-radius: 8px; /* opcional: para cantos arredondados */
`;

