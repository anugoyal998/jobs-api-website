"use client";

import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "@/components/ui/Toast";
import { LogOut, Loader2 } from "lucide-react";
import { DropdownMenuItem } from "@/ui/DropdownMenu";

interface SignOutButtonProps {
  isDropdownMenuItem?: boolean;
}

const SignOutButton: FC<SignOutButtonProps> = ({ isDropdownMenuItem }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (err) {
      toast({
        title: "Error signing out",
        message: "Please try again",
        type: "error",
      });
    }
  };

  if (isDropdownMenuItem) {
    return (
      <DropdownMenuItem onClick={signUserOut}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <LogOut className="mr-2 h-4 w-4" />
        )}
        <span>Sign out</span>
      </DropdownMenuItem>
    );
  } else {
    return (
      <Button onClick={signUserOut} isLoading={isLoading}>
        Sign out
      </Button>
    );
  }
};

export default SignOutButton;
