import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.style";
import { ILayoutHeaderProps } from "./LayoutHeader.type";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>💎LIVE중고마켓</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
