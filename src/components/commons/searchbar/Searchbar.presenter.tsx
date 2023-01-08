import { ISearchbars01UIProps } from "./Searchbar.type";
import { FireFilledIcon, Searchbar, SearchbarInput } from "./Searchbar.style";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <Searchbar>
      <FireFilledIcon />
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
