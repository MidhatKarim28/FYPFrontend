// ParentComponent.js
import React, { useState } from "react";
import PWelcome from "./Welcome";
import App from "../App";
import HomeProvider from "./ProviderScreens/HomeProvider";

const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <PWelcome setPhoneNumber={setPhoneNumber} />
      <App phoneNumber={phoneNumber} />
      <HomeProvider phoneNumber={phoneNumber} />

    </>
  );
};

export default ParentComponent;
