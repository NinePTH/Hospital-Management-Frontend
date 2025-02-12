import axios from "axios";
import React, {useState, useEffect} from "react"

interface User {
  id: string;
  name: string;
  age: number;
}

const FetchUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data with Axios
    axios
      .get<User[]>("http://localhost:1323/users")
      .then((response) => {
        setUsers(response.data); // Set the data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>users</h1>
      <ul>
        {users.map((post) => (
          <li key={post.id}>
            <strong>This is title: {post.name}</strong>
            <p>this is body: {post.age}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FetchUsers
