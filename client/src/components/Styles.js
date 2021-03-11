import styled from 'styled-components';

export const Paper = styled.div`
    height: ${(props) => props.height || '250px'};
    width: ${(props) => props.width || '250px'};
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    background-color: white;
`;
