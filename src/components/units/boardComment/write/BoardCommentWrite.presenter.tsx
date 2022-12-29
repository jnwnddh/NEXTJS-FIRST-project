import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.type";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <div>
      댓글작성폼
      <input
        placeholder="작성자"
        onChange={props.onChangeWriter}
        value={props.writer}
      />
      <input
        placeholder="비밀번호"
        type="password"
        onChange={props.onChangePassword}
        value={props.password}
      />
      <input
        maxLength={100}
        placeholder="내용입력"
        onChange={props.onChangeContents}
        value={props.contents}
      />
      <div>{props.contents.length}/100</div>
      <button onClick={props.onClickWrite}>등록하기</button>
    </div>
  );
}
