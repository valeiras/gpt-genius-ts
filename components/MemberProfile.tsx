import { UserButton, auth, currentUser } from "@clerk/nextjs";
import React from "react";

const MemberProfile: React.FC = async () => {
  const user = await currentUser();
  const { userId } = auth();
  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
