import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const API = import.meta.env.VITE_BACKEND;

  const fetchTasks = async () => {
    const res = await axios.get(`${API}/api/tasks`);
    setTasks(res.data);
  };

  const handleAdd = async () => {
    if (!title) return;
    await axios.post(`${API}/api/tasks`, { title });
    setTitle("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/api/tasks/id=${id}`);
    console.log("Successfully deleted");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default App;
