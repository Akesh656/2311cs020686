import { useEffect } from "react";
import { Log } from "./utils/logger";

export default function App() {
  useEffect(() => {
    Log("info", "page", "Application started");
  }, []);

  return <h1>Notifications App</h1>;
}