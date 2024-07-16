import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "shared/ui/container/style";
import { Header } from "widgets/header/ui/Header";

export const Layout = () => {
  return (
    <Container>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </Container>
  );
};
