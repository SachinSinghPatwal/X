import React, { useState, useEffect } from "react";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import authService from "../../AppwriteServices/Auth/Auth";
import { login as authLogin } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../Public/Logo.svg";
import { Loader } from "../index";
function CreateAccount() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  let message = useSelector((state) => state.auth.authServiceError);
  useEffect(() => {
    authService.getCurrentUser().finally(() => {
      setLoading(false);
    });
  }, []);
  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        setError(message);
        userData && dispatch(authLogin(userData));
      }
    } catch (error) {
      setError(error);
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
      <div
        className="bg-gray-900 text-gray-700 absolute top-0 right-0 h-[3rem]
      w-[40vw] lg:w-[30vw] border-white border-[1px] z-40 pt-[.4rem] text-2xl 
      pl-[1rem] "
      >
        !{}
      </div>
      <div className="absolute rounded-xl h-[95vh] w-[80vw] lg:w-[40rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black z-30 ">
        <div className="grid place-items-center h-full gap-[1.5rem] ">
          {loading && (
            <div className="grid place-items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
              <Loader bg="#050505" />
            </div>
          )}
          <img
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
              className="max-w-[70%] grid  justify-items-center gap-[1rem] "
            >
              <section className="w-full">
                <div>
                  <Button calledBy="NextInCreateAccount" />
                </div>
                <div className="grid gap-[1rem]">
                  <h1 className="text-gray-200 text-3xl font-bold mb-[.5rem]">
                    Create your account
                  </h1>
                  <Input
                    type="text"
                    placeholder="User Name"
                    minLength={3}
                    {...register("name", {
                      required: true,
                    })}
                  />
                  <Input
                    type="email"
                    placeholder="@gmail.com"
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
                    placeholder="+8 words"
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
                <p className="text-gray-500 mb-[.7rem] text-sm font-sans">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
                <div className="grid grid-cols-[45%_20%_30%] justify-between ">
                  <Input type="text" by="dates" placeholder="Month Name" />
                  <Input type="number" by="dates" placeholder="Date" />
                  <Input type="text" by="dates" placeholder="Year" />
                </div>
              </article>
              <footer className=" w-full h-[9rem] grid place-items-center">
                <button
                  className="grid rounded-full place-items-center 
              hover:cursor-pointer h-[3rem] w-full bg-gray-600"
                  type="submit"
                >
                  <div className="font-semibold text-black ">
                    Create account
                  </div>
                </button>
              </footer>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
