import React, { useEffect, useState } from "react";
import { Configuration, DefaultApi, DMMFDto } from "web/openapi";

import { Sidebar } from "@/ui";
const api = new DefaultApi(new Configuration({ basePath: "http://localhost:3001" }));

const Homepage = () => {
  const [users, setUsers] = useState<DMMFDto | null>();

  useEffect(() => {
    api.dmmf().then((res) => setUsers(res));
  }, []);

  return (
    <div className="grid grid-cols-[16rem,1fr] h-full">
      <Sidebar navigationConfig={[]} />
      <div>
        <pre>{users && JSON.stringify(users, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Homepage;
