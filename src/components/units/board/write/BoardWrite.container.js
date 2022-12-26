import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.query";
import BoardWriteUI from "./BoardWrite.presenter"


export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [WriteError, setWriteError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [ContentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setWriteError("");
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setPasswordError("");
    }
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setTitleError("");
    }
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (e.target.value !== "") {
      setContentsError("");
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
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (<BoardWriteUI 
  WriteError={WriteError}
  passwordError={passwordError}
  titleError={titleError}
  ContentsError={ContentsError}
  onChangeWriter={onChangeWriter}
  onChangePassword={onChangePassword}
  onChangeTitle={onChangeTitle}
  onChangeContents={onChangeContents}
  onClickSubmit={onClickSubmit}
  />);
}
