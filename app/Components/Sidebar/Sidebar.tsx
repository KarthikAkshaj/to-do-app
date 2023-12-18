"use client";
import { useGlobalState } from "@/app/context/globalContextProvider";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  const { theme } = useGlobalState();
  return (
    <SidebarStyled theme={theme}>
      <div className="Profile">
        <div className="Profile-overlay">
          <div className="image">
            <Image
              width={80}
              height={80}
              src="/Avatar1.png"
              alt="Profile Image"
            />
          </div>
          <span>Yuji</span>
          <span>Itadori</span>
        </div>
      </div>
      <ul className="nav-items"></ul>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  width: 20rem;
  position: relative;
  background-color: #022836;
  border: 0.13rem solid #f48c06;
  border-radius: 1rem;
`;
export default Sidebar;
