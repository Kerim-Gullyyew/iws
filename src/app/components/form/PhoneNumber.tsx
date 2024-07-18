import React, { Dispatch, SetStateAction } from 'react'
import PhoneInput from 'react-phone-input-2'
import '../utils/CustomPhoneNumberInput.css'
interface PhoneNumberProps {
  value: string | null | undefined;
  onChange: Dispatch<SetStateAction<string>>;
  isError?: boolean
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ value, onChange, isError }) => {
  return (
    <PhoneInput
      specialLabel={''}
      country={'gb'}
      value={value}
      onChange={(phone) => onChange(phone)}
      disableDropdown
      inputStyle={{
        fontSize: '16px',
        width: '100%',
        color: '#111827',
        backgroundColor: '#F6F6F6',
        outline: 'none',
        borderColor: isError ? '#EF4444' : "#E6E6E6",
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: '400',
      }}
    />
  )
}

export default PhoneNumber