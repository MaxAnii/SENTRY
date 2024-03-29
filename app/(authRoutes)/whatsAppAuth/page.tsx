import WhatAppVerificationForm from "@/components/auth/whatAppVerificationForm";

const page = () => {
  return (
    <div>
      <div className="pl-2 pt-6 md:pl-9">
        <div className="pb-2 text-xl">Verify your whatsApp number</div>
        <p className="text-l py-1">
          Please confirm your WhatsApp number and add the admin&apos;s number to
          the group you wish to secure.
        </p>
      </div>
      <WhatAppVerificationForm></WhatAppVerificationForm>
    </div>
  );
};

export default page;
