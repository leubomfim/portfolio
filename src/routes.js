import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/index";
import { Header } from "./components/Header";
import { PortProvider } from "./contexts/context";
import { GoTop } from "./GoTop";
import { Home } from "./Pages/Home";

export const PagesRoutes = () => {
  return (
    <>
      <Router>
        <PortProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
          <GoTop />
        </PortProvider>
      </Router>
    </>
  );
};
