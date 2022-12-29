import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
//작성타입명시
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
//업데이트타입명시
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}
//버튼타입명시
export interface ISubmitButtonProps {
  isActive: boolean;
}
//프롭스로넘길때타입명시
export interface IBoardWriteUIProps {
  isActive: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
