import WhatAppVerificationForm from "@/components/auth/whatAppVerificationForm";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full p-6 text-left ">
        <div className="text-lg md:text-2xl">Verify your whatsApp number</div>
        <div className="text-sm  font-light md:text-lg">
          Please confirm your WhatsApp number and add the admin&apos;s number to
          the group you wish to secure.
        </div>
      </div>
      <WhatAppVerificationForm></WhatAppVerificationForm>
    </div>
  );
};

export default page;
