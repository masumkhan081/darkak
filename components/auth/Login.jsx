"use client";

import React, { useEffect, useState } from "react";
import EnhancedText from "../ui-custom/EnhancedText";
import CustomInput from "../ui-custom/CustomInput";
import CustomButton from "../ui-custom/CustomButton";
import { User, Eye, Lock } from "lucide-react";
import users from "../../static-data/users";
import { setLoggedInUser } from "../../redux/slices/User";
import { useSelector, useDispatch } from "react-redux";
import { redirect, useRouter } from "next/navigation";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const theUser = useSelector((state) => state.user.username);
  const authenticated = useSelector((state) => state.user.authenticated);
  const email = useSelector((state) => state.user.email);
  //
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    const foundUser = users.find(
      (singleUser) =>
        singleUser.username === user.username &&
        singleUser.password === user.password
    );
    if (foundUser) {
      dispatch(setLoggedInUser({ ...user, authenticated: true }));
      router.push("/dashboard", { scroll: false });
    }

    // alert("😂");
  }

  return (
    <div className="h-26.0 max-w-35.0 bg-wh rounded-md   border border-slate-300 flex ">
      <form className=" flex flex-col gap-1.5 px-3.0 py-3.5 h-full rounded-s-md">
        <EnhancedText kind="one" color="text-pr">
          Login
          <CustomButton
            txt="Test-Data"
            afterClick={(e) => {
              e.preventDefault();
              setUser({ password: "passme-1", username: "uname-1" });
            }}
            style="w-fit bg_sl_1 text-sm text-neutral-500 px-1.0 py-0.25 rounded-md"
          />
        </EnhancedText>

        <span className="text-sm text-neutral-400">
          Sign In to your account
        </span>
        <CustomInput
          type={"text"}
          required={true}
          ph="Username"
          value={user.username}
          afterChange={(e) => setUser({ ...user, username: e.target.value })}
          startIcon={<User className="icon_sm" />}
        />
        <CustomInput
          type={"password"}
          required={true}
          ph="Password"
          value={user.password}
          afterChange={(e) => setUser({ ...user, password: e.target.value })}
          startIcon={<Lock className="icon_sm" />}
          endIcon={<Eye className="icon_sm" />}
        />

        <div className="flex justify-between items-center">
          <CustomButton
            txt="Login"
            afterClick={handleSubmit}
            style="bg-blue-700 text-wh px-1.0 py-0.25 rounded-md"
          />
          <CustomButton
            txt="Forgot Password"
            // afterClick={() => alert("dumb front end")}
            style={
              "rounded-md text-blue-700 drop-shadow-md text-sm hover:underline"
            }
          />
        </div>
      </form>
      <div className="  md:flex hidden flex-col gap-1.5 justify-center items-start px-3.0 py-3.5 rounded-e-md bg-blue-800 text-wh">
        <p>
          {JSON.stringify(email)}
          {JSON.stringify(authenticated)}
        </p>
        <p className="text-wh font-semibold drop-shadow-md text-2xl ">
          Laptop Plaza
        </p>
        <p className="text-sm">The Worlds Largest Laptop Distributor</p>
        <p className="flex flex-wrap gap-1 italic text-sm">
          <span className="">Developed By</span>
          <span className="font-bold">Softronixs ltd</span>
        </p>
      </div>
    </div>
  );
}
