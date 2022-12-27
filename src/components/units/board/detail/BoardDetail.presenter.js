import { useRouter } from "next/router";
import { getMyDate } from "../../../commons/utils/utils";

export default function BoardDetailUI(props) {
  const router = useRouter();
  console.log(props.data);
  return (
    <>
      <div>상세페이지</div>
      <div>작성자</div>
      <div>{props.data?.fetchBoard?.writer}</div>
      <div>{getMyDate(props.data?.fetchBoard?.createdAt)}</div>
      <div>제목</div>
      <div>{props.data?.fetchBoard?.title}</div>
      <div>내용</div>
      <div>{props.data?.fetchBoard?.contents}</div>
      <button
        onClick={() => router.push(`/boards/${router.query.boardId}/edit`)}
      >
        수정하기로 이동
      </button>
      <button onClick={props.onClickDelete}>삭제</button>
    </>
  );
}
