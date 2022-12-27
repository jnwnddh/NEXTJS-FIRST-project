import { useRouter } from "next/router";
import { useState } from "react";

export default function BoarCommentWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [constents, setContents] = useState("");
}
