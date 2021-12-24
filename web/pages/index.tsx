import React, { useEffect, useState } from "react";

import { Sidebar } from "@/ui";

const Homepage = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/dmmf")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  console.log(users);
  return (
    <div className="grid grid-cols-[16rem,1fr] h-full">
      <Sidebar navigationConfig={[]} />
      <div></div>
    </div>
  );
};

export default Homepage;
