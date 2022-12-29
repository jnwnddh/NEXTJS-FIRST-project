import * as t from "./BoardWrite.style";
import { IBoardWriteUIProps } from "./BoardWrite.type";
// interface IProps{
//알트 + 컨트롤 + 방향키아래 = 다중글쓰기 =====중요
//컨트롤 쉬프트 오른쪽 특정복사 ============중요
// WriteError: ()=>void
// passwordError: ()=>void
// titleError: ()=>void
// ContentsError: ()=>void
// onChangeWriter: (e:ChangeEvent<HTMLInputElement>)=>void
// onChangePassword: (e:ChangeEvent<HTMLInputElement>)=>void
// onChangeTitle: (e:ChangeEvent<HTMLInputElement>)=>void
// onChangeContents: (e:ChangeEvent<HTMLInputElement>)=>void
// onClickSubmit: ()=>void
// onClickUpdate: ()=>void
// isActive: boolean
// isEdit: boolean
// data: any
//}

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <t.Wrapper>
      <t.Title> {props.isEdit ? "수정하기" : "등록하기"}</t.Title>
      <t.WriterWrapper>
        <t.InputWrapper>
          <t.Label>작성자</t.Label>
          {props.isEdit ? (
            <div>{props.data?.fetchBoard.writer}</div>
          ) : (
            <t.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            />
          )}
          <div>{props.writerError}</div>
        </t.InputWrapper>
        <t.InputWrapper>
          <t.Label>비밀번호</t.Label>
          <t.Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={props.onChangePassword}
          />
          <div>{props.passwordError}</div>
        </t.InputWrapper>
      </t.WriterWrapper>
      <t.InputWrapper>
        <t.Label>제목</t.Label>
        <t.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <div>{props.titleError}</div>
      </t.InputWrapper>
      <t.InputWrapper>
        <t.Label>내용</t.Label>
        <t.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <div>{props.contentsError}</div>
      </t.InputWrapper>
      <t.InputWrapper>
        <t.Label>주소</t.Label>
        <t.ZipcodeWrapper>
          <t.Zipcode placeholder="07250" />
          <t.SearchButton>우편번호 검색</t.SearchButton>
        </t.ZipcodeWrapper>
        <t.Address />
        <t.Address />
      </t.InputWrapper>
      <t.InputWrapper>
        <t.Label>유튜브</t.Label>
        <t.Youtube placeholder="링크를 복사해주세요." />
      </t.InputWrapper>
      <t.ImageWrapper>
        <t.Label>사진첨부</t.Label>
        <t.UploadButton>+</t.UploadButton>
        <t.UploadButton>+</t.UploadButton>
        <t.UploadButton>+</t.UploadButton>
      </t.ImageWrapper>
      <t.OptionWrapper>
        <t.Label>메인설정</t.Label>
        <t.RadioButton type="radio" id="youtube" name="radio-button" />
        <t.RadioLabel htmlFor="youtube">유튜브</t.RadioLabel>
        <t.RadioButton type="radio" id="image" name="radio-button" />
        <t.RadioLabel htmlFor="image">사진</t.RadioLabel>
      </t.OptionWrapper>
      <t.ButtonWrapper>
        <t.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </t.SubmitButton>
      </t.ButtonWrapper>
    </t.Wrapper>
  );
}
