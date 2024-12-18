"use client";
import { NextPage } from "next";
import { Progress } from "../components/ui/Progress";
import { useRouter } from "next/navigation";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { confirm } from "../store/slice/confirmSlice";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const handleConfirmNavigation = () => {
    dispatch(confirm());
    router.push("/apply/study");
  };

  return (
    <div className="space-y-10 sm:space-y-14 animate-fade-in">
      <div className="bg-[#4366F6] rounded-2xl space-y-4 px-8 py-5">
        <div className="text-xl font-bold text-center text-white sm:text-2xl">
          Start Your Journey to Success with IWS
        </div>
        <div className="text-sm text-center text-white">
          Begin your path to world-class education in just three steps:
        </div>
      </div>

      <div className="space-y-3">
        <Progress value={33} />
        <div className="flex items-start gap-3">
          <div className="px-3 py-1 text-lg font-bold text-white rounded-md bg-[#4366F6]">
            1
          </div>
          <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between">
            <div className="text-xl text-[#4366F6] max-w-56">
              Submit the Application Form:
            </div>
            <div className="leading-tight sm:max-w-xs">
              Start by submitting this form to initiate the enrolment process.
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Progress value={66} />
        <div className="flex items-start gap-3">
          <div className="px-3 py-1 text-lg font-bold text-white rounded-md bg-[#4366F6]">
            2
          </div>
          <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between">
            <div className="text-xl text-[#4366F6] max-w-56">
              Assessment and Meeting:
            </div>
            <div className="leading-tight sm:max-w-xs">
              {
                "We’ll guide you through assessments and set up a meeting to review results, choose subjects, and discuss your child’s goals."
              }
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Progress value={100} />
        <div className="flex items-start gap-3">
          <div className="px-3 py-1 text-lg font-bold text-white rounded-md bg-[#4366F6]">
            3
          </div>
          <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between">
            <div className="text-xl text-[#4366F6] max-w-56">
              Finalise Enrolment:
            </div>
            <div className="leading-tight sm:max-w-xs">
              Finalise the process by completing the necessary documentation,
              confirming your place in our educational community.
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          onClick={handleConfirmNavigation}
          className="flex items-center justify-center px-6 py-3 text-white cursor-pointer rounded-xl bg-[#4366F6]">
          Go to Application
        </div>
      </div>
    </div>
  );
};

export default Page;
