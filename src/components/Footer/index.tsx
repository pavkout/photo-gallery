import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} League. All rights reserved.</span>
    </StyledFooter>
  );
};

export default Footer;
