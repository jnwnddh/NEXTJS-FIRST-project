import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import BoardWriteUI from "./BoardWrite.presenter"


export default function BoardWrite(props) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [WriteError, setWriteError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [ContentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const router = useRouter();
  const [isActive,setIsActive] = useState(false)
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setWriteError("");
    }
      if (e.target.value && password && title  && contents) {
        setIsActive(true);
      }else{
        setIsActive(false)
      }
  };
  const onChangePassword = (e) => {
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
  const onChangeTitle = (e) => {
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
  const onChangeContents = (e) => {
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
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    try{
      const result = await updateBoard({
        variables:{
          boardId:router.query.boardId,
          password:password,
          updateBoardInput:{
            title:title,
            contents:contents
          }
        }
      })
      router.push(`/boards/${router.query.boardId}`);
      alert("수정완료")
    }catch(error){
      alert(error.message)
    }
  }
  return (
    <BoardWriteUI
      isActive={isActive}
      isEdit={props.isEdit}
      WriteError={WriteError}
      passwordError={passwordError}
      titleError={titleError}
      ContentsError={ContentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}
