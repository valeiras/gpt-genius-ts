import { UserProfile } from "@clerk/nextjs";
import React from "react";

type Props = {};

const ProfilePage: React.FC<Props> = ({}) => {
  return (
    <div className="flex justify-center">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
