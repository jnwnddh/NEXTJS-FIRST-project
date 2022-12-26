export default function BoardDetailUI(props){

    return (
      <>
        <div>{props.data?.fetchBoard?.writer}</div>
        <div>{props.data?.fetchBoard?.createdAt}</div>
        <div>{props.data?.fetchBoard?.title}</div>
        <div>{props.data?.fetchBoard?.contents}</div>
      </>
    );
}