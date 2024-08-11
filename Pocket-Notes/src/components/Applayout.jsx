import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Sidebar from "./Sidebar";

const Main = styled.main`
  background-color: var(--color-grey-50);
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  height: 100vh;
  margin: 0;
  position: relative;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;
`;

function Applayout() {
    return (
        <StyledAppLayout>
            <Sidebar />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </StyledAppLayout>
    );
}

export default Applayout;
