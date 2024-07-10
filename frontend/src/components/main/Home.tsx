import { FC } from "react";

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
    
    return (
      
        <div className="!w-[80%] ml-[20%]">
          <img
            src="./back.png"
            alt="no image"
            className="h-full w-full absolute top-0 left-0 right-0 bottom-0 object-fill "
          />
        </div>
      
    );
}

export default Home