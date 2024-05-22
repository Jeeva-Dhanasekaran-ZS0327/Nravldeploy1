const withoutProtectedRouteLayout = (WrappedComponent :any) => {
    const WithoutProtectedLayout = (props :any) => {
      return (
        <>
          <WrappedComponent {...props} />
        </>
      );
    };
   
    return WithoutProtectedLayout;
  };
   
  export default withoutProtectedRouteLayout;