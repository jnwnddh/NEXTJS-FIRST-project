import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";

interface ILayoutProps {
  children: JSX.Element;
}
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <Body>{props.children}</Body>
    </>
  );
}
