"use client"
import { useGlobalState } from "@/app/context/globalContextProvider";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  const {theme} = useGlobalState();
  return <SidebarStyled>Sidebar</SidebarStyled>;
}

const SidebarStyled = styled.nav``;
export default Sidebar;
