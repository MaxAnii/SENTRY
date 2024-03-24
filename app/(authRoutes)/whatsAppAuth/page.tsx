import WhatAppVerificationForm from "@/components/auth/whatAppVerificationForm";

const page = () => {
  return (
    <div>
      <div className="pl-9">
        <div className="pb-2 text-xl">{"Verify your what'sApp number"}</div>
        <p className="text-l">
          {
            " Please confirm your WhatsApp number and add the admin's number to the group you wish to secure."
          }
        </p>
      </div>
      <WhatAppVerificationForm></WhatAppVerificationForm>
    </div>
  );
};

export default page;
