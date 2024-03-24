"use client";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { useEffect, useState, useTransition } from "react";
import FormContainer from "@/components/auth/formContainer";
import { Triangle } from "react-loader-spinner";
const Page = () => {
  const [isPending, setTransiton] = useTransition();
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");
  const params = useSearchParams();
  const token = params.get("token");
  const confrimToken = () => {
    if (!token) return;
    newVerification(token).then((data) => {
      if (data?.message === "verified") {
        setMessage("Your email is verified");
        setMessageClass("green");
      } else {
        setMessageClass("red");

        setMessage(data.message);
      }
    });
  };
  useEffect(() => {
    setTransiton(() => {
      confrimToken();
    });
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <FormContainer
        title="verifying your email"
        backButtonLabel="Back to login !!"
        backButtonhref="/signIn"
      >
        <div className="pl-[40%]">
          {isPending ? (
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
            />
          ) : (
            <div
              className={`text-xl text-${messageClass}-600 ml-[-130px] mt-2 rounded-xl bg-gray-800 p-6 text-center`}
            >
              {message}
            </div>
          )}
        </div>
      </FormContainer>
    </div>
  );
};

export default Page;
