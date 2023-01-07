import styled from "@emotion/styled";

export const Container = styled.div`
  height: 300px;
  background-size: cover;
  margin-top: 10px;
  border-radius: 20px;
`;

export const Logo = styled.div`
  text-align: center;
  width: 65%;
  height: 250px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  user-select: none;
`;

export const Bwrap = styled.b`
  font-family: "Vibur";
  font-size: 100px;
  color: white;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em skyblue, 0 0 0.5em skyblue,
    0 0 0.1em #ff4444, 0 10px 3px #000;
  position: relative;
  bottom: 100px;
  @font-face {
    font-family: "Vibur";
    src: url("./Vibur-Regular.ttf") format("ttf");
  }
`;
export const Spans = styled.span`
  animation: blink linear infinite 2s;
  :nth-of-type(2) {
    animation: blink linear infinite 5s;
  }
  @keyframes blink {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: #333;
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #333;
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: #333;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }
`;
