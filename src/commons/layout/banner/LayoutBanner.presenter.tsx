import * as t from "./LayoutBanner.style";

export default function LayoutBannerUI() {
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
          <t.Card href="#">
            <t.Cardbackground src="https://cdn.pixabay.com/photo/2022/11/11/12/25/miniature-shopping-cart-7584887__340.jpg" />
            <t.Cardcontent>
              <t.Cardcategory>Category</t.Cardcategory>
              <t.Cardheading>쇼핑하러가기</t.Cardheading>
            </t.Cardcontent>
          </t.Card>
          <t.Card href="#">
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
