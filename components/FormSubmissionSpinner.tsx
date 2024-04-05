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
      {props.isPending ? (
        <Button className="w-full" disabled={props?.isPending}>
          <ThreeDots
            height="35"
            width="80"
            color="#FFFFFF"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          {props.label}
        </Button>
      )}
    </>
  );
};

export default FormSubmissionSpinner;
