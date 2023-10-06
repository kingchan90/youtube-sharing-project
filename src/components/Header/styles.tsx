import styled from 'styled-components';
import Logo from '../Logo'

export const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

export const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; /* To push buttons to the right */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`

export const StyledLogo = styled(Logo)`
  height: 40px; /* Adjust the height as needed */
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;


export const CustomerName = styled.span``
