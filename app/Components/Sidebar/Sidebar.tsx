"use client";

import { useGlobalState } from "@/app/context/globalContextProvider";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Menu from "@/app/Utils/Menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Sidebar() {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

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
          <h1>
            <span>Yuji</span>
            <span>Itadori</span>
          </h1>
        </div>
      </div>
      <ul className="nav-items">
        {Menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button>hello</button>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  width: 20rem;
  position: relative;
  background-color: #022836;
  border: 0.13rem solid #f48c06;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffc300;

  .Profile {
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: #ccff33;
    display: flex;
    align-items: center;
  }

  .Profile-overlay {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 0;
    background: #284b63;
    transition: all 0.55s linear;
    border-radius: 1rem;
    border: 2px solid #007200;
    display: flex;
    align-items: centre;
  }

  h1 {
    font-size: 1.2rem;
    line-height: 1.4rem;
    display: flex; 
    flex-direction: coloumn; 
    align-items: center; 
    margin-left: 1rem; 
    padding-bottom: 1rem;
    margin-top: 1rem; 
  }
  
  span {
    margin-left: 0.5rem; /* Adjust spacing between spans */
  }

  .image {
    flex-shrink: 0;
    display: inline-block;
    overflow: hidden;
    transition: all 0.5s ease;
    border-radius: 100%;
    width: 70px;
    height: 70px;

    img {
      border-radius: 100%;
      transition: all 0.5s ease;
    }
  }
`;

export default Sidebar;
