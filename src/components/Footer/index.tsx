import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #ff0081, #6827b0);
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        © {new Date().getFullYear()} League, Inc. All rights reserved. Design By
        - <b>Pavlos Koutoglou</b>
      </span>
    </StyledFooter>
  );
};

export default Footer;
