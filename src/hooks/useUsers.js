import { useState, useEffect } from "react";

function useUsers() {
  const [Users, setUsers] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await JSON.parse(localStorage.getItem("userInfo"));
      console.log(data);
      setUsers(data);
      setIsPending(false);
    };
    fetchUsers();
  }, []);
  return {
    Users,
    isPending,
  };
}

export default useUsers;
