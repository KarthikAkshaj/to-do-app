"use client";

import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
  return <GlobalStyles>{children}</GlobalStyles>;
}

const GlobalStyles = styled.div`
  padding: 3rem;
  display: flex;
  gap: 3rem;
  height: 100%;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 2fr));
    gap: 4rem;
  }
`;

export default GlobalStyleProvider;
