import { FC } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVideoCall, MdWifiCalling3 } from "react-icons/md";

interface DashboardheaderProps{

}
const  Dashboardheader:FC<DashboardheaderProps> =() => {
  return (
    <div className="bg-[#E5DDD5] h-20 w-[80%] ml-[20%] border-b  absolute top-0 left-0 right-0 ">
      <div className="flex justify-between px-10 items-center h-full">
        {/* left side */}
        <div className="flex  gap-3 ">
          <div className="h-10 w-10 relative border rounded-full bg-black  ">
            <span className="w-3 h-3 rounded-full bg-green-600 absolute right-0  bottom-0 "></span>
          </div>
          <div>
            <div className="flex flex-col text-[#66615e] ">
              {/* name */}
              <h1>Mamush</h1>
              {/* status */}
              <span className="text-xs">active</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div>
          <div className="flex gap-8 text-2xl text-[#66615e] ">
            <MdWifiCalling3 />
            <MdVideoCall />
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardheader
