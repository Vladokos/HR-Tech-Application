"use client";
import Link from "next/link";

import { Search, Settings, CircleHelp, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderInterface {
  avatar: string;
}

export default function Header({ avatar }: HeaderInterface) {
  return (
    <header className="bg-[#FCFCFE] font-inter">
      <div className="max-w-[1390px] flex justify-between  my-0 mx-auto px-3 pt-8 max-[1200px]:justify-around">
        <h1 className="font-semibold text-xl">HarmonyHR</h1>
        <nav className={`flex items-end max-[1200px]:hidden`}>
          <ul className="flex space-x-9 font-normal text-lg items-center">
            <li>
              <Link href="#"> Home</Link>
            </li>
            <li className="bg-[#DAE6F2] p-4 rounded-t-lg">
              <Link href="#">My Info</Link>
            </li>
            <li>
              <Link href="#">People</Link>
            </li>
            <li>
              <Link href="#">Hiring</Link>
            </li>
            <li>
              <Link href="#">Reports</Link>
            </li>
            <li>
              <Link href="#">Files</Link>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <div className="flex items-center">
            <div className="relative mb-4 mr-[40px] max-[380px]:mr-4">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#1C3144]" />
              <Input
                className="rounded-xl pl-12 pr-8 w-[395px] border-[#000] font-normal text-lg max-[1315px]:w-[195px] max-[500px]:w-12 max-[500px]:pl-6 max-[500px]:pr-6"
                placeholder="Search"
              />
            </div>
            <div className={`flex items-center max-[1200px]:hidden`}>
              <ul className="flex items-center space-x-6 mb-3 text-[#1C3144]">
                <li>
                  <Link href="#">
                    <Settings />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <CircleHelp />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Bell />
                  </Link>
                </li>
              </ul>
            </div>
            {/* burger */}
            <Sheet>
              <SheetTrigger>
                <Menu className="hidden max-[1200px]:block max-[1200px]:mb-4" />
              </SheetTrigger>
              <SheetContent className="bg-[#FCFCFE] pl-0">
                <ul className="flex flex-col font-normal text-lg items-center mb-4 mt-4">
                  <li className="w-full p-4">
                    <Link href="#"> Home</Link>
                  </li>
                  <li className="bg-[#DAE6F2] p-4 rounded-r-lg w-full">
                    <Link href="#">My Info</Link>
                  </li>
                  <li className="w-full p-4">
                    <Link href="#">People</Link>
                  </li>
                  <li className="w-full p-4">
                    <Link href="#">Hiring</Link>
                  </li>
                  <li className="w-full p-4">
                    <Link href="#">Reports</Link>
                  </li>
                  <li className="w-full p-4">
                    <Link href="#">Files</Link>
                  </li>
                </ul>
                <ul className="flex justify-center space-x-6 mb-3  max-[1200px]:space-x-4">
                  <li>
                    <Link href="#">
                      <Settings />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <CircleHelp />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Bell />
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>

            <Avatar className="ml-6 mb-3 max-[1200px]:mb-4">
              <AvatarImage
                src={avatar}
                alt="@shadcn"
                className="w-[38px] h-[38px] rounded-2xl"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
