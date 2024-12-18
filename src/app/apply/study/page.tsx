"use client";
import { Progress } from "@/app/components/ui/Progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/Select";
import { ALevelProgramm, Programms } from "@/app/data/Programms";
import { getMonthName } from "@/app/lib/getMonthName";
import {
  ALevelProgram,
  DateObject,
  Package,
  Subject,
} from "@/app/lib/Interfaces";
import { addStudy } from "@/app/store/slice/studyReducer";
import { AppDispatch, RootState } from "@/app/store/store";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const study = useSelector((state: RootState) => state.study);
  const [selectedPackage, setSelectedPackage] = useState<
    Package | ALevelProgram
  >(study.package !== null ? study.package : Programms[0]);

  const dispatch: AppDispatch = useDispatch();
  const completed = useSelector((state: RootState) => state.confirm.confirm);

  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>(
    study.selectedSubjects !== null
      ? study.selectedSubjects
      : Programms[0].package.slice(0, Programms[0].selected)
  );

  const handleChooseSubject = (sub: Subject) => {
    if (selectedPackage) {
      setSelectedSubjects((prevSelectedSubjects) => {
        const isSubjectSelected = prevSelectedSubjects?.some(
          (subject) => subject.id === sub.id
        );
        if (isSubjectSelected && prevSelectedSubjects) {
          if (prevSelectedSubjects.length > selectedPackage.min_select) {
            return prevSelectedSubjects.filter(
              (subject) => subject.id !== sub.id
            );
          } else {
          }
          return prevSelectedSubjects;
        } else {
          const newSelectedSubjects = [...(prevSelectedSubjects || []), sub];
          return newSelectedSubjects;
        }
      });
    }
  };

  const handlePackage = (programm: Package | ALevelProgram) => {
    setSelectedPackage(programm);

    setSelectedSubjects(() => {
      const newSubjects = programm.package
        .slice(0, programm.selected)
        .map((pkg) => ({
          id: pkg.id,
          name: pkg.name,
          price: pkg.price,
          exist: pkg.exist,
        }));
      return newSubjects;
    });
  };

  const [date, setDate] = useState<DateObject>({
    day: study.date && study.date.day !== null ? study.date.day : 1,
    month: study.date && study.date.month ? study.date.month : 9,
    year: study.date && study.date.year ? study.date.year : 2024,
  });
  const today = new Date();
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const isLeapYear = (year: number): boolean =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const getDaysInMonth = (month: number, year: number): number => {
    if (month === 2) {
      return isLeapYear(year) ? 29 : 28;
    }
    if ([4, 6, 9, 11].includes(month)) {
      return 30;
    }
    return 31;
  };
  const router = useRouter();

  useEffect(() => {
    const newDaysInMonth = getDaysInMonth(date.month, date.year);
    const days = Array.from({ length: newDaysInMonth }, (_, i) => i + 1);
    const validDays =
      date.year === today.getFullYear() && date.month === today.getMonth() + 1
        ? days.filter((day) => day >= today.getDate())
        : days;
    setDaysInMonth(validDays);
    if (!validDays.includes(date.day)) {
      setDate((currentDate) => ({ ...currentDate, day: validDays[0] }));
    }
  }, [date.month, date.year]);

  useEffect(() => {
    if (!completed) {
      router.push("/apply");
    }
  }, [router, completed]);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 2 }, (_, i) => today.getFullYear() + i);
  const filteredMonths = months.filter(
    (month) => month !== 6 && month !== 7 && month !== 8
  );
  const handleDateSelection = (
    field: keyof DateObject,
    value: number | string
  ) => {
    const newDate = { ...date, [field]: value };

    if (
      newDate.year === today.getFullYear() &&
      newDate.month < today.getMonth() + 1
    ) {
      return;
    }
    if (
      newDate.year === today.getFullYear() &&
      newDate.month === today.getMonth() + 1 &&
      newDate.day < today.getDate()
    ) {
      return;
    }
    setDate((currentDate) => ({ ...currentDate, [field]: value }));
  };

  const handleStudy = () => {
    dispatch(
      addStudy({
        package: selectedPackage,
        selectedSubjects: selectedSubjects,
        date: date,
      })
    );

    router.push("/apply/parent");
  };

  return (
    <div className="space-y-10 sm:space-y-14 animate-fade-in">
      <div className="bg-[#4366F6] rounded-xl space-y-4 px-8 py-2">
        <div className="text-xl font-bold text-center text-white sm:text-2xl">
          APPLICATION FORM
        </div>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">1. Study Information</div>
            <div className="text-xs">1/4</div>
          </div>
          <Progress value={25} />
        </div>
      </div>

      <div className="space-y-2">
        <div className="pl-3 text-sm font-bold">
          Which year group will the student be joining? *
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Programms.map((programm, index) => (
            <div
              key={index}
              onClick={() => handlePackage(programm)}
              className={`px-4 py-2 border-2 rounded-lg cursor-pointer ${
                programm.name === selectedPackage.name
                  ? "bg-activeBackground border-[#4366F6]"
                  : "bg-disactiveBackground border-border"
              }`}>
              <div className="text-lg">{programm.name}</div>
              <div className="text-sm text-black/30">{programm.age}</div>
            </div>
          ))}

          <div
            onClick={() => handlePackage(ALevelProgramm)}
            className={`px-4 py-2 border-2 rounded-lg cursor-pointer ${
              selectedPackage?.name === ALevelProgramm.name
                ? "bg-activeBackground border-[#4366F6]"
                : "bg-disactiveBackground border-border"
            }`}>
            <div className="text-lg">{ALevelProgramm.name}</div>
            <div className="text-sm text-black/30">{ALevelProgramm.age}</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="pl-3">
          <div className="text-sm font-bold">
            What subjects is your child interested in learning? *
          </div>
          <div className="text-xs">
            Feel free to select a few to get started. You can always change them
            later!
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {selectedPackage.package.map((pac, index) => (
            <div
              key={index}
              onClick={() => handleChooseSubject(pac)}
              className={`flex items-center gap-3 px-4 py-2 border-2 rounded-lg cursor-pointer ${
                selectedSubjects?.some((subject) => subject.id === pac.id)
                  ? "bg-activeBackground border-[#4366F6]"
                  : "bg-disactiveBackground border-border"
              }`}>
              <div
                className={`flex items-center justify-center w-4 h-4 border-2 rounded-full ${
                  selectedSubjects?.some((subject) => subject.id === pac.id)
                    ? "border-[#4366F6]"
                    : "border-border"
                }`}>
                <div
                  className={`w-2 h-2 rounded-full ${
                    selectedSubjects?.some((subject) => subject.id === pac.id)
                      ? "bg-[#4366F6]"
                      : "bg-border"
                  }`}
                />
              </div>

              <div className="">{pac.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="pl-3">
          <div className="text-sm font-bold">
            Select your preferred start date *
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Select
            value={date.day.toString()}
            onValueChange={(value) => handleDateSelection("day", value)}>
            <SelectTrigger className="px-4 py-2 border-2 border-border bg-disactiveBackground">
              <SelectValue placeholder="Select day" />
            </SelectTrigger>
            <SelectContent className="bg-disactiveBackground">
              <SelectGroup>
                {daysInMonth.map((day) => (
                  <SelectItem key={day} value={day.toString()}>
                    {day}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={date.month.toString()}
            onValueChange={(value) => handleDateSelection("month", value)}>
            <SelectTrigger className="px-4 py-2 border-2 border-border bg-disactiveBackground">
              <SelectValue placeholder="October" />
            </SelectTrigger>
            <SelectContent className="bg-disactiveBackground">
              <SelectGroup>
                {filteredMonths
                  .filter(
                    (month) =>
                      date.year > today.getFullYear() ||
                      month >= today.getMonth() + 1
                  )
                  .map((month) => (
                    <SelectItem key={month} value={month.toString()}>
                      {getMonthName(month)}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={date.year.toString()}
            onValueChange={(value) => handleDateSelection("year", value)}>
            <SelectTrigger className="px-4 py-2 border-2 border-border bg-disactiveBackground">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent className="bg-disactiveBackground">
              <SelectGroup>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div
        onClick={handleStudy}
        className="py-2 text-center text-white rounded-lg cursor-pointer bg-[#4366F6]">
        Continue
      </div>
    </div>
  );
};

export default Page;
