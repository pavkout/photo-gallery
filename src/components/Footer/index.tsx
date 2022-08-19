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

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledText = styled.span`
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        © {new Date().getFullYear()} Pavlos Koutoglou. All rights reserved.
        Design By - <b>Pavlos Koutoglou</b>
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
