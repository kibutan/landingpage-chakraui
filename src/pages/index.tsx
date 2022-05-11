import AboutUs from "../components/AboutUs";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Index = () => (
  <Container height="100vh">
    <Nav />
    <Hero />
    <AboutUs />
    <Footer />
  </Container>
);

export default Index;
