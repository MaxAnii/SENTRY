"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userPhoneNumberSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";
import VerifyOTP from "./VerifyOTP";
import { createOTP } from "@/actions/phone-number-verification";
import FormSubmissionSpinner from "./FormSubmissionSpinner";
const VerifyPhoneNumber = () => {
  const [message, setMessage] = useState<string>("");
  const form = useForm<z.infer<typeof userPhoneNumberSchema>>({
    resolver: zodResolver(userPhoneNumberSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });
  const [showConfrimOTP, setShowConfrimOTP] = useState<Boolean>(false);
  const [showSendAgainOTP, setShowSendAgainOTP] = useState<Boolean>(false);
  const [timer, setTimer] = useState<number>(20);
  const [isPending, startTransition] = useTransition();
  const sendOTP = async (values: z.infer<typeof userPhoneNumberSchema>) => {
    setMessage("");
    if (!values.phoneNumber) return;
    startTransition(async () => {
      const data = await createOTP(values);
      if (data?.message === "OTP sent successfully") {
        setTimer(20);
        setShowSendAgainOTP(false);
        setShowConfrimOTP(true);
        const id = setInterval(() => {
          setTimer((prev) => {
            const newTimer = prev - 1;
            if (newTimer === 0) {
              setShowSendAgainOTP(true);
              clearInterval(id);
            }
            return newTimer;
          });
        }, 1000);
      } else setMessage(data?.message || "");
    });
  };

  return (
    <div className=" ">
      <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="text-blue-500 underline">
              Add/Change phone Number
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-left">
                Verify your phone Number
              </AlertDialogTitle>
              <AlertDialogDescription>
                {!showConfrimOTP ? (
                  <Form {...form}>
                    <p className="text-red-500">{message}</p>
                    <form
                      className="space-y-6"
                      onSubmit={form.handleSubmit(sendOTP)}
                    >
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="xxxxxxxxxx" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {!isPending ? (
                        <Button
                          type="submit"
                          className="w-full text-black dark:text-white"
                          disabled={isPending}
                        >
                          Get OTP
                        </Button>
                      ) : (
                        <FormSubmissionSpinner></FormSubmissionSpinner>
                      )}
                    </form>
                  </Form>
                ) : (
                  <div>
                    <div className="relative bottom-7 pb-1 text-right">
                      {showSendAgainOTP ? (
                        <button
                          className="text-blue-500 "
                          onClick={() => {
                            setShowConfrimOTP(false);
                            setTimer(60);
                          }}
                        >
                          Reverify phoneNumber
                        </button>
                      ) : (
                        <p>Reverify phoneNumber in {timer}</p>
                      )}
                    </div>
                    <VerifyOTP></VerifyOTP>
                  </div>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="w-full bg-red-500">
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default VerifyPhoneNumber;
