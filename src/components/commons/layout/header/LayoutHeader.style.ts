import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: white;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  background-color: #ffd600;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`;
export const LoginButton = styled.span`
  background-color: gray;
  font-weight: bold;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`;
