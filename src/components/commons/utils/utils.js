//날짜함수 재사용하기 컴포넌트 x 도구 o
export const getMyDate = (createdAt) => {
  const date = new Date(createdAt);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
