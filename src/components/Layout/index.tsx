import styled from 'styled-components';

// Import components
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';
import UserSettings from '../UserSettings';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <StyledMain>
    <Header />
    <Content>{children}</Content>
    <Footer />
    <UserSettings />
  </StyledMain>
);

export default Layout;
