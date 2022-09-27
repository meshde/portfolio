import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  list: string[];
};
const BulletList: React.FC<Props> = ({ title, list }) => {
  const [showList, setShowList] = useState(false);
  const Container = styled.div`
    margin-left: 2%;
  `;
  const Title = styled.div`
    &:before {
      content: "${showList ? "▼" : "▶"}    ";
      font-size: small;
    }

    &:hover {
      cursor: pointer;
    }

    font-weight: bold;
  `;
  return (
    <Container>
      <Title onClick={() => setShowList((x) => !x)}>{title}</Title>
      {showList ? (
        <ul>
          {list.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
};
export default BulletList;
