import styled from "@emotion/styled";

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-justify-content: left;
  width: 1050px;
  border: 1px solid red;
`;

export const Card = styled.div`
  width: 300px;
  margin: 10px;
  transition: 1.1s;

  :hover {
    transform: scale(1.05);
    transition: 1.1s;
  }
`;

export const Cardinfohover = styled.div`
  position: absolute;
  padding: 16px;
  opacity: 0;
  top: 0;
`;

export const Cardclokinfo = styled.div`
  float: right;
`;

export const CardImg = styled.img`
  border: 1px solid red;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Cardinfo = styled.div`
  background-color: #fff;
  padding: 16px 24px 24px 24px;
  width: 700px;
`;

export const CardCartegory = styled.div`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
`;
export const CardWrap = styled.div`
  border: 1px solid red;
  display: flex;
  width: 1000px;
`;
export const CardTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const CardBy = styled.div`
  font-size: 12px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`;

export const Cardauthor = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: #ad7d52;
`;
