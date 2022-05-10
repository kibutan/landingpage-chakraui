import AboutUs from "../components/AboutUs";
import { Container } from "../components/Container";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Index = () => (
  <Container height="100vh">
    <Nav />
    <Hero />
    <AboutUs />
  </Container>
);

export default Index;
