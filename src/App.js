import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';


function JiraTrelloApp() {  
  const [tasks, setTasks] = useState([]);

  // localStorage.clear();

  // Fetching from Local Storage
  const getTasks = JSON.parse(localStorage.getItem("tasks"));

  useEffect(() => {
    if (getTasks == null) {
      setTasks([])
    } else {
      setTasks(getTasks);
    }
  }, [getTasks])

  // Add Task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  // Delete Task
  const deleteTask = (id) => {
    if (window.confirm("Are you sure?")) {
      const deleteTask = tasks.filter((task) => task.id !== id);

      setTasks(deleteTask);

      localStorage.setItem("tasks", JSON.stringify(deleteTask));
    }
  }

  return (
    <>
    <Container maxWidth="md">
      <AddTask onSave={addTask} />

      <Tasks tasks={tasks} onDelete={deleteTask} />
    </Container>
    </>
  );
}

export default JiraTrelloApp;