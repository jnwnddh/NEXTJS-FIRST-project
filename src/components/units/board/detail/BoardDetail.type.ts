import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  //void=아무것도리턴하지않고잇다
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}
