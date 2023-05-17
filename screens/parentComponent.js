// ParentComponent.js
import React, { useState } from "react";
import Welcome from "./Welcome";
import App from "../App";
import HomeProvider from "./ProviderScreens/HomeProvider";

const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <Welcome setPhoneNumber={setPhoneNumber} />
      <App phoneNumber={phoneNumber} />
      <HomeProvider phoneNumber={phoneNumber} />

    </>
  );
};

export default ParentComponent;
