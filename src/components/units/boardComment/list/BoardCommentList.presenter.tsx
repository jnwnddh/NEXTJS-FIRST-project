import { getMyDate } from "../../../commons/utils/utils";
import { PasswordInput, PasswordModal, Star } from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.type";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  console.log(props?.data?.fetchBoardComments);
  return (
    <div>
      {props.isOpenDeleteModal && (
        <PasswordModal visible={true} onOk={props.onClickDelete}>
          <div>비번입력</div>
          <PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </PasswordModal>
      )}

      {props.data?.fetchBoardComments?.map((el, _id) => {
        return (
          <div key={el._id}>
            <div>작성자:{el.writer}</div>
            <div>내용:{el.contents}</div>
            <Star value={el.rating} disabled />
            <div>{getMyDate(el?.createdAt)}</div>
            <button id={el._id} onClick={props.onClickDelete}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}

export const BoardCard = () => {};
