import React from "react";

import { Button, Sidebar } from "@/ui";
import { useUserMutation, useUserQuery } from "@/web/contexts/ApiContext";

const Homepage = () => {
  const data = useUserQuery("findManyUser");
  const [createdUserData, createUser] = useUserMutation("createUser");

  return (
    <div className="grid grid-cols-[16rem,1fr] h-full">
      <Sidebar navigationConfig={[]} />
      <div>
        <pre>{data && JSON.stringify(data, null, 2)}</pre>
        <div className="flex flex-col items-start my-8 space-y-4">
          <Button onClick={() => createUser({ userCreateDto: {} })}>Create one more user</Button>
          <Button onClick={() => createUser({ userCreateDto: { interests: { create: [{ name: "Coding", keywords: ["React", "Node"] }] } } })}>
            Create one more user with one interest
          </Button>
        </div>
        <pre>{createdUserData && JSON.stringify({ createdUserData }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Homepage;
