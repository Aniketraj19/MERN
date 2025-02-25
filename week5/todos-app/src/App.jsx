import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Set up AWS EC2 instance",
      description:
        "Launch a Linux-based EC2 instance with cost-effective settings for the Minecraft server.",
      completed: true,
    },
    {
      title: "Install Java and required dependencies",
      description:
        "Ensure Java and other necessary libraries are installed on the server for modpack compatibility.",
      completed: true,
    },
    {
      title: "Download and configure ‘Better Minecraft 2’ modpack",
      description:
        "Obtain the correct server files and configure settings for optimal performance.",
      completed: false,
    },
    {
      title: "Optimize server settings for low latency",
      description:
        "Adjust RAM allocation, tick speed, and networking settings to reduce lag.",
      completed: false,
    },
    {
      title: "Set up automatic backups",
      description:
        "Configure automated backups to prevent data loss in case of crashes.",
      completed: false,
    },
    {
      title: "Implement cost-saving strategies",
      description:
        "Explore spot instances, scheduled shutdowns, and other methods to stay within budget.",
      completed: false,
    },
    {
      title: "Create and manage Cohort 2.0 Discord server",
      description:
        "Set up roles, channels, and permissions for effective communication.",
      completed: true,
    },
    {
      title: "Share learning materials on Discord",
      description:
        "Upload useful resources and organize information for the Cohort 2.0 community.",
      completed: false,
    },
    {
      title: "Finalize Appian workflow for ‘Court Orders System’",
      description:
        "Ensure approval/rejection logic works correctly before deployment.",
      completed: false,
    },
  ]);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      title: {props.title}
      description: {props.description}
      completed: {props.completed}
    </div>
  );
}

export default App;
