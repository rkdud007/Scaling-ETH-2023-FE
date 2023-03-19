import { useState } from "react";
import * as S from "./CreateCommunity.styles";

const CreateCommunity = () => {
  const [memberships, setMemberships] = useState([]);
  return (
    <div>
      <div>1. Name your community</div>
      <input placeholder="Uniswap" />
      <div>2. Add memberships</div>
      <div>
        <div>
          <div>name</div>
          <input placeholder="name" />
        </div>
        <div>
          <div>condition</div>
          <div>
            <input placeholder="contract address" />
            <select>
              <option>function1</option>
              <option>function2</option>
            </select>
            <input placeholder="number of transaction" />
          </div>
        </div>
        <div>
          <div>benefit</div>
          <div>
            <select>
              <option>gasfee discount</option>
            </select>
            <input placeholder="write down percentage" />
          </div>
        </div>
      </div>
      <button>add membership</button>
    </div>
  );
};

export default CreateCommunity;
