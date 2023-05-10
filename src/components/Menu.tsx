"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
} from "@/components/ui/DropdownMenu";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import {
  Menu as MenuIcon,
  Sun,
  Moon,
  Laptop,
  File,
  LayoutDashboard,
  Github
} from "lucide-react";
import { useTheme } from "next-themes";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";

interface MenuProps {
  isSession: boolean;
}

const Menu: FC<MenuProps> = ({ isSession }) => {
  const { setTheme } = useTheme();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <MenuIcon className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          <MenuIcon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => router.push("https://github.com/anugoyal998/react-finance-api")}>
          <Github className="mr-2 h-4 w-4" />
          <span>Github</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/documentation")}>
          <File className="mr-2 h-4 w-4" />
          <span>Documentation</span>
        </DropdownMenuItem>
        {isSession ? (
          <>
            <DropdownMenuItem onClick={() => router.push("/dashboard")}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <SignOutButton isDropdownMenuItem />
          </>
        ) : (
          <SignInButton isDropdownMenuItem />
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
