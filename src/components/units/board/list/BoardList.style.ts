import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1030px;
  height: 30px;
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 300px;
  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;

  text-align: center;
`;
export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
`;
//////////////////////////////////////
// export const GlassWrap = styled.div`
//   justify-content: center;
//   align-items: center;
//   background-image: linear-gradient(15deg, #f7d3d3 0%, #89b3ba 150%);
//   background-size: cover;
//   background-position: center;
//   font-family: "Rajdhani", sans-serif;
// `;

export const Dropshadow = styled.div`
  border-radius: 10px;
  width: 1600px;
  height: 1000px;
  border-radius: 10px;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.3));
  justify-content: center;
  align-items: center;
  :before {
    display: block;
    content: "";
    position: absolute;
    top: 10em;
    /* height: calc(100% - 20em);
    width: calc(100% - 20em); */
    border-top: 2px solid rgba(225, 225, 225, 0.2);
    border-left: 1px solid rgba(225, 225, 225, 0.1);
    border-right: 1px solid rgba(225, 225, 225, 0.3);
    z-index: 2;
  }
`;

export const Glass = styled.div`
  height: 1300px;
  width: 1000px;
  left: 180px;
  position: relative;
  border-radius: 10px;
  background-image: linear-gradient(15deg, #f7d3d3 0%, #89b3ba 150%);
  background-size: cover;
  background-position: center;
  -webkit-clip-path: inset(10em);
  clip-path: inset(10em);
  filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanText = styled.div`
  z-index: 5;
  color: white;
  font-size: 4em;
  letter-spacing: 0.75em;
  padding-left: 0.375em;
`;
export const Texts = styled.div`
  /* position: absolute; */
  position: relative;
  z-index: 5;
  color: black;
  right: 0px;
  width: 100px;
`;
export const Writer = styled.div`
  position: relative;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  float: left;
`;

export const Title = styled.div`
  text-align: center;
  color: black;
  cursor: pointer;
`;

export const Date = styled.div`
  color: black;
`;
export const Id = styled.div`
  color: black;
`;
export const WriterWrapper = styled.div`
  text-align: center;
  left: 10px;
  width: 200px;
`;
