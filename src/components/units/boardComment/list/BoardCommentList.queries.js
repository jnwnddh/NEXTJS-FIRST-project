import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
mutation createBoardComment($createBoardCommentInput:CreateBoardInput!,boardId:ID!){
    createBoardComment(createBoardCommentInput:$createBoardCommentInput)
}

`;
