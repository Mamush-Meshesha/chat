import { FC } from "react";
import Dashboardheader from "../components/ui/dashboardheader";
import Dashboardbottom from "../components/ui/dashboardbottom";
import Header from "../components/header";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Header />
      <div
        className="!w-[80%] ml-[20%] h-screen"
        style={{ backgroundImage: `url("./back.png")` }}
      >
        <div>
          <Dashboardheader />
        </div>
        <div>
          <Dashboardbottom />
        </div>
      </div>
    </div>
  );
};

export default Home;
