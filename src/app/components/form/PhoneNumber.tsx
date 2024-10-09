import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import '../utils/CustomPhoneNumberInput.css'

interface PhoneNumberProps {
  value: string | null | undefined;
  onChange: Dispatch<SetStateAction<string>>;
  isError?: boolean;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ value, onChange, isError }) => {
  const [defaultCountry, setDefaultCountry] = useState('gb');

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/partners/cs')) {
      setDefaultCountry('bd');
    }
  }, []);

  return (
    <PhoneInput
      specialLabel={''}
      country={defaultCountry}
      value={value}
      onChange={(phone) => onChange(phone)}
      inputStyle={{
        fontSize: '16px',
        width: '100%',
        color: '#111827',
        backgroundColor: '#ebecee',
        outline: 'none',
        borderColor: isError ? '#EF4444' : "#E6E6E6",
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: '400',
      }}
    />
  );
}

export default PhoneNumber;
