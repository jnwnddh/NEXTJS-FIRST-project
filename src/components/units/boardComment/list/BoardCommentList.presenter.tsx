import { getMyDate } from "../../../commons/utils/utils";
import { IBoardCommentListUIProps } from "./BoardCommentList.type";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  console.log(props?.data?.fetchBoardComments);
  return (
    <div>
      {props.data?.fetchBoardComments?.map((el, _id) => {
        return (
          <div key={el._id}>
            <div>작성자:{el.writer}</div>
            <div>내용:{el.contents}</div>
            <button id={el._id} onClick={props.onClickDelete}>
              삭제
            </button>
            <div>{getMyDate(el?.createdAt)}</div>
          </div>
        );
      })}
    </div>
  );
}

export const BoardCard = () => {};
