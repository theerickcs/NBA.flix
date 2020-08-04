import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 4px solid;
  border-image: linear-gradient(65deg, var(--primary), var(--red), var(--white)) 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
