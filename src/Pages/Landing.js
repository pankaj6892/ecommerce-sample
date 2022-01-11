import { Topnav } from "../Components/Topnav";
import { Hero } from "../Components/Hero";
import { Deals } from "../Components/Deals";

const Landing = (props) => {
  return (
    <div>
      <Topnav />
      <Hero />
      <Deals />
    </div>
  );
};

export default Landing;
