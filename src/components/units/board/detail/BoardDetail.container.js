import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
export default function BoardDetail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const onClickDelete = async (e) => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      alert("게시물이삭제되엇습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };
  return <BoardDetailUI data={data} onClickDelete={onClickDelete} />;
}
