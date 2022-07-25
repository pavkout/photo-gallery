import styled from 'styled-components';

const StyledContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: stretch;
  min-height: calc(100vh - 230px);
  width: 100%;
`;

type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
