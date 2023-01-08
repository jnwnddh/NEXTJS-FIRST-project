import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbar.presenter";
import { ISearchbars01Props } from "./Searchbar.type";
import _ from "lodash";
export default function Searchbars01(props: ISearchbars01Props) {
  //_lodash를이용하여 반복요청x
  const getDebounce = _.debounce((value: string) => {
    //세개다프롭스로받고
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 1000);
  //검색한값의값들을 스테이트에 넣어준다
  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }
  //마지막으로 프롭스로 넣어주기
  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
