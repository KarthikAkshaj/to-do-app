"use client"

import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/globalContextProvider";

export default function Home() {
  const { tasks } = useGlobalState();

  return (
    <>
      <Tasks tasks={tasks} title={""}/>
    </>
  );
}
