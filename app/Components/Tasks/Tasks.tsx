"use client";

import React from "react";
import styled from "styled-components";
import CreateContent from "../Models/CreateContent";
import TaskItem from "../TaskItem/TaskItem";
import { add } from "@/app/Utils/Icons";
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
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
        <button className="create-task">
          {add}
          Add New Task
        </button>
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

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      width: 5rem;
      height: 0.2rem;
      background-color: #00b4d8;
      border-radius: 0.5rem;
    }
  }

  .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 14rem;
    color: #00afb9;
    font-weight: 500;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed #0077b6;
    transition: all 0.4s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: #04394f;
      color: #18edf8;
      border: 3px groove #0297e7;
    }
  }

  .tasks {
    margin: 4rem 0rem;
  }
`;
export default Tasks;
