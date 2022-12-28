import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.presenter";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoarCommentWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 0,
            //별점
          },
          boardId: router.query.boardId,
          //게시글아이디식별
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onClickWrite={onClickWrite}
      onChangeContents={onChangeContents}
      contents={contents}
    />
  );
}
