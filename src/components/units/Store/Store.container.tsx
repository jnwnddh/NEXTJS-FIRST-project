import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import StoreUI from "./Store.presenter";
import { FETCH_USED_ITEMS } from "./Store.query";

export default function Store() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);

  return <StoreUI data={data} />;
}
