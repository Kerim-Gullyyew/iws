import React, { useMemo, useRef, useState } from 'react'
import useOutsideClick from '../utils/useOutsideClick';
import { partners } from '@/app/data/partners';
import { keyStages } from '@/app/data/keystage';
interface DropdownItem {
  label: string;
  value: number | string;
}

interface DropdownCustomDataProps {
  label: string;
  isSearch?: boolean;
  dropdown: string | number;
  setDropdown: React.Dispatch<React.SetStateAction<string | number>>;
}


export interface ItemData {
  label: string;
  value: string
}


const DropdownCustomData: React.FC<DropdownCustomDataProps> = ({ label, isSearch, dropdown, setDropdown }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const items: ItemData[] = keyStages.filter(item =>
    item.label.toLowerCase().includes(searchTerm)
  );


  const handleCountry = (selectedValue: string | number) => {
    setDropdown(selectedValue);
  };
  const filteredItems: DropdownItem[] = useMemo(() =>
    items.filter(item => item.label.toLowerCase().includes(searchTerm)), [items, searchTerm]);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };


  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        id="dropdown-button"
        className="w-full flex justify-between items-center rounded-md border-0 py-3 text-[#000000] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
        onClick={toggleDropdown}
      >
        <div className={`text-[16px] ${dropdown ? '' : 'text-[#b1b1b1]'} bg-inputBg focus:outline-none`}>{dropdown === '' || dropdown === null || dropdown === undefined ? label : dropdown.toString()}</div>
        <div className='flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 text-textLight" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div id="dropdown-menu" className="absolute z-10 w-full flex flex-col max-h-60 overflow-auto left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
          {isSearch && (
            <input
              id="search-input"
              className="block w-full px-4 py-2 text-gray-800 placeholder:text-[#b1b1b1] border rounded-md border-inputLigthGray focus:outline-none"
              type="text"
              placeholder="Search items"
              autoComplete="off"
              onChange={handleSearch}
            />
          )}
          {filteredItems.map((item) => (
            <div
              key={item.value.toString()}
              onClick={() => {
                handleCountry(item.value);
                setIsOpen(!isOpen);
              }}

              className={"block text-textLight px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md " + (item.value === dropdown ? 'bg-blue hover:bg-blue' : 'bg-inputBg')}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}


    </div>
  )
}

export default DropdownCustomData