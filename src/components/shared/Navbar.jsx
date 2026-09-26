"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

import { FitLogContext } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useContext(FitLogContext);

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">

        {/* Mobile + Logo */}
        <div className="navbar-start">

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Workout</Link>
              </li>

              <li>
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FitLog Logo"
              width={38}
              height={38}
              priority
            />

            <span className="text-xl font-bold tracking-wider">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <Link
                href="/"
                className={pathname === "/" ? "font-bold text-[#ccff00]" : ""}
              >
                Workout
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={
                  pathname === "/my-plan"
                    ? "font-bold text-[#ccff00]"
                    : ""
                }
              >
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        {/* Counters */}
        <div className="navbar-end gap-2">

          <Link
            href="/my-plan"
            className="btn btn-sm border-0 text-black"
            style={{
              backgroundColor: "#ccff00",
            }}
          >
            Plan

            <span className="badge badge-sm bg-black text-white">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="btn btn-sm btn-outline"
          >
            Saved

            <span className="badge badge-sm">
              {saved.length}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;