import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { ArrowRight, LayoutDashboardIcon } from "lucide-react";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex gap-1 z-40 font-semibold">
            <Image src="/casepix-1.PNG" alt="logo" height={20} width={20} />
            <p className="text-2xl">
              Case<span className="text-green-600">Pix</span>
            </p>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <LogoutLink
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign Out
                </LogoutLink>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                  >
                    <p>Dashboard</p>
                    <LayoutDashboardIcon />
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                    className:
                      "border-primary hover:bg-primary hover:text-white",
                  })}
                >
                  Sign up
                </RegisterLink>
                <LoginLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                    className:
                      "border-gray-300 hover:bg-primary hover:text-white",
                  })}
                >
                  Sign in
                </LoginLink>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
