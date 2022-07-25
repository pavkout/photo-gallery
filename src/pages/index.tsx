import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

// Import components
import AccountSwitch from '../components/AccountSwitcher';

// Import types
import { User } from '../types';

// Import API
import { getUsers } from '../utils/api';

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-context: center;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  min-height: calc(100vh - 230px);
`;

const Header = styled.h2`
  font-weight: bold;
  color: #757171;
`;

const Desc = styled.span`
  color: #a0a0a0;
  padding-top: 10px;
`;

type Props = {
  users?: User[];
};

const HomePage: NextPage<Props> = ({ users = [] }) => {
  return (
    <Container>
      <Header>Welcome to TheLook</Header>
      <Desc>Please select an account to discover user photos.</Desc>
      <AccountSwitch accounts={users} />
    </Container>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await getUsers();

  // Pass data to the page via props
  return { props: { users: users } };
};
