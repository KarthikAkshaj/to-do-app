"use client";

import { useGlobalState } from "@/app/context/globalContextProvider";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Menu from "@/app/Utils/Menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button/Button";
import { arrowLeft, bars, logout } from "@/app/Utils/Icons";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";

function Sidebar() {
  const { theme, collapsed, collapseMenu } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();
  const { signOut } = useClerk();
  const { user } = useUser();
  const { firstName, lastName, imageUrl } = user || {
    firstName: "",
    lastName: "",
    imageUrl: "",
  };

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme} collapsed={collapsed}>
      <button className="toggle-nav" onClick={collapseMenu}>
        {collapsed ? bars : arrowLeft}
      </button>
      <div className="Profile">
        <div className="Profile-overlay">
          <div className="user-btn absolute z-20 top-0 w-full h-full">
            <UserButton />
          </div>
          <div className="image">
            <Image width={80} height={80} src={imageUrl} alt="Profile Image" />
          </div>
          <h1 className="captalize">
            {firstName} {lastName}
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
      <div className="sign-out relative m-6">
        <Button
          name={"Sign Out"}
          type={"submit"}
          padding={"0.4rem 0.8rem"}
          borderRad={"0.8rem"}
          fw={"500"}
          fs={"1.2rem"}
          icon={logout}
          click={() => {
            signOut(() => router.push("/Signin"));
          }}
        />
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav<{ collapsed: boolean }>`
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
    padding: 1rem 1rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: #ccff33;
    display: flex;
    align-items: center;

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
      opacity: 0.6;
      padding: 0.5rem 3rem 0.5rem 1.5rem;
    }

    .image {
      flex-shrink: 0;
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;
      width: 70px;
      height: 70px;
      margin-right: 1.3rem;

      img {
        border-radius: 100%;
        transition: all 0.3s ease;
      }
    }

    > h1 {
      font-size: 1.2rem;
      line-height: 1.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 1rem;
      left: 1rem;
      padding-bottom: 1rem;
      margin-top: 1rem;
    }

    span {
      margin-left: 0.5rem;
    }

    &:hover {
      .Profile-overlay {
        opacity: 1;
        border: 2px solid #15616d;
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  .nav-item {
    position: relative;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;
    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #335c67;
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: #00b4d8;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 600;
      transition: all 0.3s ease-in-out;
      z-index: 2;
      line-height: 0;
    }

    i {
      display: flex;
      align-items: center;
      color: #ffc300;
      z-index: 3;
    }

    &:hover {
      &::after {
        width: 100%;
      }
      i {
        z-index: 4;
      }
    }
  }

  .active {
    background-color: #0f4c5c;

    i,
    a {
      color: #ffff3f;
    }
  }

  .active::before {
    width: 0.5rem;
  }

  .user-btn {
    .cl-rootBox {
      width: 100%;
      height: 100%;

      .cl-userButtonBox {
        width: 100%;
        height: 100%;

        .cl-userButtonTrigger {
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
  }

  @media screen and (max-width: 780px) {
    position: fixed;
    height: calc(100vh - 2rem);
    z-index: 200;
    transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);
    transform: ${(props) =>
      props.collapsed ? "translateX(-107%)" : "translateX(0)"};
    .toggle-nav {
      display: block !important;
    }
  }

  .toggle-nav {
    display: none;
    padding: 0.8rem 0.9rem;
    position: absolute;
    right: -49px;
    top: 1.8rem;

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    background-color: #022836;
    border-right: 2px solid #f48c06;
    border-top: 2px solid #f48c06;
    border-bottom: 2px solid #f48c06;
    border-left: 3px solid #022836;
  }
`;

export default Sidebar;
