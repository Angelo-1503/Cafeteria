import Select from 'react-select';
import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 1 6px;
`;

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) =>
    props.$isActiveStatus ? '#d3ad7f' : '#625e5e'};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `2px solid #d3ad7f` : 'none'};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
`;
