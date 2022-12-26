import * as t from "./BoardWrite.style"

export default function BoardWriteUI(props){
     return(<t.Wrapper>
       <t.Title>게시판 등록</t.Title>
       <t.WriterWrapper>
         <t.InputWrapper>
           <t.Label>작성자</t.Label>
           <t.Writer
             type="text"
             placeholder="이름을 적어주세요."
             onChange={props.onChangeWriter}
           />
           <div>{props.WriteError}</div>
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
         />
         <div>{props.titleError}</div>
       </t.InputWrapper>
       <t.InputWrapper>
         <t.Label>내용</t.Label>
         <t.Contents
           placeholder="내용을 작성해주세요."
           onChange={props.onChangeContents}
         />
         <div>{props.ContentsError}</div>
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
         <t.SubmitButton onClick={props.onClickSubmit}>등록하기</t.SubmitButton>
       </t.ButtonWrapper>
     </t.Wrapper>);
}