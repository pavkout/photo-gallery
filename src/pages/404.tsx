import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 230px);
`;

const Error = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const Number = styled.div`
  color: #757171;
  font-weight: 900;
  font-size: 15rem;
  line-height: 1;
`;

const Illustration = styled.div`
  position: relative;
  width: 12.2rem;
  margin: 0 2.1rem;
`;

const Circle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 12.2rem;
  height: 11.4rem;
  border-radius: 50%;
  background-color: #757171;
`;

const Clip = styled.div`
  position: absolute;
  bottom: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 12.5rem;
  height: 13rem;
  border-radius: 0 0 50% 50%;
`;

const Paper = styled.div`
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 9.2rem;
  height: 12.4rem;
  border: 0.3rem solid #757171;
  background-color: white;
  border-radius: 0.8rem;

  &::before {
    content: '';
    position: absolute;
    top: -0.7rem;
    right: -0.7rem;
    width: 1.4rem;
    height: 1rem;
    background-color: white;
    border-bottom: 0.3rem solid #757171;
    transform: rotate(45deg);
  }
`;

const Face = styled.div`
  position: relative;
  margin-top: 2.3rem;
`;

const Eyes = styled.div`
  position: absolute;
  top: 0;
  left: 2.4rem;
  width: 4.6rem;
  height: 0.8rem;
`;

// Create the keyframes
const eye = keyframes`
0% {
  height: 0.8rem;
}
50% {
  height: 0.8rem;
}
52% {
  height: 0.1rem;
}
54% {
  height: 0.8rem;
}
100% {
  height: 0.8rem;
}
`;

const Eye = styled.div`
  position: absolute;
  bottom: 0;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #293b49;
  animation-name: ${eye};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const RosyCheeks = styled.div`
  position: absolute;
  top: 1.6rem;
  width: 1rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #fdabaf;

  &.left {
    left: 1.4rem;
  }

  &.right {
    right: 1.4rem;
  }
`;

const Mouth = styled.div`
  position: absolute;
  top: 3.1rem;
  left: 50%;
  width: 1.6rem;
  height: 0.2rem;
  border-radius: 0.1rem;
  transform: translateX(-50%);
  background-color: #293b49;
`;

const Text = styled.div`
  margin-top: 5rem;
  font-weight: 300;
  color: #293b49;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  padding: 1.2rem 3rem;
  color: white;
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  background-color: #37474f;
  height: 2rem;
  border-radius: 10rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const LinkText = styled.span`
  color: #fff;
  user-select: none;
`;

const Custom404 = () => {
  return (
    <Wrapper>
      <Error>
        <Number>4</Number>
        <Illustration>
          <Circle />
          <Clip>
            <Paper>
              <Face>
                <Eyes>
                  <Eye className='left' />
                  <Eye className='right' />
                </Eyes>
                <RosyCheeks className='left' />
                <RosyCheeks className='right' />
                <Mouth />
              </Face>
            </Paper>
          </Clip>
        </Illustration>
        <Number>4</Number>
      </Error>

      <Text>Oops. The page you're looking for doesn't exist.</Text>
      <Button>
        <StyledLink href='/'>
          <LinkText>Back Home</LinkText>
        </StyledLink>
      </Button>
    </Wrapper>
  );
};

export default Custom404;
