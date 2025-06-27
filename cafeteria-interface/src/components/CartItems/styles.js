import styled from 'styled-components';

export const ProductImage = styled.img`

    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #1f1f1f;
        border-radius: 4px;
        background-color: var(--main-color);
        border: none;

        &:hover{
           opacity: 0.6;
        }
    }
`;

export const EmptyCart = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
`;

export const TotalPrice = styled.p`
    font-weight: bold;


`;
export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;
