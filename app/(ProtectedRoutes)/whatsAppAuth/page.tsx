import WhatAppVerificationForm from "@/components/auth/whatAppVerificationForm";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full pb-2 text-center text-2xl">
        Verify your whatsApp number
      </div>
      <WhatAppVerificationForm></WhatAppVerificationForm>
    </div>
  );
};

export default page;
