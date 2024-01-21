"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const authenticated = useSelector((state) => state.user.authenticated);

  useEffect(() => {
    if (authenticated === false) {
      redirect("/login");
    }
  }, [authenticated]);

  return <>{authenticated && <>{ children }</>}</>;
}
