import React, { useState, useEffect } from "react";
import userHero from "../images/main_hero.png";
import {
  Hero,
  MainContainer,
  UserMenu,
  AvatarImg,
  TweetsFollowerText,
  LoadMore,
} from "./userTweets.styled";
import HenselAvatar from "../images/HanselAvatar.png";

const UserCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(user.followers);

  useEffect(() => {
    const following = localStorage.getItem(`following_${user.id}`);
    setIsFollowing(following === "true");
  }, [user.id]);

  const handleFollow = () => {
    if (isFollowing) {
      localStorage.setItem(`following_${user.id}`, "false");
      setIsFollowing(false);
      setFollowerCount((prevCount) => prevCount - 1);
    } else {
      localStorage.setItem(`following_${user.id}`, "true");
      setIsFollowing(true);
      setFollowerCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <MainContainer>
      <Hero>
        <img src={userHero} alt={"user background"} />
        <div>
          <AvatarImg
            src={HenselAvatar}
            width={62}
            height={62}
            alt="user avatar"
          />
        </div>

        <UserMenu>
          <p>{user.user}</p>
          <li>
            <TweetsFollowerText> Tweets: {user.tweets}</TweetsFollowerText>
            <TweetsFollowerText> Followers: {followerCount.toLocaleString()}</TweetsFollowerText>
            <button
              onClick={handleFollow}
              className={isFollowing ? "Following" : ""}
              style={{
                width: 120,
                height: 35,
                backgroundColor: "#ebd8ff",
                borderRadius: 25,
                outline: "transparent",
                border: "none"
              }}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </li>
        </UserMenu>
      </Hero>
    </MainContainer>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadUsers = () => {
    setIsLoading(true);

    fetch(
      `https://6488234f0e2469c038fd0ab2.mockapi.io/users?page=${page}&limit=3`
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data]);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {isLoading && <p>Loading...</p>}
      {!isLoading && <LoadMore onClick={handleLoadMore}>Load More</LoadMore>}
    </div>
  );
};

export default UserList;
