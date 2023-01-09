import { useRouter } from "next/router";
import * as t from "./LayoutNavCard.style";

export default function LayoutNavCardUI() {
  const router = useRouter();
  const noticeboard = () => {
    void router.push("/boards");
  };
  const gostore = () => {
    void router.push("/store");
  };
  return (
    <t.Container>
      <t.Herosection>
        <t.Cardgrid>
          <t.Card>
            <t.Cardbackground src="https://cdn.pixabay.com/photo/2017/02/08/08/52/vypocetni-2048169__340.jpg" />
            <t.Cardcontent>
              <t.Cardcategory>Category</t.Cardcategory>
              <t.Cardheading>마이페이지</t.Cardheading>
            </t.Cardcontent>
          </t.Card>
          <t.Card onClick={gostore}>
            <t.Cardbackground src="https://cdn.pixabay.com/photo/2022/11/11/12/25/miniature-shopping-cart-7584887__340.jpg" />
            <t.Cardcontent>
              <t.Cardcategory>Category</t.Cardcategory>
              <t.Cardheading>쇼핑하러가기</t.Cardheading>
            </t.Cardcontent>
          </t.Card>
          <t.Card onClick={noticeboard}>
            <t.Cardbackground src="https://cdn.pixabay.com/photo/2022/01/25/12/16/laptop-6966045__340.jpg" />
            <t.Cardcontent>
              <t.Cardcategory>Category</t.Cardcategory>
              <t.Cardheading>자유게시판</t.Cardheading>
            </t.Cardcontent>
          </t.Card>
        </t.Cardgrid>
      </t.Herosection>
    </t.Container>
  );
}
