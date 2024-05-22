import { useEffect, useState } from "react";
import Header from "../header/header";
import { getFromSessionStorage } from "@/app/utils/common/SessionStorageUtils";
import { usePathname, useRouter } from "next/navigation";

const withProtectedRouteLayout = (WrappedComponent: any) => {
  const WithProtectedLayout = (props: any) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [accessTokenData, setAccessTokenData] = useState(false);
    const router = useRouter();

      const searchParams = usePathname();

    useEffect(() => {
      const isLoggedIn = getFromSessionStorage("loginStatus");
      const accessToken = sessionStorage.getItem("accessToken");
      setLoggedIn(isLoggedIn?.isLoggedIn);
      setAccessTokenData(!!accessToken);
      if (!isLoggedIn?.isLoggedIn || !accessToken) {
        router.push("/login"); // Redirect to login page if not logged in
      }
    }, []);

    return (
      <>
        {loggedIn && accessTokenData ? (
          <>
            { searchParams === "/select-role" ? <></> : <Header />}
            <WrappedComponent {...props} />
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  return WithProtectedLayout;
};

export default withProtectedRouteLayout;
