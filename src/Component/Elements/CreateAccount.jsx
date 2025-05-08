import React, { useState, useEffect } from "react";
import { Input } from "../index";
import { useForm } from "react-hook-form";
import authService from "../../AppwriteServices/Auth/Auth";
import { login } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import Logo from "../../Public/Logo.svg";
import { Loader } from "../index";
import { useNavigate } from "react-router-dom";
import { setTogglingAuthPageStatus } from "../../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import fallbackLoading from "../../Public/authloading.gif";
import Authloading from "../../Public/Authloading.webm";

function CreateAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  });
  const create = async (data) => {
    setError("");
    setLoadingOnButton(true);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        userData && dispatch(login(userData));
        navigate(1, { replace: true });
        dispatch(setTogglingAuthPageStatus(false));
        setLoadingOnButton(false);
      }
    } catch (error) {
      setError(error.message);
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
      <div
        className="absolute rounded-xl h-[95vh] w-[80vw] lg:w-[40rem] 
      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black 
      z-30 "
      >
        <div className="grid place-items-center h-full gap-[1.5rem] ">
          {loading && (
            <div
              className="grid place-items-center absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 z-40"
            >
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
              onSubmit={handleSubmit(create)}
              className="relative max-w-[70%] grid  justify-items-center 
              gap-[1rem] "
            >
              <button
                className="absolute left-[-4rem] top-[-5.2rem]"
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
              <section className="w-full">
                <div className="grid gap-[1rem]">
                  <h1 className="text-gray-200 text-3xl font-bold mb-[.5rem]">
                    Create your account
                  </h1>
                  {
                    <Input
                      type="text"
                      placeholder="Name"
                      onKeyDown={(e) => {
                        if (/\d/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      required
                      minLength={3}
                      {...register("name", {
                        required: true,
                      })}
                    />
                  }
                  <Input
                    type="email"
                    placeholder="@gmail.com"
                    onKeyDown={(e) => {
                      if (/\d/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    required
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
                    placeholder="Password must contain atleast 8 letters 
                    "
                    required
                    minLength={8}
                    {...register("password", {
                      required: true,
                    })}
                  />
                </div>
              </section>
              <article>
                <h3 className="text-gray-50 mt-[1rem] mb-[.5rem]">
                  Date of birth
                </h3>
                <p className="text-gray-200 mb-[.7rem] text-sm font-sans">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
                <div className="grid grid-cols-[45%_20%_30%] justify-between ">
                  <Input
                    type="text"
                    by="dates"
                    required
                    onKeyDown={(e) => {
                      if (/\d/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    minLength={3}
                    maxLength={8}
                    placeholder="Month Name"
                  />
                  <Input
                    type="number"
                    by="dates"
                    required
                    min={0}
                    max={31}
                    placeholder="Date"
                  />
                  <Input
                    type="number"
                    by="dates"
                    required
                    min={1900}
                    max={2014}
                    placeholder="Year"
                  />
                </div>
              </article>
              <footer className=" w-full h-[9rem] grid place-items-center">
                <button
                  className="grid rounded-full place-items-center 
              hover:cursor-pointer h-[3rem] w-full bg-gray-100"
                  type="submit"
                  onClick={() => {
                    navigate(1, { replace: true });
                  }}
                >
                  <div className="font-semibold text-black ">
                    {loadingOnButton ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute bottom-[1rem] left-[34%]"
                      >
                        <source src={Authloading} type="video/webm" />
                        <img
                          loading="lazy"
                          src={fallbackLoading}
                          alt="loading..."
                        />
                      </video>
                    ) : (
                      "Create account"
                    )}
                  </div>
                </button>
                <div className="absolute bottom-3 text-[14px] text-red-400">
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

export default CreateAccount;
