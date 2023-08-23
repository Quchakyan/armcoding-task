import Header from "../Header";
import Footer from "../Footer";
import Routers from "../../routes/Routers";

export default function Layout() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}
