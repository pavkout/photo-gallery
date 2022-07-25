import Link from 'next/link';
import styled from 'styled-components';

import { User } from '../../types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 18px;
  border-radius: 10px;
  height: 220px;

  &:hover {
    cursor: ${(props) => (props.active ? 'pointer' : 'default')};
  }
`;

const AccountImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const StyledName = styled.h3`
  font-weight: bold;
`;

const StyledMail = styled.span`
  color: #a0a0a0;
  padding-top: 10px;
`;

type Props = {
  account: User;
  color: string;
  active: boolean;
};

const UserAccount = ({
  account: { id, name, email },
  color,
  active,
}: Props) => {
  // Create the displayed UI
  const content = (
    <Wrapper active={active}>
      <AccountImage color={color}>
        {`${name.split(' ')[0].charAt(0)}${name.split(' ')[1].charAt(0)}`}
      </AccountImage>
      {active && (
        <AccountDetails>
          <StyledName>{name}</StyledName>
          <StyledMail>{email}</StyledMail>
        </AccountDetails>
      )}
    </Wrapper>
  );

  // In case the displayed acount is the active then render an link.
  if (active) {
    return <Link href={`/users/${id}/albums`}>{content}</Link>;
  }

  return content;
};

export default UserAccount;
