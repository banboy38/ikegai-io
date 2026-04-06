import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

interface DropdownProps {
    options: string[];
    placeholder?: string;
    onSelect?: (option: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    options,
    placeholder = 'Select an option',
    onSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
        onSelect?.(option);
    };

    return (
        <div className="w-240 mt-2 hover:cursor-pointer select-none">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-2 text-left bg-white border border-[#B0B0B0] rounded hover:bg-gray-50 focus:outline-none flex justify-between"
            >
                <div>
                    {selected || placeholder}
                </div>

                <ChevronDown className={`${isOpen?"rotate-180":"rotate-0"} duration-150`}/>

            </div>

            {isOpen && 

                
                    options.map((option, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleSelect(option)}
                                className="w-full px-8 py-2 text-left border hover:bg-[#4144A714] my-2 rounded"
                            >
                                {option}
                            </div>
                    ))
                
            }

        </div>
    );
};