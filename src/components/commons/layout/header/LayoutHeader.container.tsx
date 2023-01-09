import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/");
  };

  const onClickMoveToLogin = () => {
    void router.push("/login");
  };
  const onClickSignup = () => {
    void router.push("/signup");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickSignup={onClickSignup}
    />
  );
}
