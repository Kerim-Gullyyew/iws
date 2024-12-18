"use client";
import { NextPage } from "next";
import { Progress } from "@/app/components/ui/Progress";
import { ArrowDownIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Input } from "@/app/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/Select";

import { Label } from "@/app/components/ui/Label";
import PhoneNumber from "@/app/components/ui/PhoneNumber";
import countryList from "react-select-country-list";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addParent } from "@/app/store/slice/parentReducer";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { AppDispatch, RootState } from "@/app/store/store";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  chooseParent: Yup.string()
    .oneOf(["Parent", "Guardian"])
    .required("Please select Parent or Guardian"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Prefer not to say"])
    .required("Please select a gender"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  parentPhoneNumber: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  postal: Yup.string().required("Postal code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const parent = useSelector((state: RootState) => state.parent);

  const [formData, setFormData] = useState({
    chooseParent:
      parent.chooseParent !== null
        ? parent.chooseParent
        : ("Parent" as "Parent" | "Guardian"),

    gender:
      parent.gender !== null
        ? parent.gender
        : ("Male" as "Male" | "Female" | "Prefer not to say"),
    firstName: parent.firstName !== null ? parent.firstName : "",
    lastName: parent.lastName !== null ? parent.lastName : "",
    email: parent.email !== null ? parent.email : "",
    parentPhoneNumber:
      parent.parentPhoneNumber !== null ? parent.parentPhoneNumber : "44",
    address: parent.address !== null ? parent.address : "",
    postal: parent.postal !== null ? parent.postal : "",
    city: parent.city !== null ? parent.city : "",
    country: parent.country !== null ? parent.country : "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch: AppDispatch = useDispatch();
  const completed = useSelector((state: RootState) => state.study.completed);
  const router = useRouter();
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (
    field: string,
    value: string | ((prevState: string) => string)
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]:
        typeof value === "function"
          ? value(prevData[field as keyof typeof prevData] as string)
          : value,
    }));
  };

  useEffect(() => {
    if (!completed) {
      router.push("/apply/study");
    }
  }, [router, completed]);

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // If validation passes, you can proceed with form submission
      dispatch(
        addParent({
          chooseParent: formData.chooseParent,
          gender: formData.gender,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          parentPhoneNumber: formData.parentPhoneNumber,
          address: formData.address,
          postal: formData.postal,
          city: formData.city,
          country: formData.country,
        })
      );

      router.push("/apply//student");
      setErrors({});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleBack = () => {
    router.push("/apply/study");
  };

  return (
    <div className="space-y-10 sm:space-y-14 animate-fade-in">
      <div className="bg-[#4366F6] rounded-xl space-y-4 px-8 py-2">
        <div className="text-xl font-bold text-center text-white sm:text-2xl">
          APPLICATION FORM
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">
            2. Parent/Guardian Information
          </div>
          <div className="text-xs">2/4</div>
        </div>
        <Progress value={50} />
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <div className="pl-3 text-sm font-bold">I confirm I am the</div>
          <div className="grid grid-cols-2 gap-3">
            <div
              onClick={() => handleChange("chooseParent", "Parent")}
              className={`px-4 py-2 border-2 rounded-lg cursor-pointer ${
                formData.chooseParent === "Parent"
                  ? "bg-activeBackground border-[#4366F6]"
                  : "bg-disactiveBackground border-border"
              }`}>
              <div className="">Parent</div>
            </div>

            <div
              onClick={() => handleChange("chooseParent", "Guardian")}
              className={`px-4 py-2 border-2 rounded-lg cursor-pointer ${
                formData.chooseParent === "Guardian"
                  ? "bg-activeBackground border-[#4366F6]"
                  : "bg-disactiveBackground border-border"
              }`}>
              <div className="">Guardian</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="pl-3 text-sm font-bold">Gender Identity</div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            <div
              onClick={() => handleChange("gender", "Male")}
              className={`px-4 py-2 border-2 rounded-lg cursor-pointer ${
                formData.gender === "Male"
                  ? "bg-activeBackground border-[#4366F6]"
                  : "bg-disactiveBackground border-border"
              }`}>
              <div className="">Male</div>
            </div>

            <div
              onClick={() => handleChange("gender", "Female")}
              className={`px-4 py-2 border-2 rounded-lg cursor-pointer ${
                formData.gender === "Female"
                  ? "bg-activeBackground border-[#4366F6]"
                  : "bg-disactiveBackground border-border"
              }`}>
              <div className="">Female</div>
            </div>

            <div
              onClick={() => handleChange("gender", "Prefer not to say")}
              className={`px-4 py-2 border-2 rounded-lg cursor-pointer ${
                formData.gender === "Prefer not to say"
                  ? "bg-activeBackground border-[#4366F6]"
                  : "bg-disactiveBackground border-border"
              }`}>
              <div className="">Prefer not to say</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col w-full justify-end outline-none gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.firstName}</p>
              <Label className="font-semibold" htmlFor="first_name">
                First Name
              </Label>
            </div>
            <Input
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="px-4 py-5 border-2 bg-disactiveBackground"
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>

          <div className="flex flex-col w-full outline-none justify-end gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.lastName}</p>
              <Label className="font-semibold" htmlFor="last_name">
                Last Name
              </Label>
            </div>
            <Input
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="px-4 py-5 border-2 bg-disactiveBackground"
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>

          <div className="flex flex-col w-full outline-none justify-end gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.email}</p>
              <Label className="font-semibold " htmlFor="email">
                Email
              </Label>
            </div>
            <Input
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="px-4 py-5 border-2 bg-disactiveBackground"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col w-full outline-none justify-end gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.parentPhoneNumber}</p>
              <Label className="font-semibold" htmlFor="phone">
                Phone number
              </Label>
            </div>
            <PhoneNumber
              value={formData.parentPhoneNumber}
              onChange={(value) => handleChange("parentPhoneNumber", value)}
            />
          </div>

          <div className="flex flex-col w-full outline-none justify-end gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.address}</p>
              <Label className="font-semibold " htmlFor="address_line">
                Address Line
              </Label>
            </div>
            <Input
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="px-4 py-5 border-2 bg-disactiveBackground"
              type="text"
              id="address_line"
              placeholder="Enter your address"
            />
          </div>

          <div className="flex flex-col w-full outline-none justify-end gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.postal}</p>
              <Label className="font-semibold " htmlFor="postal">
                Postal Code
              </Label>
            </div>
            <Input
              value={formData.postal}
              onChange={(e) => handleChange("postal", e.target.value)}
              className="px-4 py-5 border-2 bg-disactiveBackground"
              type="text"
              id="postal"
              placeholder="Enter Postal Code"
            />
          </div>

          <div className="flex flex-col w-full outline-none justify-end gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.country}</p>
              <Label className="font-semibold" htmlFor="country">
                Country of Residence
              </Label>
            </div>
            <Select
              value={formData.country}
              onValueChange={(value) => handleChange("country", value)}>
              <SelectTrigger className="px-4 py-5 border-2 border-border bg-disactiveBackground">
                <SelectValue
                  className="placeholder:text-border"
                  placeholder="Enter your country"
                />
              </SelectTrigger>
              <SelectContent className="bg-disactiveBackground max-h-[300px] overflow-y-auto">
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem key={option.label} value={option.label}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col w-full outline-none justify-end gap-1.5">
            <div className="pl-3">
              <p className="text-sm text-red-600">{errors.city}</p>
              <Label className="font-semibold " htmlFor="city">
                City
              </Label>
            </div>
            <Input
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="px-4 py-5 border-2 bg-disactiveBackground"
              type="text"
              id="city"
              placeholder="Enter Your City"
            />
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
          onClick={handleSubmit}
          className="py-2 text-center text-white rounded-lg cursor-pointer sm:col-span-2 bg-[#4366F6]">
          Continue
        </div>
      </div>
    </div>
  );
};

export default Page;
