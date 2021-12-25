import React, { useEffect, useState } from "react";
import { DefaultApi } from "web/openapi";

import { Sidebar } from "@/ui";

const api = new DefaultApi();
api.dmmfAppController().then((res) => console.log(res));

const Homepage = () => {
  // const [users, setUsers] = useState({});

  // useEffect(() => {
  //   fetch("http://localhost:3001/dmmf")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setUsers(res);
  //     });
  // }, []);

  return (
    <div className="grid grid-cols-[16rem,1fr] h-full">
      <Sidebar navigationConfig={[]} />
      <div></div>
    </div>
  );
};

export default Homepage;
