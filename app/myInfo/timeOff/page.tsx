"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDataStore } from "../../../store/store";

import { gql, useQuery } from "@apollo/client";

import About from "./about";
import Header from "./header";
import User from "./user";

interface TimeOffInterface {
  myProfile: {
    name: string;
    avatar: string;
    id: string;
  };
}

const GET_PROFILE_QUERY = gql`
  query {
    myProfile {
      id
      name
      avatar
    }
  }
`;

export default function TimeOff() {
  const { data, status, fetchData } = useDataStore();

  const router = useRouter();

  const [avatar, setAvatar] = useState<string>("");
  const [name, setName] = useState<string>("");

  //получает name и avatar
  const result = useQuery<TimeOffInterface>(GET_PROFILE_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${data?.login.access_token}`,
      },
    },
  });

  //обновляется при каждом изменении result
  //если в result data не пуста !==null то тогда устанавливаются значения
  useEffect(() => {
    if (result.data) {
      setAvatar(result.data.myProfile.avatar);
      setName(result.data.myProfile.name);
    }
  }, [result]);

  //если пользователь прешел по ссылке без входа то его отбрасывают назад
  return !data ? (
    router.push("/")
  ) : (
    <div className=" h-screen">
      <Header avatar={avatar} />
      <User avatar={avatar} name={name} />
      <About />
    </div>
  );
}
