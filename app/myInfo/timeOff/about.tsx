import {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  Hash,
  Clock5,
  Users,
  Globe,
  MapPin,
  CircleUser,
  CalendarClock,
  Cross,
  TreePalm,
  HandCoins,
  History,
  ChevronDown,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SelectIcon, Separator } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import DataTable from "./table";

export default function About() {
  return (
    <div className="font-inter relative">
      <div className="max-w-[1390px] my-0 mx-auto px-3">
        <aside className="text-sm font-medium absolute -top-5 max-[730px]:top-0 max-[700px]:hidden">
          <Card className="w-[225px] p-6 rounded-2xl mb-4">
            <CardContent className="p-0">
              <ul className="flex flex-col space-y-4">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> 07911 654321
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> avd.yana@videorollnet
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-0">
              <ul className="flex mt-4 space-x-4 text-[#1C3144]">
                <li>
                  <Linkedin className="text-[#1C3144]" />
                </li>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
              </ul>
            </CardFooter>
          </Card>
          <Card className="w-[225px] mb-4 p-6">
            <CardHeader className="p-0 mb-4">Hire Date</CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2">
                <li>Sep. 3,2020</li>
                <li>3y - 9m - 20d</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-[225px] mb-4 p-6">
            <CardContent className="p-0">
              <ul className="space-y-2">
                <li className="flex">
                  <Hash className="mr-2" /> 5
                </li>
                <li className="flex">
                  <Clock5 className="mr-2" /> Full-Time
                </li>
                <li className="flex">
                  <Users className="mr-2" /> Operations
                </li>
                <li className="flex">
                  <Globe className="mr-2" /> Europe
                </li>
                <li className="flex">
                  <MapPin className="mr-2" /> London, UK
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-[225px] mb-4 p-6">
            <CardHeader className="p-0 mb-4">Direct Reports</CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2">
                <li className="flex">
                  <CircleUser className="mr-2" /> Shane
                </li>
                <li className="flex">
                  <CircleUser className="mr-2" /> Nathan
                </li>
                <li className="flex">
                  <CircleUser className="mr-2" /> Mitchell
                </li>
                <li className="flex">
                  <CircleUser className="mr-2" /> Philip
                </li>
                <li className="flex">
                  <Users className="mr-2" /> 4 More...
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
        {/* main */}
        <div className="ml-[257px] max-[700px]:ml-0">
          <Card className="max-w-[1047px] w-full pt-11">
            <CardContent>
              <div className="flex justify-between font-medium max-[700px]:justify-end">
                <div className="flex items-center text-xl text-darkBlue-500 max-[700px]:hidden">
                  <CalendarClock className="w-4 h-4 mr-3 text-lightBlack-500" />
                  Time Off
                </div>
                <div className="flex items-end text-sm max-[900px]:flex-col">
                  <div className="mr-7 max-[900px]:mr-0">
                    Accrual Level Start Date
                    <span className="text-[#3758AB]"> 03/09-2020</span>
                  </div>
                  <div>
                    <Button
                      variant={"outline"}
                      className="rounded-[8px] border-black p-2 h-8"
                    >
                      Add Time Off Policy
                    </Button>
                  </div>
                </div>
              </div>

              <Separator className="mt-4 mb-6 h-[2px] max-w-[1014px] w-full bg-indigoLight-500" />

              <ScrollArea>
                <div className="font-semibold flex justify-around text-center mb-6 space-x-4">
                  <div>
                    <Card className="w-[264px] bg-[#F0F3F8] border-[#F0F3F8] flex flex-col items-center justify-center shadow-none p-3 h-[138px]">
                      <CardTitle className="text-xl p-0">Sick</CardTitle>
                      <CardContent className="p-0">
                        <div>
                          <div className="flex items-center justify-center text-3xl text-lightBlack-500">
                            <Cross className="w-7 h-7 mr-2" /> 3
                          </div>
                          <div className="text-sm">Days Available</div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0">
                        <div className="text-sm text-indigoLight-500">
                          1 dey scheduled
                        </div>
                      </CardFooter>
                    </Card>
                    <span className="font-medium text-sm text-indigoLight-500 mt-2 text-center">
                      Sick Full-Time
                    </span>
                  </div>
                  <div>
                    <Card className="w-[264px] bg-[#F0F3F8] border-[#F0F3F8] flex flex-col items-center justify-center shadow-none p-3 h-[138px]">
                      <CardTitle className="text-xl p-0">
                        Annual Leave{" "}
                      </CardTitle>
                      <CardContent className="p-0">
                        <div>
                          <div className="flex items-center justify-center text-3xl text-lightBlack-500">
                            <TreePalm className="w-7 h-7 mr-2" /> 10.3
                          </div>
                          <div className="text-sm">Days Available</div>
                        </div>
                      </CardContent>
                    </Card>
                    <span className="font-medium text-sm text-indigoLight-500 mt-2 text-center">
                      Holiday Full-Time
                    </span>
                  </div>
                  <div>
                    <Card className="w-[264px] bg-[#F0F3F8] border-[#F0F3F8] flex flex-col items-center justify-center shadow-none p-3 h-[138px]">
                      <CardTitle className="text-xl p-0">
                        Comp/in Lieu Time
                      </CardTitle>
                      <CardContent className="p-0">
                        <div>
                          <div className="flex items-center justify-center text-3xl text-lightBlack-500">
                            <CalendarClock className="w-7 h-7 mr-2" /> 0
                          </div>
                          <div className="text-sm">Human Used(YTD)</div>
                        </div>
                      </CardContent>
                    </Card>
                    <span className="font-medium text-sm text-indigoLight-500 mt-2 text-center">
                      Comp/in Lieu Time Flexible Policy
                    </span>
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <div className="mb-6">
                <p className="font-medium text-sm text-darkBlue-500 flex">
                  <Clock5 className="text-lightBlack-500 w-4 h-4 mr-2" />
                  Upcoming Time Off
                </p>
                <Separator className="my-4 h-[2px] max-w-[1014px] w-full bg-indigoLight-500" />
              </div>

              <div className="flex items-center">
                <Cross className="text-lightBlack-500 w-8 h-8 mr-4" />
                <div className="flex flex-col">
                  <h2 className="">Jan 27</h2>
                  <ul className="relative">
                    <li className="flex items-center before:content-['.'] before:text-7xl before:absolute before:-bottom-1 before:-left-1.5 before:text-lightBlack-500 ml-4">
                      1 dey of Sick
                    </li>
                  </ul>
                </div>
              </div>

              <Separator className="mt-4 mb-6 h-[2px] max-w-[1014px] w-full bg-indigoLight-500" />

              <div className="flex items-center">
                <HandCoins className="text-lightBlack-500 w-8 h-8  mr-4" />
                <div className="flex flex-col">
                  <div className="">Jul 4</div>
                  <div> Independence Day</div>
                </div>
              </div>

              <Separator className="mt-4 mb-4 h-[2px] max-w-[1014px] w-full bg-indigoLight-500" />

              <div>
                <div className="flex font-medium text-darkBlue-500 mb-4">
                  <History className="w-4 h-4 mr-2 text-lightBlack-500 " />{" "}
                  History
                </div>
                <div className="grid grid-cols-3 justify-between mb-4 max-[940px]:items-end max-[940px]:justify-center max-[940px]:grid-cols-2 max-[940px]:grid-rows-2 max-[940px]:gap-y-4 max-[940px]:gap-x-6 max-[600px]:mr-10 max-[374px]:flex max-[374px]:flex-col max-[374px]:items-center max-[374px]:ml-10">

                  <Select>
                    <SelectTrigger className="w-[256px] h-[33px] border-[#7C96B1] relative col-start-1 col-end-1 row-start-1 row-end-1 max-[940px]:col-end-3 max-[940px]:justify-self-center max-[940px]:w-[323px] max-[940px]:ml-[51px] max-[374px]:w-[200px] max-[374px]:m-0">
                      <SelectValue placeholder="Sick" />
                      <SelectIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#DAE6F2] pr-2 pl-[5px] py-[3.5px] rounded-r-sm">
                        <ChevronDown />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="some1">some</SelectItem>
                      <SelectItem value="some2">some</SelectItem>
                      <SelectItem value="some3">some</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[124px] h-[32px] border-[#7C96B1] relative col-start-1 col-end-3 row-start-1 row-end-1  ml-[270px] max-[940px]:col-start-1 max-[940px]:col-end-1 max-[940px]:row-start-2 max-[940px]:row-end-2 max-[940px]:ml-0 max-[940px]:justify-self-end">
                      <SelectValue placeholder="All" />
                      <SelectIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#DAE6F2] pr-2 pl-[5px] py-[3.5px] rounded-r-sm">
                        <ChevronDown />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="some1">some</SelectItem>
                      <SelectItem value="some2">some</SelectItem>
                      <SelectItem value="some3">some</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[176px] h-[32px] border-[#7C96B1] relative justify-self-end row-start-1 row-end-1 max-[940px]:col-start-2 max-[940px]:col-end-2 max-[940px]:row-start-2 max-[940px]:row-end-2 max-[940px]:justify-self-start">
                      <SelectValue placeholder="Balance History" />
                      <SelectIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#DAE6F2] pr-2 pl-[5px] py-[3.5px] rounded-r-sm">
                        <ChevronDown />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="some1">some</SelectItem>
                      <SelectItem value="some2">some</SelectItem>
                      <SelectItem value="some3">some</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <DataTable />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
