import { FC, FormEvent, useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUserRequest, loginUserSuccess } from "../../slice/authSlice";

interface LoginProps {}
const LoginComp: FC<LoginProps> = () => {

  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get("redirect") || "/"
  const submitInput = (e: { target: { name: string; value: string; }; }) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
   })
  }
  
   useEffect(() => {
     const userInfo = localStorage.getItem("userInfo");
     if (userInfo) {
       dispatch(loginUserSuccess(JSON.parse(userInfo)));
       navigate(redirect);
     }
   }, [dispatch,navigate,redirect]);

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   try {
     const res = {
       email: state.email,
       password: state.password,
     };
     dispatch(loginUserRequest(res));
     navigate("/")
   } catch (error) {
    alert("error login")
   }
    
  };
  return (
    <div className="bg-[#4EAC6D] min-h-screen p-10 overflow-hidden ">
      <div className="flex justify-between gap-20">
        <div className="leading-10">
          <div className="flex gap-3">
            <FaRegMessage className="text-white text-3xl " />
            <h1 className="text-2xl font-medium text-white">Let's Chat!</h1>
          </div>
          <h1 className="capitalize text-[#9ED5B2] ">
            come and enjoy with friends
          </h1>
          <div className="absolute bottom-0 pb-[6rem] pl-[20rem] ">
            <img
              src="./Animation.gif"
              alt="gif"
              className="w-[300px] h-[200px] object-center "
            />
          </div>
        </div>
        <div className="bg-[#fff] w-[70%]  h-[91vh] rounded-2xl ">
          <div className="flex items-center justify-center pt-[10rem]  ">
            <div>
              <h1 className="text-3xl capitalize ">Wellcome back!!</h1>
              <p className="text-[#b7beba] font-raleway text-center  text-xl ">
                sign in or register to chat
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center  pt-10">
            <form onSubmit={loginHandler} className="flex flex-col w-[40%] ">
              <div className="pt-3 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  onChange={submitInput}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="eg, user@gmail.com"
                  className="outline-none border h-11 rounded-md px-3 py-2 "
                />
              </div>

              <div className="pt-3 flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  onChange={submitInput}
                  name="password"
                  id="password"
                  type="text"
                  placeholder="********"
                  className="outline-none border h-11 rounded-md px-3 py-2 "
                />
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <h1 className="text-[#b7beba]">Forget password?</h1>
                </div>
              </div>
              <div className="pt-10">
                <button type="submit" className="bg-[#4EAC6D] text-center w-full h-11 rounded-md ">
                  Login
                </button>
              </div>
              <div className="flex gap-4 pt-10 justify-center">
                <h1>don't have an account?</h1>{" "}
                <Link to="/register" className="text-[#4EAC6D]">
                  {" "}
                  Register here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
