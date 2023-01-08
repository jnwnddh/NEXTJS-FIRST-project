import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbar.presenter";
import { ISearchbars01Props } from "./Searchbar.type";
import _ from "lodash";
export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 1000);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
