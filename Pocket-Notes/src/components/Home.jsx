import styled from "styled-components";
import { FaLock } from "react-icons/fa";

const Container = styled.div`
  background-color: #dae5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: absolute;
  bottom: 20px;
`;

const LockIcon = styled(FaLock)`
  margin-right: 8px;
`;

const FooterText = styled.span`
  font-size: 1rem;
  color: #555;
`;

function Home() {
  return (
    <div>
      <Container>
        <Image src="img/home.png" alt="Pocket Notes" />
        <Heading>Pocket Notes</Heading>
        <Text>
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </Text>
        <Footer>
          <LockIcon />
          <FooterText>end-to-end encrypted</FooterText>
        </Footer>
      </Container>
    </div>
  );
}

export default Home;
