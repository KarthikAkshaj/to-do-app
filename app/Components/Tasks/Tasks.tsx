"use client"

import React from "react";
import styled from "styled-components";

function Tasks() {
  return <TasksStyled>Tasks</TasksStyled>;
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
