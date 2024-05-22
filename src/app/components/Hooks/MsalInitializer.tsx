import { PublicClientApplication } from "@azure/msal-browser";
import React, { useEffect, useState } from "react";
import { msalConfig } from "../../../../auth-config";

const useMsalInitializer = () => {
  const [msalInstance, setMsalInstance] = useState<any>(null);

  useEffect(() => {
    const initializeMsal = async () => {
      const msalInstance = new PublicClientApplication(msalConfig);
      await msalInstance.initialize();
      setMsalInstance(msalInstance);
    };
    initializeMsal();
  }, []);

  return msalInstance ? msalInstance : null;
};

export default useMsalInitializer;
