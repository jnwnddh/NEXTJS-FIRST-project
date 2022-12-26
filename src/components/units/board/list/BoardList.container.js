import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.query";


export default function BoardList(){

    const router = useRouter();
    const {data} = useQuery(FETCH_BOARDS);

    const onClickMoveToBoard = () =>{
        router.push("/boards/new");
    }

    const onClickMoveToBoardDetail = (e) =>{
        router.push(`/boards/${e.target.id}`);
    }

   console.log(data)


   return (
     <BoardListUI
       data={data}
       onClickMoveToBoard={onClickMoveToBoard}
       onClickMoveToBoardDetail={onClickMoveToBoardDetail}
     />
   );
}