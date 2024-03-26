export const sendOtp = async (phoneNumber: string, otp: string) => {
  try {
    const formatedPhoneNumber = "91" + phoneNumber.slice(-10) + "@c.us";

    const sendOTP = await fetch("http://localhost:8000/send-otp", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        recipient: formatedPhoneNumber,
        OTP: otp,
      }),
    });

    console.log(sendOTP.status);
    return sendOTP.status;
  } catch (error: any) {
    console.log(error.message);
  }
};
