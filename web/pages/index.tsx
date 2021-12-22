import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  return (
    <div className="p-4 space-y-6">
      <pre>{JSON.stringify({ users }, null, 2)}</pre>
    </div>
  );
};

export default Homepage;
