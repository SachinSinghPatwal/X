import React, { useState, useEffect } from "react";
import { Input } from "../../index";
import { useForm } from "react-hook-form";
import authService from "../../../AppwriteServices/Auth/Auth";
import { login as authLogin } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
import Logo from "../../../Public/Logo.svg";
import { Loader } from "../../index";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { setTogglingAuthPageStatus } from "../../../store/authSlice";
import fallbackLoading from "../../../Public/authloading.gif";
import Authloading from "../../../Public/Authloading.webm";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const login = async (data) => {
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        userData && dispatch(authLogin(userData));
        navigate(1, { replace: true });
      }
    } catch (error) {
      console.log("error in create account", error);
    }
  };
  return (
    <>
      <style>
        {`
          input:user-valid{
          border-color:#1A8CD8;
          color:#1A8CD8;
          }
          input:user-invalid{
          border-color:#ad5852;
          color:#ad5852;
          }
          `}
      </style>
      <div className="absolute rounded-xl h-[95vh] w-[80vw] lg:w-[40rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black z-30 ">
        <div className="grid place-items-center h-full  content-center">
          {loading && (
            <div className=" grid place-items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
              <Loader bg="#050505" />
            </div>
          )}
          <img
            loading="lazy"
            src={Logo}
            style={{ filter: "invert(90%)" }}
            className={`h-[60px] mt-[10px] visible ${
              loading && "absolute invisible"
            }`}
            alt=""
          />
          {!loading && (
            <form
              onSubmit={handleSubmit(login)}
              className="w-[70%] grid text-center relative"
            >
              <button
                className="absolute left-[-4rem] top-[-11rem]"
                onClick={() => {
                  dispatch(setTogglingAuthPageStatus(false));
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  style={{ color: "white" }}
                />
              </button>
              <section className="">
                <div className="grid gap-[1rem] my-[1rem]">
                  <h1 className="text-gray-200 text-3xl font-bold mb-[.5rem]">
                    Welcome back
                  </h1>
                  <Input
                    type="email"
                    placeholder="@gmail.com"
                    required
                    onKeyDown={(e) => {
                      if (/\d/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    minLength={8}
                    {...register("password", {
                      required: true,
                    })}
                  />
                </div>
              </section>
              <footer className=" w-full h-[9rem] grid place-items-center">
                <button
                  className="grid rounded-full place-items-center 
              hover:cursor-pointer h-[3rem] w-full bg-[#2e85d7] 
              hover:bg-[#2675ba]"
                  type="submit"
                  onClick={() => {
                    setLoadingOnButton(true);
                    navigate(1, { replace: true });
                  }}
                  style={{
                    background: loadingOnButton && "white",
                    transition: " 1s background ",
                  }}
                >
                  {loadingOnButton ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute bottom-[1.5rem] h-[6rem] left-[34%]"
                    >
                      <source src={Authloading} type="video/webm" />
                      <img
                        loading="lazy"
                        src={fallbackLoading}
                        alt="loading..."
                      />
                    </video>
                  ) : (
                    <div className="font-semibold text-black ">Login</div>
                  )}
                </button>
                <div className="absolute bottom-4 text-red-500 text-[14px]">
                  {error}
                </div>
              </footer>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
