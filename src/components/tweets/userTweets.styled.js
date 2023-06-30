import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  border-radius: 20px;
  border: 1px solid transparent;
  width: 380px;
  height: 460px;
  margin: 25px auto;
`;
export const UserMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
`;

export const AvatarImg = styled.img`
  border: 5px solid #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
      rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const TweetsFollowerText = styled.div`
  font-size: 18px;
  margin: 10px 10px;
`;

export const LoadMore = styled.button`
  width: 120px;
  height: 55px;
  border-radius: 35px;
  color: black;
  background-color: rgba(235, 216, 255, 1);
  margin: 15px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  outline: transparent;
  font-size: 18px;
`;
