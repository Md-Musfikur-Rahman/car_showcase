import Image from "next/image";
import React from "react";

type User =
  | {
      name?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
};

const UserBadge = ({ user }: Props) => {
  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
      src={user?.image}
      width={50}
      height={50}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <div className="flex gap-2 items-center bg-slate-100 rounded-full px-4 py-2">
      <div>{userImage}</div>
      <p className="text-xl">{user?.name}</p>
    </div>
  );
};

export default UserBadge;
