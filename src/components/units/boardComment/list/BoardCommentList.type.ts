import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
//댓글가져올때타입명시
export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}
