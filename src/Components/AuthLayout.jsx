/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLouder] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("./login");}
      else if (!authentication && authStatus !== authentication) {
        navigate("/");
      }
      setLouder(false);
    
  }, [authStatus, authentication, navigate]);
  return loader ? null : <>{ children }</>;
}

export default AuthLayout;
