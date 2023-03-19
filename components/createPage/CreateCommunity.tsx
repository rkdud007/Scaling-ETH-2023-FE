import { useState } from "react";
import * as S from "./CreateCommunity.styles";

const CreateCommunity = () => {
  const [memberships, setMemberships] = useState([
    {
      name: "",
      condition: {
        contract: "",
        function: "",
        number: "",
      },
      benefit: {
        type: "gasfee",
        number: "",
      },
    },
  ]);
  const basicMembership = {
    name: "",
    condition: {
      contract: "",
      function: "",
      number: "",
    },
    benefit: {
      type: "gasfee",
      number: "",
    },
  };

  const addMembership = () => {
    const copy = [...memberships];
    const copyMembership = basicMembership;
    copy.push(copyMembership);
    setMemberships(copy);
  };

  const handleDeleteMembership = async (index: number) => {
    let copy = [...memberships];

    copy = copy.filter((item) => copy.indexOf(item) !== index);
    console.log(copy);
    setMemberships(copy);
  };
  return (
    <S.CommunityWrapper>
      <h1>Name your community</h1>
      <S.NameInputStyle placeholder="Uniswap" />
      <h1>Add memberships</h1>
      {memberships.map((membership) => (
        <S.MembershipBox key={membership.name}>
          <div>
            {memberships.indexOf(membership) >= 1 ? (
              <button
                onClick={async () =>
                  await handleDeleteMembership(memberships.indexOf(membership))
                }
              >
                delete
              </button>
            ) : (
              <></>
            )}
          </div>
          <S.OneRowMembershipBox>
            <p>name</p>
            <div>
              <input placeholder="name" />
            </div>
          </S.OneRowMembershipBox>
          <S.OneRowMembershipBox>
            <p>condition</p>
            <div>
              <input placeholder="contract address" />
              <select>
                <option>function1</option>
                <option>function2</option>
              </select>
              <input placeholder="number of transaction" />
            </div>
          </S.OneRowMembershipBox>
          <S.OneRowMembershipBox>
            <p>benefit</p>
            <div>
              <select>
                <option>gasfee discount</option>
              </select>
              <input placeholder="write down percentage" />
            </div>
          </S.OneRowMembershipBox>
        </S.MembershipBox>
      ))}

      <S.AddMembershipButton onClick={addMembership}>
        add membership
      </S.AddMembershipButton>
    </S.CommunityWrapper>
  );
};

export default CreateCommunity;
