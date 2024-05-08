"use client";

import Image from "next/image";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";


interface Props {
  authenticated: boolean;
}

const Header = ({ authenticated }: Props) => {
  

  const handleLogout = () => {};

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
              {authenticated ? (
                <button onClick={handleLogout}>Logout</button>
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
