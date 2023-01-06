import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 10px;
  border-radius: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  position: relative;
  left: 25px;
  bottom: 15px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  position: relative;
  left: 20px;
  border: 1px solid red;
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  position: relative;
  top: 5px;
  left: 0px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled.img`
  position: relative;
  top: 10px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  position: relative;
  top: 10px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: black;
  padding-top: 15px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
  position: relative;
  left: 50px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
