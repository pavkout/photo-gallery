import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right top,
    #78909c,
    #627781,
    #4d5f68,
    #39484f,
    #263238
  );
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
