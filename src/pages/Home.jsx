import AboutContainer from "../components/AboutContainer";
import CoWorkersContainer from "../components/CoWorkersContainer";
import ProdsContainer from "../components/ProdsContainer";
import ServicesContainer from "../components/ServicesContainer";
import Feedback from "../pages/Feedback";
import Helmet from "../components/helmet/Helmet";

export default function Home() {
  return (
    <Helmet title="Home">
      <AboutContainer />
      <ProdsContainer />
      <ServicesContainer />
      <CoWorkersContainer />
      <Feedback />
    </Helmet>
  );
}
