"use client";

import { Button } from "@/components/ui/button";
import LogoSVG from "@/public/logo.svg";
import ThemeToggle from "@/components/theme/themeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ClerkLoaded,
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

function Header() {
  return (
    <>
      <header className="relative flex justify-center">
        <div className="z-1 flex w-full items-center justify-between gap-2 px-2 sm:px-8">
          <div className="flex flex-1 items-center justify-start gap-1 max-sm:hidden">
            <ThemeToggle />
          </div>
          <motion.div
            initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
            whileInView={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0, 0.55, 0.45, 1] }}
          >
            <Link
              href="/"
              className="focus-visible group flex h-16 w-14 flex-col items-center gap-1 rounded-b-3xl bg-secondary/30 px-[6px] pt-2 text-2xl transition-colors hover:bg-primary/25 dark:bg-card dark:hover:bg-border/70 sm:size-32 sm:rounded-b-4xl sm:pt-4 sm:text-3xl lg:w-36 lg:text-4xl"
              title="HLingo app"
            >
              <LogoSVG className="w-[1.5em] group-hover:animate-bounce" />
              <span className="font-display -tracking-widest max-sm:sr-only">
                HLingo
              </span>
            </Link>
          </motion.div>
          <div className="flex flex-1 items-center justify-end">
            <ClerkLoaded>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost">Login</Button>
                </SignInButton>
              </SignedOut>
            </ClerkLoaded>
          </div>
        </div>
        <div className="fixed bottom-4 right-4 z-50 sm:hidden">
          <ThemeToggle className="size-12 border border-solid border-border bg-card/40 backdrop-blur-lg"></ThemeToggle>
        </div>
      </header>
    </>
  );
}

export default Header;
