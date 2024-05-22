import { getFromSessionStorage } from "@/app/utils/common/SessionStorageUtils";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessTokenData, setAccessTokenData] = useState(false);
  const router = useRouter();

  const searchParams = usePathname();

  useEffect(() => {
    const isLoggedIn = getFromSessionStorage("loginStatus");
    const accessToken = sessionStorage.getItem("accessToken");
    setLoggedIn(isLoggedIn?.isLoggedIn);
    setAccessTokenData(!!accessToken);
  }, [searchParams]);

  // App will render only if 1.isLoggedIn flag is true in session storage 2.accessToken is available in session storage 3.TODO: If the current time is grater than token's validity time.
  return (loggedIn && accessTokenData) ||
    searchParams === "/login" ||
    searchParams === "/select-role" ? (
    <>{children}</>
  ) : (
    <></>
  );
};

export default ProtectedRoute;
