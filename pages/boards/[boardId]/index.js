import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
query fetchBoard($boardId:ID!){
    fetchBoard(boardId: $boardId){
        _id
        writer
        title
        contents
        createdAt
    }
}

`

export default function BoardDetailPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables:{boardId:router.query.boardId},
    })

    return (
      <>
        <div>{data?.fetchBoard?.writer}</div>
        <div>{data?.fetchBoard?.createdAt}</div>
        <div>{data?.fetchBoard?.title}</div>
        <div>{data?.fetchBoard?.contents}</div>
      </>
    );

}