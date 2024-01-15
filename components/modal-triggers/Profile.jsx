import React from "react";
import CustomButton from "../ui-custom/CustomButton";
import { UserCog } from "lucide-react";
import {} from "../../redux/slices/NavView";
import { useDispatch, useSelector } from "react-redux";
import { setNavView } from "../../redux/slices/NavView";

export default function Profile() {
  const dispatch = useDispatch();
  const isProfileModalOpen = useSelector(
    (state) => state.navView.isProfileModalOpen
  );

  return (
    <CustomButton
      afterClick={() =>
        dispatch(setNavView({ isProfileModalOpen: !isProfileModalOpen }))
      }
      startIcon={<UserCog className="w-6 h-7 text-orange-300 my-0.125" />}
      style=" py-0.125 px-0.5 rounded-full shadow-sm bg-orange-800"
    />
  );
}
