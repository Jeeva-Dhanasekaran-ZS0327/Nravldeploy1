import { Configuration, LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 */
export const msalConfig :Configuration= {
    auth: {
        // clientId: "0926b559-2b0e-44ee-8544-cb967f6d6941",
        clientId:"1d2657cf-c22f-4d5a-b809-8f2840561e94",
        // authority:"https://login.microsoftonline.com/677ee300-37e3-4cb7-a739-f0059a71b208",
        authority:"https://login.microsoftonline.com/fefe3ca6-d43a-468b-9ac9-ea16dbca6aba",

        redirectUri: `http://localhost:3000/select-role`, //eg: ${window.location.origin}/Dashboard
        postLogoutRedirectUri: `http://localhost:3000/login`, 
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: "sessionStorage", // "sessionStorage" or"localStorage"
        storeAuthStateInCookie: false,
    },
    system: {
        allowNativeBroker: true,
        loggerOptions: {
          loggerCallback: (level: any, message: any, containsPii: any) => {
            if (containsPii) {
              return;
            }
            switch (level) {
              case LogLevel.Error:
                console.error(message);
                return;
              case LogLevel.Info:
                console.info(message);
                return;
              case LogLevel.Verbose:
                console.debug(message);
                return;
              case LogLevel.Warning:
                console.warn(message);
                return;
              default:
                return;
            }
          },
        },
      },
};


export const authScopes = {
    scopes: ["User.Read"],
  };

  