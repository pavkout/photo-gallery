import styled from 'styled-components';

const StyledContent = styled.section`
  height: 100vh;
`;

type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
