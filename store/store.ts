import { create } from "zustand";
import { gql } from "@apollo/client";
import client from "../lib/apolloClient";

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

interface Store {
  data: {
    login: {
      access_token: string;
      refresh_token: string;
    } 
  } | null;
  status: string;
  fetchData: (email: string, password: string) => Promise<void>;
}

export const useDataStore = create<Store>((set) => ({
  data: null,
  status: "idle",

  fetchData: async (email, password) => {
    set({ status: "pending" });
    try {
      const { data } = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables: { email, password },
      });
      console.log(data);
      set({ status: "success", data: data });
    } catch (error) {
      set({ status: "error" });
    }
  },
}));
