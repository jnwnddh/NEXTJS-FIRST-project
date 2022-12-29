import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
export default function BoardDetail() {
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const router = useRouter();
  // if (typeof router.query.boardId !== "string") {
  //   alert("올바르지 않은 게시글 아이디입니다.");
  //   void router.push("/");
  //   return <></>;
  // }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );
  const onClickDelete = async () => {
    if (typeof router.query.boardId !== "string") return;
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
