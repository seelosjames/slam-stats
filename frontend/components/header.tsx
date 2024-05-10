"use client";

import Image from "next/image";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

interface Props {
  authenticated: boolean;
}

const Header = ({ authenticated }: Props) => {
  let { contextData } = useContext(AuthContext);
  // const router = useRouter();

  function handleLogout() {
    contextData.logoutUser;
    // router.push("/");
  }

  return (
    <header className="sticky top-0 left-0 flex items-center justify-between pl-16 pr-32 bg-black text-white">
      <Image src="/logo.jpg" alt="Logo" width={120} height={120} />
      <nav>
        <ul className="flex space-x-12 text-lg">
          <li>
            <Link href="/rankings">Rankings</Link>
          </li>
          <li>
            <Link href="/">Matchups</Link>
          </li>
          <li>
            <Link href="/">Stats</Link>
          </li>
          <li>
            <Link href="/">News</Link>
          </li>
          <li>
            <div>
              {contextData.user ? (
                <button onClick={contextData.logoutUser}>Logout</button>
              ) : (
                <div>
                  <p>
                    <Link href="/signup">Signup</Link>
                  </p>
                  <p>
                    <Link href="/login">Login</Link>
                  </p>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
