"use client";

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../Button/Button";
import { add } from "@/app/Utils/Icons";
import { useGlobalState } from "@/app/context/globalContextProvider";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const {allTasks, closeModel} = useGlobalState();

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      completed,
      important,
    };

    try {
      const res = await axios.post("/api/tasks", task);
      if (res.data.error) {
        toast.error(res.data.error);
      }
      if (!res.data.error) {
        toast.success("Task Created Sucessfully");
        allTasks();
        closeModel();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error();
    }
  };

  return (
    <>
      <CreateContentStyled onSubmit={handleSubmit}>
        <h1>Create a Task</h1>
        <div className="input-control">
          <label htmlFor="title">Title</label>
          <input
            className="font-extrabold"
            type="text"
            id="title"
            value={title}
            typeof="text"
            name="title"
            onChange={handleChange("title")}
            placeholder="Ex : Complete Svelte Chapter 8"
          />
        </div>
        <div className="input-control">
          <label htmlFor="description">Description</label>
          <textarea
            className="font-bold"
            value={description}
            onChange={handleChange("description")}
            name="description"
            id="description"
            rows={4}
            placeholder="e.g, Watch a video about Next.js Auth"
          ></textarea>
        </div>
        <div className="input-control">
          <label htmlFor="date">Date</label>
          <input
            value={date}
            onChange={handleChange("date")}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className="input-control toggler">
          <label htmlFor="completed">Toggle Completed</label>
          <input
            value={completed.toString()}
            onChange={handleChange("completed")}
            type="checkbox"
            name="completed"
            id="completed"
          />
        </div>
        <div className="input-control toggler">
          <label htmlFor="important">Toggle Important</label>
          <input
            value={important.toString()}
            onChange={handleChange("important")}
            type="checkbox"
            name="important"
            id="important"
          />
        </div>

        <div className="submit-btn flex justify-end">
          <Button
            type="submit"
            name="Create Task"
            icon={add}
            padding={"1rem 2rem"}
            borderRad={"0.8rem"}
            fw={"800"}
            fs={"1.2rem"}
            background={"#669bbc"}
            color={"#fff12f"}
          />
        </div>
      </CreateContentStyled>
    </>
  );
}

const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: #ffc300;

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 500px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: purple;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      resize: none;
      background-color: #20272e;
      color: #c1def2;
      border-radius: 0.5rem;
    }
  }

  .submit-btn button {
    transition: all 0.25s ease-in-out;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: #ffc300;
    }

    &:hover {
      background: #457b9d !important;
      color: #cbc027 !important;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      flex: 1;
      cursor: pointer;
    }

    input {
      width: initial;
    }
  }
`;

export default CreateContent;
