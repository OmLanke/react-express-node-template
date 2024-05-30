import {useState} from 'react';
import axios from 'axios';

export default function App() {
  const [text, setText] = useState();
  const [users, setUsers] = useState([]);

  const fetchText = async () => {
    const res = await axios.get('/api');
    setText(res.data);
  }

  const fetchUsers = async () => {
    const res = await axios.get('/api/users');
    setUsers(res.data.users);
  }

  return (
    <div className="p-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchText}>Fetch Text</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchUsers}>Fetch Users</button>
      <p>{text}</p>
      <ul>
        {users.map((user, i) => <li key={i}>{user}</li>)}
      </ul>
      <img src="/smugdog.jpg" alt="smugdog" />
    </div>
  );

}