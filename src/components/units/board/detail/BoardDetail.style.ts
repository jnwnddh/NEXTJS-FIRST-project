import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const IconWrapper = styled.div`
  text-align: center;
`;
export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  color: #ffd600;
`;
export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;
export const DislikeCount = styled.div`
  color: #828282;
`;
