import * as t from "./LayoutBanner.style";

export default function LayoutBanner() {
  return (
    <t.Container>
      <t.Logo>
        <t.Bwrap>
          LIVE<t.Spans>중</t.Spans>고<t.Spans>마</t.Spans>켓
        </t.Bwrap>
      </t.Logo>
    </t.Container>
  );
}
