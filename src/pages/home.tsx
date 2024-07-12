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
        className="!w-[80%] ml-[20%] h-screen "
        style={{ backgroundImage: `url("./back.png")` }}
      >
        <div>
          <Dashboardheader />
        </div>
        <div className="h-[calc(100%-200px)]  overflow-y-scroll">
          <div>
            <div className="pt-[1110px] ">
              fffffffffffffffffffffffffffffffffffffffff
            </div>
          </div>
        </div>
        <div>
          <Dashboardbottom />
        </div>
      </div>
    </div>
  );
};

export default Home;
