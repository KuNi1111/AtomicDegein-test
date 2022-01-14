import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { HeaderOnly } from "../templates/HeaderOnly";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `テスト 太郎${val}`,
    image: "https://source.unsplash.com/NodtnCsLdTE",
    email: "123@goole.com",
    phone: "090-1234-5567",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザ一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
