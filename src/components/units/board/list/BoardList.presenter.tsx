import { getMyDate } from "../../../commons/utils/utils";
import * as t from "./BoardList.style";
import { IBoardListUIProps } from "./BoardList.type";
export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <t.Dropshadow>
      {props.data?.fetchBoards.map((el) => (
        <t.Container>
          <t.Wrapper key={el._id}>
            <t.Id>{String(el._id).slice(-4).toUpperCase()}</t.Id>
            <t.WriterWrapper>
              <t.Writer>닉네임:{el.writer}</t.Writer>
            </t.WriterWrapper>
            <t.Title id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </t.Title>
            <t.Date>{getMyDate(el.createdAt)}</t.Date>
          </t.Wrapper>
        </t.Container>
      ))}
    </t.Dropshadow>
  );
}
//  <t.Texts>asdasd</t.Texts>;
//
//  <t.Container>
//         <t.Titles>
//           <div>아이디</div>
//           <div>닉네임</div>
//           <div>제목</div>
//           <div>날짜</div>
//         </t.Titles>
//         {props.data?.fetchBoards.map((el) => (
//           <t.Wrapper key={el._id}>
//             <div>{String(el._id).slice(-4).toUpperCase()}</div>
//             <div>{el.writer}</div>
//             <div id={el._id} onClick={props.onClickMoveToBoardDetail}>
//               {el.title}
//             </div>
//             <div>{getMyDate(el.createdAt)}</div>
//           </t.Wrapper>
//         ))}
//       </t.Container>
//       <button onClick={props.onClickMoveToBoardNew}>게시글등록</button>
