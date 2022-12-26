import { useRouter } from "next/router";
import { getMyDate } from "../../../commons/utils/utils";

export default function BoardDetailUI(props){

  const router = useRouter();
    console.log(router)
    
    return (
      <>
        <div>상세페이지</div>
        <div>{props.data?.fetchBoard?.writer}</div>
        <div>{getMyDate(props.data?.fetchBoard?.createdAt)}</div>
        <div>{props.data?.fetchBoard?.title}</div>
        <div>{props.data?.fetchBoard?.contents}</div>
        <button
          onClick={() =>
            router.push(`/boards/${router.query.boardId}/edit`)
          }
        >
          수정하기로 이동
        </button>
      </>
    );
}