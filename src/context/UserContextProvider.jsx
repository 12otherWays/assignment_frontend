import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [progress, setProgress] = useState(0);
  return (
    <UserContext.Provider value={{ userId, setUserId, progress, setProgress }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
