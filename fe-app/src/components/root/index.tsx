import Container from "@/components/layout/Container";
import NavBar from "@/components/layout/NavBar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}

export default Root;
