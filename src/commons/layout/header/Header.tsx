import React from "react";
import * as t from "./Header.style";
export default function ContainerHeader() {
  return (
    <t.Wrap>
      <t.Logo>로고</t.Logo>
      <t.LoginWrap>
        <t.Login>로그인</t.Login>
        <t.Signup>회원가입</t.Signup>
      </t.LoginWrap>
    </t.Wrap>
  );
}
