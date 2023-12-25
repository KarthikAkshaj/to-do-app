"use client";

import formatDate from "@/app/Utils/FormatDate";
import { edit, trash } from "@/app/Utils/Icons";
import { useGlobalState } from "@/app/context/globalContextProvider";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
  const { deleteTask } = useGlobalState();

  return (
    <TaskItemStyled>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button className="completed">Completed</button>
        ) : (
          <button className="Incomplete">InComplete</button>
        )}
        <button className="edit">{edit}</button>
        <button
          className="delete"
          onClick={() => {
            deleteTask(id);
          }}
        >
          {trash}
        </button>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: #073b4c;
  box-shadow: -1rem 1rem 2rem #00bbf9;
  border: 2px solid #fb8728;
  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: #ffd166;
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .Incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: #ef476f;
      border-radius: 30px;
    }

    .completed {
      background: #06d6a0 !important;
    }
  }
`;

export default TaskItem;
