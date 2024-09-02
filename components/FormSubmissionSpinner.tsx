import { ThreeDots } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
const FormSubmissionSpinner = ({
  ...props
}: {
  isPending: boolean;
  label: string;
}) => {
  return (
    <>
      <Button className="w-full" type="submit" disabled={props.isPending}>
        {props.label}
      </Button>
    </>
  );
};

export default FormSubmissionSpinner;
