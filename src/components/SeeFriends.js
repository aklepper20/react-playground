import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../SeeFriends.css";
function SeeFriends() {
  const [randomFriendName, setRandomFriendName] = useState("");
  const [randomFriendImg, setRandomFriendImg] = useState("");
  const [button, setButton] = useState(true);

  useEffect(async () => {
    const res = await fetch("https://randomuser.me/api/?gender=male");
    const data = await res.json();
    return setRandomFriendName(data.results[0].name.first);
  }, [button]);

  useEffect(async () => {
    const resTwo = await fetch("https://randomuser.me/api/?gender=male");
    const dataTwo = await resTwo.json();
    return setRandomFriendImg(dataTwo.results[0].picture.large);
  }, [button]);

  return (
    <div className="profile">
      <BackArrow>
        <Link to="/">
          <a>
            <img src="/images/left.png" />
          </a>
        </Link>
      </BackArrow>
      <div className="profile__card">
        <h1>{randomFriendName}</h1>
        <img src={randomFriendImg} />
        <button onClick={() => setButton(!button)}>Change User</button>
      </div>
    </div>
  );
}

const BackArrow = styled.div`
  margin-top: 10px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export default SeeFriends;
