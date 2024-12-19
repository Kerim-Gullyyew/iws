"use client";
import { Checkbox } from "@/app/components/ui/Checkbox";
import { Progress } from "@/app/components/ui/Progress";
import { RootState } from "@/app/store/store";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const router = useRouter();
  const completed = useSelector((state: RootState) => state.parent.completed);
  const student = useSelector((state: RootState) => state.student);
  const study = useSelector((state: RootState) => state.study);
  const parent = useSelector((state: RootState) => state.parent);
  const [error, setError] = useState<null | string>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!completed) {
      router.push("/apply/parent");
    }

    // Save the current full URL to local storage as 'initialUrl'
    // const initialUrl = window.location.href;
    // localStorage.setItem("initialUrl", initialUrl);
  }, [completed, router]);

  const handleBack = () => {
    router.push("/apply/student");
  };

  const handlePayment = async () => {
    if (!checked) {
      setError("Required");
    } else {
      setError(null);
      setIsLoading(true);

      // Retrieve 'initialUrl' from local storage
      const initialUrl = localStorage.getItem("initialUrl");

      const apiPayload = {
        data: {
          totalPrice: 200,
          parent: parent,
          student: student,
          selectedPackage: study.package?.name,
          selectedSubjects: study.selectedSubjects,
          date: study.date,
          news: updated,
          initialUrl: initialUrl, // Add initialUrl to the payload
        },
      };

      const apiUrl =
        "https://api.main.iwsonlineschool.co.uk/create-checkout-session-mainstream";
      // "http://localhost:3500/create-checkout-session-mainstream";

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiPayload),
        });

        if (!response.ok) {
          throw new Error("Failed to process the payment.");
        }

        const result = await response.json();
        window.location.href = result.url;
      } catch (error) {
        console.error("Error processing form:", error);
        alert("There was an error processing your request. Please try again.");
      } finally {
        setIsLoading(false);
        setError(null);
      }
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setChecked(checked);
  };

  const handleUpdateChange = (checked: boolean) => {
    setUpdated(checked);
  };

  return (
    <div className="space-y-10 sm:space-y-14 animate-fade-in">
      <div className="bg-[#4366F6] rounded-xl space-y-4 px-8 py-2">
        <div className="text-xl font-bold text-center text-white sm:text-2xl">
          APPLICATION FORM
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">4. Confirmation</div>
              <div className="text-xs">4/4</div>
            </div>
            <Progress value={100} />
          </div>
          <div className="text-xs tracking-tight">
            Please review all information carefully before submitting. A
            non-refundable £200 registration fee will be required to complete
            your application.
          </div>
        </div>

        <div className="border-t-[1px] border-border pt-4 pb-6">
          <div className="flex items-center justify-between">
            <div className="text-xs text-[#4366F6]">
              Parent/Guardian Information
            </div>
            <div
              onClick={() => router.push("/apply/parent")}
              className="text-xs underline cursor-pointer text-[#4366F6]">
              Edit
            </div>
          </div>

          <div className="pt-6">{parent.firstName + " " + parent.lastName}</div>

          <div className="grid grid-cols-2 pt-5 gap-x-3 gap-y-2">
            <div className="text-xs text-textGray">{parent.email}</div>
            <div className="text-xs text-textGray">{parent.address}</div>
            <div className="text-xs text-textGray">
              {parent.parentPhoneNumber}
            </div>
            <div className="text-xs text-textGray">{parent.city}</div>
          </div>
        </div>

        <div className="border-t-[1px] border-border pt-4 pb-6">
          <div className="flex items-center justify-between">
            <div className="text-xs text-[#4366F6]">Student Information</div>
            <div
              onClick={() => router.push("/apply/student")}
              className="text-xs underline cursor-pointer text-[#4366F6]">
              Edit
            </div>
          </div>

          <div className="pt-6">
            {student.firstName + " " + student.lastName}
          </div>

          <div className="grid grid-cols-2 pt-5 gap-x-3 gap-y-2">
            <div className="text-xs text-textGray">{student.email}</div>
            <div className="text-xs text-textGray">{student.address}</div>
            <div className="text-xs text-textGray">
              {student.studentPhoneNumber}
            </div>
            <div className="text-xs text-textGray">{student.city}</div>
          </div>
        </div>
      </div>

      <div className="px-3 pt-6 pb-3 space-y-5 border-2 border-border rounded-2xl">
        <div>
          <div className="text-xl font-bold text-center">Application Fee</div>
          <div className="text-sm text-center">
            Total Amount Due Now: £200 (non-refundable).
          </div>
        </div>
        <div className="text-4xl font-[500] text-center">£200</div>

        <div className="space-y-1">
          {error && (
            <div className="text-sm text-center text-red-600">{error}</div>
          )}

          <div className="flex flex-col items-center justify-center w-full ">
            <div>
              <div className="flex gap-2">
                <div>
                  <Checkbox
                    id="terms"
                    checked={checked}
                    onCheckedChange={handleCheckboxChange}
                  />
                </div>
                <div className="text-sm">
                  I agree to the
                  <span
                    onClick={() =>
                      window.open(
                        "https://iwsonlineschool.co.uk/terms-conditions",
                        "_blank"
                      )
                    }
                    className="cursor-pointer text-[#4366F6]">
                    {" "}
                    Terms and Conditions
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <div>
                  <Checkbox
                    id="update"
                    checked={updated}
                    onCheckedChange={handleUpdateChange}
                  />
                </div>
                <div className="text-sm">
                  Please keep me updated on news, events and offers from IWS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            onClick={handleBack}
            className="py-2 text-center text-black transition-colors duration-300 border-2 rounded-lg cursor-pointer hover:bg-gray-200 border-border sm:col-span-1 bg-disactiveBackground">
            Back
          </div>
          <div
            onClick={isLoading ? undefined : handlePayment}
            className={`py-2 text-center text-white sm:col-span-2 rounded-lg ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#4366F6] cursor-pointer"
            }`}>
            {isLoading ? "Processing..." : "Continue >"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
