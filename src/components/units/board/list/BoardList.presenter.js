import { getMyDate } from "../../../commons/utils/utils";
import * as t from "./BoardList.style"
export default function BoardListUI(props){
  return (
    <>
      <t.Container>
        <t.Titles>
          <div>아이디</div>
          <div>닉네임</div>
          <div>제목</div>
          <div>날짜</div>
        </t.Titles>
        {props.data?.fetchBoards.map((el) => (
          <t.Wrapper key={el._id}>
            <div>{String(el._id).slice(-4).toUpperCase()}</div>
            <div>{el.writer}</div>
            <div id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </div>
            <div>{getMyDate(el.createdAt)}</div>
          </t.Wrapper>
        ))}
      </t.Container>
      <button onClick={props.onClickMoveToBoard}>게시글등록</button>
    </>
  );
}