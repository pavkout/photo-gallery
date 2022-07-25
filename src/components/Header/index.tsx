import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSliders } from '@fortawesome/free-solid-svg-icons';

// Import store
import { useAppContext } from '../../state/store';
import { openSettings } from '../../state/actions';

const StyledHeader = styled.header`
  position: relative;
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0 15px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      to right top,
      #78909c,
      #627781,
      #4d5f68,
      #39484f,
      #263238
    );
    border-radius: 0 0 50% 50%/ 0 0 100% 100%;
    transform: scaleX(2);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 2.5em;
  font-family: fantasy;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettignsButton = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
`;

const AccountIcon = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
`;

const Header = () => {
  // Use router instance.
  const router = useRouter();

  // Use context
  const { dispatch } = useAppContext();

  // Display the account icon only when user is on album of photos page, not in the root page
  const displayAccountIcon = router.route !== '/';

  const handleSettingsClick = () => {
    dispatch(openSettings());
  };

  return (
    <StyledHeader>
      <Content>
        <Link href='/'>
          <Title>TheLook</Title>
        </Link>
        <ButtonGroup>
          {displayAccountIcon && (
            <AccountIcon>
              <Link href='/'>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ height: '20px', width: '20px', color: '#fff' }}
                />
              </Link>
            </AccountIcon>
          )}
          <SettignsButton role='button' onClick={handleSettingsClick}>
            <FontAwesomeIcon
              icon={faSliders}
              style={{ height: '20px', width: '20px', color: '#fff' }}
            />
          </SettignsButton>
        </ButtonGroup>
      </Content>
    </StyledHeader>
  );
};

export default Header;
