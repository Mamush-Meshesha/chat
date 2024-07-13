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
        className="!w-[80%] ml-[20%] h-screen mb-[60px] md:mb-0 "
        style={{ backgroundImage: `url("./back.png")` }}
      >
        <div>
          <Dashboardheader />
        </div>
        <div className="h-[calc(100%-85px)]   overflow-y-scroll">
          <div>
            <div className="pt-[100px] px-5 ">
              <div className="space-y-8 ">
                {/* me */}
                <div className="flex justify-end">
                  <div className="bg-[#CCE2D3] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello
                      hhhdfffffffffffffffffffffffsyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    </h1>
                  </div>
                </div>
                {/* Friend */}
                <div className="flex justify-start">
                  <div className="bg-[#FFFFFF] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello there
                      gggggggggggggggggggggggffffffffffffffffffffffggggggggggggggggggggggggggfffffffffffffffffffffffffg
                    </h1>
                  </div>
                </div>
                {/* end */}
                {/* me */}
                <div className="flex justify-end">
                  <div className="bg-[#CCE2D3] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello
                      hhhdfffffffffffffffffffffffsyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    </h1>
                  </div>
                </div>
                {/* Friend */}
                <div className="flex justify-start">
                  <div className="bg-[#FFFFFF] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello there
                      gggggggggggggggggggggggffffffffffffffffffffffggggggggggggggggggggggggggfffffffffffffffffffffffffg
                    </h1>
                  </div>
                </div>
                {/* end */}
                {/* me */}
                <div className="flex justify-end">
                  <div className="bg-[#CCE2D3] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello
                      hhhdfffffffffffffffffffffffsyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    </h1>
                  </div>
                </div>
                {/* Friend */}
                <div className="flex justify-start">
                  <div className="bg-[#FFFFFF] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello there
                      gggggggggggggggggggggggffffffffffffffffffffffggggggggggggggggggggggggggfffffffffffffffffffffffffg
                    </h1>
                  </div>
                </div>
                {/* end */}
                {/* me */}
                <div className="flex justify-end">
                  <div className="bg-[#CCE2D3] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello
                      hhhdfffffffffffffffffffffffsyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    </h1>
                  </div>
                </div>
                {/* Friend */}
                <div className="flex justify-start">
                  <div className="bg-[#FFFFFF] rounded-md px-3 py-2 max-w-xs break-words">
                    <h1>
                      Hello there
                      gggggggggggggggggggggggffffffffffffffffffffffggggggggggggggggggggggggggfffffffffffffffffffffffffg
                    </h1>
                  </div>
                </div>
                {/* end */}
              </div>
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
