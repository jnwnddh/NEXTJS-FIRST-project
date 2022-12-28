export default function BoardCommentWriteUI(props) {
  return (
    <div>
      댓글작성폼
      <input placeholder="작성자" onChange={props.onChangeWriter} />
      <input placeholder="비밀번호" onChange={props.onChangePassword} />
      <input placeholder="내용입력" onChange={props.onChangeContents} />
      <div>{props.contents.length}/100</div>
      <button onClick={props.onClickWrite}>등록하기</button>
    </div>
  );
}