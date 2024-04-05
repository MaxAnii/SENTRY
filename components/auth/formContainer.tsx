"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type propsType = {
  children: React.ReactNode;
  title: string;
  backButtonLabel: string;
  backButtonhref: string;
};

const FormContainer = ({
  children,
  title,
  backButtonLabel,
  backButtonhref,
}: propsType) => {
  return (
    <div className="w-full flex justify-center items-center pt-4 lg:pt-12 p-3">
      <Card className=" w-full max-w-[400px] shadow-md">
        <CardHeader className="text-center">{title}</CardHeader>
        <CardContent>{children}</CardContent>

        <CardFooter>
          <Link href={backButtonhref}>
            <Button variant="link">{backButtonLabel}</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FormContainer;
