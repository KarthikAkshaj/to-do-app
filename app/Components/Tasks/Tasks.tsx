"use client";

import React from "react";
import styled from "styled-components";
import CreateContent from "../Models/CreateContent";
import TaskItem from "../TaskItem/TaskItem";
interface Props {
  title: string;
  tasks: any[];
}

function Tasks({ title, tasks }: Props) {
  return (
    <TasksStyled>
      <h1>{title}</h1>
      <div className="tasks grid">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={{ ...task }} />
        ))}
      </div>
    </TasksStyled>
  );
}

const TasksStyled = styled.main`
  background-color: #022836;
  width: 100%;
  border: 0.13rem solid #f48c06;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.7rem;
  }
`;
export default Tasks;
