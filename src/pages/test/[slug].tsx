import Room from "@components/Room/Room";
import SocketContext from "@context/SocketContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const Test: React.FC = () => {
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log(slug);
  }, [slug]);

  return <>{slug}</>;
};

export default Test;
