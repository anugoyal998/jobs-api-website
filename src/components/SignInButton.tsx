"use client";

import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/Toast";
import { LogOut, Loader2 } from "lucide-react";
import { DropdownMenuItem } from "@/ui/DropdownMenu";

interface SignInButtonProps {
  isDropdownMenuItem?: boolean;
}

const SignInButton: FC<SignInButtonProps> = ({ isDropdownMenuItem }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (err) {
      toast({
        title: "Error signing in",
        message: "Please try again",
        type: "error",
      });
    }
  };

  if (isDropdownMenuItem) {
    return (
      <DropdownMenuItem onClick={signInWithGoogle}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <LogOut className="mr-2 h-4 w-4" />
        )}
        <span>Sign in</span>
      </DropdownMenuItem>
    );
  } else {
    return (
      <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign in
      </Button>
    );
  }
};

export default SignInButton;
