import { StoreUIProps } from "./Store.type";
import * as t from "./Store.style";
export default function StoreUI(props: StoreUIProps) {
  return (
    <>
      <t.Cards>
        {props.data?.fetchUseditems.map((el, index) => (
          <t.Card key={el._id}>
            <t.Cardinfohover>
              <t.Cardclokinfo></t.Cardclokinfo>
            </t.Cardinfohover>
            <t.CardWrap>
              <t.CardImg src="https://cdn.pixabay.com/photo/2022/10/20/11/26/landscape-7534634_640.jpg" />

              <t.Cardinfo>
                <t.CardTitle>asdasdasdasd</t.CardTitle>
                <t.CardCartegory>{el.price}원</t.CardCartegory>
                <t.CardBy>
                  by <t.Cardauthor>{el.name}</t.Cardauthor>
                </t.CardBy>
              </t.Cardinfo>
            </t.CardWrap>
          </t.Card>
        ))}
      </t.Cards>
    </>
  );
}

// <div>
//     {props.data?.fetchUseditems.map((el, index) => (
//       <div key={el._id}>
//         <div>이름{el.name}</div>
//         <div>{el.price}원</div>
//       </div>
//     ))}
//   </div>
