import styled from "@emotion/styled";
import LayoutBanner from "./Banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavCard from "./navCard/LayoutNavCard.container";

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
      <LayoutNavCard />
      <Body>{props.children}</Body>
    </>
  );
}
