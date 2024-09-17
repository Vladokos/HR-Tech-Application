"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

import { useDataStore } from "../store/store";


export default function Home() {
  const {data, status, fetchData} = useDataStore();
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //срабатывает при каждом изменении data || status
  //если данные пришли и все успешно то пользователя перенаправляют на страницу myInfo
  //иначе вылазит предупреждение о неккоректности данных
  useEffect(() => {    
    if(status === "success"){
      router.push("/myInfo/timeOff")
    }else if(status === "error"){
      alert("Not correct email or password")
    }
  }, [data,status])

  //при нажатии отправляет данные с формы и ожидает ответ
  const sendUserData = async () => {
    if (email && password) {
      await fetchData(email, password);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button onClick={() => sendUserData()} type="submit" className="w-full">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
