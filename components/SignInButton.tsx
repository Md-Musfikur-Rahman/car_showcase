"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { CustomButton, UserBadge } from ".";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto ">
        <CustomButton
          title="sign out"
          btnType="button"
          containerStyles="text-white rounded-full bg-primary-blue min-w-[130px] capitalize"
          handleClick={() => signOut()}
        />
        <UserBadge user={session?.user} />
      </div>
    );
  }
  return (
    <CustomButton
      title="sign in"
      btnType="button"
      containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] capitalize"
      handleClick={() => signIn()}
    />
  );
};

export default SignInButton;
