import React, { Dispatch, SetStateAction } from "react";
import PhoneInput from "react-phone-input-2";
import "../../lib/CustomPhoneNumberInput.css";
interface PhoneNumberProps {
  value: string | null | undefined;
  onChange: Dispatch<SetStateAction<string>>;
  isError?: boolean;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  value,
  onChange,
  isError,
}) => {
  return (
    <PhoneInput
      specialLabel={""}
      country={"gb"}
      value={value}
      onChange={(phone) => onChange(phone)}
      // disableDropdown
      inputStyle={{
        fontSize: "16px",
        width: "100%",
        backgroundColor: "#F6F6F6",
        outline: "none",
        borderColor: isError ? "#E6E6E6" : "#E6E6E6",
        borderWidth: 2,
        borderRadius: 5,
        fontWeight: "400",
      }}
    />
  );
};

export default PhoneNumber;
