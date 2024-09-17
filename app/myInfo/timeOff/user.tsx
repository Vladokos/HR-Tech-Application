import {
  Settings,
  CircleHelp,
  Bell,
  ChevronDown,
  EllipsisVertical,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface UserInterface {
  avatar: string;
  name: string;
}

export default function User({ avatar, name }: UserInterface) {
  return (
    <div className="bg-[#DAE6F2] font-inter pt-[85px]">
      <div className="max-w-[1390px] my-0 mx-auto px-3">
        <div className="flex items-center justify-between mb-[35px]">
          <div className="flex items-center  relative">
            <Avatar className="w-[150px] h-[150px] absolute left-8 -top-6 max-[730px]:w-[100px] max-[730px]:h-[100px] max-[730px]:left-0 max-[425px]:w-[60px] max-[425px]:h-[60px] max-[425px]:top-0 z-10 ">
              <AvatarImage
                src={avatar}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-[28px] ml-[260px] max-[730px]:ml-[110px] max-[425px]:text-xl">
              {name}
            </span>
          </div>
          <div>
            <div className="flex space-x-4 max-[600px]:hidden">
              <Select>
                <SelectTrigger className="w-[162px] border-[#7C96B1]">
                  <SelectValue placeholder="Request a change" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="some1">some</SelectItem>
                  <SelectItem value="some2">some</SelectItem>
                  <SelectItem value="some3">some</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="some1">
                <SelectTrigger className="w-[56px] border-[#7C96B1] p-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="text-[#1C3144]">
                  <SelectItem value="some1">
                    <Settings />
                  </SelectItem>
                  <SelectItem value="some2">
                    <CircleHelp />
                  </SelectItem>
                  <SelectItem value="some3">
                    <Bell />
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* burger */}
            <div className="hidden max-[600px]:block">
              <Sheet>
                <SheetTrigger>
                  <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className="bg-[#FCFCFE]">
                  <Select>
                    <SelectTrigger className="w-[162px] border-[#7C96B1]">
                      <SelectValue placeholder="Request a change" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="some1">some</SelectItem>
                      <SelectItem value="some2">some</SelectItem>
                      <SelectItem value="some3">some</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="some1">
                    <SelectTrigger className="w-[56px] border-[#7C96B1] p-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="some1">
                        <Settings />
                      </SelectItem>
                      <SelectItem value="some2">
                        <CircleHelp />
                      </SelectItem>
                      <SelectItem value="some3">
                        <Bell />
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <div className="ml-[270px] max-[730px]:ml-[110px]">
          <ScrollArea className="max-[1120px]:max-w-[850px]">
            <ul className="flex space-x-8 justify-between items-center whitespace-nowrap font-medium text-sm ">
              <li>Personal</li>
              <li>Job</li>
              <li className="bg-[#FCFCFE] p-4 rounded-t-lg">Time off</li>
              <li>Emergency</li>
              <li>Documents</li>
              <li>Notes</li>
              <li>Benefits</li>
              <li>Training</li>
              <li>Assets</li>
              <li className="flex items-center">
                More <ChevronDown />
              </li>
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
