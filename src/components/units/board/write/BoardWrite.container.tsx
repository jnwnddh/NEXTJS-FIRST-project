import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { IBoardWriteProps } from "./BoardWrite.type";

export default function BoardWrite(props: IBoardWriteProps) {
  //나중에 props타입으로바꿀때 interface IProps{
  //isEdit:isEdit=프롭스로받아온것 boolean=데이터의타입
  //data?: data?=있을수도잇고없을수도잇다any
  //}
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writeError, setWriteError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  //e:ChangeEvent<HTMLInputElement>인풋창에서체인지발생할때발생되는이벤트 =>타입설정리액트에서만듬
  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setWriteError("");
    }
    if (e.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setPasswordError("");
    }
    if (e.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setTitleError("");
    }
    if (e.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    if (e.target.value !== "") {
      setContentsError("");
    }
    if (e.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriteError("작성자를입력해주세요");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });

        alert("등록완료");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const onClickUpdate = async () => {
    if (typeof router.query.boardId !== "string") return;
    // interface IMYvariables{
    //   number:number
    //   writer?:string
    //   title?:string
    //   contents?:string
    // }
    // myVariables: IMYvariables 이런식으로 적용
    const myVariables: IUpdateBoardInput = {};
    if (title !== "") {
      myVariables.title = title;
    }
    if (contents !== "") {
      myVariables.contents = contents;
    }
    // if (password !== "") myVariables.password = password;
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: myVariables,
        },
      });
      alert("수정완료");
      void router.push(`/boards/${result.data?.updateBoard._id ?? ""}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BoardWriteUI
      isActive={isActive}
      isEdit={props.isEdit}
      writerError={writeError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      data={props.data}
    />
  );
}
